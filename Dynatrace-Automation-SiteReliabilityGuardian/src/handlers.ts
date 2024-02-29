import {ResourceModel, TypeConfigurationModel} from './models';
import {AbstractDynatraceResource} from "../../Dynatrace-Common/src/abstract-dynatrace-resource";
import {PaginatedResponseType} from "../../Dynatrace-Common/src/dynatrace-client";
import {CaseTransformer, Transformer} from "../../Dynatrace-Common/src/util";
import {DynatraceOAuthClient} from '../../Dynatrace-Common/src/dynatrace-oauth-client';


import {version} from "../package.json";

type SRGPayload = {
    objectId: string,
    value: any,
    scope: string,
    schemaId: string
}

type SRGsPayload = {
    items: SRGPayload[]
} & PaginatedResponseType;

class Resource extends AbstractDynatraceResource<ResourceModel, SRGPayload, SRGPayload, SRGPayload, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SRGPayload> {
        const response = await this.newOauthClient(typeConfiguration, ["app-engine:apps:run", "settings:objects:read"]).doRequest<SRGPayload>(
            'get',
            `/api/v2/settings/objects/${model.objectId}`);

        return response.data;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        return await this.newOauthClient(typeConfiguration, ["app-engine:apps:run", "settings:objects:read"]).paginate<SRGsPayload, ResourceModel>(
            'get',
            `/api/v2/settings/objects?schemaIds=app:dynatrace.site.reliability.guardian:guardians`,
            pagedResponse => pagedResponse.data
                ? pagedResponse.data.items.map(srg => this.setModelFrom(model, srg))
                : []);
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SRGPayload> {
        const response = await this.newOauthClient(typeConfiguration, ["settings:objects:write", "app-engine:apps:run"]).doRequest<SRGPayload[]>(
            'post',
            `/api/v2/settings/objects`,
            {},
            [{
                value: Transformer.for(model.toJSON())
                    .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                    .transform(),
                scope: "environment",
                schemaId: "app:dynatrace.site.reliability.guardian:guardians"
            }]);
        return response.data.pop();
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<SRGPayload> {

        let body = {
            value: Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform()
        };

        delete body.value.ObjectId;
        delete body.value.objectId;

        const response = await this.newOauthClient(typeConfiguration, ["settings:objects:write", "app-engine:apps:run" ]).doRequest<SRGPayload>(
            'put',
            `/api/v2/settings/objects/${model.objectId}`,
            {},
            body);
        return response.data;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        await this.newOauthClient(typeConfiguration, ["settings:objects:write", "app-engine:apps:run" ]).doRequest<SRGPayload>(
            'delete',
            `/api/v2/settings/objects/${model.objectId}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: SRGPayload): ResourceModel {
        if (!from) {
            return model;
        }

        return from.value ? new ResourceModel({
            objectId: from.objectId,
            ...Transformer.for(from.value)
                .transformKeys(CaseTransformer.IDENTITY)
                .forModelIngestion()
                .transform()
        }) : new ResourceModel({objectId: from.objectId});
    }

    private newOauthClient(typeConfiguration: TypeConfigurationModel, scopes: string[]) {
        return new DynatraceOAuthClient(
            typeConfiguration?.dynatraceOAuthAccess.endpoint,
            typeConfiguration?.dynatraceOAuthAccess.clientId,
            typeConfiguration.dynatraceOAuthAccess.clientSecret,
            scopes,
            this.userAgent);
    }
}

// @ts-ignore // if running against v1.0.1 or earlier of plugin the 5th argument is not known but best to ignored (runtime code may warn)
export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel)!;

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
