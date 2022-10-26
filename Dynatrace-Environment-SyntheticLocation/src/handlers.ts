import {
    exceptions,
    ResourceHandlerRequest,
} from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import {ResourceModel, TypeConfigurationModel} from './models';
import {ApiErrorResponse, DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource';
import {AxiosError} from "axios";
import {InvalidRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";
import {CaseTransformer, Transformer} from '../../Dynatrace-Common/src/util';

import {version} from "../package.json";

type LocationPayload = {
    entityId: string
};

type LocationsPayload = {
    locations: LocationPayload[];
};

class Resource extends AbstractDynatraceResource<ResourceModel, LocationPayload, LocationPayload, void, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<LocationPayload> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<LocationPayload>(
            'get',
            `/api/v1/synthetic/locations/${model.entityId}`);
        return response.data;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<LocationsPayload>(
            'get',
            `/api/v1/synthetic/locations`);
        return response.data.locations.map(locationPayload => this.setModelFrom(new ResourceModel(), locationPayload));
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<LocationPayload> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<LocationPayload>(
            'post',
            '/api/v1/synthetic/locations',
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
        return response.data;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest(
            'put',
            `/api/v1/synthetic/locations/${model.entityId}`,
            {},
            Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform());
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest(
            'delete',
            `/api/v1/synthetic/locations/${model.entityId}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: LocationPayload): ResourceModel {
        if (!from) {
            return model;
        }

        const resourceModel = new ResourceModel({
            ...model,
            ...Transformer.for(from)
                .transformKeys(CaseTransformer.IDENTITY)
                .forModelIngestion()
                .transform()
        });
        delete resourceModel.type_;
        // delete resourceModel.locationNodeOutageDelayInMinutes;

        return resourceModel;
    }

    // We override the default exception handler because this CRUD API specifically returns a 400 with the message
    // starting with `Could not find ...` instead of a classic 404 when we are getting an item that does not exist.
    processRequestException(e: AxiosError<ApiErrorResponse>, request: ResourceHandlerRequest<ResourceModel>) {
        try {
            super.processRequestException(e, request);
        } catch (e) {
            if (e instanceof InvalidRequest && e.message.startsWith('Could not find')) {
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            }
            throw e;
        }
    }
}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
