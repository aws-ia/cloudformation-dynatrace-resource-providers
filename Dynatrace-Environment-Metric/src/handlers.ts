import {Metric, ResourceModel} from './models';
import {DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource';

class Resource extends AbstractDynatraceResource<ResourceModel, Metric, Metric, Metric> {

    async get(model: ResourceModel): Promise<Metric> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<Metric>(
            'get',
            `/api/v1/timeseries/${model.id}`);
        return new Metric(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<Metric[]>(
            'get',
            `/api/v1/timeseries`,
            {source: 'CUSTOM'});

        return response.data.map(metric => this.setModelFrom(new ResourceModel(model), new Metric(metric)));
    }

    async create(model: ResourceModel): Promise<Metric> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest<Metric>(
            'put',
            `/api/v1/timeseries/${model.id}`,
            {},
            model.toJSON());
        return new Metric(response.data);
    }

    async update(model: ResourceModel): Promise<Metric> {
        return this.create(model);
    }

    async delete(model: ResourceModel): Promise<void> {
        await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess).doRequest(
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
        model.metric = from;
        return model;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
