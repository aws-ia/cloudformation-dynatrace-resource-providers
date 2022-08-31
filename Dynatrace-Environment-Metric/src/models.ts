// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Dynatrace::Environment::Metric';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

    @Expose({ name: 'DynatraceAccess' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dynatraceAccess', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dynatraceAccess?: Optional<string>;
    @Expose({ name: 'DynatraceEndpoint' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dynatraceEndpoint', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dynatraceEndpoint?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'DisplayName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'displayName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    displayName?: Optional<string>;
    @Expose({ name: 'Unit' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'unit', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    unit?: Optional<string>;
    @Expose({ name: 'Dimensions' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dimensions', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    dimensions?: Optional<Array<string>>;
    @Expose({ name: 'Types' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'types', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    types?: Optional<Array<string>>;
    @Expose({ name: 'Metric' })
    @Type(() => Metric)
    metric?: Optional<Metric>;

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

export class Metric extends BaseModel {
    ['constructor']: typeof Metric;


    @Expose({ name: 'TimeseriesId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'timeseriesId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeseriesId?: Optional<string>;
    @Expose({ name: 'DisplayName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'displayName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    displayName?: Optional<string>;
    @Expose({ name: 'Dimensions' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dimensions', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    dimensions?: Optional<Array<string>>;
    @Expose({ name: 'AggregationTypes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'aggregationTypes', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    aggregationTypes?: Optional<Array<string>>;
    @Expose({ name: 'Unit' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'unit', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    unit?: Optional<string>;
    @Expose({ name: 'Filter' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'filter', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    filter?: Optional<string>;
    @Expose({ name: 'DetailedSource' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'detailedSource', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    detailedSource?: Optional<string>;
    @Expose({ name: 'PluginId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'pluginId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    pluginId?: Optional<string>;
    @Expose({ name: 'Types' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'types', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    types?: Optional<Array<string>>;
    @Expose({ name: 'Warnings' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'warnings', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    warnings?: Optional<Array<string>>;

}

export class TypeConfigurationModel extends BaseModel {
    ['constructor']: typeof TypeConfigurationModel;


    @Expose({ name: 'DynatraceAccess' })
    @Type(() => DynatraceAccess)
    dynatraceAccess?: Optional<DynatraceAccess>;

}

export class DynatraceAccess extends BaseModel {
    ['constructor']: typeof DynatraceAccess;


    @Expose({ name: 'AccessToken' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'accessToken', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    accessToken?: Optional<string>;
    @Expose({ name: 'DynatraceEndpoint' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dynatraceEndpoint', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dynatraceEndpoint?: Optional<string>;

}

