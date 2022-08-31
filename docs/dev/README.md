# cloudformation-dynatrace

## Set up git filter

This project uses a filter set up in the [.gitattributes](.gitattributes) file to replace private values for testing within the different `overides.json` on each resource.

The filter has to be added manually inside the `.git/config` file once the repository has been cloned.

Executing this in the console from the project root will add it. Replace the values inside the __square__ brackets with the actual values for testing

```properties
cat << EOF >> .git/config
[filter "dynatrace"]
	clean = sed \
		-e 's:[dynatraceAccessToken]:<DYNATRACE_TOKEN>:g' \
		-e 's:[dynatraceEndpoint]:<DYNATRACE_ENDPOINT>:g'
	smudge = sed \
		-e 's:<DYNATRACE_TOKEN>:[dynatraceAccessToken]:g' \
		-e 's:<DYNATRACE_ENDPOINT>:[dynatraceEndpoint]:g'
EOF
```