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

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

Id of the SLO.

#### Enabled

The SLO is enabled (true) or disabled (false).

#### BurnRateMetricKey

The error budget burn rate key for a metric expression.

#### NumeratorValue

Returns the <code>NumeratorValue</code> value.

#### DenominatorValue

Returns the <code>DenominatorValue</code> value.

#### ProblemFilter

The entity filter for fetching the number of problems related to an SLO. Auto-generated in case no filter has been added to the SLO.

#### RelatedOpenProblems

Number of OPEN problems related to the SLO.

Has the value of -1 if there's an error with fetching SLO related problems.

#### RelatedTotalProblems

Total number of problems related to the SLO.

Has the value of -1 if there's an error with fetching SLO related problems.

#### HasAccess

The SLO is accessible through the settings if hasAccess is true.

#### EvaluatedPercentage

The calculated value of the SLO. Has the value of the evaluated SLO or the value of -1:

    If there is an error with the SLO calculation; in that case check the value of the error property.
    If the evaluate parameter has not been set to true; in that case the error property will contain no error.

#### ErrorBudget

The error budget of the calculated SLO.

The error budget is the difference between the calculated and target values. A positive number means all is good; a negative number means trouble.

#### MetricKey

The key for a metric expression. Once created, metric keys can't be changed.

#### Status

The status of the calculated SLO.

#### Error

The error of the SLO calculation.

If the value differs from NONE there's something wrong with the SLO calculation.

