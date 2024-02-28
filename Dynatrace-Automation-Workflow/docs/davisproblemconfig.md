# Dynatrace::Automation::Workflow DavisProblemConfig

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#categories" title="Categories">Categories</a>" : <i><a href="davisproblemcategories.md">DavisProblemCategories</a></i>,
    "<a href="#customfilters" title="CustomFilters">CustomFilters</a>" : <i>String</i>,
    "<a href="#entitytags" title="EntityTags">EntityTags</a>" : <i>Map</i>,
    "<a href="#entitytagsmatch" title="EntityTagsMatch">EntityTagsMatch</a>" : <i>String</i>,
    "<a href="#onproblemclose" title="OnProblemClose">OnProblemClose</a>" : <i>Boolean</i>
}
</pre>

### YAML

<pre>
<a href="#categories" title="Categories">Categories</a>: <i><a href="davisproblemcategories.md">DavisProblemCategories</a></i>
<a href="#customfilters" title="CustomFilters">CustomFilters</a>: <i>String</i>
<a href="#entitytags" title="EntityTags">EntityTags</a>: <i>Map</i>
<a href="#entitytagsmatch" title="EntityTagsMatch">EntityTagsMatch</a>: <i>String</i>
<a href="#onproblemclose" title="OnProblemClose">OnProblemClose</a>: <i>Boolean</i>
</pre>

## Properties

#### Categories

_Required_: Yes

_Type_: <a href="davisproblemcategories.md">DavisProblemCategories</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

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

#### OnProblemClose

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

