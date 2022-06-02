# Dynatrace::Configuration::Dashboard DynamicFilters

Dashboard filter configuration of a dashboard.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#filters" title="Filters">Filters</a>" : <i>[ String, ... ]</i>,
    "<a href="#tagsuggestiontypes" title="TagSuggestionTypes">TagSuggestionTypes</a>" : <i>[ String, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#filters" title="Filters">Filters</a>: <i>
      - String</i>
<a href="#tagsuggestiontypes" title="TagSuggestionTypes">TagSuggestionTypes</a>: <i>
      - String</i>
</pre>

## Properties

#### Filters

A set of all possible global dashboard filters that can be applied to a dashboard.

_Required_: Yes

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TagSuggestionTypes

A set of entities applied for tag filter suggestions. You can fetch the list of possible values with the GET all entity types request.

Only applicable if the filters set includes TAG_KEY:<tagname>.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

