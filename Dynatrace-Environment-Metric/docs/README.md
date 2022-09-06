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

_Allowed Values_: <code>Billion (bilcount)</code> | <code>Bit (bit)</code> | <code>BitPerHour (bit/h)</code> | <code>BitPerMinute (bit/min)</code> | <code>BitPerSecond (bit/s)</code> | <code>Byte (B)</code> | <code>BytePerHour (B/h)</code> | <code>BytePerMinute (B/min)</code> | <code>BytePerSecond (B/s)</code> | <code>Cores</code> | <code>Count (count)</code> | <code>Day (ds)</code> | <code>DecibelMilliWatt (dBm)</code> | <code>G</code> | <code>GibiByte (GiB)</code> | <code>GigaByte (GB)</code> | <code>Hour (hs)</code> | <code>KibiByte (KiB)</code> | <code>KibiBytePerHour (KiB/h)</code> | <code>KibiBytePerMinute (KiB/min)</code> | <code>KibiBytePerSecond (KiB/s)</code> | <code>KiloByte (kB)</code> | <code>KiloBytePerHour (kB/h)</code> | <code>KiloBytePerMinute (kB/min)</code> | <code>KiloBytePerSecond (kB/s)</code> | <code>M</code> | <code>MSU</code> | <code>MebiByte (MiB)</code> | <code>MebiBytePerHour (MiB/h)</code> | <code>MebiBytePerMinute (MiB/min)</code> | <code>MebiBytePerSecond (MiB/s)</code> | <code>MegaByte (MB)</code> | <code>MegaBytePerHour (MB/h)</code> | <code>MegaBytePerMinute (MB/min)</code> | <code>MegaBytePerSecond (MB/s)</code> | <code>MicroSecond (µs)</code> | <code>MilliSecond (ms)</code> | <code>MilliSecondPerMinute (ms/min)</code> | <code>Million (milcount)</code> | <code>Minute (mins)</code> | <code>Month (mos)</code> | <code>N/A</code> | <code>NanoSecond (ns)</code> | <code>NanoSecondPerMinute (ns/min)</code> | <code>PerHour (count/h)</code> | <code>PerMinute (count/min)</code> | <code>PerSecond (count/s)</code> | <code>Percent (%)</code> | <code>Pixel (px)</code> | <code>Promille (‰)</code> | <code>Ratio</code> | <code>Second (s)</code> | <code>State</code> | <code>Unspecified</code> | <code>Week (ws)</code> | <code>Year (ys)</code> | <code>k</code> | <code>km/h</code> | <code>m/h</code> | <code>m/s</code> | <code>mCores</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Dimensions

The metric dimension key that will be used to report multiple dimensions. For example, a dimension key to report the metric for different network cards for the same firewall.

The CUSTOM_DEVICE dimension is added to each new custom metric automatically.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

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

#### TimeseriesId

The ID of the metric.

#### AggregationTypes

The list of allowed aggregations for this metric.

#### Filter

The feature, where the metric originates.

#### DetailedSource

The feature, where the metric originates.

#### PluginId

The ID of the plugin, where the metric originates.

#### Warnings

The warnings that occurred while creating the metric.

