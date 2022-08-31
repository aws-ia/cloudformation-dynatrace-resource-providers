import {ResourceModel, SyntheticMonitor} from './models';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource';
import {DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';

import {version} from "../package.json";

type SyntheticMonitors = {
    monitors: SyntheticMonitor[]
}

class Resource extends AbstractDynatraceResource<ResourceModel, SyntheticMonitor, SyntheticMonitor, SyntheticMonitor> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel): Promise<SyntheticMonitor> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<SyntheticMonitor>(
            'get',
            `/api/v1/synthetic/monitors/${model.entityId}`);
        return new SyntheticMonitor(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<SyntheticMonitors>(
            'get',
            `/api/v1/synthetic/monitors`);
        return response.data.monitors.map(monitor => this.setModelFrom(new ResourceModel(), new SyntheticMonitor(monitor)))
    }

    async create(model: ResourceModel): Promise<SyntheticMonitor> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<SyntheticMonitor>(
            'post',
            '/api/v1/synthetic/monitors',
            {},
            model.toJSON());
        return new SyntheticMonitor(response.data);
    }

    async update(model: ResourceModel): Promise<SyntheticMonitor> {
        let response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<SyntheticMonitor>(
            'put',
            `/api/v1/synthetic/monitors/${model.entityId}`,
            {},
            model.toJSON());
        return new SyntheticMonitor(response.data)
    }

    async delete(model: ResourceModel): Promise<void> {
        await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<SyntheticMonitor>(
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
        model.monitor = from;
        if (!!from.entityId) {
            model.entityId = from.entityId;
        }
        return model;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;