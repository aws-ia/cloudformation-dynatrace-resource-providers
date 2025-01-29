#!/bin/bash
#
# Set up any prerequisites needed for cfn test
cat test/integ-template.yml | sed "s/DYNATRACE_MANAGEMENTZONE_ID/${DYNATRACE_MANAGEMENTZONE_ID}/g" > test/integ.yml