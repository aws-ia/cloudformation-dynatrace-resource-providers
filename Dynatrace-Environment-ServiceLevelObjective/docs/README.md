# Dynatrace::Environment::ServiceLevelObjective

Manage a Service Level Objective in Dynatrace.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Dynatrace::Environment::ServiceLevelObjective",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#metricname" title="MetricName">MetricName</a>" : <i>String</i>,
        "<a href="#metricexpression" title="MetricExpression">MetricExpression</a>" : <i>String</i>,
        "<a href="#evaluationtype" title="EvaluationType">EvaluationType</a>" : <i>String</i>,
        "<a href="#filter" title="Filter">Filter</a>" : <i>String</i>,
        "<a href="#target" title="Target">Target</a>" : <i>Double</i>,
        "<a href="#warning" title="Warning">Warning</a>" : <i>Double</i>,
        "<a href="#errorbudgetburnrate" title="ErrorBudgetBurnRate">ErrorBudgetBurnRate</a>" : <i><a href="errorbudgetburnrate.md">ErrorBudgetBurnRate</a></i>,
        "<a href="#timeframe" title="Timeframe">Timeframe</a>" : <i>String</i>,
        "<a href="#userratemetric" title="UserRateMetric">UserRateMetric</a>" : <i>Boolean</i>,
        "<a href="#metricrate" title="MetricRate">MetricRate</a>" : <i>String</i>,
        "<a href="#metricnumerator" title="MetricNumerator">MetricNumerator</a>" : <i>String</i>,
        "<a href="#metricdenominator" title="MetricDenominator">MetricDenominator</a>" : <i>String</i>,
    }
}
</pre>

### YAML

<pre>
Type: Dynatrace::Environment::ServiceLevelObjective
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#metricname" title="MetricName">MetricName</a>: <i>String</i>
    <a href="#metricexpression" title="MetricExpression">MetricExpression</a>: <i>String</i>
    <a href="#evaluationtype" title="EvaluationType">EvaluationType</a>: <i>String</i>
    <a href="#filter" title="Filter">Filter</a>: <i>String</i>
    <a href="#target" title="Target">Target</a>: <i>Double</i>
    <a href="#warning" title="Warning">Warning</a>: <i>Double</i>
    <a href="#errorbudgetburnrate" title="ErrorBudgetBurnRate">ErrorBudgetBurnRate</a>: <i><a href="errorbudgetburnrate.md">ErrorBudgetBurnRate</a></i>
    <a href="#timeframe" title="Timeframe">Timeframe</a>: <i>String</i>
    <a href="#userratemetric" title="UserRateMetric">UserRateMetric</a>: <i>Boolean</i>
    <a href="#metricrate" title="MetricRate">MetricRate</a>: <i>String</i>
    <a href="#metricnumerator" title="MetricNumerator">MetricNumerator</a>: <i>String</i>
    <a href="#metricdenominator" title="MetricDenominator">MetricDenominator</a>: <i>String</i>
</pre>

## Properties

#### Name

The name of the SLO.

_Required_: Yes

_Type_: String

_Minimum_: <code>1</code>

_Maximum_: <code>200</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

The description of the SLO.

_Required_: No

_Type_: String

_Minimum_: <code>1</code>

_Maximum_: <code>250</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MetricName

The name for a metric expression.

_Required_: No

_Type_: String

_Pattern_: <code>^[a-z][a-z0-9\_]*$</code>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### MetricExpression

The percentage-based metric expression for the calculation of the SLO.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EvaluationType

The evaluation type of the SLO.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>AGGREGATE</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Filter

The entity filter for the SLO evaluation. Use the syntax of entity selector (https://dt-url.net/entityselector).

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Target

The target value of the SLO.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Warning

The warning value of the SLO.

At warning state the SLO is still fulfilled but is getting close to failure.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ErrorBudgetBurnRate

Error budget burn rate configuration of a service-level objective (SLO).

_Required_: No

_Type_: <a href="errorbudgetburnrate.md">ErrorBudgetBurnRate</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Timeframe

The timeframe for the SLO evaluation. Use the syntax of the global timeframe selector.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### UserRateMetric

DEPRECATED

The type of the metric to use for SLO calculation:

    true: An existing percentage-based metric.
    false: A ratio of two metrics.

For a list of available metrics, see Built-in metric page or try the GET metrics API call.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MetricRate

DEPRECATED

The percentage-based metric for the calculation of the SLO.

Required when the useRateMetric is set to true.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MetricNumerator

DEPRECATED

The metric for the count of successes (the numerator in rate calculation).

Required when the useRateMetric is set to false.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MetricDenominator

DEPRECATED

The total count metric (the denominator in rate calculation).

Required when the useRateMetric is set to false.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Id of the SLO.

#### Slo

Parameters of a service-level objective (SLO).

