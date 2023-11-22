# Dynatrace::Environment::SyntheticMonitor Script

The script of a browser (https://dt-url.net/9c103rda) or HTTP monitor.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#version" title="Version">Version</a>" : <i>String</i>,
    "<a href="#requests" title="Requests">Requests</a>" : <i>[ <a href="requestsinput.md">RequestsInput</a>, ... ]</i>,
    "<a href="#configuration" title="Configuration">Configuration</a>" : <i><a href="scriptconfig.md">ScriptConfig</a></i>,
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#events" title="Events">Events</a>" : <i>[ <a href="eventsinput.md">EventsInput</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#version" title="Version">Version</a>: <i>String</i>
<a href="#requests" title="Requests">Requests</a>: <i>
      - <a href="requestsinput.md">RequestsInput</a></i>
<a href="#configuration" title="Configuration">Configuration</a>: <i><a href="scriptconfig.md">ScriptConfig</a></i>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#events" title="Events">Events</a>: <i>
      - <a href="eventsinput.md">EventsInput</a></i>
</pre>

## Properties

#### Version

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Requests

A list of HTTP requests to be performed by the monitor, applicable to 'HTTP' type scripts.

_Required_: No

_Type_: List of <a href="requestsinput.md">RequestsInput</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Configuration

Contains the setup of a browser monitor.

_Required_: No

_Type_: <a href="scriptconfig.md">ScriptConfig</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

The type of monitor, applicable to 'Browser' type scripts.

_Required_: No

_Type_: String

_Allowed Values_: <code>clickpath</code> | <code>availability</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Events

Steps of the clickpath - the first step must always be of the navigate type, applicable to 'Browser' type scripts with 'clickpath' type.

_Required_: No

_Type_: List of <a href="eventsinput.md">EventsInput</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

