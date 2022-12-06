# Dynatrace CloudFormation Resources

This collection of [AWS CloudFormation resource types][1] allow Dynatrace to be controlled using [AWS CloudFormation][2].

See the [end-user documentation](docs/user/src/main/docs) including:

* [examples](docs/user/src/main/docs/stories/starting-a-project)
* [supported GitHub resource types](docs/user/generated/resources)

There is also [developer documentation](docs/dev) available
if you are interested in building or contributing.

There is also [developer documentation](docs/dev) available
if you are interested in building or contributing.

| Resource | Description | Documentation |
| --- | --- | --- |
| Dynatrace::Configuration::Dashboard | This resource type manages a [Dynatrace Dashboard][3] | [/Dynatrace-Configuration-Dashboard][4] |
| Dynatrace::Environment::Metric | This resource type manages a [Dynatrace Metric][5] | [/Dynatrace-Environment-Metric][6] |
| Dynatrace::Environment::ServiceLevelObjective | This resource type manages a [Dynatrace Service Level Objective][7] | [/Dynatrace-Environment-ServiceLevelObjective][8] |
| Dynatrace::Environment::SyntheticLocation | This resource type manages a [Dynatrace Synthetic Location][9] | [/Dynatrace-Environment-SyntheticLocation][10] |
| Dynatrace::Environment::SyntheticMonitor | This resource type manages a [Dynatrace Synthetic Monitor][19] | [/Dynatrace-Environment-SyntheticMonitor][20] |


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

### Shows how to create an Metric in Dynatrace
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create an Metric in Dynatrace
Resources:
  TimeToCompletionMetric:
    Type: Dynatrace::Environment::Metric
    Properties:
      Id: custom:kpis.timeToCompletion
      DisplayName: Average time for a customer to complete the sales process, from cart
      Unit: Second (s)
      Dimensions:
        - ACME
        - KPIS
      Types:
        - Web
  SuccessCountMetric:
    Type: Dynatrace::Environment::Metric
    Properties:
      Id: custom:kpis.successCount
      DisplayName: Number of people having something in their cart and completing the sale
      Unit: Count (count)
      Dimensions:
        - ACME
        - KPIS
      Types:
        - Web
  DropCountMetric:
    Type: Dynatrace::Environment::Metric
    Properties:
      Id: custom:kpis.dropCount
      DisplayName: Number of people having something in their cart, to failing to complete the sale
      Unit: Count (count)
      Dimensions:
        - ACME
        - KPIS
      Types:
        - Web
```

### Shows how to create an Service Level Objective in Dynatrace
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create an Service Level Objective in Dynatrace
Resources:
  SaleFailureServiceLevelObjective:
    Type: Dynatrace::Environment::ServiceLevelObjective
    DependsOn:
      - SuccessCountMetric
      - DropCountMetric
    Properties:
      Name: Sale failure
      MetricExpression: "(100)*(ext:kpis.dropCount)/(ext:kpis.successCount)"
      EvaluationType: AGGREGATE
      Target: 1
      Warning: 3
      ErrorBudgetBurnRate:
        FastBurnThreshold: 10
        BurnRateVisualizationEnabled: true
      Timeframe: "-1w"
```

### Shows how to create a Synthetic Location in Dynatrace
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Synthetic Location in Dynatrace
Resources:
  ActiveGateLocation:
    Type: Dynatrace::Environment::SyntheticLocation
    Properties:
      Type: PRIVATE
      Name: UK ActiveGate
      CountryCode: GB
      City: Edinburgh
      Latitude: 55.9533
      Longitude: 3.1883
      LocationNodeOutageDelayInMinutes: 3
      Nodes: !Ref NodeIds
```

### Shows how to create a Synthetic Monitor in Dynatrace
```yaml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: Shows how to create a Synthetic Monitor in Dynatrace
Resources:
  HealthMonitor:
    Type: Dynatrace::Environment::SyntheticMonitor
    Properties:
      FrequencyMin: 5
      Name: ACME Health Monitor
      Enabled: true
      Type: HTTP
      AnomalyDetection:
        OutageHandling:
          GlobalOutage: true
          GlobalOutagePolicy:
            ConsecutiveRuns: 3
          LocalOutage: true
          LocalOutagePolicy:
            AffectedLocations: 1
            ConsecutiveRuns: 3
        LoadingTimeThresholds:
          Enabled: true
          Thresholds:
            - Type: TOTAL
              ValueMs: 100
      Script:
        version: 1.0
        requests:
          - url: https://aws.amazon.com
            method: GET
            description: HTTP request test
            validation:
              rules:
                - type: httpStatusesList
                  value: 500, 400
                  passIfFound: false
                - type: httpStatusesList
                  value: 200, 204, 302
                  passIfFound: true
      Locations:
        - !Ref ActiveGateLocation
```

[1]: https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/resource-types.html
[2]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html
[3]: https://www.dynatrace.com/support/help/how-to-use-dynatrace/dashboards-and-charts
[4]: ./Dynatrace-Configuration-Dashboard/
[5]: https://www.dynatrace.com/support/help/how-to-use-dynatrace/metrics
[6]: ./Dynatrace-Environment-Metric/
[7]: https://www.dynatrace.com/support/help/how-to-use-dynatrace/cloud-automation/service-level-objectives
[8]: ./Dynatrace-Environment-ServiceLevelObjective/
[9]: https://www.dynatrace.com/support/help/how-to-use-dynatrace/synthetic-monitoring/general-information/public-synthetic-locations
[10]: ./Dynatrace-Environment-SyntheticLocation/
[11]: https://aws.amazon.com/console/
[12]: https://console.aws.amazon.com/cloudformation/home
[13]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/registry.html
[14]: https://aws.amazon.com/account/
[15]: https://aws.amazon.com/cli/
[16]: https://www.dynatrace.com/
[17]: https://www.dynatrace.com/support/help/get-started/access-tokens
[18]: ./docs/user/src/main/docs/README.md
[19]: https://www.dynatrace.com/support/help/how-to-use-dynatrace/synthetic-monitoring
[20]: ./Dynatrace-Environment-SyntheticMonitor/