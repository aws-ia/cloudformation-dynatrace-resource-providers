# Dynatrace::Automation::Workflow

The Workflows app is a powerful tool that lets you automatically act on monitoring data

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Dynatrace::Automation::Workflow",
    "Properties" : {
        "<a href="#actor" title="Actor">Actor</a>" : <i>String</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#isprivate" title="IsPrivate">IsPrivate</a>" : <i>Boolean</i>,
        "<a href="#owner" title="Owner">Owner</a>" : <i>String</i>,
        "<a href="#tasks" title="Tasks">Tasks</a>" : <i>[ <a href="task.md">Task</a>, ... ]</i>,
        "<a href="#throttle" title="Throttle">Throttle</a>" : <i><a href="throttlerequest.md">ThrottleRequest</a></i>,
        "<a href="#title" title="Title">Title</a>" : <i>String</i>,
        "<a href="#trigger" title="Trigger">Trigger</a>" : <i><a href="triggerrequest.md">TriggerRequest</a></i>
    }
}
</pre>

### YAML

<pre>
Type: Dynatrace::Automation::Workflow
Properties:
    <a href="#actor" title="Actor">Actor</a>: <i>String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#isprivate" title="IsPrivate">IsPrivate</a>: <i>Boolean</i>
    <a href="#owner" title="Owner">Owner</a>: <i>String</i>
    <a href="#tasks" title="Tasks">Tasks</a>: <i>
      - <a href="task.md">Task</a></i>
    <a href="#throttle" title="Throttle">Throttle</a>: <i><a href="throttlerequest.md">ThrottleRequest</a></i>
    <a href="#title" title="Title">Title</a>: <i>String</i>
    <a href="#trigger" title="Trigger">Trigger</a>: <i><a href="triggerrequest.md">TriggerRequest</a></i>
</pre>

## Properties

#### Actor

The user context the executions of the workflow will happen with

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

An optional description for the workflow

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsPrivate

Defines whether this workflow is private to the owner or not

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Owner

The ID of the owner of this workflow

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tasks

The tasks to run for every execution of this workflow

_Required_: Yes

_Type_: List of <a href="task.md">Task</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Throttle

_Required_: No

_Type_: <a href="throttlerequest.md">ThrottleRequest</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Title

The title / name of the workflow

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Trigger

Configures how executions of the workflows are getting triggered. If no trigger is specified it means the workflow is getting manually triggered

_Required_: No

_Type_: <a href="triggerrequest.md">TriggerRequest</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

The ID of this resource

#### OwnerType

Returns the <code>OwnerType</code> value.

#### SchemaVersion

Returns the <code>SchemaVersion</code> value.

