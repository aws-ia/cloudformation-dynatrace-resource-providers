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
import {DynatraceClient, DynatraceClientError} from "../../Common/dynatrace-client";

interface CallbackContext extends Record<string, any> {
}

class Resource extends BaseResource<ResourceModel> {

    private async getDashboard(model: ResourceModel, request: ResourceHandlerRequest<ResourceModel>): Promise<ResourceModel> {
        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess)
                .doRequest('GET', `/api/config/v1/dashboards/${model.id}`);
            return await response.json();
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }
    }

    private async assertDashboardExists(model: ResourceModel, request: ResourceHandlerRequest<ResourceModel>) {
        try {
            await this.getDashboard(model, request);
        } catch (e) {
            return false;
        }
        return true;
    }

    private processDynatraceClientError(e: DynatraceClientError, request: ResourceHandlerRequest<ResourceModel>) {
        switch (e.status) {
            case 401:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${e.message}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 429:
                throw new exceptions.ServiceLimitExceeded(e.message);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred while talking to the Dynatrace API (HTTP status ${e.status}) => ${e.message}`);
        }
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
        const model = new ResourceModel(request.desiredResourceState);

        if (await this.assertDashboardExists(model, request)) {
            throw new exceptions.AlreadyExists(this.typeName, request.logicalResourceIdentifier);
        }

        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess)
                .doRequest('POST', `/api/config/v1/dashboards`);
            const dashboard = await response.json() as ResourceModel;

            model.id = dashboard.id;

            return ProgressEvent.success<ProgressEvent<ResourceModel, CallbackContext>>(model);
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }
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
        const model = new ResourceModel(request.desiredResourceState);

        if (!(await this.assertDashboardExists(model, request))) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        try {
            await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess)
                .doRequest('PUT', `/api/config/v1/dashboards/${model.id}`, model);

            return ProgressEvent.success<ProgressEvent<ResourceModel, CallbackContext>>(model);
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }
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
        const model = new ResourceModel(request.desiredResourceState);

        if (!(await this.assertDashboardExists(model, request))) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        try {
            await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess)
                .doRequest('DELETE', `/api/config/v1/dashboards/${model.id}`);

            return ProgressEvent.success<ProgressEvent<ResourceModel, CallbackContext>>();
        } catch (e) {
            this.processDynatraceClientError(e, request);
        }
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
        const model = new ResourceModel(request.desiredResourceState);

        const dashboard = await this.getDashboard(model, request);

        model.id = dashboard.id;
        model.metadata = dashboard.metadata;
        model.dashboardMetadata = dashboard.dashboardMetadata;
        model.tiles = dashboard.tiles;

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
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess)
                .doRequest('GET', `/api/config/v1/dashboards`);

            return ProgressEvent.builder<ProgressEvent<ResourceModel, CallbackContext>>()
                .status(OperationStatus.Success)
                .resourceModels(await response.json())
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
