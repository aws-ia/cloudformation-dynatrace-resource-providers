import {ResourceModel, TypeConfigurationModel} from './models';
import {RetryableCallbackContext} from '../../Dynatrace-Common/src/abstract-base-resource';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource';
import {DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {CaseTransformer, Transformer} from '../../Dynatrace-Common/src/util';
import {version} from "../package.json";
import {AxiosResponse} from "axios";
import {
    Action,
    exceptions, handlerEvent,
    LoggerProxy, OperationStatus,
    Optional,
    ProgressEvent,
    ResourceHandlerRequest,
    SessionProxy
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";

type SyntheticMonitorPayload = {};

type SyntheticMonitorsPayload = {
    monitors: SyntheticMonitorPayload[]
}

type EventuallyConsistentCallbackContext = {
    serverTiming?: number
} & RetryableCallbackContext;

class Resource extends AbstractDynatraceResource<ResourceModel, AxiosResponse<SyntheticMonitorPayload>, AxiosResponse<SyntheticMonitorPayload>, AxiosResponse<SyntheticMonitorPayload>, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;
    private callbackDelay = 30;

    @handlerEvent(Action.Update)
    async updateHandler(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: EventuallyConsistentCallbackContext,
        logger: LoggerProxy,
        typeConfiguration: TypeConfigurationModel
    ): Promise<ProgressEvent<ResourceModel, EventuallyConsistentCallbackContext>> {
        let model = this.newModel(request.desiredResourceState);

        if (!(await this.assertExists(model, typeConfiguration))) {
            throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
        }

        if (callbackContext.retry && callbackContext.retry > this.maxRetries) {
            throw new exceptions.NotStabilized(`Resource failed to stabilized after ${this.maxRetries} retries`);
        }

        if (!callbackContext.serverTiming) {
            try {
                let updateResponse = await this.update(model, typeConfiguration);
                let serverTiming = this.getServerTiming(updateResponse);

                let progressEventBuilder = ProgressEvent.builder<ProgressEvent<ResourceModel, EventuallyConsistentCallbackContext>>()
                    .status(OperationStatus.InProgress)
                    .resourceModel(model)
                    .callbackContext({
                        serverTiming: serverTiming,
                        retry: 1
                    });
                if (!serverTiming) {
                    progressEventBuilder.callbackDelaySeconds(this.callbackDelay);
                }
                return progressEventBuilder.build();
            } catch (e) {
                logger.log(`Error ${e}`);
                this.processRequestException(e, request);
            }
        }

        try {
            const getResponse = await this.get(model, typeConfiguration);
            const getServerTiming = this.getServerTiming(getResponse);

            if (callbackContext.serverTiming && getServerTiming < callbackContext.serverTiming) {
                return ProgressEvent.builder<ProgressEvent<ResourceModel, EventuallyConsistentCallbackContext>>()
                    .status(OperationStatus.InProgress)
                    .resourceModel(model)
                    .callbackContext({
                        serverTiming: getServerTiming,
                        retry: callbackContext.retry + 1
                    }).build();
            }

            model = this.setModelFrom(model, getResponse);
            return ProgressEvent.success<ProgressEvent<ResourceModel, EventuallyConsistentCallbackContext>>(model);
        } catch (e) {
            if (!callbackContext.serverTiming) {
                throw new exceptions.NotStabilized(`Resource failed to stabilized after ${this.callbackDelay} seconds: ${e.message}`);
            } else {
                this.processRequestException(e, request);
            }
        }
    }

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<AxiosResponse<SyntheticMonitorPayload>> {
        return await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
            'get',
            `/api/v1/synthetic/monitors/${model.entityId}`);
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorsPayload>(
            'get',
            `/api/v1/synthetic/monitors`);
        return response.data.monitors.map(monitorPayload => this.setModelFrom(model, {data: monitorPayload} as AxiosResponse<SyntheticMonitorPayload>))
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<AxiosResponse<SyntheticMonitorPayload>> {
        return await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
            'post',
            '/api/v1/synthetic/monitors',
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<AxiosResponse<SyntheticMonitorPayload>> {
        return await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
            'put',
            `/api/v1/synthetic/monitors/${model.entityId}`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
            'delete',
            `/api/v1/synthetic/monitors/${model.entityId}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: AxiosResponse<SyntheticMonitorPayload>): ResourceModel {
        if (!from.data) {
            return model;
        }

        const resourceModel = new ResourceModel({
            ...model,
            ...from.data
        });
        delete resourceModel.type_;
        delete resourceModel.anomalyDetection;
        delete resourceModel.script;
        delete resourceModel.tags;

        return resourceModel;
    }

    private getServerTiming(response: AxiosResponse<any>) {
        let serverTiming = undefined;
        if (response.headers.hasOwnProperty('server-timing')) {
            const matches = response.headers['server-timing'].match(/dtRpid;desc="([\d\-]+)"/);
            if (matches !== null) {
                serverTiming = parseInt(matches[1]);
            }
        }
        return serverTiming;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;