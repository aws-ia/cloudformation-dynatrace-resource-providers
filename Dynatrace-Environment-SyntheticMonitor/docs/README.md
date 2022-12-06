# Dynatrace::Environment::SyntheticMonitor

Manage a synthetic monitor (V1) in Dynatrace.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "Type" : "Dynatrace::Environment::SyntheticMonitor",
    "Properties" : {
        "<a href="#frequencymin" title="FrequencyMin">FrequencyMin</a>" : <i>Integer</i>,
        "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
        "<a href="#anomalydetection" title="AnomalyDetection">AnomalyDetection</a>" : <i><a href="anomalydetectionpolicy.md">AnomalyDetectionPolicy</a></i>,
        "<a href="#type" title="Type">Type</a>" : <i>String</i>,
        "<a href="#name" title="Name">Name</a>" : <i>String</i>,
        "<a href="#locations" title="Locations">Locations</a>" : <i>[ String, ... ]</i>,
        "<a href="#script" title="Script">Script</a>" : <i><a href="script.md">Script</a></i>,
        "<a href="#tags" title="Tags">Tags</a>" : <i>[ <a href="tag.md">Tag</a>, ... ]</i>,
        "<a href="#manuallyassignedapps" title="ManuallyAssignedApps">ManuallyAssignedApps</a>" : <i>[ String, ... ]</i>,
        "<a href="#managementzones" title="ManagementZones">ManagementZones</a>" : <i>[ Map, ... ]</i>,
        "<a href="#automaticallyassignedapps" title="AutomaticallyAssignedApps">AutomaticallyAssignedApps</a>" : <i>[ String, ... ]</i>
    }
}
</pre>

### YAML

<pre>
Type: Dynatrace::Environment::SyntheticMonitor
Properties:
    <a href="#frequencymin" title="FrequencyMin">FrequencyMin</a>: <i>Integer</i>
    <a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
    <a href="#anomalydetection" title="AnomalyDetection">AnomalyDetection</a>: <i><a href="anomalydetectionpolicy.md">AnomalyDetectionPolicy</a></i>
    <a href="#type" title="Type">Type</a>: <i>String</i>
    <a href="#name" title="Name">Name</a>: <i>String</i>
    <a href="#locations" title="Locations">Locations</a>: <i>
      - String</i>
    <a href="#script" title="Script">Script</a>: <i><a href="script.md">Script</a></i>
    <a href="#tags" title="Tags">Tags</a>: <i>
      - <a href="tag.md">Tag</a></i>
    <a href="#manuallyassignedapps" title="ManuallyAssignedApps">ManuallyAssignedApps</a>: <i>
      - String</i>
    <a href="#managementzones" title="ManagementZones">ManagementZones</a>: <i>
      - Map</i>
    <a href="#automaticallyassignedapps" title="AutomaticallyAssignedApps">AutomaticallyAssignedApps</a>: <i>
      - String</i>
</pre>

## Properties

#### FrequencyMin

The frequency of the monitor, in minutes.

You can use one of the following values: 5, 10, 15, 30, and 60.

_Required_: Yes

_Type_: Integer

_Allowed Values_: <code>5</code> | <code>10</code> | <code>15</code> | <code>30</code> | <code>60</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Enabled

The monitor is enabled (true) or disabled (false).

_Required_: Yes

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AnomalyDetection

The anomaly detection configuration.

_Required_: No

_Type_: <a href="anomalydetectionpolicy.md">AnomalyDetectionPolicy</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Type

Defines the actual set of fields depending on the value. See one of the following objects:

    BROWSER -> BrowserSyntheticMonitor
    HTTP -> HttpSyntheticMonitor

_Required_: No

_Type_: String

_Allowed Values_: <code>BROWSER</code> | <code>HTTP</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Name

The name of the monitor.

_Required_: Yes

_Type_: String

_Minimum Length_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Locations

A list of locations from which the monitor is executed.

To specify a location, use its entity ID.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Script

The script of a browser (https://dt-url.net/9c103rda) or HTTP monitor.

_Required_: No

_Type_: <a href="script.md">Script</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tags

A set of tags assigned to the monitor.

_Required_: No

_Type_: List of <a href="tag.md">Tag</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ManuallyAssignedApps

A set of manually assigned applications.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ManagementZones

A set of management zones to which the monitor belongs to.

_Required_: No

_Type_: List of Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AutomaticallyAssignedApps

A set of automatically assigned applications.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

## Return Values

### Ref

When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the EntityId.

### Fn::GetAtt

The `Fn::GetAtt` intrinsic function returns a value for a specified attribute of this type. The following are the available attributes and sample return values.

For more information about using the `Fn::GetAtt` intrinsic function, see [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html).

#### EntityId

The entity ID of the monitor.

#### CreatedFrom

The origin of a monitor

