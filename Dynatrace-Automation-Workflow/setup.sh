#!/bin/bash
#
# Set up any prerequisites needed for cfn test
#
mkdir -p inputs
cat example_inputs/inputs_1_create.json | sed "s/DYNATRACE_USER_ID/${DYNATRACE_USER_ID}/g" > inputs/inputs_1_create.json
cat example_inputs/inputs_1_invalid.json | sed "s/DYNATRACE_USER_ID/${DYNATRACE_USER_ID}/g" > inputs/inputs_1_invalid.json
cat example_inputs/inputs_1_update.json | sed "s/DYNATRACE_USER_ID/${DYNATRACE_USER_ID}/g" > inputs/inputs_1_update.json
cat test/integ-template.yml | sed "s/DYNATRACE_USER_ID/${DYNATRACE_USER_ID}/g" > test/integ.yml

