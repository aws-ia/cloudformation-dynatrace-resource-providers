# Dynatrace::Automation::Workflow IntervalTrigger

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#betweenend" title="BetweenEnd">BetweenEnd</a>" : <i>String</i>,
    "<a href="#betweenstart" title="BetweenStart">BetweenStart</a>" : <i>String</i>,
    "<a href="#intervalminutes" title="IntervalMinutes">IntervalMinutes</a>" : <i>Integer</i>,
    "<a href="#type" title="Type">Type</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#betweenend" title="BetweenEnd">BetweenEnd</a>: <i>String</i>
<a href="#betweenstart" title="BetweenStart">BetweenStart</a>: <i>String</i>
<a href="#intervalminutes" title="IntervalMinutes">IntervalMinutes</a>: <i>Integer</i>
<a href="#type" title="Type">Type</a>: <i>String</i>
</pre>

## Properties

#### BetweenEnd

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### BetweenStart

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IntervalMinutes

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

_Required_: Yes

_Type_: String

_Allowed Values_: <code>interval</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

