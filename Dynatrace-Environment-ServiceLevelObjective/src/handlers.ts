import {ResourceModel, TypeConfigurationModel} from './models';
import {DynatraceClient, PaginatedResponseType} from "../../Dynatrace-Common/src/dynatrace-client";
import {RetryableCallbackContext} from '../../Dynatrace-Common/src/abstract-base-resource';
import {AbstractDynatraceResource} from "../../Dynatrace-Common/src/abstract-dynatrace-resource";
import {CaseTransformer, Transformer} from '../../Dynatrace-Common/src/util';

import {version} from "../package.json";
import {
    Action,
    exceptions,
    handlerEvent,
    LoggerProxy,
    OperationStatus,
    Optional,
    ProgressEvent,
    ResourceHandlerRequest,
    SessionProxy
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosResponse} from "axios";

type SloPayload = {
    id: string
};

type SlosPayload = {
    slo: SloPayload[]
} & PaginatedResponseType;

type EventuallyConsistentCallbackContext = {
    serverTiming?: number
} & RetryableCallbackContext;

class Resource extends AbstractDynatraceResource<ResourceModel, AxiosResponse<SloPayload>, AxiosResponse<SloPayload>, void, TypeConfigurationModel> {

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
                await this.update(model, typeConfiguration);
                let getResponse = await this.get(model, typeConfiguration);
                let serverTiming = this.getServerTiming(getResponse);

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

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<AxiosResponse<SloPayload>> {
        return await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SloPayload>(
            'get',
            `/api/v2/slo/${model.id}`);
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).paginate<SlosPayload, ResourceModel>(
            'get',
            '/api/v2/slo',
            pagedResponse => pagedResponse.data && pagedResponse.data.slo
                ? pagedResponse.data.slo.map(sloPayload => this.setModelFrom(model, {data: sloPayload} as AxiosResponse<SloPayload>))
                : [],
            {enabledSlos: 'all'});
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<AxiosResponse<SloPayload>> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest(
            'post',
            '/api/v2/slo',
            {},
            {
                ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                    .transform(),
                // We are forcing the SLO to be enabled because a GET doesn't return disabled SLO which would
                // get us in trouble.
                enabled: true
            });
        return {
            headers: response.headers,
            status: response.status,
            request: response.request,
            config: response.config,
            statusText: response.statusText,
            data: {
                id: response.headers.location.substring(response.headers.location.lastIndexOf('/') + 1)
            }
        };
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest(
            'put',
            `/api/v2/slo/${model.id}`,
            {},
            {
                ...Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                    .transform(),
                // We are forcing the SLO to be enabled because a GET doesn't return disabled SLO which would
                // get us in trouble.
                enabled: true
            });
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest(
            'delete',
            `/api/v2/slo/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: AxiosResponse<SloPayload>): ResourceModel {
        if (!from.data) {
            return model;
        }

        return new ResourceModel({
            ...model,
            ...Transformer.for(from.data)
                .transformKeys(CaseTransformer.IDENTITY)
                .forModelIngestion()
                .transform()
        });
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
