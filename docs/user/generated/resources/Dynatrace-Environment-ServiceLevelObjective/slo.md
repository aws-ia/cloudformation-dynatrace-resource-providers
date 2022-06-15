# Dynatrace::Environment::ServiceLevelObjective Slo

Parameters of a service-level objective (SLO).

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
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
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#burnratemetrickey" title="BurnRateMetricKey">BurnRateMetricKey</a>" : <i>String</i>,
    "<a href="#numeratorvalue" title="NumeratorValue">NumeratorValue</a>" : <i>Double</i>,
    "<a href="#denominatorvalue" title="DenominatorValue">DenominatorValue</a>" : <i>Double</i>,
    "<a href="#problemfilter" title="ProblemFilter">ProblemFilter</a>" : <i>String</i>,
    "<a href="#relatedopenproblems" title="RelatedOpenProblems">RelatedOpenProblems</a>" : <i>Integer</i>,
    "<a href="#relatedtotalproblems" title="RelatedTotalProblems">RelatedTotalProblems</a>" : <i>Integer</i>,
    "<a href="#hasaccess" title="HasAccess">HasAccess</a>" : <i>Boolean</i>,
    "<a href="#evaluatedpercentage" title="EvaluatedPercentage">EvaluatedPercentage</a>" : <i>Double</i>,
    "<a href="#errorbudget" title="ErrorBudget">ErrorBudget</a>" : <i>Double</i>,
    "<a href="#metrickey" title="MetricKey">MetricKey</a>" : <i>String</i>,
    "<a href="#status" title="Status">Status</a>" : <i>String</i>,
    "<a href="#error" title="Error">Error</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
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
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#burnratemetrickey" title="BurnRateMetricKey">BurnRateMetricKey</a>: <i>String</i>
<a href="#numeratorvalue" title="NumeratorValue">NumeratorValue</a>: <i>Double</i>
<a href="#denominatorvalue" title="DenominatorValue">DenominatorValue</a>: <i>Double</i>
<a href="#problemfilter" title="ProblemFilter">ProblemFilter</a>: <i>String</i>
<a href="#relatedopenproblems" title="RelatedOpenProblems">RelatedOpenProblems</a>: <i>Integer</i>
<a href="#relatedtotalproblems" title="RelatedTotalProblems">RelatedTotalProblems</a>: <i>Integer</i>
<a href="#hasaccess" title="HasAccess">HasAccess</a>: <i>Boolean</i>
<a href="#evaluatedpercentage" title="EvaluatedPercentage">EvaluatedPercentage</a>: <i>Double</i>
<a href="#errorbudget" title="ErrorBudget">ErrorBudget</a>: <i>Double</i>
<a href="#metrickey" title="MetricKey">MetricKey</a>: <i>String</i>
<a href="#status" title="Status">Status</a>: <i>String</i>
<a href="#error" title="Error">Error</a>: <i>String</i>
</pre>

## Properties

#### Enabled

The SLO is enabled (true) or disabled (false).

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the SLO.

_Required_: No

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

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MetricExpression

The percentage-based metric expression for the calculation of the SLO.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EvaluationType

The evaluation type of the SLO.

_Required_: No

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

_Required_: No

_Type_: <a href="errorbudgetburnrate.md">ErrorBudgetBurnRate</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Timeframe

The timeframe for the SLO evaluation. Use the syntax of the global timeframe selector.

_Required_: No

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

#### Id

Id of the SLO.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BurnRateMetricKey

The error budget burn rate key for a metric expression.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NumeratorValue

DEPRECATED

The numerator value used to evaluate the SLO when useRateMetric is set to false.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DenominatorValue

DEPRECATED

The denominator value used to evaluate the SLO when useRateMetric is set to false.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ProblemFilter

The entity filter for fetching the number of problems related to an SLO. Auto-generated in case no filter has been added to the SLO.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RelatedOpenProblems

Number of OPEN problems related to the SLO.

Has the value of -1 if there's an error with fetching SLO related problems.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RelatedTotalProblems

Total number of problems related to the SLO.

Has the value of -1 if there's an error with fetching SLO related problems.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### HasAccess

The SLO is accessible through the settings if hasAccess is true.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EvaluatedPercentage

The calculated value of the SLO. Has the value of the evaluated SLO or the value of -1:

    If there is an error with the SLO calculation; in that case check the value of the error property.
    If the evaluate parameter has not been set to true; in that case the error property will contain no error.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ErrorBudget

The error budget of the calculated SLO.

The error budget is the difference between the calculated and target values. A positive number means all is good; a negative number means trouble.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### MetricKey

The key for a metric expression. Once created, metric keys can't be changed.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Status

The status of the calculated SLO.

_Required_: No

_Type_: String

_Allowed Values_: <code>FAILURE</code> | <code>SUCCESS</code> | <code>WARNING</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Error

The error of the SLO calculation.

If the value differs from NONE there's something wrong with the SLO calculation.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

