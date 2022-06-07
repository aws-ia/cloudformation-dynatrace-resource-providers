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
import {ResourceModel, SyntheticLocation} from './models';
import {ApiErrorResponse, DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {AxiosError} from "axios";

interface CallbackContext extends Record<string, any> {
}

type SyntheticLocations = {
    locations: SyntheticLocation[];
}

class Resource extends BaseResource<ResourceModel> {

    private async get(model: ResourceModel, request: ResourceHandlerRequest<ResourceModel>): Promise<SyntheticLocation> {
        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<SyntheticLocation>(
                'get',
                `/api/v1/synthetic/locations/${model.entityId}`);
            return new SyntheticLocation(response.data);
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

    private processDynatraceClientError(e: AxiosError, request: ResourceHandlerRequest<ResourceModel>) {
        const apiErrorResponse = e.response.data as ApiErrorResponse;
        let errorMessage = apiErrorResponse.error.message;
        if (apiErrorResponse.error.constraintViolations) {
            errorMessage += '\n' + apiErrorResponse.error.constraintViolations.map(cv => `[PATH: ${cv.path}] ${cv.message}`).join('\n');
        }

        if (errorMessage.startsWith('Could not find')) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
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

    private setModelFromLocation(model: ResourceModel, location: SyntheticLocation): ResourceModel {
        model.entityId = location.entityId;
        model.location = location;
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

        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<SyntheticLocation>(
                'post',
                '/api/v1/synthetic/locations',
                {},
                model.toJSON());
            model = this.setModelFromLocation(model, new SyntheticLocation(response.data));
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

        if (!(await this.assertResourceExists(model, request))) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        try {
            await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<SyntheticLocation>(
                'put',
                `/api/v1/synthetic/locations/${model.entityId}`,
                {},
                model.toJSON());
            const location = await this.get(model, request);
            model = this.setModelFromLocation(model, location);
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

        if (!(await this.assertResourceExists(model, request))) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        try {
            await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<SyntheticLocation>(
                'delete',
                `/api/v1/synthetic/locations/${model.entityId}`);
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
        model = this.setModelFromLocation(model, location);

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
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<SyntheticLocations>(
                'get',
                `/api/v1/synthetic/locations`);

            return ProgressEvent.builder<ProgressEvent<ResourceModel, CallbackContext>>()
                .status(OperationStatus.Success)
                .resourceModels(response.data.locations
                    .map(location => this.setModelFromLocation(model, new SyntheticLocation(location))))
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
