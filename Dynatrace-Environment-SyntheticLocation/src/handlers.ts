import {
    exceptions,
    ResourceHandlerRequest,
} from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import {ResourceModel, SyntheticLocation} from './models';
import {ApiErrorResponse, DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource';
import {AxiosError} from "axios";
import {InvalidRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";

import {version} from "../package.json";

type SyntheticLocations = {
    locations: SyntheticLocation[];
}

class Resource extends AbstractDynatraceResource<ResourceModel, SyntheticLocation, SyntheticLocation, void> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel): Promise<SyntheticLocation> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<SyntheticLocation>(
            'get',
            `/api/v1/synthetic/locations/${model.entityId}`);
        return new SyntheticLocation(response.data);
    }

    async list(model: ResourceModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<SyntheticLocations>(
            'get',
            `/api/v1/synthetic/locations`);
        return response.data.locations.map(location => this.setModelFrom(new ResourceModel(), new SyntheticLocation(location)));
    }

    async create(model: ResourceModel): Promise<SyntheticLocation> {
        const response = await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest<SyntheticLocation>(
            'post',
            '/api/v1/synthetic/locations',
            {},
            model.toJSON());
        return new SyntheticLocation(response.data);
    }

    async update(model: ResourceModel): Promise<void> {
        await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest(
            'put',
            `/api/v1/synthetic/locations/${model.entityId}`,
            {},
            model.toJSON());
    }

    async delete(model: ResourceModel): Promise<void> {
        await new DynatraceClient(model.dynatraceEndpoint, model.dynatraceAccess, this.userAgent).doRequest(
            'delete',
            `/api/v1/synthetic/locations/${model.entityId}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: SyntheticLocation): ResourceModel {
        if (!from) {
            return model;
        }
        model.location = from;
        if (!!from.entityId) {
            model.entityId = from.entityId;
        }
        return model;
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

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
