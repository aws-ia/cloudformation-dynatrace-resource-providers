// This is a generated file. Modifications will be overwritten.
import { BaseModel, Dict, integer, Integer, Optional, transformValue } from '@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib';
import { Exclude, Expose, Type, Transform } from 'class-transformer';

export class ResourceModel extends BaseModel {
    ['constructor']: typeof ResourceModel;

    @Exclude()
    public static readonly TYPE_NAME: string = 'Dynatrace::Environment::ServiceLevelObjective';

    @Exclude()
    protected readonly IDENTIFIER_KEY_ID: string = '/properties/Id';

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
    @Expose({ name: 'MetricName' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'metricName', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metricName?: Optional<string>;
    @Expose({ name: 'MetricExpression' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'metricExpression', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metricExpression?: Optional<string>;
    @Expose({ name: 'EvaluationType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'evaluationType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    evaluationType?: Optional<string>;
    @Expose({ name: 'Filter' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'filter', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    filter?: Optional<string>;
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
    @Expose({ name: 'ErrorBudgetBurnRate' })
    @Type(() => ErrorBudgetBurnRate)
    errorBudgetBurnRate?: Optional<ErrorBudgetBurnRate>;
    @Expose({ name: 'Timeframe' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'timeframe', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    timeframe?: Optional<string>;
    @Expose({ name: 'UserRateMetric' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'userRateMetric', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    userRateMetric?: Optional<boolean>;
    @Expose({ name: 'MetricRate' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'metricRate', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metricRate?: Optional<string>;
    @Expose({ name: 'MetricNumerator' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'metricNumerator', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metricNumerator?: Optional<string>;
    @Expose({ name: 'MetricDenominator' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'metricDenominator', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metricDenominator?: Optional<string>;
    @Expose({ name: 'Id' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'id', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    id?: Optional<string>;
    @Expose({ name: 'Enabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'enabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    enabled?: Optional<boolean>;
    @Expose({ name: 'BurnRateMetricKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'burnRateMetricKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    burnRateMetricKey?: Optional<string>;
    @Expose({ name: 'NumeratorValue' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'numeratorValue', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    numeratorValue?: Optional<number>;
    @Expose({ name: 'DenominatorValue' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'denominatorValue', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    denominatorValue?: Optional<number>;
    @Expose({ name: 'ProblemFilter' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'problemFilter', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    problemFilter?: Optional<string>;
    @Expose({ name: 'RelatedOpenProblems' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'relatedOpenProblems', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    relatedOpenProblems?: Optional<integer>;
    @Expose({ name: 'RelatedTotalProblems' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Integer, 'relatedTotalProblems', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    relatedTotalProblems?: Optional<integer>;
    @Expose({ name: 'HasAccess' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'hasAccess', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    hasAccess?: Optional<boolean>;
    @Expose({ name: 'EvaluatedPercentage' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'evaluatedPercentage', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    evaluatedPercentage?: Optional<number>;
    @Expose({ name: 'ErrorBudget' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'errorBudget', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    errorBudget?: Optional<number>;
    @Expose({ name: 'MetricKey' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'metricKey', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    metricKey?: Optional<string>;
    @Expose({ name: 'Status' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'status', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    status?: Optional<string>;
    @Expose({ name: 'Error' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'error', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    error?: Optional<string>;

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

export class ErrorBudgetBurnRate extends BaseModel {
    ['constructor']: typeof ErrorBudgetBurnRate;


    @Expose({ name: 'FastBurnThreshold' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'fastBurnThreshold', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    fastBurnThreshold?: Optional<number>;
    @Expose({ name: 'BurnRateVisualizationEnabled' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Boolean, 'burnRateVisualizationEnabled', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    burnRateVisualizationEnabled?: Optional<boolean>;
    @Expose({ name: 'BurnRateValue' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'burnRateValue', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    burnRateValue?: Optional<number>;
    @Expose({ name: 'BurnRateType' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(String, 'burnRateType', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    burnRateType?: Optional<string>;
    @Expose({ name: 'SloValue' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'sloValue', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    sloValue?: Optional<number>;
    @Expose({ name: 'EstimatedTimeToConsumeErrorBudget' })
    @Transform(
        (value: any, obj: any) =>
            transformValue(Number, 'estimatedTimeToConsumeErrorBudget', value, obj, []),
        {
            toClassOnly: true,
        }
    )
    estimatedTimeToConsumeErrorBudget?: Optional<number>;

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

