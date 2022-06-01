# Dynatrace::Configuration::Dashboard DashboardFilter

Filters, applied to a dashboard.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#timeframe" title="Timeframe">Timeframe</a>" : <i>String</i>,
    "<a href="#managementzone" title="ManagementZone">ManagementZone</a>" : <i><a href="entityshortrepresentation.md">EntityShortRepresentation</a></i>
}
</pre>

### YAML

<pre>
<a href="#timeframe" title="Timeframe">Timeframe</a>: <i>String</i>
<a href="#managementzone" title="ManagementZone">ManagementZone</a>: <i><a href="entityshortrepresentation.md">EntityShortRepresentation</a></i>
</pre>

## Properties

#### Timeframe

The default timeframe of the dashboard.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ManagementZone

The short representation of a Dynatrace entity.

_Required_: No

_Type_: <a href="entityshortrepresentation.md">EntityShortRepresentation</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

