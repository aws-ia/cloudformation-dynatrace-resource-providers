# Dynatrace::Automation::SiteReliabilityGuardian Objective

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#description" title="Description">Description</a>" : <i>String</i>,
    "<a href="#objectivetype" title="ObjectiveType">ObjectiveType</a>" : <i>String</i>,
    "<a href="#dqlquery" title="DqlQuery">DqlQuery</a>" : <i>String</i>,
    "<a href="#referenceslo" title="ReferenceSlo">ReferenceSlo</a>" : <i>String</i>,
    "<a href="#comparisonoperator" title="ComparisonOperator">ComparisonOperator</a>" : <i>String</i>,
    "<a href="#target" title="Target">Target</a>" : <i>Double</i>,
    "<a href="#warning" title="Warning">Warning</a>" : <i>Double</i>
}
</pre>

### YAML

<pre>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#description" title="Description">Description</a>: <i>String</i>
<a href="#objectivetype" title="ObjectiveType">ObjectiveType</a>: <i>String</i>
<a href="#dqlquery" title="DqlQuery">DqlQuery</a>: <i>String</i>
<a href="#referenceslo" title="ReferenceSlo">ReferenceSlo</a>: <i>String</i>
<a href="#comparisonoperator" title="ComparisonOperator">ComparisonOperator</a>: <i>String</i>
<a href="#target" title="Target">Target</a>: <i>Double</i>
<a href="#warning" title="Warning">Warning</a>: <i>Double</i>
</pre>

## Properties

#### Name

_Required_: Yes

_Type_: String

_Minimum Length_: <code>1</code>

_Maximum Length_: <code>200</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Description

_Required_: No

_Type_: String

_Minimum Length_: <code>1</code>

_Maximum Length_: <code>250</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ObjectiveType

_Required_: Yes

_Type_: String

_Allowed Values_: <code>DQL</code> | <code>REFERENCE_SLO</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DqlQuery

_Required_: Yes

_Type_: String

_Minimum Length_: <code>1</code>

_Maximum Length_: <code>2000</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ReferenceSlo

Please enter the metric key of your desired SLO. SLO metric keys have to start with 'func:slo.'

_Required_: No

_Type_: String

_Minimum Length_: <code>1</code>

_Maximum Length_: <code>2000</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ComparisonOperator

_Required_: Yes

_Type_: String

_Allowed Values_: <code>GREATER_THAN_OR_EQUAL</code> | <code>LESS_THAN_OR_EQUAL</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Target

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Warning

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

