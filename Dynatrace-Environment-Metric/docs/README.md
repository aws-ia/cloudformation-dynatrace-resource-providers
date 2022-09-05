# Dynatrace::Environment::Metric

Manage a timeseries metric (V1) in Dynatrace.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Dynatrace::Environment::Metric",
    "Properties" : {
        "<a href="#id" title="Id">Id</a>" : <i>String</i>,
        "<a href="#displayname" title="DisplayName">DisplayName</a>" : <i>String</i>,
        "<a href="#unit" title="Unit">Unit</a>" : <i>String</i>,
        "<a href="#dimensions" title="Dimensions">Dimensions</a>" : <i>[ String, ... ]</i>,
        "<a href="#types" title="Types">Types</a>" : <i>[ String, ... ]</i>,
    }
}
</pre>

### YAML

<pre>
Type: Dynatrace::Environment::Metric
Properties:
    <a href="#id" title="Id">Id</a>: <i>String</i>
    <a href="#displayname" title="DisplayName">DisplayName</a>: <i>String</i>
    <a href="#unit" title="Unit">Unit</a>: <i>String</i>
    <a href="#dimensions" title="Dimensions">Dimensions</a>: <i>
      - String</i>
    <a href="#types" title="Types">Types</a>: <i>
      - String</i>
</pre>

## Properties

#### Id

The ID of the metric.

_Required_: No

_Type_: String

_Pattern_: <code>^custom\:[A-Za-z\.\-\_]([A-Za-z0-9]|([\.\-\_][A-Za-z\.\-\_])){1,248}$</code>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### DisplayName

The name of the metric in the user interface. It is limited to 256 characters.

_Required_: No

_Type_: String

_Maximum_: <code>256</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Unit

The unit of the metric.

_Required_: No

_Type_: String

_Allowed Values_: <code>Bit</code> | <code>BitPerHour</code> | <code>BitPerMinute</code> | <code>BitPerSecond</code> | <code>Byte</code> | <code>BytePerHour</code> | <code>BytePerMinute</code> | <code>BytePerSecond</code> | <code>Cores</code> | <code>Count</code> | <code>Day</code> | <code>DecibelMilliWatt</code> | <code>G</code> | <code>GibiByte</code> | <code>GigaByte</code> | <code>Hour</code> | <code>KibiByte</code> | <code>KibiBytePerHour</code> | <code>KibiBytePerMinute</code> | <code>KibiBytePerSecond</code> | <code>KiloByte</code> | <code>KiloBytePerHour</code> | <code>KiloBytePerMinute</code> | <code>KiloBytePerSecond</code> | <code>M</code> | <code>MSU</code> | <code>MebiByte</code> | <code>MebiBytePerHour</code> | <code>MebiBytePerMinute</code> | <code>MebiBytePerSecond</code> | <code>MegaByte</code> | <code>MegaBytePerHour</code> | <code>MegaBytePerMinute</code> | <code>MegaBytePerSecond</code> | <code>MicroSecond</code> | <code>MilliSecond</code> | <code>MilliSecondPerMinute</code> | <code>Minute</code> | <code>Month</code> | <code>N/A</code> | <code>NanoSecond</code> | <code>NanoSecondPerMinute</code> | <code>PerHour</code> | <code>PerMinute</code> | <code>PerSecond</code> | <code>Percent</code> | <code>Pixel</code> | <code>Promille</code> | <code>Ratio</code> | <code>Second</code> | <code>State</code> | <code>Unspecified</code> | <code>Week</code> | <code>Year</code> | <code>k</code> | <code>mCores</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Dimensions

The metric dimension key that will be used to report multiple dimensions. For example, a dimension key to report the metric for different network cards for the same firewall.

The CUSTOM_DEVICE dimension is added to each new custom metric automatically.

_Required_: No

_Type_: List of String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Types

The definition of the technology type. It is used to group metrics under a logical technology name in the UI.

Metrics must be assigned a software technology type that is identical to the technology type of the custom device you are sending the metric to.

For example, if you define your custom device using type F5-Firewall you must also register all related custom metrics as type F5-Firewall.

The field is required when creating a new metric.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the Id.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### Metric

The configuration of a metric with all its parameters.

