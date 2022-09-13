import {AbstractDynatraceResource} from "./abstract-dynatrace-resource";
import {BaseModel, ResourceHandlerRequest} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {ApiErrorResponse} from "./dynatrace-client";
import {AxiosError, AxiosResponse} from "axios";
import {
    AccessDenied,
    InternalFailure,
    InvalidRequest,
    NotFound,
    ServiceLimitExceeded
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";

class TestAbstractDynatraceResource extends AbstractDynatraceResource<BaseModel, {}, {}, {}, {}> {
    create(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    delete(model: BaseModel): Promise<void> {
        return Promise.resolve(undefined);
    }

    get(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }

    list(model: BaseModel): Promise<BaseModel[]> {
        return Promise.resolve([]);
    }

    newModel(partial: any): BaseModel {
        return undefined;
    }

    setModelFrom(model: BaseModel, from: {} | undefined): BaseModel {
        return undefined;
    }

    update(model: BaseModel): Promise<{}> {
        return Promise.resolve({});
    }
}

describe('AbstractDynatraceResource', () => {
    describe('processRequestException', () => {
        let testInstance: TestAbstractDynatraceResource;

        beforeAll(() => {
            testInstance = new TestAbstractDynatraceResource('foo', BaseModel);
        });

        it.each([
            [InvalidRequest, '400'],
            [AccessDenied, '401'],
            [NotFound, '404'],
            [ServiceLimitExceeded, '429'],
            [InternalFailure, '500'],
            [InternalFailure, null],
            [InternalFailure, undefined]
        ])('throws a %p if the request has a HTTP %s status code', (errorType, statusCode) => {
            const error = 'Forced error';
            let axiosError = new AxiosError<ApiErrorResponse>(error);
            axiosError.status = statusCode;

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e).toBeInstanceOf(errorType);
                if (e instanceof NotFound) {
                    expect(e.message).not.toContain(error);
                } else {
                    expect(e.message).toContain(error);
                }
            }
        });

        it('serialize constraint validations into exception message, if any', () => {
            const error = 'Forced error';
            let response: ApiErrorResponse = {
                error: {
                    message: 'Forced error',
                    code: 123456,
                    constraintViolations: [
                        {
                            message: 'foo',
                            location: 'bar',
                            path: 'foo',
                            parameterLocation: '${bar}'
                        },
                        {
                            message: 'hello',
                            location: 'world',
                            path: 'hello',
                            parameterLocation: '${world}'
                        }
                    ]
                }

            };
            const axiosError = new AxiosError<ApiErrorResponse>(error, undefined, undefined, undefined, {
                data: response
            } as AxiosResponse);
            axiosError.status = '400';

            try {
                testInstance.processRequestException(axiosError, {logicalResourceIdentifier: 'foo'} as ResourceHandlerRequest<BaseModel>);
                fail('This should have thrown');
            } catch (e) {
                expect(e.message).toContain(error);
                response.error.constraintViolations.forEach(constraintViolation => {
                    expect(e.message).toContain(`[PATH: ${constraintViolation.path}] ${constraintViolation.message}`);
                });
            }
        });
    });
});
