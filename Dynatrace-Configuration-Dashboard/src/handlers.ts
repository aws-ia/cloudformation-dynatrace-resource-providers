import {Dashboard, ResourceModel} from './models';
import {DynatraceClient} from "../../Dynatrace-Common/src/dynatrace-client";
import {AbstractDynatraceResource} from "../../Dynatrace-Common/src/abstract-dynatrace-resource";

import {version} from "../package.json";

type Dashboards = {
    dashboards: Dashboard[]
}

class Resource extends AbstractDynatraceResource<ResourceModel, Dashboard, Dashboard, Dashboard> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel): Promise<Dashboard> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<Dashboard>(
            'get',
            `/api/config/v1/dashboards/${model.id}`);
        return new Dashboard(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<Dashboards>(
            'get',
            `/api/config/v1/dashboards`);

        return response.data.dashboards.map(dashboard => this.setModelFrom(new ResourceModel(), new Dashboard(dashboard)));
    }

    async create(model: ResourceModel): Promise<Dashboard> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<Dashboard>(
            'post',
            `/api/config/v1/dashboards`,
            {},
            model.toJSON());
        return new Dashboard(response.data);
    }

    async update(model: ResourceModel): Promise<Dashboard> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<Dashboard>(
            'put',
            `/api/config/v1/dashboards/${model.id}`,
            {},
            model.toJSON());
        return new Dashboard(response.data);
    }

    async delete(model: ResourceModel): Promise<void> {
        await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest(
            'delete',
            `/api/config/v1/dashboards/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Dashboard): ResourceModel {
        if (!from) {
            return model;
        }
        model.dashboard = from;
        if (from.id) {
            model.id = from.id;
        }
        return model;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
