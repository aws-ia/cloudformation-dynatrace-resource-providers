# Dynatrace::Environment::SyntheticMonitor Tag

Tag with source of a Dynatrace entity.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#source" title="Source">Source</a>" : <i>String</i>,
    "<a href="#context" title="Context">Context</a>" : <i>String</i>,
    "<a href="#key" title="Key">Key</a>" : <i>String</i>,
    "<a href="#value" title="Value">Value</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#source" title="Source">Source</a>: <i>String</i>
<a href="#context" title="Context">Context</a>: <i>String</i>
<a href="#key" title="Key">Key</a>: <i>String</i>
<a href="#value" title="Value">Value</a>: <i>String</i>
</pre>

## Properties

#### Source

The source of the tag, such as USER, RULE_BASED or AUTO

_Required_: No

_Type_: String

_Allowed Values_: <code>AUTO</code> | <code>RULE_BASED</code> | <code>USER</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Context

The origin of the tag, such as AWS or Cloud Foundry.

Custom tags use the CONTEXTLESS value.

_Required_: Yes

_Type_: String

_Allowed Values_: <code>AWS</code> | <code>AWS_GENERIC</code> | <code>AZURE</code> | <code>CLOUD_FOUNDRY</code> | <code>CONTEXTLESS</code> | <code>ENVIRONMENT</code> | <code>GOOGLE_CLOUD</code> | <code>KUBERNETES</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Key

The key of the tag.

Custom tags have the tag value here.

_Required_: Yes

_Type_: String

_Minimum_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Value

The value of the tag.

Not applicable to custom tags.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

