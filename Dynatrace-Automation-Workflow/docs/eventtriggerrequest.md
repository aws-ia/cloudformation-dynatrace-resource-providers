# Dynatrace::Automation::Workflow EventTriggerRequest

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#isactive" title="IsActive">IsActive</a>" : <i>Boolean</i>,
    "<a href="#triggerconfiguration" title="TriggerConfiguration">TriggerConfiguration</a>" : <i><a href="daviseventtrigger.md">DavisEventTrigger</a>, <a href="davisproblemtrigger.md">DavisProblemTrigger</a>, <a href="eventtrigger.md">EventTrigger</a></i>
}
</pre>

### YAML

<pre>
<a href="#isactive" title="IsActive">IsActive</a>: <i>Boolean</i>
<a href="#triggerconfiguration" title="TriggerConfiguration">TriggerConfiguration</a>: <i><a href="daviseventtrigger.md">DavisEventTrigger</a>, <a href="davisproblemtrigger.md">DavisProblemTrigger</a>, <a href="eventtrigger.md">EventTrigger</a></i>
</pre>

## Properties

#### IsActive

If specified the workflow is getting triggered based on a schedule

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TriggerConfiguration

_Required_: No

_Type_: <a href="daviseventtrigger.md">DavisEventTrigger</a>, <a href="davisproblemtrigger.md">DavisProblemTrigger</a>, <a href="eventtrigger.md">EventTrigger</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

