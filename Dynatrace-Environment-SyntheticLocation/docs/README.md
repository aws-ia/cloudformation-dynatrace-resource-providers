# Dynatrace::Environment::SyntheticLocation

An example resource schema demonstrating some basic constructs and validation rules.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Dynatrace::Environment::SyntheticLocation",
    "Properties" : {
        "<a href="#dynatraceaccess" title="DynatraceAccess">DynatraceAccess</a>" : <i>String</i>,
        "<a href="#dynatraceendpoint" title="DynatraceEndpoint">DynatraceEndpoint</a>" : <i>String</i>,
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#countrycode" title="CountryCode">CountryCode</a>" : <i>String</i>,
        "<a href="#regioncode" title="RegionCode">RegionCode</a>" : <i>String</i>,
        "<a href="#city" title="City">City</a>" : <i>String</i>,
        "<a href="#latitude" title="Latitude">Latitude</a>" : <i>Double</i>,
        "<a href="#longitude" title="Longitude">Longitude</a>" : <i>Double</i>,
        "<a href="#status" title="Status">Status</a>" : <i>String</i>,
        "<a href="#nodes" title="Nodes">Nodes</a>" : <i>[ String, ... ]</i>,
        "<a href="#availabilitylocationoutage" title="AvailabilityLocationOutage">AvailabilityLocationOutage</a>" : <i>Boolean</i>,
        "<a href="#availabilitynodeoutage" title="AvailabilityNodeOutage">AvailabilityNodeOutage</a>" : <i>Boolean</i>,
        "<a href="#locationnodeoutagedelayinminutes" title="LocationNodeOutageDelayInMinutes">LocationNodeOutageDelayInMinutes</a>" : <i>Integer</i>,
        "<a href="#availabilitynotificationsenabled" title="AvailabilityNotificationsEnabled">AvailabilityNotificationsEnabled</a>" : <i>Boolean</i>,
        "<a href="#autoupdatechromium" title="AutoUpdateChromium">AutoUpdateChromium</a>" : <i>Boolean</i>,
        "<a href="#location" title="Location">Location</a>" : <i><a href="syntheticlocation.md">SyntheticLocation</a></i>
    }
}
</pre>

### YAML

<pre>
Type: Dynatrace::Environment::SyntheticLocation
Properties:
    <a href="#dynatraceaccess" title="DynatraceAccess">DynatraceAccess</a>: <i>String</i>
    <a href="#dynatraceendpoint" title="DynatraceEndpoint">DynatraceEndpoint</a>: <i>String</i>
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#countrycode" title="CountryCode">CountryCode</a>: <i>String</i>
    <a href="#regioncode" title="RegionCode">RegionCode</a>: <i>String</i>
    <a href="#city" title="City">City</a>: <i>String</i>
    <a href="#latitude" title="Latitude">Latitude</a>: <i>Double</i>
    <a href="#longitude" title="Longitude">Longitude</a>: <i>Double</i>
    <a href="#status" title="Status">Status</a>: <i>String</i>
    <a href="#nodes" title="Nodes">Nodes</a>: <i>
      - String</i>
    <a href="#availabilitylocationoutage" title="AvailabilityLocationOutage">AvailabilityLocationOutage</a>: <i>Boolean</i>
    <a href="#availabilitynodeoutage" title="AvailabilityNodeOutage">AvailabilityNodeOutage</a>: <i>Boolean</i>
    <a href="#locationnodeoutagedelayinminutes" title="LocationNodeOutageDelayInMinutes">LocationNodeOutageDelayInMinutes</a>: <i>Integer</i>
    <a href="#availabilitynotificationsenabled" title="AvailabilityNotificationsEnabled">AvailabilityNotificationsEnabled</a>: <i>Boolean</i>
    <a href="#autoupdatechromium" title="AutoUpdateChromium">AutoUpdateChromium</a>: <i>Boolean</i>
    <a href="#location" title="Location">Location</a>: <i><a href="syntheticlocation.md">SyntheticLocation</a></i>
</pre>

## Properties

#### DynatraceAccess

Personal Access Token

_Required_: Yes

_Type_: String

_Pattern_: <code>^[a-zA-Z0-9]+\.[a-zA-Z0-9]{24}\.[a-zA-Z0-9]{64}$</code>

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### DynatraceEndpoint

Endpoint URL to access Dynatrace API

_Required_: Yes

_Type_: String

_Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)

#### Type

Defines the actual set of fields depending on the value. See one of the following objects:

    PUBLIC -> PublicSyntheticLocation
    PRIVATE -> PrivateSyntheticLocation
    CLUSTER -> PrivateSyntheticLocation

_Required_: No

_Type_: String

_Allowed Values_: <code>PUBLIC</code> | <code>PRIVATE</code> | <code>CLUSTER</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

_Required_: Yes

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CountryCode

The country code of the location.

Use the alpha-2 code of the ISO 3166-2 standard (https://dt-url.net/iso3166-2), (for example, AT for Austria or PL for Poland).

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### RegionCode

The region code of the location.

For the USA or Canada use ISO 3166-2 state codes (without US- or CA- prefix), for example, VA for Virginia or OR for Oregon.

For the rest of the world use FIPS 10-4 codes (https://dt-url.net/fipscodes).

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### City

The city of the location.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Latitude

The latitude of the location in DDD.dddd format.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Longitude

The latitude of the location in DDD.dddd format.

_Required_: No

_Type_: Double

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Status

The status of the location:

    ENABLED: The location is displayed as active in the UI. You can assign monitors to the location.
    DISABLED: The location is displayed as inactive in the UI. You can't assign monitors to the location. Monitors already assigned to the location will stay there and will be executed from the location.
    HIDDEN: The location is not displayed in the UI. You can't assign monitors to the location. You can only set location as HIDDEN when no monitor is assigned to it.

_Required_: No

_Type_: String

_Allowed Values_: <code>ENABLED</code> | <code>DISABLED</code> | <code>HIDDEN</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Nodes

A list of synthetic nodes belonging to the location.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AvailabilityLocationOutage

The alerting of location outage is enabled (true) or disabled (false).

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AvailabilityNodeOutage

The alerting of node outage is enabled (true) or disabled (false).

If enabled, the outage of any node in the location triggers an alert.

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### LocationNodeOutageDelayInMinutes

Alert if the location or node outage lasts longer than X minutes.

Only applicable when availabilityLocationOutage or availabilityNodeOutage is set to true.

_Required_: No

_Type_: Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AvailabilityNotificationsEnabled

The notifications of location and node outage is enabled (true) or disabled (false).

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AutoUpdateChromium

Auto upgrade of Chromium is enabled (true) or disabled (false).

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Location

_Required_: No

_Type_: <a href="syntheticlocation.md">SyntheticLocation</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the EntityId.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### EntityId

The Dynatrace entity ID of the location.

#### Location

Returns the <code>Location</code> value.

