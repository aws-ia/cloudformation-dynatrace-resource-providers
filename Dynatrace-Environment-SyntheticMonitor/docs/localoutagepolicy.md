# Dynatrace::Environment::SyntheticMonitor LocalOutagePolicy

Local outage handling configuration.

Alert if affectedLocations of locations are unable to access the web application consecutiveRuns times consecutively.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#affectedlocations" title="AffectedLocations">AffectedLocations</a>" : <i>Integer</i>,
    "<a href="#consecutiveruns" title="ConsecutiveRuns">ConsecutiveRuns</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
<a href="#affectedlocations" title="AffectedLocations">AffectedLocations</a>: <i>Integer</i>
<a href="#consecutiveruns" title="ConsecutiveRuns">ConsecutiveRuns</a>: <i>Integer</i>
</pre>

## Properties

#### AffectedLocations

The number of affected locations to trigger an alert.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ConsecutiveRuns

The number of consecutive fails to trigger an alert.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

