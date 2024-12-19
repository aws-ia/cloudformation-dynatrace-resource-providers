# Dynatrace::Environment::SyntheticMonitor EventsInput

Steps of the clickpath - the first step must always be of the navigate type.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#url" title="Url">Url</a>" : <i>String</i>,
    "<a href="#wait" title="Wait">Wait</a>" : <i><a href="eventsinput.md">EventsInput</a></i>,
    "<a href="#validate" title="Validate">Validate</a>" : <i>[ <a href="validationtype.md">ValidationType</a>, ... ]</i>,
    "<a href="#target" title="Target">Target</a>" : <i><a href="targettype.md">TargetType</a></i>,
    "<a href="#authentication" title="Authentication">Authentication</a>" : <i><a href="eventsinput.md">EventsInput</a></i>,
    "<a href="#button" title="Button">Button</a>" : <i>Double</i>,
    "<a href="#javascript" title="JavaScript">JavaScript</a>" : <i>String</i>,
    "<a href="#selections" title="Selections">Selections</a>" : <i>[ <a href="listoptions.md">ListOptions</a>, ... ]</i>,
    "<a href="#cookies" title="Cookies">Cookies</a>" : <i>[ <a href="requestcookie.md">RequestCookie</a>, ... ]</i>,
    "<a href="#textvalue" title="TextValue">TextValue</a>" : <i>String</i>,
    "<a href="#masked" title="Masked">Masked</a>" : <i>Boolean</i>,
    "<a href="#simulateblurevent" title="SimulateBlurEvent">SimulateBlurEvent</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#url" title="Url">Url</a>: <i>String</i>
<a href="#wait" title="Wait">Wait</a>: <i><a href="eventsinput.md">EventsInput</a></i>
<a href="#validate" title="Validate">Validate</a>: <i>
      - <a href="validationtype.md">ValidationType</a></i>
<a href="#target" title="Target">Target</a>: <i><a href="targettype.md">TargetType</a></i>
<a href="#authentication" title="Authentication">Authentication</a>: <i><a href="eventsinput.md">EventsInput</a></i>
<a href="#button" title="Button">Button</a>: <i>Double</i>
<a href="#javascript" title="JavaScript">JavaScript</a>: <i>String</i>
<a href="#selections" title="Selections">Selections</a>: <i>
      - <a href="listoptions.md">ListOptions</a></i>
<a href="#cookies" title="Cookies">Cookies</a>: <i>
      - <a href="requestcookie.md">RequestCookie</a></i>
<a href="#textvalue" title="TextValue">TextValue</a>: <i>String</i>
<a href="#masked" title="Masked">Masked</a>: <i>Boolean</i>
<a href="#simulateblurevent" title="SimulateBlurEvent">SimulateBlurEvent</a>: <i>Boolean</i>
</pre>

## Properties

#### Type

The type of synthetic event. Depending on the value selected here, different parameters will be considered, see reference for more info: https://docs.dynatrace.com/docs/platform-modules/digital-experience/synthetic-monitoring/browser-monitors/script-mode-for-browser-monitor-configuration

_Required_: No

_Type_: String

_Allowed Values_: <code>navigate</code> | <code>click</code> | <code>tap</code> | <code>javascript</code> | <code>selectOption</code> | <code>cookie</code> | <code>keystrokes</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

A short description of the event to appear in the UI

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Url

The URL to navigate to, applicable to 'navigate' events.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Wait

_Required_: No

_Type_: <a href="eventsinput.md">EventsInput</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Validate

The validation rule for the event - helps you verify that your browser monitor loads the expected page content or page element, applicable to 'navigate', 'selectOptionEvent', 'keystrokesEvent' and 'interactionEvent' events.

_Required_: No

_Type_: List of <a href="validationtype.md">ValidationType</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Target

_Required_: No

_Type_: <a href="targettype.md">TargetType</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Authentication

_Required_: No

_Type_: <a href="eventsinput.md">EventsInput</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Button

The mouse button to be used for the click, applicable to 'interactionEvent' events.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### JavaScript

The JavaScript code to be executed in this event, applicable to 'javaScriptEvent' events.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Selections

The options to be selected, applicable to 'selectOptionEvent' events

_Required_: No

_Type_: List of <a href="listoptions.md">ListOptions</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Cookies

_Required_: No

_Type_: List of <a href="requestcookie.md">RequestCookie</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TextValue

The text to enter, applicable to 'keystrokesEvent' events.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Masked

Indicates whether the textValue is encrypted (true) or not (false), applicable to 'keystrokesEvent' events.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### SimulateBlurEvent

Defines whether to blur the text field when it loses focus, applicable to 'keystrokesEvent' events.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

