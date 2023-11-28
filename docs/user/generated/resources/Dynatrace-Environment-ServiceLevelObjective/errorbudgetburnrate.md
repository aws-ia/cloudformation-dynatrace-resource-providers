# Dynatrace::Environment::ServiceLevelObjective ErrorBudgetBurnRate

Error budget burn rate configuration of a service-level objective (SLO).

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#fastburnthreshold" title="FastBurnThreshold">FastBurnThreshold</a>" : <i>Double</i>,
    "<a href="#burnratevisualizationenabled" title="BurnRateVisualizationEnabled">BurnRateVisualizationEnabled</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#fastburnthreshold" title="FastBurnThreshold">FastBurnThreshold</a>: <i>Double</i>
<a href="#burnratevisualizationenabled" title="BurnRateVisualizationEnabled">BurnRateVisualizationEnabled</a>: <i>Boolean</i>
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

