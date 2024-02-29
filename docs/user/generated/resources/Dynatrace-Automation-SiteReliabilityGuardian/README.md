# Dynatrace::Automation::SiteReliabilityGuardian

Manage a Site Reliability Guardian in Dynatrace

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Dynatrace::Automation::SiteReliabilityGuardian",
    "Properties" : {
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#description" title="Description">Description</a>" : <i>String</i>,
        "<a href="#tags" title="Tags">Tags</a>" : <i>[ <a href="tag.md">Tag</a>, ... ]</i>,
        "<a href="#variables" title="Variables">Variables</a>" : <i>[ <a href="variable.md">Variable</a>, ... ]</i>,
        "<a href="#objectives" title="Objectives">Objectives</a>" : <i>[ <a href="objective.md">Objective</a>, ... ]</i>,
    }
}
</pre>

### YAML

<pre>
Type: Dynatrace::Automation::SiteReliabilityGuardian
Properties:
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#description" title="Description">Description</a>: <i>String</i>
    <a href="#tags" title="Tags">Tags</a>: <i>
      - <a href="tag.md">Tag</a></i>
    <a href="#variables" title="Variables">Variables</a>: <i>
      - <a href="variable.md">Variable</a></i>
    <a href="#objectives" title="Objectives">Objectives</a>: <i>
      - <a href="objective.md">Objective</a></i>
</pre>

## Properties

#### Name

The name of the Site Reliability Guardian.

_Required_: Yes

_Type_: String

_Minimum Length_: <code>1</code>

_Maximum Length_: <code>200</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

The description of the Site Reliability Guardian.

_Required_: No

_Type_: String

_Minimum Length_: <code>1</code>

_Maximum Length_: <code>250</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tags

Define key/value pairs that further describe this guardian.

_Required_: Yes

_Type_: List of <a href="tag.md">Tag</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Variables

Define variables for dynamically defining DQL queries

_Required_: Yes

_Type_: List of <a href="variable.md">Variable</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Objectives

Objectives are means for measuring the performance, availability, capacity, and security of your services.

_Required_: Yes

_Type_: List of <a href="objective.md">Objective</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ObjectId.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### ObjectId

Returns the <code>ObjectId</code> value.

