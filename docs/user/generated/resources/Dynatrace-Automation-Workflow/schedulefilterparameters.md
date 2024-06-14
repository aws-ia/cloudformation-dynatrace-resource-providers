# Dynatrace::Automation::Workflow ScheduleFilterParameters

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#count" title="Count">Count</a>" : <i>Integer</i>,
    "<a href="#earlieststart" title="EarliestStart">EarliestStart</a>" : <i>String</i>,
    "<a href="#earlieststarttime" title="EarliestStartTime">EarliestStartTime</a>" : <i>String</i>,
    "<a href="#excludedates" title="ExcludeDates">ExcludeDates</a>" : <i>[ String, ... ]</i>,
    "<a href="#includedates" title="IncludeDates">IncludeDates</a>" : <i>[ String, ... ]</i>,
    "<a href="#until" title="Until">Until</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#count" title="Count">Count</a>: <i>Integer</i>
<a href="#earlieststart" title="EarliestStart">EarliestStart</a>: <i>String</i>
<a href="#earlieststarttime" title="EarliestStartTime">EarliestStartTime</a>: <i>String</i>
<a href="#excludedates" title="ExcludeDates">ExcludeDates</a>: <i>
      - String</i>
<a href="#includedates" title="IncludeDates">IncludeDates</a>: <i>
      - String</i>
<a href="#until" title="Until">Until</a>: <i>String</i>
</pre>

## Properties

#### Count

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EarliestStart

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EarliestStartTime

_Required_: No

_Type_: String

_Pattern_: <code>\d{2}:\d{2}:\d{2}</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ExcludeDates

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IncludeDates

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Until

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

