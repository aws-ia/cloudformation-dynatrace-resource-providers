# cloudformation-dynatrace

## Set up local type configuration

When running contract or SAM tests locally, the resources expect the Rollbar token to be available via the type configuration.
Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing
```bash
cat << EOF >> ~/.cfn-cli/typeConfiguration.json
{
  "DynatraceAccess": {
    "Token": "[dynatraceToken]",
    "Endpoint": "[dynatraceEndpoint]"
  }
}
EOF
```