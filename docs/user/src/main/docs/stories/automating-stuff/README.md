# Setting up a Well-Architected Validation Workflow

This example uses AWS CloudFormation to create a workflow that combines several
Site Reliability Guardians to validate objectives for each of the pillars of
the AWS Well-Architected Framework.

See also this related [Dynatrace blog post](https://www.dynatrace.com/news/blog/implementing-aws-well-architected-pillars/).

This exmple uses the following types:

* `Dynatrace::Automation::Workflow` - triggered against a new release candidate 
* `Dynatrace::Automation::SiteReliability::Guardian` - checks CO2 output and resource utilisation against metric ranges

The [example cloudformation template](./dynatrace-six-pillars.yaml) accepts the following paramaters: TargetCo2, WarningCo2, TargetUtilization, WarningUtilization.

You can create a new stack with the following command:

```bash
aws cloudformation deploy \
  --region eu-west-1 \
  --stack-name Dynatrace-Six-Pillars \
  --template-file dynatrace-six-pillars.yaml
```


Steps:
- register type (if not published)
  - `npm run build` - top level (requires cfn cl and aws cli and node)
    - cfn - `pip install cloudformation-cli cloudformation-cli-java-plugin cloudformation-cli-typescript-plugin`
    - aws ??? - (https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
  - per resource e.g `cd Dynatrace-Automation-Workflow` && `cfn submit --set-default -v --region eu-west-1`
    - activate type (if publised - you don't need this if your did the step above)
      - Registry -> Public extensions
        - Third party - search DT
          - activate
            - Needs IAM Execution role - ????
            -  configuration - ```json
            {
                  "DynatraceOAuthAccess": {
                  "ClientId": "{{resolve:ssm-secure:/cfn/dynatrace/oauth/clientid}}",
                  "ClientSecret": "{{resolve:ssm-secure:/cfn/dynatrace/oauth/clientsecret}}",
                  "Endpoint": "{{resolve:ssm-secure:/cfn/dynatrace/oauth/live-endpoint}}"
                  }
                }
            ```
- setup ssm keys
  - AWS Systems Manager Parameter store
    - /cfn/dynatrace/oauth/clientid 
    - /cfn/dynatrace/oauth/clientsecret
    - /cfn/dynatrace/oauth/live-endpoint
- Deploy using commmand above
  - ```bash
    aws cloudformation deploy \
  --region eu-west-1 \
  --stack-name Dynatrace-Six-Pillars \
  --template-file dynatrace-six-pillars.yaml
  ```
- Or Deploy through UI
  - Cloudforamtaion
  - Stacks (top right)
  - Create Stack
  - Select template file
  - 