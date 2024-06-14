# Dynatrace::Automation::Workflow Retry

Configure whether to automatically rerun the task on failure. If not specified no retries will be attempted

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#count" title="Count">Count</a>" : <i>String</i>,
    "<a href="#delay" title="Delay">Delay</a>" : <i>String</i>,
    "<a href="#failedloopiterationsonly" title="FailedLoopIterationsOnly">FailedLoopIterationsOnly</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#count" title="Count">Count</a>: <i>String</i>
<a href="#delay" title="Delay">Delay</a>: <i>String</i>
<a href="#failedloopiterationsonly" title="FailedLoopIterationsOnly">FailedLoopIterationsOnly</a>: <i>Boolean</i>
</pre>

## Properties

#### Count

Specifies a maximum number of times that a task can be repeated in case it fails on execution. You can specify either a number between 1 and 99 here or use an expression

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Delay

Specifies a delay in seconds between subsequent task retries. You can specify either a number between 1 and 3600 here or an expression ({{...}})

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FailedLoopIterationsOnly

Specifies whether retrying the failed iterations or the whole loop

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

