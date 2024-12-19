// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Dynatrace::Automation::Workflow';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'Actor' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'actor', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    actor?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'IsPrivate' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isPrivate', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isPrivate?: Optional<boolean>;
    @Expose({ name: 'Owner' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'owner', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    owner?: Optional<string>;
    @Expose({ name: 'OwnerType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'ownerType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    ownerType?: Optional<string>;
    @Expose({ name: 'SchemaVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'schemaVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    schemaVersion?: Optional<integer>;
    @Expose({ name: 'Tasks' })
    @Type(() => Task)
    tasks?: Optional<Array<Task>>;
    @Expose({ name: 'Throttle' })
    @Type(() => ThrottleRequest)
    throttle?: Optional<ThrottleRequest>;
    @Expose({ name: 'Title' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'title', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    title?: Optional<string>;
    @Expose({ name: 'Trigger' })
    @Type(() => TriggerRequest)
    trigger?: Optional<TriggerRequest>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.id != null) {
            identifier[this.IDENTIFIER_KEY_ID] = this.id;
        }

        // only return the identifier if it can be used, i.e. if all components are present
        return Object.keys(identifier).length === 1 ? identifier : null;
    }

    @Exclude()
    public getAdditionalIdentifiers(): Array<Dict> {
        const identifiers: Array<Dict> = new Array<Dict>();
        // only return the identifiers if any can be used
        return identifiers.length === 0 ? null : identifiers;
    }
}

export class Task extends BaseModel {
    ['constructor']: typeof Task;


    @Expose({ name: 'Action' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'action', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    action?: Optional<string>;
    @Expose({ name: 'Active' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'active', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    active?: Optional<boolean>;
    @Expose({ name: 'Concurrency' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'concurrency', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    concurrency?: Optional<integer>;
    @Expose({ name: 'Condition' })
    @Type(() => Condition)
    condition?: Optional<Condition>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Input' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'input', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    input?: Optional<Map<string, object>>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Position' })
    @Type(() => Position)
    position?: Optional<Position>;
    @Expose({ name: 'Retry' })
    @Type(() => Retry)
    retry?: Optional<Retry>;
    @Expose({ name: 'Timeout' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'timeout', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeout?: Optional<integer>;
    @Expose({ name: 'WithItems' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'withItems', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    withItems?: Optional<string>;

}

export class Condition extends BaseModel {
    ['constructor']: typeof Condition;


    @Expose({ name: 'Custom' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'custom', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    custom?: Optional<string>;
    @Expose({ name: 'Else' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'else_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    else_?: Optional<string>;
    @Expose({ name: 'States' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'states', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    states?: Optional<Map<string, object>>;

}

export class Position extends BaseModel {
    ['constructor']: typeof Position;


    @Expose({ name: 'X' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'x', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    x?: Optional<integer>;
    @Expose({ name: 'Y' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'y', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    y?: Optional<integer>;

}

export class Retry extends BaseModel {
    ['constructor']: typeof Retry;


    @Expose({ name: 'Count' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'count', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    count?: Optional<string>;
    @Expose({ name: 'Delay' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'delay', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    delay?: Optional<string>;
    @Expose({ name: 'FailedLoopIterationsOnly' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'failedLoopIterationsOnly', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    failedLoopIterationsOnly?: Optional<boolean>;

}

export class ThrottleRequest extends BaseModel {
    ['constructor']: typeof ThrottleRequest;


    @Expose({ name: 'IsLimitHit' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isLimitHit', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isLimitHit?: Optional<boolean>;
    @Expose({ name: 'LimitEvents' })
    @Type(() => ThrottleLimitEvent)
    limitEvents?: Optional<Array<ThrottleLimitEvent>>;

}

export class ThrottleLimitEvent extends BaseModel {
    ['constructor']: typeof ThrottleLimitEvent;


    @Expose({ name: 'Limit' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'limit', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    limit?: Optional<integer>;
    @Expose({ name: 'TimeLeftInSeconds' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'timeLeftInSeconds', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeLeftInSeconds?: Optional<integer>;
    @Expose({ name: 'Timestamp' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'timestamp', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timestamp?: Optional<string>;

}

export class TriggerRequest extends BaseModel {
    ['constructor']: typeof TriggerRequest;


    @Expose({ name: 'EventTrigger' })
    @Type(() => EventTriggerRequest)
    eventTrigger?: Optional<EventTriggerRequest>;
    @Expose({ name: 'Schedule' })
    @Type(() => ScheduleRequest)
    schedule?: Optional<ScheduleRequest>;

}

export class EventTriggerRequest extends BaseModel {
    ['constructor']: typeof EventTriggerRequest;


    @Expose({ name: 'IsActive' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isActive', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isActive?: Optional<boolean>;
    @Expose({ name: 'TriggerConfiguration' })
    @Type(() => TriggerConfiguration)
    triggerConfiguration?: Optional<TriggerConfiguration>;

}

export class TriggerConfiguration extends BaseModel {
    ['constructor']: typeof TriggerConfiguration;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Value' })
    @Type(() => EventTriggerConfig)
    value_?: Optional<EventTriggerConfig>;

}

export class EventTriggerConfig extends BaseModel {
    ['constructor']: typeof EventTriggerConfig;


    @Expose({ name: 'Names' })
    @Type(() => DavisEventName)
    names?: Optional<Array<DavisEventName>>;
    @Expose({ name: 'Categories' })
    @Type(() => DavisProblemCategories)
    categories?: Optional<DavisProblemCategories>;
    @Expose({ name: 'CustomFilters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'customFilters', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    customFilters?: Optional<string>;
    @Expose({ name: 'EntityTags' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'entityTags', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    entityTags?: Optional<Map<string, object>>;
    @Expose({ name: 'EntityTagsMatch' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'entityTagsMatch', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    entityTagsMatch?: Optional<string>;
    @Expose({ name: 'OnProblemClose' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'onProblemClose', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    onProblemClose?: Optional<boolean>;
    @Expose({ name: 'EventType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'eventType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    eventType?: Optional<string>;
    @Expose({ name: 'Query' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'query', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    query?: Optional<string>;

}

export class DavisEventName extends BaseModel {
    ['constructor']: typeof DavisEventName;


    @Expose({ name: 'Match' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'match', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    match?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;

}

export class DavisProblemCategories extends BaseModel {
    ['constructor']: typeof DavisProblemCategories;


    @Expose({ name: 'Availability' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'availability', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    availability?: Optional<boolean>;
    @Expose({ name: 'Custom' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'custom', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    custom?: Optional<boolean>;
    @Expose({ name: 'Error' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'error', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    error?: Optional<boolean>;
    @Expose({ name: 'Info' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'info', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    info?: Optional<boolean>;
    @Expose({ name: 'MonitoringUnavailable' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'monitoringUnavailable', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    monitoringUnavailable?: Optional<boolean>;
    @Expose({ name: 'Resource' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'resource', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    resource?: Optional<boolean>;
    @Expose({ name: 'Slowdown' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'slowdown', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    slowdown?: Optional<boolean>;

}

export class ScheduleRequest extends BaseModel {
    ['constructor']: typeof ScheduleRequest;


    @Expose({ name: 'FilterParameters' })
    @Type(() => ScheduleFilterParameters)
    filterParameters?: Optional<ScheduleFilterParameters>;
    @Expose({ name: 'Input' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'input', value, obj, [Map]),
        {
            toClassOnly: true,
        }
    )
    input?: Optional<Map<string, object>>;
    @Expose({ name: 'IsActive' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'isActive', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    isActive?: Optional<boolean>;
    @Expose({ name: 'NextExecution' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'nextExecution', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    nextExecution?: Optional<string>;
    @Expose({ name: 'Rule' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'rule', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    rule?: Optional<string>;
    @Expose({ name: 'Timezone' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'timezone', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timezone?: Optional<string>;
    @Expose({ name: 'Trigger' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'trigger', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    trigger?: Optional<object>;

}

export class ScheduleFilterParameters extends BaseModel {
    ['constructor']: typeof ScheduleFilterParameters;


    @Expose({ name: 'Count' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'count', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    count?: Optional<integer>;
    @Expose({ name: 'EarliestStart' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'earliestStart', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    earliestStart?: Optional<string>;
    @Expose({ name: 'EarliestStartTime' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'earliestStartTime', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    earliestStartTime?: Optional<string>;
    @Expose({ name: 'ExcludeDates' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'excludeDates', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    excludeDates?: Optional<Array<string>>;
    @Expose({ name: 'IncludeDates' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'includeDates', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    includeDates?: Optional<Array<string>>;
    @Expose({ name: 'Until' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'until', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    until?: Optional<string>;

}

export class CronTrigger extends BaseModel {
    ['constructor']: typeof CronTrigger;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Cron' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'cron', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    cron?: Optional<string>;

}

export class IntervalTrigger extends BaseModel {
    ['constructor']: typeof IntervalTrigger;


    @Expose({ name: 'BetweenEnd' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'betweenEnd', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    betweenEnd?: Optional<string>;
    @Expose({ name: 'BetweenStart' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'betweenStart', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    betweenStart?: Optional<string>;
    @Expose({ name: 'IntervalMinutes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'intervalMinutes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    intervalMinutes?: Optional<integer>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;

}

export class TimeTrigger extends BaseModel {
    ['constructor']: typeof TimeTrigger;


    @Expose({ name: 'Time' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'time', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    time?: Optional<string>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'DynatraceOAuthAccess' })
    @Type(() => DynatraceOAuthAccess)
    dynatraceOAuthAccess?: Optional<DynatraceOAuthAccess>;

}

export class DynatraceOAuthAccess extends BaseModel {
    ['constructor']: typeof DynatraceOAuthAccess;


    @Expose({ name: 'ClientId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'clientId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clientId?: Optional<string>;
    @Expose({ name: 'ClientSecret' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'clientSecret', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clientSecret?: Optional<string>;
    @Expose({ name: 'Endpoint' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'endpoint', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    endpoint?: Optional<string>;

}

