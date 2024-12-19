# Dynatrace::Environment::SyntheticMonitor Bandwidth

The emulated network conditions of the monitor. If not set, then the full available bandwidth is used.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#latency" title="Latency">Latency</a>" : <i>Double</i>,
    "<a href="#download" title="Download">Download</a>" : <i>Double</i>,
    "<a href="#upload" title="Upload">Upload</a>" : <i>Double</i>,
    "<a href="#networktype" title="NetworkType">NetworkType</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#latency" title="Latency">Latency</a>: <i>Double</i>
<a href="#download" title="Download">Download</a>: <i>Double</i>
<a href="#upload" title="Upload">Upload</a>: <i>Double</i>
<a href="#networktype" title="NetworkType">NetworkType</a>: <i>String</i>
</pre>

## Properties

#### Latency

The latency of the network, in milliseconds.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Download

The download speed of the network, in bytes per second.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Upload

The upload speed of the network, in bytes per second.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### NetworkType

The type of the preconfigured network.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

