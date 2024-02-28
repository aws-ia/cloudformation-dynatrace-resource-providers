# Dynatrace::Automation::Workflow Task

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#action" title="Action">Action</a>" : <i>String</i>,
    "<a href="#active" title="Active">Active</a>" : <i>Boolean</i>,
    "<a href="#concurrency" title="Concurrency">Concurrency</a>" : <i>Integer</i>,
    "<a href="#condition" title="Condition">Condition</a>" : <i><a href="condition.md">Condition</a></i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#input" title="Input">Input</a>" : <i>Map</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#position" title="Position">Position</a>" : <i><a href="position.md">Position</a></i>,
    "<a href="#retry" title="Retry">Retry</a>" : <i><a href="retry.md">Retry</a></i>,
    "<a href="#timeout" title="Timeout">Timeout</a>" : <i>Integer</i>,
    "<a href="#withitems" title="WithItems">WithItems</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#action" title="Action">Action</a>: <i>String</i>
<a href="#active" title="Active">Active</a>: <i>Boolean</i>
<a href="#concurrency" title="Concurrency">Concurrency</a>: <i>Integer</i>
<a href="#condition" title="Condition">Condition</a>: <i><a href="condition.md">Condition</a></i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#input" title="Input">Input</a>: <i>Map</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#position" title="Position">Position</a>: <i><a href="position.md">Position</a></i>
<a href="#retry" title="Retry">Retry</a>: <i><a href="retry.md">Retry</a></i>
<a href="#timeout" title="Timeout">Timeout</a>: <i>Integer</i>
<a href="#withitems" title="WithItems">WithItems</a>: <i>String</i>
</pre>

## Properties

#### Action

Currently known and supported values are dynatrace.automations:http-function, dynatrace.automations:run-javascript and dynatrace.automations:execute-dql-query

_Required_: Yes

_Type_: String

_Allowed Values_: <code>dynatrace.automations:http-function</code> | <code>dynatrace.automations:run-javascript</code> | <code>dynatrace.automations:execute-dql-query</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Active

Specifies whether a task should be skipped as a no operation or not

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Concurrency

Required if 'WithItems' is specified. By default loops execute sequentially with concurrency set to 1. You can increase how often it runs in parallel

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Condition

_Required_: No

_Type_: <a href="condition.md">Condition</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

A description for this task

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Input

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the task

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Position

Layouting information about the task tile when visualized. If not specified Dynatrace will position the task tiles automatically

_Required_: No

_Type_: <a href="position.md">Position</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Retry

Configure whether to automatically rerun the task on failure. If not specified no retries will be attempted

_Required_: No

_Type_: <a href="retry.md">Retry</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Timeout

Specifies a default task timeout in seconds. 15 * 60 (15min) is used when not set.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### WithItems

Iterates over items in a list, allowing actions to be executed repeatedly. Example: Specifying item in [1, 2, 3] here will execute the task three times for the numbers 1, 2 and 3 - with the current number available for scripting using the expression {{ _.item }}

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

