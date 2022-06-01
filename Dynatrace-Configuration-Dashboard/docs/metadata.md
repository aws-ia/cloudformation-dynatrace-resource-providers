# Dynatrace::Configuration::Dashboard Metadata

Metadata useful for debugging.

## Syntax

To declare this entity in your AWS CloudFormation template, use the following syntax:

### JSON

<pre>
{
    "<a href="#configurationversions" title="ConfigurationVersions">ConfigurationVersions</a>" : <i>[ Integer, ... ]</i>,
    "<a href="#currentconfigurationversions" title="CurrentConfigurationVersions">CurrentConfigurationVersions</a>" : <i>[ String, ... ]</i>,
    "<a href="#clusterversion" title="ClusterVersion">ClusterVersion</a>" : <i>String</i>
}
</pre>

### YAML

<pre>
<a href="#configurationversions" title="ConfigurationVersions">ConfigurationVersions</a>: <i>
      - Integer</i>
<a href="#currentconfigurationversions" title="CurrentConfigurationVersions">CurrentConfigurationVersions</a>: <i>
      - String</i>
<a href="#clusterversion" title="ClusterVersion">ClusterVersion</a>: <i>String</i>
</pre>

## Properties

#### ConfigurationVersions

A sorted list of the version numbers of the configuration.

_Required_: No

_Type_: List of Integer

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### CurrentConfigurationVersions

A sorted list of version numbers of the configuration.

_Required_: No

_Type_: List of String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

#### ClusterVersion

Dynatrace version.

_Required_: No

_Type_: String

_Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)

