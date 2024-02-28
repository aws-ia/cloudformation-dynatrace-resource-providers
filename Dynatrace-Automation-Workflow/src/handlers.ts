import {
    CronTrigger,
    DavisEventTrigger,
    DavisProblemTrigger,
    EventTrigger,
    EventTriggerRequest,
    IntervalTrigger,
    ResourceModel,
    ScheduleRequest,
    TimeTrigger,
    TypeConfigurationModel
} from './models';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource'
import {CaseTransformer, Transformer} from "../../Dynatrace-Common/src/util";
import {DynatraceOAuthClient} from './dynatrace-oauth-client';
import {version} from "../package.json";
import {Task, Workflow} from "@dynatrace-sdk/client-automation";
import {PaginatedResponseType} from "../../Dynatrace-Common/src/dynatrace-client";
import {Expose, plainToClass, Transform, Type} from "class-transformer";
import {
    BaseModel,
    Optional,
    transformValue
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";

type Workflows = {
    results: Workflow[]
} & PaginatedResponseType;

class Resource extends AbstractDynatraceResource<ResourceModel, Workflow, Workflow, Workflow, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;

    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Workflow> {
        const scopes = ['automation:workflows:read'];
        const response = await new DynatraceOAuthClient(typeConfiguration?.dynatraceOAuthAccess.endpoint, typeConfiguration?.dynatraceOAuthAccess.clientId, typeConfiguration.dynatraceOAuthAccess.clientSecret, scopes, this.userAgent).doRequest<Workflow>(
            'get',
            `/platform/automation/v1/workflows/${model.id}`);
        return response.data;
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const scopes = ['automation:workflows:read'];
        const response = await new DynatraceOAuthClient(typeConfiguration?.dynatraceOAuthAccess.endpoint, typeConfiguration?.dynatraceOAuthAccess.clientId, typeConfiguration.dynatraceOAuthAccess.clientSecret, scopes, this.userAgent).paginate<Workflows, ResourceModel>(
            'get',
            `/platform/automation/v1/workflows`,
            pagedResponse => pagedResponse.data
                ? pagedResponse.data.results.map(workflow => this.setModelFrom(model, workflow))
                : []);
        return response;
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Workflow> {
        const scopes = ['automation:workflows:write'];
        const response = await new DynatraceOAuthClient(typeConfiguration?.dynatraceOAuthAccess.endpoint, typeConfiguration?.dynatraceOAuthAccess.clientId, typeConfiguration.dynatraceOAuthAccess.clientSecret, scopes, this.userAgent).doRequest<Workflow>(
            'post',
            `/platform/automation/v1/workflows`,
            {},
            this.setPayloadFrom(model));
        return response.data;
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<Workflow> {
        const scopes = ['automation:workflows:write'];
        const response = await new DynatraceOAuthClient(typeConfiguration?.dynatraceOAuthAccess.endpoint, typeConfiguration?.dynatraceOAuthAccess.clientId, typeConfiguration.dynatraceOAuthAccess.clientSecret, scopes, this.userAgent).doRequest<Workflow>(
            'put',
            `/platform/automation/v1/workflows/${model.id}`,
            {},
            this.setPayloadFrom(model));
        return response.data;
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<void> {
        const scopes = ['automation:workflows:write'];
        await new DynatraceOAuthClient(typeConfiguration?.dynatraceOAuthAccess.endpoint, typeConfiguration?.dynatraceOAuthAccess.clientId, typeConfiguration.dynatraceOAuthAccess.clientSecret, scopes, this.userAgent).doRequest(
            'delete',
            `/platform/automation/v1/workflows/${model.id}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: Workflow): ResourceModel {
        if (!from) {
            return model;
        }

        const transformedFrom = Transformer.for(from)
            .transformKeys(CaseTransformer.IDENTITY)
            .forModelIngestion()
            .transform();

        const result = new ResourceModel({
            ...model,
            ...transformedFrom,
            // Our schema accepts tasks as a list of `Task`, this is to be able to perform schema validation on the input JSON
            // However, the API returns an object where each key is the task name. So we transform this particular key here.
            tasks: Object.values({...transformedFrom.tasks})
        });

        // The command `cfn generate` uses the type `object` if a property is defined with a `oneOf` or `anyOf`.
        // To properly support the parsing and such property, we define our own class below, using the `discriminator`
        // to tell `class-transformer` which type we need to use in which case, then we rewrite the generic `object`-typed
        // property with the rightly typed object.
        //
        // In this case, we need to do this for `Trigger.Schedule` and `Trigger.eventTrigger`
        if (result.trigger?.schedule) {
            result.trigger.schedule = plainToClass(
                ScheduleRequestWithOneOfTrigger,
                Transformer.for(from.trigger?.schedule)
                    .transformKeys(CaseTransformer.CAMEL_TO_PASCAL)
                    .transform(),
                {excludeExtraneousValues: true});
        }
        if (result.trigger?.eventTrigger) {
            result.trigger.eventTrigger = plainToClass(
                EventTriggerRequestWithOneOfTrigger,
                Transformer.for(from.trigger?.eventTrigger)
                    .transformKeys(CaseTransformer.CAMEL_TO_PASCAL)
                    .transform(),
                {excludeExtraneousValues: true});
        }

        return result;
    }

    setPayloadFrom(model: ResourceModel) {
        const payloadFromModel = Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
            .transform();

        return {
            ...payloadFromModel,
            // Our schema accepts tasks as a list of `Task`, this is to be able to perform schema validation on the input JSON
            // However, the API takes an object where each key is the task name. So we transform this particular key here.
            tasks: payloadFromModel.tasks?.reduce((map: Record<string, Task>, task: Task) => {
                map[task.name] = task;
                return map;
            }, {})
        };
    }

}

class ScheduleRequestWithOneOfTrigger extends ScheduleRequest {
    @Type(() => BaseModel, {
        discriminator: {
            property: 'Type',
            subTypes: [
                {value: CronTrigger, name: 'cron'},
                {value: IntervalTrigger, name: 'interval'},
                {value: TimeTrigger, name: 'time'},
            ],
        },
        keepDiscriminatorProperty: true
    })
    @Expose({name: 'Trigger'})
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'trigger', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    trigger?: Optional<CronTrigger | IntervalTrigger | TimeTrigger>;
}

class EventTriggerRequestWithOneOfTrigger extends EventTriggerRequest {
    @Type(() => BaseModel, {
        discriminator: {
            property: 'Type',
            subTypes: [
                {value: DavisEventTrigger, name: 'davis-event'},
                {value: DavisProblemTrigger, name: 'davis-problem'},
                {value: EventTrigger, name: 'event'},
            ],
        },
        keepDiscriminatorProperty: true
    })
    @Expose({name: 'TriggerConfiguration'})
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'triggerConfiguration', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    triggerConfiguration?: Optional<DavisEventTrigger | DavisProblemTrigger | EventTrigger>;
}

// @ts-ignore // if running against v1.0.1 or earlier of plugin the 5th argument is not known but best to ignored (runtime code may warn)
export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel)!;

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;
