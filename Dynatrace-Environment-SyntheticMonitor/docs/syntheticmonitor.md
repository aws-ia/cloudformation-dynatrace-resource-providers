# Dynatrace::Environment::SyntheticMonitor SyntheticMonitor

The synthetic monitor.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#entityid" title="EntityId">EntityId</a>" : <i>String</i>,
    "<a href="#frequencymin" title="FrequencyMin">FrequencyMin</a>" : <i>Integer</i>,
    "<a href="#anomalydetection" title="AnomalyDetection">AnomalyDetection</a>" : <i><a href="anomalydetectionpolicy.md">AnomalyDetectionPolicy</a></i>,
    "<a href="#type" title="Type">Type</a>" : <i>String</i>,
    "<a href="#name" title="Name">Name</a>" : <i>String</i>,
    "<a href="#locations" title="Locations">Locations</a>" : <i>[ String, ... ]</i>,
    "<a href="#enabled" title="Enabled">Enabled</a>" : <i>Boolean</i>,
    "<a href="#script" title="Script">Script</a>" : <i>Map</i>,
    "<a href="#createdfrom" title="CreatedFrom">CreatedFrom</a>" : <i>String</i>,
    "<a href="#managementzones" title="ManagementZones">ManagementZones</a>" : <i>[ <a href="managementzone.md">ManagementZone</a>, ... ]</i>,
    "<a href="#tags" title="Tags">Tags</a>" : <i>[ <a href="tag.md">Tag</a>, ... ]</i>,
    "<a href="#manuallyassignedapps" title="ManuallyAssignedApps">ManuallyAssignedApps</a>" : <i>[ String, ... ]</i>,
    "<a href="#automaticallyassignedapps" title="AutomaticallyAssignedApps">AutomaticallyAssignedApps</a>" : <i>[ String, ... ]</i>
}
</pre>

### YAML

<pre>
<a href="#entityid" title="EntityId">EntityId</a>: <i>String</i>
<a href="#frequencymin" title="FrequencyMin">FrequencyMin</a>: <i>Integer</i>
<a href="#anomalydetection" title="AnomalyDetection">AnomalyDetection</a>: <i><a href="anomalydetectionpolicy.md">AnomalyDetectionPolicy</a></i>
<a href="#type" title="Type">Type</a>: <i>String</i>
<a href="#name" title="Name">Name</a>: <i>String</i>
<a href="#locations" title="Locations">Locations</a>: <i>
      - String</i>
<a href="#enabled" title="Enabled">Enabled</a>: <i>Boolean</i>
<a href="#script" title="Script">Script</a>: <i>Map</i>
<a href="#createdfrom" title="CreatedFrom">CreatedFrom</a>: <i>String</i>
<a href="#managementzones" title="ManagementZones">ManagementZones</a>: <i>
      - <a href="managementzone.md">ManagementZone</a></i>
<a href="#tags" title="Tags">Tags</a>: <i>
      - <a href="tag.md">Tag</a></i>
<a href="#manuallyassignedapps" title="ManuallyAssignedApps">ManuallyAssignedApps</a>: <i>
      - String</i>
<a href="#automaticallyassignedapps" title="AutomaticallyAssignedApps">AutomaticallyAssignedApps</a>: <i>
      - String</i>
</pre>

## Properties

#### EntityId

The entity ID of the monitor.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### FrequencyMin

The frequency of the monitor, in minutes.

You can use one of the following values: 5, 10, 15, 30, and 60.

_Required_: No

_Type_: Integer

_Allowed Values_: <code>5</code> | <code>10</code> | <code>15</code> | <code>30</code> | <code>60</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AnomalyDetection

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

_Required_: No

_Type_: String

_Minimum_: <code>1</code>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Locations

A list of locations from which the monitor is executed.

To specify a location, use its entity ID.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Enabled

The monitor is enabled (true) or disabled (false).

_Required_: No

_Type_: Boolean

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Script

The script of a browser (https://dt-url.net/9c103rda) or HTTP monitor.

_Required_: No

_Type_: Map

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CreatedFrom

The origin of a monitor

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ManagementZones

A set of management zones to which the monitor belongs to.

_Required_: No

_Type_: List of <a href="managementzone.md">ManagementZone</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### Tags

_Required_: No

_Type_: List of <a href="tag.md">Tag</a>

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ManuallyAssignedApps

A set of manually assigned applications.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### AutomaticallyAssignedApps

A set of automatically assigned applications.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

