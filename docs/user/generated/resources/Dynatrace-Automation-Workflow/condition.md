# Dynatrace::Automation::Workflow Condition

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#custom" title="Custom">Custom</a>" : <i>String</i>,
    "<a href="#else" title="Else">Else</a>" : <i>String</i>,
    "<a href="#states" title="States">States</a>" : <i>Map</i>
}
</pre>

### YAML

<pre>
<a href="#custom" title="Custom">Custom</a>: <i>String</i>
<a href="#else" title="Else">Else</a>: <i>String</i>
<a href="#states" title="States">States</a>: <i>Map</i>
</pre>

## Properties

#### Custom

A custom condition that needs to be met for the current task to get executed

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Else

Possible values are SKIP and STOP

_Required_: No

_Type_: String

_Allowed Values_: <code>SKIP</code> | <code>STOP</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### States

key/value pairs where the key is the name of another task and the value the status it needs to be for the current task to get executed. Possible values are SUCCESS, ERROR, ANY, OK (Success or Skipped) and NOK (Error or Cancelled)

_Required_: Yes

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

