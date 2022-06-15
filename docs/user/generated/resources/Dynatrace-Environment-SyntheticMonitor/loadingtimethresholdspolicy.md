# Dynatrace::Environment::SyntheticMonitor LoadingTimeThresholdsPolicy

Performance thresholds configuration.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
    "<a href="#thresholds" title="Thresholds">Thresholds</a>" : <i>[ <a href="loadingtimethreshold.md">LoadingTimeThreshold</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
<a href="#thresholds" title="Thresholds">Thresholds</a>: <i>
      - <a href="loadingtimethreshold.md">LoadingTimeThreshold</a></i>
</pre>

## Properties

#### Enabled

Performance threshold is enabled (true) or disabled (false).

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Thresholds

The list of performance threshold rules.

_Required_: Yes

_Type_: List of <a href="loadingtimethreshold.md">LoadingTimeThreshold</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

