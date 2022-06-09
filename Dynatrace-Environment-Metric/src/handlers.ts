import {
    Action,
    BaseResource,
    exceptions,
    handlerEvent,
    LoggerProxy,
    OperationStatus,
    Optional,
    ProgressEvent,
    ResourceHandlerRequest,
    SessionProxy,
} from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import {Metric, ResourceModel} from './models';
import {ApiErrorResponse, DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {AxiosError} from "axios";

interface CallbackContext extends Record<string, any> {
    retry?: number
}

class Resource extends BaseResource<ResourceModel> {

    private async get(model: ResourceModel, request: ResourceHandlerRequest<ResourceModel>): Promise<Metric> {
        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<Metric>(
                'get',
                `/api/v1/timeseries/${model.id}`);
            return new Metric(response.data);
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }
    }

    private async put(model: ResourceModel, request: ResourceHandlerRequest<ResourceModel>): Promise<Metric> {
        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<Metric>(
                'put',
                `/api/v1/timeseries/${model.id}`,
                {},
                model.toJSON());
            return new Metric(response.data);
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }
    }

    private async assertResourceExists(model: ResourceModel, request: ResourceHandlerRequest<ResourceModel>) {
        try {
            await this.get(model, request);
        } catch (e) {
            return false;
        }
        return true;
    }

    private processDynatraceClientError(e: AxiosError<ApiErrorResponse>, request: ResourceHandlerRequest<ResourceModel>) {
        const apiErrorResponse = e.response.data;
        let errorMessage = apiErrorResponse.error.message;
        if (apiErrorResponse.error.constraintViolations) {
            errorMessage += '\n' + apiErrorResponse.error.constraintViolations.map(cv => `[PATH: ${cv.path}] ${cv.message}`).join('\n');
        }

        const status = e.status
            ? parseInt(e.status)
            : e.response
                ? e.response.status
                : null;
        switch (status) {
            case 400:
                throw new exceptions.InvalidRequest(errorMessage);
            case 401:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred while talking to the Dynatrace API (HTTP status ${status}) => ${errorMessage}`);
        }
    }

    private setModelFromMetric(model: ResourceModel, metric: Metric): ResourceModel {
        model.metric = metric;
        return model;
    }

    /**
     * CloudFormation invokes this handler when the resource is initially created
     * during stack create operations.
     *
     * @param session Current AWS session passed through from caller
     * @param request The request object for the provisioning request passed to the implementor
     * @param callbackContext Custom context object to allow the passing through of additional
     * state or metadata between subsequent retries
     * @param logger Logger to proxy requests to default publishers
     */
    @handlerEvent(Action.Create)
    public async create(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent<ResourceModel, CallbackContext>> {
        let model = new ResourceModel(request.desiredResourceState);

        if (await this.assertResourceExists(model, request)) {
            throw new exceptions.AlreadyExists(this.typeName, request.logicalResourceIdentifier);
        }

        const metric = await this.put(model, request);
        model = this.setModelFromMetric(model, metric);

        return ProgressEvent.success<ProgressEvent<ResourceModel, CallbackContext>>(model);
    }

    /**
     * CloudFormation invokes this handler when the resource is updated
     * as part of a stack update operation.
     *
     * @param session Current AWS session passed through from caller
     * @param request The request object for the provisioning request passed to the implementor
     * @param callbackContext Custom context object to allow the passing through of additional
     * state or metadata between subsequent retries
     * @param logger Logger to proxy requests to default publishers
     */
    @handlerEvent(Action.Update)
    public async update(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent<ResourceModel, CallbackContext>> {
        let model = new ResourceModel(request.desiredResourceState);

        if (!(await this.assertResourceExists(model, request))) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        const metric = await this.put(model, request);
        model = this.setModelFromMetric(model, metric);

        return ProgressEvent.success<ProgressEvent<ResourceModel, CallbackContext>>(model);
    }

    /**
     * CloudFormation invokes this handler when the resource is deleted, either when
     * the resource is deleted from the stack as part of a stack update operation,
     * or the stack itself is deleted.
     *
     * @param session Current AWS session passed through from caller
     * @param request The request object for the provisioning request passed to the implementor
     * @param callbackContext Custom context object to allow the passing through of additional
     * state or metadata between subsequent retriesOk
     * @param logger Logger to proxy requests to default publishers
     */
    @handlerEvent(Action.Delete)
    public async delete(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent<ResourceModel, CallbackContext>> {
        const model = new ResourceModel(request.desiredResourceState);

        if (!(await this.assertResourceExists(model, request))) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        try {
            await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest(
                'delete',
                `/api/v1/timeseries/${model.id}`);
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }

        return ProgressEvent.success<ProgressEvent<ResourceModel, CallbackContext>>();
    }

    /**
     * CloudFormation invokes this handler as part of a stack update operation when
     * detailed information about the resource's current state is required.
     *
     * @param session Current AWS session passed through from caller
     * @param request The request object for the provisioning request passed to the implementor
     * @param callbackContext Custom context object to allow the passing through of additional
     * state or metadata between subsequent retries
     * @param logger Logger to proxy requests to default publishers
     */
    @handlerEvent(Action.Read)
    public async read(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent<ResourceModel, CallbackContext>> {
        let model = new ResourceModel(request.desiredResourceState);

        const location = await this.get(model, request);
        model = this.setModelFromMetric(model, location);

        return ProgressEvent.success<ProgressEvent<ResourceModel, CallbackContext>>(model);
    }

    /**
     * CloudFormation invokes this handler when summary information about multiple
     * resources of this resource provider is required.
     *
     * @param session Current AWS session passed through from caller
     * @param request The request object for the provisioning request passed to the implementor
     * @param callbackContext Custom context object to allow the passing through of additional
     * state or metadata between subsequent retries
     * @param logger Logger to proxy requests to default publishers
     */
    @handlerEvent(Action.List)
    public async list(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent<ResourceModel, CallbackContext>> {
        const model = new ResourceModel(request.desiredResourceState);

        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<Metric[]>(
                'get',
                `/api/v1/timeseries`,
                {source: 'CUSTOM'});

            return ProgressEvent.builder<ProgressEvent<ResourceModel, CallbackContext>>()
                .status(OperationStatus.Success)
                .resourceModels(response.data.map(metric => this.setModelFromMetric(model, new Metric(metric))))
                .build();
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
