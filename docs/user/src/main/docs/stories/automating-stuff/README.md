# Setting up a Well-Architected Validation Workflow

This example uses AWS CloudFormation to create a workflow that combines several
Site Reliability Guardians to validate objectives for each of the pillars of
the AWS Well-Architected Framework.

See also this related [Dynatrace blog post](https://www.dynatrace.com/news/blog/implementing-aws-well-architected-pillars/).

This exmple uses the following types:

* `Dynatrace::Automation::Workflow` - triggered against a new release candidate 
* `Dynatrace::Automation::SiteReliability::Guardian` - checks CO2 output and resource utilisation against metric ranges

The [example cloudformation template](./example.yaml) accepts the following paramaters: TargetCo2, WarningCo2, TargetUtilization, WarningUtilization.

You can create a new stack with the following command:

```bash
aws cloudformation deploy \
  --region eu-west-1 \
  --stack-name Dynatrace-Six-Pillars \
  --template-file example.yaml
```

