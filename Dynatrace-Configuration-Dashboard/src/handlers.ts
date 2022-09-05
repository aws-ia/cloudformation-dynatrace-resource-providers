import {Dashboard, ResourceModel, TypeConfigurationModel} from './models';
import {DynatraceClient} from "../../Dynatrace-Common/src/dynatrace-client";
import {AbstractDynatraceResource} from "../../Dynatrace-Common/src/abstract-dynatrace-resource";
import {CaseTransformer, Transformer} from '../../Dynatrace-Common/src/util';

import {version} from "../package.json";

type Dashboards = {
    dashboards: Dashboard[]
}

class Resource extends AbstractDynatraceResource<ResourceModel, Dashboard, Dashboard, Dashboard, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Dashboard> {
        const response = await new DynatraceClient(typeConfiguration?.pagerDutyAccess.endpoint, typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<Dashboard>(
            'get',
            `/api/config/v1/dashboards/${model.id}`);
        return new Dashboard(response.data);
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(typeConfiguration?.pagerDutyAccess.endpoint, typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<Dashboards>(
            'get',
            `/api/config/v1/dashboards`);

        return response.data.dashboards.map(dashboard => this.setModelFrom(new ResourceModel(), new Dashboard(dashboard)));
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Dashboard> {
        const response = await new DynatraceClient(typeConfiguration?.pagerDutyAccess.endpoint, typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<Dashboard>(
            'post',
            `/api/config/v1/dashboards`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
        return new Dashboard(response.data);
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Dashboard> {
        const response = await new DynatraceClient(typeConfiguration?.pagerDutyAccess.endpoint, typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest<Dashboard>(
            'put',
            `/api/config/v1/dashboards/${model.id}`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
        return new Dashboard(response.data);
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new DynatraceClient(typeConfiguration?.pagerDutyAccess.endpoint, typeConfiguration?.pagerDutyAccess.token, this.userAgent).doRequest(
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
