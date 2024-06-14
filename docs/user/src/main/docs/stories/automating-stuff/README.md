# Setting up a Sustainability Workflow

This example sets up a workflow that uses a Site Reliability Guardian to validate an SLO for 
sustainability and could be part of a release validation workflow similar to what is described [here](https://www.dynatrace.com/news/blog/implementing-aws-well-architected-pillars/).

This exmple uses the following types:

* `Dynatrace::Automation::Workflow` - triggered against a new release candidate 
* `Dynatrace::Automation::SiteReliability::Guardian` - checks CO2 output and resource utilisation against metric ranges

The [example cloudformation](./example.yaml) stack has the following paramaters: TargetCO2, WarningCO2, TargetUtilization, WarningUtilization
and you can create a new stack with the following command:

```bash
aws cloudformation update-stack --region eu-west-1 --stack-name My-Dynatrace --template-body file://example.yaml
```

