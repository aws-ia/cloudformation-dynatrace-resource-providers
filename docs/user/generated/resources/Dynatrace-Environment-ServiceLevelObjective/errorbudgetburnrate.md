# Dynatrace::Environment::ServiceLevelObjective ErrorBudgetBurnRate

Error budget burn rate configuration of a service-level objective (SLO).

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#fastburnthreshold" title="FastBurnThreshold">FastBurnThreshold</a>" : <i>Double</i>,
    "<a href="#burnratevisualizationenabled" title="BurnRateVisualizationEnabled">BurnRateVisualizationEnabled</a>" : <i>Boolean</i>,
    "<a href="#burnratevalue" title="BurnRateValue">BurnRateValue</a>" : <i>Double</i>,
    "<a href="#burnratetype" title="BurnRateType">BurnRateType</a>" : <i>String</i>,
    "<a href="#slovalue" title="SloValue">SloValue</a>" : <i>Double</i>,
    "<a href="#estimatedtimetoconsumeerrorbudget" title="EstimatedTimeToConsumeErrorBudget">EstimatedTimeToConsumeErrorBudget</a>" : <i>Double</i>
}
</pre>

### YAML

<pre>
<a href="#fastburnthreshold" title="FastBurnThreshold">FastBurnThreshold</a>: <i>Double</i>
<a href="#burnratevisualizationenabled" title="BurnRateVisualizationEnabled">BurnRateVisualizationEnabled</a>: <i>Boolean</i>
<a href="#burnratevalue" title="BurnRateValue">BurnRateValue</a>: <i>Double</i>
<a href="#burnratetype" title="BurnRateType">BurnRateType</a>: <i>String</i>
<a href="#slovalue" title="SloValue">SloValue</a>: <i>Double</i>
<a href="#estimatedtimetoconsumeerrorbudget" title="EstimatedTimeToConsumeErrorBudget">EstimatedTimeToConsumeErrorBudget</a>: <i>Double</i>
</pre>

## Properties

#### FastBurnThreshold

The threshold between a slow and a fast burn rate.

_Required_: Yes

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BurnRateVisualizationEnabled

The error budget burn rate visualization is enabled (true) or disabled (false).

In case of false, no calculated values will be present here.

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BurnRateValue

The burn rate of the SLO, calculated for the last hour.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BurnRateType

The calculated burn rate type.

Has a value of 'FAST', 'SLOW' or 'NONE'.

_Required_: No

_Type_: String

_Allowed Values_: <code>FAST</code> | <code>SLOW</code> | <code>NONE</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SloValue

The calculated value of the SLO for the timeframe chosen for the burn rate calculation.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EstimatedTimeToConsumeErrorBudget

The estimated time left to consume the error budget in hours.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

