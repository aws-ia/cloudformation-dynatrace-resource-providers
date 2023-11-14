# Dynatrace::Environment::SyntheticMonitor LoadingTimeThreshold

The performance threshold rule.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#valuems" title="ValueMs">ValueMs</a>" : <i>Integer</i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#valuems" title="ValueMs">ValueMs</a>: <i>Integer</i>
</pre>

## Properties

#### Type

The type of the threshold: total loading time or action loading time.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>ACTION</code> | <code>TOTAL</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ValueMs

Notify if monitor takes longer than X milliseconds to load.

_Required_: Yes

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

