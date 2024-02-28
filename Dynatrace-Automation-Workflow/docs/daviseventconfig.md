# Dynatrace::Automation::Workflow DavisEventConfig

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#customfilters" title="CustomFilters">CustomFilters</a>" : <i>String</i>,
    "<a href="#entitytags" title="EntityTags">EntityTags</a>" : <i>Map</i>,
    "<a href="#entitytagsmatch" title="EntityTagsMatch">EntityTagsMatch</a>" : <i>String</i>,
    "<a href="#names" title="Names">Names</a>" : <i>[ <a href="daviseventname.md">DavisEventName</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#customfilters" title="CustomFilters">CustomFilters</a>: <i>String</i>
<a href="#entitytags" title="EntityTags">EntityTags</a>: <i>Map</i>
<a href="#entitytagsmatch" title="EntityTagsMatch">EntityTagsMatch</a>: <i>String</i>
<a href="#names" title="Names">Names</a>: <i>
      - <a href="daviseventname.md">DavisEventName</a></i>
</pre>

## Properties

#### CustomFilters

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EntityTags

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### EntityTagsMatch

_Required_: No

_Type_: String

_Allowed Values_: <code>All</code> | <code>Any</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Names

_Required_: No

_Type_: List of <a href="daviseventname.md">DavisEventName</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

