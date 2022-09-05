import {ResourceModel, Slo, TypeConfigurationModel} from './models';
import {DynatraceClient, PaginatedResponseType} from "../../Dynatrace-Common/src/dynatrace-client";
import {AbstractDynatraceResource} from "../../Dynatrace-Common/src/abstract-dynatrace-resource";
import {CaseTransformer, Transformer} from '../../Dynatrace-Common/src/util';

import {version} from "../package.json";

type PaginatedSlos = {
    slo: ResourceModel[]
} & PaginatedResponseType;

class Resource extends AbstractDynatraceResource<ResourceModel, Slo, Slo, void, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Slo> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<Slo>(
            'get',
            `/api/v2/slo/${model.id}`);
        return new Slo(response.data);
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).paginate<PaginatedSlos, ResourceModel>(
            'get',
            '/api/v2/slo',
            pagedResponse => pagedResponse.data && pagedResponse.data.slo
                ? pagedResponse.data.slo.map(slo => this.setModelFrom(new ResourceModel(), slo))
                : [],
            {enabledSlos: 'all'});
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Slo> {
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
        return new Slo({
            id: response.headers.location.substring(response.headers.location.lastIndexOf('/') + 1)
        });
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest(
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

    setModelFrom(model: ResourceModel, from?: ResourceModel): ResourceModel {
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
