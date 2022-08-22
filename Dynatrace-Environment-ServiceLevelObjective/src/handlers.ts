import {ResourceModel, Slo} from './models';
import {DynatraceClient, PaginatedResponseType} from "../../Dynatrace-Common/src/dynatrace-client";
import {AbstractDynatraceResource} from "../../Dynatrace-Common/src/abstract-dynatrace-resource";

import {version} from "../package.json";

type PaginatedSlos = {
    slo: ResourceModel[]
} & PaginatedResponseType;

class Resource extends AbstractDynatraceResource<ResourceModel, Slo, Slo, void> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel): Promise<Slo> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<Slo>(
            'get',
            `/api/v2/slo/${model.id}`);
        return new Slo(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        return await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).paginate<PaginatedSlos, ResourceModel>(
            'get',
            '/api/v2/slo',
            pagedResponse => pagedResponse.data && pagedResponse.data.slo
                ? pagedResponse.data.slo.map(slo => this.setModelFrom(new ResourceModel(), slo))
                : [],
            {enabledSlos: 'all'});
    }

    async create(model: ResourceModel): Promise<Slo> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest(
            'post',
            '/api/v2/slo',
            {},
            {
                ...model.toJSON(),
                // We are forcing the SLO to be enabled because a GET doesn't return disabled SLO which would
                // get us in trouble.
                enabled: true
            });
        return new Slo({
            id: response.headers.location.substring(response.headers.location.lastIndexOf('/') + 1)
        });
    }

    async update(model: ResourceModel): Promise<void> {
        await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest(
            'put',
            `/api/v2/slo/${model.id}`,
            {},
            {
                ...model.toJSON(),
                // We are forcing the SLO to be enabled because a GET doesn't return disabled SLO which would
                // get us in trouble.
                enabled: true
            });
    }

    async delete(model: ResourceModel): Promise<void> {
        await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest(
            'delete',
            `/api/v2/slo/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: ResourceModel): ResourceModel {
        if (!from) {
            return model;
        }
        model.slo = from;
        if (!!from.id) {
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
