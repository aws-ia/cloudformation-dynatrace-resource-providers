# Dynatrace::Configuration::Dashboard

Manage a dashboard in Dynatrace.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Dynatrace::Configuration::Dashboard",
    "Properties" : {
        "<a href="#metadata" title="Metadata">Metadata</a>" : <i><a href="metadata.md">Metadata</a></i>,
        "<a href="#dashboardmetadata" title="DashboardMetadata">DashboardMetadata</a>" : <i><a href="dashboardmetadata.md">DashboardMetadata</a></i>,
        "<a href="#tiles" title="Tiles">Tiles</a>" : <i>[ Map, ... ]</i>,
    }
}
</pre>

### YAML

<pre>
Type: Dynatrace::Configuration::Dashboard
Properties:
    <a href="#metadata" title="Metadata">Metadata</a>: <i><a href="metadata.md">Metadata</a></i>
    <a href="#dashboardmetadata" title="DashboardMetadata">DashboardMetadata</a>: <i><a href="dashboardmetadata.md">DashboardMetadata</a></i>
    <a href="#tiles" title="Tiles">Tiles</a>: <i>
      - Map</i>
</pre>

## Properties

#### Metadata

Metadata useful for debugging.

_Required_: No

_Type_: <a href="metadata.md">Metadata</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DashboardMetadata

Parameters of a dashboard.

_Required_: Yes

_Type_: <a href="dashboardmetadata.md">DashboardMetadata</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tiles

The list of tiles on the dashboard.

_Required_: Yes

_Type_: List of Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Id

The ID of the dashboard.

#### Dashboard

Dashboard object returned by dynatrace

