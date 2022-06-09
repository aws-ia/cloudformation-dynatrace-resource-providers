# Dynatrace::Environment::SyntheticMonitor AnomalyDetectionPolicy

The anomaly detection configuration.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#outagehandling" title="OutageHandling">OutageHandling</a>" : <i><a href="outagehandlingpolicy.md">OutageHandlingPolicy</a></i>,
    "<a href="#loadingtimethresholds" title="LoadingTimeThresholds">LoadingTimeThresholds</a>" : <i><a href="loadingtimethresholdspolicy.md">LoadingTimeThresholdsPolicy</a></i>
}
</pre>

### YAML

<pre>
<a href="#outagehandling" title="OutageHandling">OutageHandling</a>: <i><a href="outagehandlingpolicy.md">OutageHandlingPolicy</a></i>
<a href="#loadingtimethresholds" title="LoadingTimeThresholds">LoadingTimeThresholds</a>: <i><a href="loadingtimethresholdspolicy.md">LoadingTimeThresholdsPolicy</a></i>
</pre>

## Properties

#### OutageHandling

Outage handling configuration.

_Required_: Yes

_Type_: <a href="outagehandlingpolicy.md">OutageHandlingPolicy</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LoadingTimeThresholds

Performance thresholds configuration.

_Required_: Yes

_Type_: <a href="loadingtimethresholdspolicy.md">LoadingTimeThresholdsPolicy</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

