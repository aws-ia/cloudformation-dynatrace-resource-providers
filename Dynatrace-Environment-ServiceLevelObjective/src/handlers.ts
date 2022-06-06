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
import {ResourceModel} from './models';
import {ApiErrorResponse, DynatraceClient, PaginatedResponseType} from "./dynatrace-client";
import {AxiosError} from "axios";

interface CallbackContext extends Record<string, any> {
}

type PaginatedSlos = {
    slo: ResourceModel[]
} & PaginatedResponseType;

class Resource extends BaseResource<ResourceModel> {

    private async get(model: ResourceModel, request: ResourceHandlerRequest<ResourceModel>) {
        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<ResourceModel>('get', `/api/v2/slo/${model.id}`);
            return new ResourceModel({
                ...model,
                id: response.data.id,
                enabled: response.data.enabled,
                burnRateMetricKey: response.data.burnRateMetricKey,
                numeratorValue: response.data.numeratorValue,
                denominatorValue: response.data.denominatorValue,
                problemFilter: response.data.problemFilter,
                relatedOpenProblems: response.data.relatedOpenProblems,
                relatedTotalProblems: response.data.relatedTotalProblems,
                evaluatedPercentage: response.data.evaluatedPercentage,
                errorBudget: response.data.errorBudget,
                metricKey: response.data.metricKey,
                status: response.data.status,
                error: response.data.error
            });
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
        let errorMessage = e.message;
        if (e.response) {
            const apiErrorResponse = e.response.data;
            errorMessage = apiErrorResponse.error.message;
            if (apiErrorResponse.error.constraintViolations) {
                errorMessage += '\n' + apiErrorResponse.error.constraintViolations.map(cv => `[PATH: ${cv.path}] ${cv.message}`).join('\n');
            }
        }

        const status = e.status
            ? parseInt(e.status)
            : e.response
                ? e.response.status
                : null;
        switch (status) {
            case 401:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred while talking to the Dynatrace API (HTTP status ${e.status}) => ${errorMessage}`);
        }
    }

    private transformModelToPayload(model: {[key: string]: any}) {
        return Object.keys(model).reduce((map, key) => {
            let value = model[key];
            if (value instanceof Object && !(value instanceof Array) && !(value instanceof Set)) {
                value = this.transformModelToPayload(value);
            }
            if (value instanceof Set) {
                value = Array.of(...value);
            }
            map[key.substring(0, 1).toLocaleLowerCase() + key.substring(1)] = value;
            return map;
        }, {} as {[key: string]: any})
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

        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<ResourceModel>('post', '/api/v2/slo', {}, this.transformModelToPayload({
                ...model.toJSON(),
                // This is required because a GET doesn't return disabled SLO!
                enabled: true
            }));
            model.id = response.headers.location.substring(response.headers.location.lastIndexOf('/') + 1);
            model = await this.get(model, request);
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }

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

        try {
            await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<ResourceModel>('put', `/api/v2/slo/${model.id}`, {}, this.transformModelToPayload(model.toJSON()));
            model = await this.get(model, request);
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }

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
     * state or metadata between subsequent retries
     * @param logger Logger to proxy requests to default publishers
     */
    @handlerEvent(Action.Delete)
    public async delete(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: CallbackContext,
        logger: LoggerProxy
    ): Promise<ProgressEvent<ResourceModel, CallbackContext>> {
        let model = new ResourceModel(request.desiredResourceState);

        try {
            await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest('delete', `/api/v2/slo/${model.id}`);
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

        const newModel = await this.get(model, request);

        return ProgressEvent.success<ProgressEvent<ResourceModel, CallbackContext>>(newModel);
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
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).paginate<PaginatedSlos, ResourceModel>(
                'get',
                '/api/v2/slo',
                pagedResponse => pagedResponse.data && pagedResponse.data.slo
                    ? pagedResponse.data.slo.map(slo => new ResourceModel({...model, ...slo}))
                    : [],
                {enabledSlos: 'all'});
            return ProgressEvent.builder<ProgressEvent<ResourceModel, CallbackContext>>()
                .status(OperationStatus.Success)
                .resourceModels(response)
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
