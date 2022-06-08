// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Dynatrace::Environment::SyntheticLocation';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ENTITYID: string = '/properties/EntityId';

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
    @Expose({ name: 'EntityId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'entityId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    entityId?: Optional<string>;
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
    @Expose({ name: 'CountryCode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'countryCode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    countryCode?: Optional<string>;
    @Expose({ name: 'RegionCode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'regionCode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    regionCode?: Optional<string>;
    @Expose({ name: 'City' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'city', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    city?: Optional<string>;
    @Expose({ name: 'Latitude' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'latitude', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    latitude?: Optional<number>;
    @Expose({ name: 'Longitude' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'longitude', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    longitude?: Optional<number>;
    @Expose({ name: 'Status' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'status', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    status?: Optional<string>;
    @Expose({ name: 'Nodes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'nodes', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    nodes?: Optional<Array<string>>;
    @Expose({ name: 'AvailabilityLocationOutage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'availabilityLocationOutage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    availabilityLocationOutage?: Optional<boolean>;
    @Expose({ name: 'AvailabilityNodeOutage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'availabilityNodeOutage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    availabilityNodeOutage?: Optional<boolean>;
    @Expose({ name: 'LocationNodeOutageDelayInMinutes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'locationNodeOutageDelayInMinutes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    locationNodeOutageDelayInMinutes?: Optional<integer>;
    @Expose({ name: 'AvailabilityNotificationsEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'availabilityNotificationsEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    availabilityNotificationsEnabled?: Optional<boolean>;
    @Expose({ name: 'AutoUpdateChromium' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'autoUpdateChromium', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    autoUpdateChromium?: Optional<boolean>;
    @Expose({ name: 'Location' })
    @Type(() => SyntheticLocation)
    location?: Optional<SyntheticLocation>;

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

export class SyntheticLocation extends BaseModel {
    ['constructor']: typeof SyntheticLocation;


    @Expose({ name: 'EntityId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'entityId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    entityId?: Optional<string>;
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
    @Expose({ name: 'CountryCode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'countryCode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    countryCode?: Optional<string>;
    @Expose({ name: 'RegionCode' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'regionCode', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    regionCode?: Optional<string>;
    @Expose({ name: 'City' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'city', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    city?: Optional<string>;
    @Expose({ name: 'Latitude' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'latitude', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    latitude?: Optional<number>;
    @Expose({ name: 'Longitude' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'longitude', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    longitude?: Optional<number>;
    @Expose({ name: 'Status' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'status', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    status?: Optional<string>;
    @Expose({ name: 'Nodes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'nodes', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    nodes?: Optional<Array<string>>;
    @Expose({ name: 'AvailabilityLocationOutage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'availabilityLocationOutage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    availabilityLocationOutage?: Optional<boolean>;
    @Expose({ name: 'AvailabilityNodeOutage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'availabilityNodeOutage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    availabilityNodeOutage?: Optional<boolean>;
    @Expose({ name: 'LocationNodeOutageDelayInMinutes' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'locationNodeOutageDelayInMinutes', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    locationNodeOutageDelayInMinutes?: Optional<integer>;
    @Expose({ name: 'AvailabilityNotificationsEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'availabilityNotificationsEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    availabilityNotificationsEnabled?: Optional<boolean>;
    @Expose({ name: 'AutoUpdateChromium' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'autoUpdateChromium', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    autoUpdateChromium?: Optional<boolean>;

}

