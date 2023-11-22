# Dynatrace::Environment::SyntheticMonitor ValidationType

Contains the validation rule for an event or waiting rule.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#match" title="Match">Match</a>" : <i>String</i>,
    "<a href="#isregex" title="IsRegex">IsRegex</a>" : <i>Boolean</i>,
    "<a href="#failiffound" title="FailIfFound">FailIfFound</a>" : <i>Boolean</i>,
    "<a href="#target" title="Target">Target</a>" : <i><a href="targettype.md">TargetType</a></i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#match" title="Match">Match</a>: <i>String</i>
<a href="#isregex" title="IsRegex">IsRegex</a>: <i>Boolean</i>
<a href="#failiffound" title="FailIfFound">FailIfFound</a>: <i>Boolean</i>
<a href="#target" title="Target">Target</a>: <i><a href="targettype.md">TargetType</a></i>
</pre>

## Properties

#### Type

The goal of the validation.

_Required_: No

_Type_: String

_Allowed Values_: <code>content_match</code> | <code>element_match</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Match

The content to look for on the page.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### IsRegex

Defines whether match is a plain text (false) or regular expression (true).

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FailIfFound

The condition of the validation: false to succeed if element/content found, true to fail if found.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Target

Contains the target tab or element of the event.

_Required_: No

_Type_: <a href="targettype.md">TargetType</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

