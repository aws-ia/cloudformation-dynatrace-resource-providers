import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource';
import {DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {CaseTransformer, Transformer} from '../../Dynatrace-Common/src/util';
import {version} from "../package.json";

type SyntheticMonitorPayload = {};

type SyntheticMonitorsPayload = {
    monitors: SyntheticMonitorPayload[]
}

class Resource extends AbstractDynatraceResource<ResourceModel, SyntheticMonitorPayload, SyntheticMonitorPayload, SyntheticMonitorPayload, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SyntheticMonitorPayload> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
            'get',
            `/api/v1/synthetic/monitors/${model.entityId}`);
        return response.data;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorsPayload>(
            'get',
            `/api/v1/synthetic/monitors`);
        return response.data.monitors.map(monitorPayload => this.setModelFrom(model, monitorPayload))
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SyntheticMonitorPayload> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
            'post',
            '/api/v1/synthetic/monitors',
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
        return response.data;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SyntheticMonitorPayload> {
        let response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
            'put',
            `/api/v1/synthetic/monitors/${model.entityId}`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
        return response.data;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
            'delete',
            `/api/v1/synthetic/monitors/${model.entityId}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: SyntheticMonitorPayload): ResourceModel {
        if (!from) {
            return model;
        }

        const resourceModel = new ResourceModel({
            ...model,
            ...from
        });
        delete resourceModel.type_;
        return resourceModel;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;