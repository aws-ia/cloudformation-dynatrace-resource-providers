# Dynatrace::Environment::SyntheticMonitor Script

The script of a browser (https://dt-url.net/9c103rda) or HTTP monitor.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#version" title="Version">Version</a>" : <i>String</i>,
    "<a href="#requests" title="Requests">Requests</a>" : <i>[ <a href="requestsinput.md">RequestsInput</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#version" title="Version">Version</a>: <i>String</i>
<a href="#requests" title="Requests">Requests</a>: <i>
      - <a href="requestsinput.md">RequestsInput</a></i>
</pre>

## Properties

#### Version

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Requests

_Required_: No

_Type_: List of <a href="requestsinput.md">RequestsInput</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

