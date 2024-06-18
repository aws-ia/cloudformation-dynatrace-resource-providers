// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Dynatrace::Automation::SiteReliabilityGuardian';

    @Exclude()
    protected readonly IDENTIFIER_KEY_OBJECTID: string = '/properties/ObjectId';

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
    @Expose({ name: 'Tags' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'tags', value, obj, [Set]),
        {
            toClassOnly: true,
        }
    )
    tags?: Optional<Set<string>>;
    @Expose({ name: 'Variables' })
    @Type(() => Variable)
    variables?: Optional<Array<Variable>>;
    @Expose({ name: 'Objectives' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Object, 'objectives', value, obj, [Array]),
        {
            toClassOnly: true,
        }
    )
    objectives?: Optional<Array<object>>;
    @Expose({ name: 'ObjectId' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'objectId', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    objectId?: Optional<string>;

    @Exclude()
    public getPrimaryIdentifier(): Dict {
        const identifier: Dict = {};
        if (this.objectId != null) {
            identifier[this.IDENTIFIER_KEY_OBJECTID] = this.objectId;
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

export class Variable extends BaseModel {
    ['constructor']: typeof Variable;


    @Expose({ name: 'Name' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'name', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    name?: Optional<string>;
    @Expose({ name: 'Definition' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'definition', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    definition?: Optional<string>;

}

export class DqlObjective extends BaseModel {
    ['constructor']: typeof DqlObjective;


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
    @Expose({ name: 'ObjectiveType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'objectiveType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    objectiveType?: Optional<string>;
    @Expose({ name: 'ComparisonOperator' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comparisonOperator', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comparisonOperator?: Optional<string>;
    @Expose({ name: 'DqlQuery' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'dqlQuery', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    dqlQuery?: Optional<string>;
    @Expose({ name: 'Target' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'target', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    target?: Optional<number>;
    @Expose({ name: 'Warning' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'warning', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    warning?: Optional<number>;

}

export class SloObjective extends BaseModel {
    ['constructor']: typeof SloObjective;


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
    @Expose({ name: 'ObjectiveType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'objectiveType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    objectiveType?: Optional<string>;
    @Expose({ name: 'ComparisonOperator' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'comparisonOperator', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    comparisonOperator?: Optional<string>;
    @Expose({ name: 'ReferenceSlo' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'referenceSlo', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    referenceSlo?: Optional<string>;

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

