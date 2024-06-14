# Dynatrace::Automation::Workflow ThrottleRequest

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#islimithit" title="IsLimitHit">IsLimitHit</a>" : <i>Boolean</i>,
    "<a href="#limitevents" title="LimitEvents">LimitEvents</a>" : <i>[ <a href="throttlelimitevent.md">ThrottleLimitEvent</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#islimithit" title="IsLimitHit">IsLimitHit</a>: <i>Boolean</i>
<a href="#limitevents" title="LimitEvents">LimitEvents</a>: <i>
      - <a href="throttlelimitevent.md">ThrottleLimitEvent</a></i>
</pre>

## Properties

#### IsLimitHit

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LimitEvents

_Required_: No

_Type_: List of <a href="throttlelimitevent.md">ThrottleLimitEvent</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

