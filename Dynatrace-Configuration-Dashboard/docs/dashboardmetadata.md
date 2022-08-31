# Dynatrace::Configuration::Dashboard DashboardMetadata

Parameters of a dashboard.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#shared" title="Shared">Shared</a>" : <i>Boolean</i>,
    "<a href="#owner" title="Owner">Owner</a>" : <i>String</i>,
    "<a href="#dashboardfilter" title="DashboardFilter">DashboardFilter</a>" : <i><a href="dashboardfilter.md">DashboardFilter</a></i>,
    "<a href="#tags" title="Tags">Tags</a>" : <i>[ String, ... ]</i>,
    "<a href="#preset" title="Preset">Preset</a>" : <i>Boolean</i>,
    "<a href="#dynamicfilters" title="DynamicFilters">DynamicFilters</a>" : <i><a href="dynamicfilters.md">DynamicFilters</a></i>,
    "<a href="#tilesnamesize" title="TilesNameSize">TilesNameSize</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#shared" title="Shared">Shared</a>: <i>Boolean</i>
<a href="#owner" title="Owner">Owner</a>: <i>String</i>
<a href="#dashboardfilter" title="DashboardFilter">DashboardFilter</a>: <i><a href="dashboardfilter.md">DashboardFilter</a></i>
<a href="#tags" title="Tags">Tags</a>: <i>
      - String</i>
<a href="#preset" title="Preset">Preset</a>: <i>Boolean</i>
<a href="#dynamicfilters" title="DynamicFilters">DynamicFilters</a>: <i><a href="dynamicfilters.md">DynamicFilters</a></i>
<a href="#tilesnamesize" title="TilesNameSize">TilesNameSize</a>: <i>String</i>
</pre>

## Properties

#### Name

The name of the dashboard.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Shared

The dashboard is shared (true) or private (false).

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Owner

The owner of the dashboard.

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DashboardFilter

Filters, applied to a dashboard.

_Required_: No

_Type_: <a href="dashboardfilter.md">DashboardFilter</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tags

A set of tags assigned to the dashboard.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Preset

The dashboard is a preset (true) or a custom (false) dashboard.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DynamicFilters

Dashboard filter configuration of a dashboard.

_Required_: No

_Type_: <a href="dynamicfilters.md">DynamicFilters</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TilesNameSize

The general size of the tiles tile. Default value is medium

_Required_: No

_Type_: String

_Allowed Values_: <code>small</code> | <code>medium</code> | <code>large</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

