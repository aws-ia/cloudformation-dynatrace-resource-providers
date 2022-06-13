// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Dynatrace::Configuration::Dashboard';

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
    @Expose({ name: 'Metadata' })
    @Type(() => Metadata)
    metadata?: Optional<Metadata>;
    @Expose({ name: 'DashboardMetadata' })
    @Type(() => DashboardMetadata)
    dashboardMetadata?: Optional<DashboardMetadata>;
    @Expose({ name: 'Tiles' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'tiles', value, obj, [Array, Map]),
        {
            toClassOnly: true,
        }
    )
    tiles?: Optional<Array<Map<string, object>>>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Dashboard' })
    @Type(() => Dashboard)
    dashboard?: Optional<Dashboard>;

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

export class Metadata extends BaseModel {
    ['constructor']: typeof Metadata;


    @Expose({ name: 'ConfigurationVersions' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'configurationVersions', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    configurationVersions?: Optional<Array<integer>>;
    @Expose({ name: 'CurrentConfigurationVersions' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'currentConfigurationVersions', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    currentConfigurationVersions?: Optional<Array<string>>;
    @Expose({ name: 'ClusterVersion' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'clusterVersion', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    clusterVersion?: Optional<string>;

}

export class DashboardMetadata extends BaseModel {
    ['constructor']: typeof DashboardMetadata;


    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Shared' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'shared', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    shared?: Optional<boolean>;
    @Expose({ name: 'Owner' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'owner', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    owner?: Optional<string>;
    @Expose({ name: 'DashboardFilter' })
    @Type(() => DashboardFilter)
    dashboardFilter?: Optional<DashboardFilter>;
    @Expose({ name: 'Tags' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tags', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    tags?: Optional<Set<string>>;
    @Expose({ name: 'Preset' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'preset', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    preset?: Optional<boolean>;
    @Expose({ name: 'DynamicFilters' })
    @Type(() => DynamicFilters)
    dynamicFilters?: Optional<DynamicFilters>;
    @Expose({ name: 'TilesNameSize' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tilesNameSize', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    tilesNameSize?: Optional<string>;

}

export class DashboardFilter extends BaseModel {
    ['constructor']: typeof DashboardFilter;


    @Expose({ name: 'Timeframe' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'timeframe', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeframe?: Optional<string>;
    @Expose({ name: 'ManagementZone' })
    @Type(() => EntityShortRepresentation)
    managementZone?: Optional<EntityShortRepresentation>;

}

export class EntityShortRepresentation extends BaseModel {
    ['constructor']: typeof EntityShortRepresentation;


    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Description' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'description', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    description?: Optional<string>;

}

export class DynamicFilters extends BaseModel {
    ['constructor']: typeof DynamicFilters;


    @Expose({ name: 'Filters' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'filters', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    filters?: Optional<Set<string>>;
    @Expose({ name: 'TagSuggestionTypes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tagSuggestionTypes', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    tagSuggestionTypes?: Optional<Set<string>>;

}

export class Dashboard extends BaseModel {
    ['constructor']: typeof Dashboard;


    @Expose({ name: 'Metadata' })
    @Type(() => Metadata)
    metadata?: Optional<Metadata>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'DashboardMetadata' })
    @Type(() => DashboardMetadata)
    dashboardMetadata?: Optional<DashboardMetadata>;
    @Expose({ name: 'Tiles' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'tiles', value, obj, [Array, Map]),
        {
            toClassOnly: true,
        }
    )
    tiles?: Optional<Array<Map<string, object>>>;

}

