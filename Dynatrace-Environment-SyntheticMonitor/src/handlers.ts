import {ResourceModel, SyntheticMonitor, TypeConfigurationModel} from './models';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource';
import {DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {CaseTransformer, Transformer} from '../../Dynatrace-Common/src/util';
import {version} from "../package.json";

type SyntheticMonitors = {
    monitors: SyntheticMonitor[]
}

class Resource extends AbstractDynatraceResource<ResourceModel, SyntheticMonitor, SyntheticMonitor, SyntheticMonitor, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SyntheticMonitor> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitor>(
            'get',
            `/api/v1/synthetic/monitors/${model.entityId}`);
        return new SyntheticMonitor(response.data);
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitors>(
            'get',
            `/api/v1/synthetic/monitors`);
        return response.data.monitors.map(monitor => this.setModelFrom(new ResourceModel(), new SyntheticMonitor(monitor)))
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SyntheticMonitor> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitor>(
            'post',
            '/api/v1/synthetic/monitors',
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
        return new SyntheticMonitor(response.data);
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SyntheticMonitor> {
        let response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitor>(
            'put',
            `/api/v1/synthetic/monitors/${model.entityId}`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
        return new SyntheticMonitor(response.data)
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitor>(
            'delete',
            `/api/v1/synthetic/monitors/${model.entityId}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: SyntheticMonitor): ResourceModel {
        if (!from) {
            return model;
        }

        return new ResourceModel({
            ...model,
            ...from
        });
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;