# Dynatrace CloudFormation Resources

This collection of CloudFormation resource types allow Dynatrace to be controlled using AWS CloudFormation.

### Why would I want to do this?

Infrastructure-as-code such as CloudFormation is one of the best ways to create and maintain infrastructure that is reliable and secure. Or a CloudFormation template might just be more convenient for some types of automation.

Here is a sample use case this supports:

* [Set up a new project with service level objective, locations, monitors and metrics](stories/starting-a-project)

### How do I get started?

In the AWS CloudFormation UI, find the Dynatrace types in the third-party registry and activate them.
Alternatively follow the [Developer](../dev) instructions to install them manually.

You will need to set up a [Type Configuration](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/cloudformation/set-type-configuration.html)
for each of the activated types, containing a Dynatrace **Access Token** as well as the Dynatrace **endpoint** to reach.
It is recommended to set both of these into Systems Manager's secure parameter store,
e.g. as `/path/to/dynatrace/access-token` and `/path/to/dynatrace/endpoint`, and then it can be applied any of the Dynatrace type,
e.g. `Dynatrace::Configuration::Dashboard`, using:

```
aws cloudformation set-type-configuration \
--region eu-north-1 \
--type RESOURCE \
--type-name Dynatrace::Configuration::Dashboard \
--configuration-alias default \
--configuration '{"DynatraceAccess": {"AccessToken": "{{resolve:ssm-secure:/path/to/dynatrace/access-token}}", "Endpoint": "{{resolve:ssm-secure:/path/to/dynatrace/endpoint}}"}}'
```

You should then be able to run the example use cases above or build your own using the full reference below.

### What is supported?

This project does not support all the objects nor concepts in Dynatrace.
For many things there just isn't a compelling use case, and of course there are a lot.
We have focussed on those objects and properties which have seemed most useful.
If we missed something, open an issue to let us know, or even better, contribute an extension!

The **Full Dynatrace CloudFormation Resources Reference** is available [here](resources).