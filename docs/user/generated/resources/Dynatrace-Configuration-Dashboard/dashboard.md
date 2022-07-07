# Dynatrace::Configuration::Dashboard Dashboard

Dashboard object returned by dynatrace

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#metadata" title="Metadata">Metadata</a>" : <i><a href="metadata.md">Metadata</a></i>,
    "<a href="#id" title="Id">Id</a>" : <i>String</i>,
    "<a href="#dashboardmetadata" title="DashboardMetadata">DashboardMetadata</a>" : <i><a href="dashboardmetadata.md">DashboardMetadata</a></i>,
    "<a href="#tiles" title="Tiles">Tiles</a>" : <i>[ Map, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#metadata" title="Metadata">Metadata</a>: <i><a href="metadata.md">Metadata</a></i>
<a href="#id" title="Id">Id</a>: <i>String</i>
<a href="#dashboardmetadata" title="DashboardMetadata">DashboardMetadata</a>: <i><a href="dashboardmetadata.md">DashboardMetadata</a></i>
<a href="#tiles" title="Tiles">Tiles</a>: <i>
      - Map</i>
</pre>

## Properties

#### Metadata

_Required_: No

_Type_: <a href="metadata.md">Metadata</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Id

The ID of the dashboard.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DashboardMetadata

_Required_: Yes

_Type_: <a href="dashboardmetadata.md">DashboardMetadata</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tiles

The list of tiles on the dashboard.

_Required_: No

_Type_: List of Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

