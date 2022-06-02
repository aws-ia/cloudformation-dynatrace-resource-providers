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
import {DashboardMetadata, Metadata, ResourceModel} from './models';
import {DynatraceClient} from "./dynatrace-client";
import {AxiosError} from "axios";

interface CallbackContext extends Record<string, any> {
}

type ApiErrorResponse = {
    error: ApiError
}
type ApiError = {
    code: number
    message: string
    constraintViolations?: ConstraintViolation[]
}
type ConstraintViolation = {
    path: string
    message: string
    parameterLocation: string
    location?: string
}
type DashboardResponse = {
    id: string
    metadata?: {}
    dashboardMetadata?: {}
    tiles?: string[]
}

class Resource extends BaseResource<ResourceModel> {

    private async getDashboard(model: ResourceModel, request: ResourceHandlerRequest<ResourceModel>): Promise<DashboardResponse> {
        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<DashboardResponse>(
                'get',
                `/api/config/v1/dashboards/${model.id}`);
            return response.data;
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

    private assertAllTilesAreJson(tiles?: string[]) {
        if (!tiles) {
            return true;
        }
        const errors = tiles.map((tile, index) => {
            try {
                JSON.parse(tile);
                return null;
            } catch (e) {
                return `Tile #${index + 1} is not a valid JSON: ${e.message}`;
            }
        }).filter(error => error !== null);

        if (errors.length > 0) {
            throw new exceptions.InvalidRequest(`Input "Titles" is not valid:\n${errors.join('\n')}`);
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

    private processDynatraceClientError(e: AxiosError, request: ResourceHandlerRequest<ResourceModel>) {
        const apiErrorResponse = e.response.data as ApiErrorResponse;
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

    private setModelFromResponse(model: ResourceModel, dashboardResponse: DashboardResponse) {
        if (dashboardResponse.id) {
            model.id = dashboardResponse.id
        }

        const dashboardMap = new Map();
        if (dashboardResponse.metadata) {
            dashboardMap.set('metadata', dashboardResponse.metadata);
        }
        if (dashboardResponse.dashboardMetadata) {
            dashboardMap.set('dashboardMetadata', dashboardResponse.dashboardMetadata);
        }
        if (dashboardResponse.tiles) {
            dashboardMap.set('tiles', dashboardResponse.tiles);
        }
        model.dashboard = dashboardMap;

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

        if (await this.assertDashboardExists(model, request)) {
            throw new exceptions.AlreadyExists(this.typeName, request.logicalResourceIdentifier);
        }

        this.assertAllTilesAreJson(model.tiles);

        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<DashboardResponse>(
                'post',
                `/api/config/v1/dashboards`,
                {
                    metadata: this.transformModelToPayload(model.metadata.serialize()),
                    dashboardMetadata: this.transformModelToPayload(model.dashboardMetadata.serialize()),
                    tiles: model.tiles.map(tile => JSON.parse(tile))
                });
            model = this.setModelFromResponse(model, response.data);
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

        if (!(await this.assertDashboardExists(model, request))) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        this.assertAllTilesAreJson(model.tiles);

        try {
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<DashboardResponse>(
                'put',
                `/api/config/v1/dashboards/${model.id}`,
                {
                    id: model.id,
                    metadata: this.transformModelToPayload(model.metadata),
                    dashboardMetadata: this.transformModelToPayload(model.dashboardMetadata),
                    tiles: model.tiles.map(tile => JSON.parse(tile))
                });
            model = this.setModelFromResponse(model, response.data);
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
        const model = new ResourceModel(request.desiredResourceState);

        if (!(await this.assertDashboardExists(model, request))) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        try {
            await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest(
                'delete',
                `/api/config/v1/dashboards/${model.id}`);
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

        const dashboard = await this.getDashboard(model, request);

        model = this.setModelFromResponse(model, dashboard);

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
            const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<{ dashboards: DashboardResponse[] }>(
                'get',
                `/api/config/v1/dashboards`);

            return ProgressEvent.builder<ProgressEvent<ResourceModel, CallbackContext>>()
                .status(OperationStatus.Success)
                .resourceModels(response.data.dashboards.map(dashboard => new ResourceModel({
                    ...model,
                    ...dashboard
                })))
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
