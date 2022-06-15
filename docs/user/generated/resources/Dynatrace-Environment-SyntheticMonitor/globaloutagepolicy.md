# Dynatrace::Environment::SyntheticMonitor GlobalOutagePolicy

Global outage handling configuration.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#consecutiveruns" title="ConsecutiveRuns">ConsecutiveRuns</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
<a href="#consecutiveruns" title="ConsecutiveRuns">ConsecutiveRuns</a>: <i>Integer</i>
</pre>

## Properties

#### ConsecutiveRuns

Alert if all locations are unable to access the web application X times consecutively.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

