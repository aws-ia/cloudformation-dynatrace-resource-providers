import {Metric, ResourceModel, TypeConfigurationModel} from './models';
import {DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource';
import {CaseTransformer, Transformer} from '../../Dynatrace-Common/src/util';

import {version} from "../package.json";

class Resource extends AbstractDynatraceResource<ResourceModel, Metric, Metric, Metric, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Metric> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<Metric>(
            'get',
            `/api/v1/timeseries/${model.id}`);
        return new Metric(response.data);
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<Metric[]>(
            'get',
            `/api/v1/timeseries`,
            {source: 'CUSTOM'});

        return response.data.map(metric => this.setModelFrom(new ResourceModel(model), new Metric(metric)));
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Metric> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<Metric>(
            'put',
            `/api/v1/timeseries/${model.id}`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
        return new Metric(response.data);
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Metric> {
        return this.create(model);
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest(
            'delete',
            `/api/v1/timeseries/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Metric): ResourceModel {
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
