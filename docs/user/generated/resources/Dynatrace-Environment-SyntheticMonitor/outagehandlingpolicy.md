# Dynatrace::Environment::SyntheticMonitor OutageHandlingPolicy

Outage handling configuration.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#globaloutage" title="GlobalOutage">GlobalOutage</a>" : <i>Boolean</i>,
    "<a href="#globaloutagepolicy" title="GlobalOutagePolicy">GlobalOutagePolicy</a>" : <i><a href="globaloutagepolicy.md">GlobalOutagePolicy</a></i>,
    "<a href="#localoutage" title="LocalOutage">LocalOutage</a>" : <i>Boolean</i>,
    "<a href="#localoutagepolicy" title="LocalOutagePolicy">LocalOutagePolicy</a>" : <i><a href="localoutagepolicy.md">LocalOutagePolicy</a></i>,
    "<a href="#retryonerror" title="RetryOnError">RetryOnError</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#globaloutage" title="GlobalOutage">GlobalOutage</a>: <i>Boolean</i>
<a href="#globaloutagepolicy" title="GlobalOutagePolicy">GlobalOutagePolicy</a>: <i><a href="globaloutagepolicy.md">GlobalOutagePolicy</a></i>
<a href="#localoutage" title="LocalOutage">LocalOutage</a>: <i>Boolean</i>
<a href="#localoutagepolicy" title="LocalOutagePolicy">LocalOutagePolicy</a>: <i><a href="localoutagepolicy.md">LocalOutagePolicy</a></i>
<a href="#retryonerror" title="RetryOnError">RetryOnError</a>: <i>Boolean</i>
</pre>

## Properties

#### GlobalOutage

When enabled (true), generate a problem and send an alert when the monitor is unavailable at all configured locations.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### GlobalOutagePolicy

Global outage handling configuration.

_Required_: No

_Type_: <a href="globaloutagepolicy.md">GlobalOutagePolicy</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LocalOutage

When enabled (true), generate a problem and send an alert when the monitor is unavailable for one or more consecutive runs at any location.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LocalOutagePolicy

Local outage handling configuration.

Alert if affectedLocations of locations are unable to access the web application consecutiveRuns times consecutively.

_Required_: No

_Type_: <a href="localoutagepolicy.md">LocalOutagePolicy</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RetryOnError

Schedule retry if browser monitor execution results in a fail. For HTTP monitors this property is ignored.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

