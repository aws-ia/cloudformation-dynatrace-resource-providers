# Dynatrace::Environment::SyntheticMonitor Device

The emulated device of the monitor - holds either the parameters of the custom device or the name and orientation of the preconfigured device.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#mobile" title="Mobile">Mobile</a>" : <i>Boolean</i>,
    "<a href="#touchenabled" title="TouchEnabled">TouchEnabled</a>" : <i>Boolean</i>,
    "<a href="#width" title="Width">Width</a>" : <i>Double</i>,
    "<a href="#height" title="Height">Height</a>" : <i>Double</i>,
    "<a href="#scalefactor" title="ScaleFactor">ScaleFactor</a>" : <i>Double</i>,
    "<a href="#devicename" title="DeviceName">DeviceName</a>" : <i>String</i>,
    "<a href="#orientation" title="Orientation">Orientation</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#mobile" title="Mobile">Mobile</a>: <i>Boolean</i>
<a href="#touchenabled" title="TouchEnabled">TouchEnabled</a>: <i>Boolean</i>
<a href="#width" title="Width">Width</a>: <i>Double</i>
<a href="#height" title="Height">Height</a>: <i>Double</i>
<a href="#scalefactor" title="ScaleFactor">ScaleFactor</a>: <i>Double</i>
<a href="#devicename" title="DeviceName">DeviceName</a>: <i>String</i>
<a href="#orientation" title="Orientation">Orientation</a>: <i>String</i>
</pre>

## Properties

#### Mobile

The flag of the mobile device. Set to true for mobile devices or false for a desktop or laptop.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### TouchEnabled

The flag of the touchscreen. Set to true if the device uses touchscreen.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Width

The width of the screen in pixels.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Height

The height of the screen in pixels.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ScaleFactor

The pixel ratio of the device.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### DeviceName

The name of the preconfigured device.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Orientation

The orientation of the device - portrait or landscape

_Required_: No

_Type_: String

_Allowed Values_: <code>landscape</code> | <code>portrait</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

