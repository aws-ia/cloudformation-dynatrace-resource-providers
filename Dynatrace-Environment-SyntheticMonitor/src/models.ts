// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Dynatrace::Environment::SyntheticMonitor';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ENTITYID: string = '/properties/EntityId';

    @Expose({ name: 'FrequencyMin' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'frequencyMin', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    frequencyMin?: Optional<integer>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'AnomalyDetection' })
    @Type(() => AnomalyDetectionPolicy)
    anomalyDetection?: Optional<AnomalyDetectionPolicy>;
    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Locations' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'locations', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    locations?: Optional<Set<string>>;
    @Expose({ name: 'Script' })
    @Type(() => Script)
    script?: Optional<Script>;
    @Expose({ name: 'Tags' })
    @Type(() => Tag)
    tags?: Optional<Array<Tag>>;
    @Expose({ name: 'ManuallyAssignedApps' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'manuallyAssignedApps', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    manuallyAssignedApps?: Optional<Set<string>>;
    @Expose({ name: 'EntityId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'entityId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    entityId?: Optional<string>;
    @Expose({ name: 'CreatedFrom' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'createdFrom', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    createdFrom?: Optional<string>;
    @Expose({ name: 'ManagementZones' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'managementZones', value, obj, [Array, Map]),
        {
            toClassOnly: true,
        }
    )
    managementZones?: Optional<Array<Map<string, object>>>;
    @Expose({ name: 'AutomaticallyAssignedApps' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'automaticallyAssignedApps', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    automaticallyAssignedApps?: Optional<Set<string>>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.entityId != null) {
            identifier[this.IDENTIFIER_KEY_ENTITYID] = this.entityId;
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

export class AnomalyDetectionPolicy extends BaseModel {
    ['constructor']: typeof AnomalyDetectionPolicy;


    @Expose({ name: 'OutageHandling' })
    @Type(() => OutageHandlingPolicy)
    outageHandling?: Optional<OutageHandlingPolicy>;
    @Expose({ name: 'LoadingTimeThresholds' })
    @Type(() => LoadingTimeThresholdsPolicy)
    loadingTimeThresholds?: Optional<LoadingTimeThresholdsPolicy>;

}

export class OutageHandlingPolicy extends BaseModel {
    ['constructor']: typeof OutageHandlingPolicy;


    @Expose({ name: 'GlobalOutage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'globalOutage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    globalOutage?: Optional<boolean>;
    @Expose({ name: 'GlobalOutagePolicy' })
    @Type(() => GlobalOutagePolicy)
    globalOutagePolicy?: Optional<GlobalOutagePolicy>;
    @Expose({ name: 'LocalOutage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'localOutage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    localOutage?: Optional<boolean>;
    @Expose({ name: 'LocalOutagePolicy' })
    @Type(() => LocalOutagePolicy)
    localOutagePolicy?: Optional<LocalOutagePolicy>;
    @Expose({ name: 'RetryOnError' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'retryOnError', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    retryOnError?: Optional<boolean>;

}

export class GlobalOutagePolicy extends BaseModel {
    ['constructor']: typeof GlobalOutagePolicy;


    @Expose({ name: 'ConsecutiveRuns' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'consecutiveRuns', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    consecutiveRuns?: Optional<integer>;

}

export class LocalOutagePolicy extends BaseModel {
    ['constructor']: typeof LocalOutagePolicy;


    @Expose({ name: 'AffectedLocations' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'affectedLocations', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    affectedLocations?: Optional<integer>;
    @Expose({ name: 'ConsecutiveRuns' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'consecutiveRuns', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    consecutiveRuns?: Optional<integer>;

}

export class LoadingTimeThresholdsPolicy extends BaseModel {
    ['constructor']: typeof LoadingTimeThresholdsPolicy;


    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'Thresholds' })
    @Type(() => LoadingTimeThreshold)
    thresholds?: Optional<Array<LoadingTimeThreshold>>;

}

export class LoadingTimeThreshold extends BaseModel {
    ['constructor']: typeof LoadingTimeThreshold;


    @Expose({ name: 'Type' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'type_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    type_?: Optional<string>;
    @Expose({ name: 'ValueMs' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'valueMs', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    valueMs?: Optional<integer>;

}

export class Script extends BaseModel {
    ['constructor']: typeof Script;


    @Expose({ name: 'Version' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'version', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    version?: Optional<string>;
    @Expose({ name: 'Requests' })
    @Type(() => RequestsInput)
    requests?: Optional<Array<RequestsInput>>;

}

export class RequestsInput extends BaseModel {
    ['constructor']: typeof RequestsInput;


    @Expose({ name: 'Url' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'url', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    url?: Optional<string>;
    @Expose({ name: 'Method' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'method', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    method?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;
    @Expose({ name: 'Configuration' })
    @Type(() => Configuration)
    configuration?: Optional<Configuration>;
    @Expose({ name: 'Validation' })
    @Type(() => Validation)
    validation?: Optional<Validation>;

}

export class Configuration extends BaseModel {
    ['constructor']: typeof Configuration;


    @Expose({ name: 'AcceptAnyCertificate' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'acceptAnyCertificate', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    acceptAnyCertificate?: Optional<boolean>;
    @Expose({ name: 'FollowRedirects' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'followRedirects', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    followRedirects?: Optional<boolean>;
    @Expose({ name: 'ShouldNotPersistSensitiveData' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'shouldNotPersistSensitiveData', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    shouldNotPersistSensitiveData?: Optional<boolean>;

}

export class Validation extends BaseModel {
    ['constructor']: typeof Validation;


    @Expose({ name: 'Rules' })
    @Type(() => RequestsRules)
    rules?: Optional<Array<RequestsRules>>;

}

export class RequestsRules extends BaseModel {
    ['constructor']: typeof RequestsRules;


    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;
    @Expose({ name: 'PassIfFound' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'passIfFound', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    passIfFound?: Optional<boolean>;
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

export class Tag extends BaseModel {
    ['constructor']: typeof Tag;


    @Expose({ name: 'Source' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'source', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    source?: Optional<string>;
    @Expose({ name: 'Context' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'context', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    context?: Optional<string>;
    @Expose({ name: 'Key' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'key', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    key?: Optional<string>;
    @Expose({ name: 'Value' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'value_', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    value_?: Optional<string>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'DynatraceAccess' })
    @Type(() => DynatraceAccess)
    dynatraceAccess?: Optional<DynatraceAccess>;

}

export class DynatraceAccess extends BaseModel {
    ['constructor']: typeof DynatraceAccess;


    @Expose({ name: 'Token' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'token', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    token?: Optional<string>;
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

