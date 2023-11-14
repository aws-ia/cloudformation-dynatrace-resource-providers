# Dynatrace::Environment::SyntheticMonitor ScriptConfig

Contains the setup of a browser monitor.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#useragent" title="UserAgent">UserAgent</a>" : <i>String</i>,
    "<a href="#device" title="Device">Device</a>" : <i><a href="device.md">Device</a></i>,
    "<a href="#bandwidth" title="Bandwidth">Bandwidth</a>" : <i><a href="bandwidth.md">Bandwidth</a></i>,
    "<a href="#requestheaders" title="RequestHeaders">RequestHeaders</a>" : <i>[ <a href="requestheader.md">RequestHeader</a>, ... ]</i>,
    "<a href="#cookies" title="Cookies">Cookies</a>" : <i>[ <a href="requestcookie.md">RequestCookie</a>, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#useragent" title="UserAgent">UserAgent</a>: <i>String</i>
<a href="#device" title="Device">Device</a>: <i><a href="device.md">Device</a></i>
<a href="#bandwidth" title="Bandwidth">Bandwidth</a>: <i><a href="bandwidth.md">Bandwidth</a></i>
<a href="#requestheaders" title="RequestHeaders">RequestHeaders</a>: <i>
      - <a href="requestheader.md">RequestHeader</a></i>
<a href="#cookies" title="Cookies">Cookies</a>: <i>
      - <a href="requestcookie.md">RequestCookie</a></i>
</pre>

## Properties

#### UserAgent

The user agent of the request.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Device

The emulated device of the monitor - holds either the parameters of the custom device or the name and orientation of the preconfigured device.

_Required_: No

_Type_: <a href="device.md">Device</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Bandwidth

The emulated network conditions of the monitor. If not set, then the full available bandwidth is used.

_Required_: No

_Type_: <a href="bandwidth.md">Bandwidth</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RequestHeaders

The list of HTTP headers to be sent with requests of the monitor.

_Required_: No

_Type_: List of <a href="requestheader.md">RequestHeader</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Cookies

List of cookies to be created for the monitor.

_Required_: No

_Type_: List of <a href="requestcookie.md">RequestCookie</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

