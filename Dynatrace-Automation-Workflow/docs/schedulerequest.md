# Dynatrace::Automation::Workflow ScheduleRequest

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#filterparameters" title="FilterParameters">FilterParameters</a>" : <i><a href="schedulefilterparameters.md">ScheduleFilterParameters</a></i>,
    "<a href="#input" title="Input">Input</a>" : <i>Map</i>,
    "<a href="#isactive" title="IsActive">IsActive</a>" : <i>Boolean</i>,
    "<a href="#nextexecution" title="NextExecution">NextExecution</a>" : <i>String</i>,
    "<a href="#rule" title="Rule">Rule</a>" : <i>String</i>,
    "<a href="#timezone" title="Timezone">Timezone</a>" : <i>String</i>,
    "<a href="#trigger" title="Trigger">Trigger</a>" : <i><a href="crontrigger.md">CronTrigger</a>, <a href="intervaltrigger.md">IntervalTrigger</a>, <a href="timetrigger.md">TimeTrigger</a></i>
}
</pre>

### YAML

<pre>
<a href="#filterparameters" title="FilterParameters">FilterParameters</a>: <i><a href="schedulefilterparameters.md">ScheduleFilterParameters</a></i>
<a href="#input" title="Input">Input</a>: <i>Map</i>
<a href="#isactive" title="IsActive">IsActive</a>: <i>Boolean</i>
<a href="#nextexecution" title="NextExecution">NextExecution</a>: <i>String</i>
<a href="#rule" title="Rule">Rule</a>: <i>String</i>
<a href="#timezone" title="Timezone">Timezone</a>: <i>String</i>
<a href="#trigger" title="Trigger">Trigger</a>: <i><a href="crontrigger.md">CronTrigger</a>, <a href="intervaltrigger.md">IntervalTrigger</a>, <a href="timetrigger.md">TimeTrigger</a></i>
</pre>

## Properties

#### FilterParameters

_Required_: No

_Type_: <a href="schedulefilterparameters.md">ScheduleFilterParameters</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Input

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsActive

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NextExecution

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Rule

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Timezone

Timezone identifier, e.g. Europe/London

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Trigger

_Required_: Yes

_Type_: <a href="crontrigger.md">CronTrigger</a>, <a href="intervaltrigger.md">IntervalTrigger</a>, <a href="timetrigger.md">TimeTrigger</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

