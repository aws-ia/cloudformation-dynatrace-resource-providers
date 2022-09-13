import {ApiErrorResponse} from "./dynatrace-client";
import {
    BaseModel,
    exceptions,
    ResourceHandlerRequest
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {AxiosError} from "axios";
import {AbstractBaseResource} from "./abstract-base-resource";

export abstract class AbstractDynatraceResource<ResourceModelType extends BaseModel, GetResponseData, CreateResponseData, UpdateResponseData, TypeConfigurationM> extends AbstractBaseResource<ResourceModelType, GetResponseData, CreateResponseData, UpdateResponseData, AxiosError<ApiErrorResponse>, TypeConfigurationM> {

    processRequestException(e: AxiosError<ApiErrorResponse>, request: ResourceHandlerRequest<ResourceModelType>) {
        const apiErrorResponse = e.response?.data;
        let errorMessage = apiErrorResponse?.error.message || e.message;
        if (Array.isArray(apiErrorResponse?.error.constraintViolations)) {
            errorMessage += '\n' + apiErrorResponse.error.constraintViolations.map(cv => `[PATH: ${cv.path}] ${cv.message}`).join('\n');
        }

        const status = e.status
            ? parseInt(e.status)
            : e.response
                ? e.response.status
                : null;
        switch (status) {
            case 400:
                throw new exceptions.InvalidRequest(errorMessage);
            case 401:
                throw new exceptions.AccessDenied(`Access denied, please check your API token: ${errorMessage}`);
            case 404:
                throw new exceptions.NotFound(this.typeName, request.logicalResourceIdentifier);
            case 429:
                throw new exceptions.ServiceLimitExceeded(errorMessage);
            default:
                throw new exceptions.InternalFailure(`Unexpected error occurred while talking to the Dynatrace API: ${errorMessage}`);
        }
    }
}