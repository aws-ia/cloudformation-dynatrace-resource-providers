# Dynatrace::Configuration::Dashboard

This resource type manages a [Dynatrace Dashboard][3]

[Documentation][4]

## Prerequisites
* [AWS Account][14]
* [AWS CLI][15]
* [Dynatrace account][16] and [Access Token][17]
## AWS Management Console

To get started:

1. Sign in to the [AWS Management Console][11] with your account and navigate to CloudFormation.

2. Select "Public extensions" from the left hand pane and filter Publisher by "Third Party".

3. Use the search bar to filter by the "Dynatrace" prefix.

  Note: All official  Dynatrace resources begin with `Dynatrace::` and specify that they are `Published by Dynatrace`.

4. Select the desired resource name to view more information about its schema, and click **Activate**.

5. On the **Extension details** page, specify:
  - Extension name
  - Execution role ARN
  - Automatic updates for minor version releases
  - Configuration

6. In your terminal, specify the configuration data for the registered Dynatrace CloudFormation resource type, in the given account and region by using the **SetTypeConfiguration** operation:


  For example:

  ```Bash
  $ aws cloudformation set-type-configuration \z`
  --region us-west-2 --type RESOURCE \
  --type-name Dynatrace::Configuration::Dashboard \
  --configuration-alias default \
  --configuration "{ \"DynatraceAccess\":{\"Endpoint\":\"https://abc123.live.dynatrace.com\",\"Token\":\"YOURAPIKEY\"}}"
  ```

7. After you have your resource configured, [create your AWS stack][12] that includes any of the activated Dynatrace resources.

For more information about available commands and workflows, see the official [AWS documentation][13].

## Supported regions

The Dynatrace CloudFormation resources are available on the CloudFormation Public Registry in the following regions:

| Code            | Name                      |
|-----------------|---------------------------|
| us-east-1       | US East (N. Virginia)     |
| us-east-2       | US East (Ohio)            |
| us-west-1       | US West (N. California)   |
| us-west-2       | US West (Oregon)          |
| ap-south-1      | Asia Pacific (Mumbai)     |
| ap-northeast-1  | Asia Pacific (Tokyo)      |
| ap-northeast-2  | Asia Pacific (Seoul)      |
| ap-southeast-1  | Asia Pacific (Singapore)  |
| ap-southeast-2  | Asia Pacific (Sydney)     |
| ca-central-1    | Canada (Central)          |
| eu-central-1    | Europe (Frankfurt)        |
| eu-west-1       | Europe (Ireland)          |
| eu-west-2       | Europe (London)           |
| eu-west-3       | Europe (Paris)            |
| eu-north-1      | Europe (Stockholm)        |
| sa-east-1       | South America (São Paulo) |

**Note**: To privately register a resource in any other region, use the provided packages.

## Examples

### [Sample use cases][18]

### Dynatrace Dashboard creation example using the Cloudformation Dynatrace resource
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Dynatrace Dashboard
Resources:
    AcmeDashboard:
    Type: Dynatrace::Configuration::Dashboard
    Properties:
      DashboardMetadata:
        Name: Acme Dashboard
        Owner: CloudFormation
        Shared: false
        Tags:
          - CloudFormation
          - Dynatrace
      Tiles:
        - name: Sales failure
          tileType: SLO
          configured: true
          bounds:
            top: 0
            left: 0
            width: 304
            height: 152
          tileFilter:
            timeframe: -1w
          assignedEntities:
            - !Ref SaleFailureServiceLevelObjective
          metric: METRICS=true;LEGEND=true;PROBLEMS=true;decimals=10;customTitle=Overall sale failure;
        - name: Uptime
          tileType: SYNTHETIC_HTTP_MONITOR
          configured: true
          bounds:
            top: 0
            left: 304
            width: 304
            height: 304
          assignedEntities:
            - !Ref HealthMonitor
        - name: Completion time
          tileType: DATA_EXPLORER
          configured: true
          bounds:
            top: 152
            left: 0
            width: 304
            height: 304
          customName: Data explorer results
          queries:
            - id: A
              metric: ext:kpis.timeToCompletion
              timeAggregation: DEFAULT
              sortBy: DESC
              limit: 100
              enabled: true
          visualConfig:
            type: GRAPH_CHART
            global:
              hideLegend: false
            rules:
              - matcher: "A:"
                properties:
                  color: DEFAULT
            axes:
              xAxis:
                displayName: ""
                visible: true
              yAxes:
                - displayName: ""
                  visible: true
                  min: AUTO
                  max: AUTO
                  position: LEFT
                  queryIds:
                    - A
                  defaultAxis: true
            heatmapSettings:
              yAxis: VALUE
            thresholds:
              - axisTarget: LEFT
                rules:
                  - color: "#7dc540"
                  - color: "#f5d30f"
                  - color: "#dc172a"
                queryId: ""
                visible: true
            tableSettings:
              isThresholdBackgroundAppliedToCell: false
            graphChartSettings:
              connectNulls: false
            honeycombSettings:
              showHive: true
              showLegend: true
              showLabels: false
```

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://www.dynatrace.com/support/help/how-to-use-dynatrace/dashboards-and-charts
[4]: ./docs/README.md
[11]: https://aws.amazon.com/console/
[12]: https://console.aws.amazon.com/cloudformation/home
[13]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[14]: https://aws.amazon.com/account/
[15]: https://aws.amazon.com/cli/
[16]: https://www.dynatrace.com/
[17]: https://www.dynatrace.com/support/help/get-started/access-tokens
[18]: ../docs/user/src/main/docs/README.md

# Development

Congratulations on starting development! Next steps:

1. Write the JSON schema describing your resource, [dynatrace-configuration-dashboard.json](./dynatrace-configuration-dashboard.json)
2. Implement your resource handlers in [handlers.ts](./dynatrace-configuration-dashboard/handlers.ts)

> Don't modify [models.ts](./dynatrace-configuration-dashboard/models.ts) by hand, any modifications will be overwritten when the `generate` or `package` commands are run.

Implement CloudFormation resource here. Each function must always return a ProgressEvent.

```typescript
const progress = ProgressEvent.builder<ProgressEvent<ResourceModel>>()

    // Required
    // Must be one of OperationStatus.InProgress, OperationStatus.Failed, OperationStatus.Success
    .status(OperationStatus.InProgress)
    // Required on SUCCESS (except for LIST where resourceModels is required)
    // The current resource model after the operation; instance of ResourceModel class
    .resourceModel(model)
    .resourceModels(null)
    // Required on FAILED
    // Customer-facing message, displayed in e.g. CloudFormation stack events
    .message('')
    // Required on FAILED a HandlerErrorCode
    .errorCode(HandlerErrorCode.InternalFailure)
    // Optional
    // Use to store any state between re-invocation via IN_PROGRESS
    .callbackContext({})
    // Required on IN_PROGRESS
    // The number of seconds to delay before re-invocation
    .callbackDelaySeconds(0)

    .build()
```

While importing the [@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib](https://github.com/eduardomourar/cloudformation-cli-typescript-plugin) library, failures can be passed back to CloudFormation by either raising an exception from `exceptions`, or setting the ProgressEvent's `status` to `OperationStatus.Failed` and `errorCode` to one of `HandlerErrorCode`. There is a static helper function, `ProgressEvent.failed`, for this common case.

Keep in mind, during runtime all logs will be delivered to CloudWatch if you use the `log()` method from `LoggerProxy` class.
