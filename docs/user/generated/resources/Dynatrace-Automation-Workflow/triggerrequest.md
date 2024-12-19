# Dynatrace::Automation::Workflow TriggerRequest

Configures how executions of the workflows are getting triggered. If no trigger is specified it means the workflow is getting manually triggered

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#eventtrigger" title="EventTrigger">EventTrigger</a>" : <i><a href="eventtriggerrequest.md">EventTriggerRequest</a></i>,
    "<a href="#schedule" title="Schedule">Schedule</a>" : <i><a href="schedulerequest.md">ScheduleRequest</a></i>
}
</pre>

### YAML

<pre>
<a href="#eventtrigger" title="EventTrigger">EventTrigger</a>: <i><a href="eventtriggerrequest.md">EventTriggerRequest</a></i>
<a href="#schedule" title="Schedule">Schedule</a>: <i><a href="schedulerequest.md">ScheduleRequest</a></i>
</pre>

## Properties

#### EventTrigger

_Required_: No

_Type_: <a href="eventtriggerrequest.md">EventTriggerRequest</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Schedule

_Required_: No

_Type_: <a href="schedulerequest.md">ScheduleRequest</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

