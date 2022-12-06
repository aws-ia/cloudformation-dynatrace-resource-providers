# Dynatrace::Configuration::Dashboard Tile

Configuration of a tile.

The actual set of fields depends on the type of the tile. Find the list of actual objects in the description of the tileType field or see Dashboards API - Tile JSON models (https://dt-url.net/2wc3spx).

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#tiletype" title="TileType">TileType</a>" : <i>String</i>,
    "<a href="#bounds" title="Bounds">Bounds</a>" : <i><a href="tile.md">Tile</a></i>,
    "<a href="#configured" title="Configured">Configured</a>" : <i>Boolean</i>,
    "<a href="#tilefilter" title="TileFilter">TileFilter</a>" : <i><a href="dashboardfilter.md">DashboardFilter</a></i>
}
</pre>

### YAML

<pre>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#tiletype" title="TileType">TileType</a>: <i>String</i>
<a href="#bounds" title="Bounds">Bounds</a>: <i><a href="tile.md">Tile</a></i>
<a href="#configured" title="Configured">Configured</a>: <i>Boolean</i>
<a href="#tilefilter" title="TileFilter">TileFilter</a>: <i><a href="dashboardfilter.md">DashboardFilter</a></i>
</pre>

## Properties

#### Name

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TileType

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Bounds

_Required_: No

_Type_: <a href="tile.md">Tile</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Configured

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TileFilter

_Required_: No

_Type_: <a href="dashboardfilter.md">DashboardFilter</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

