import {ResourceModel, TypeConfigurationModel} from './models';
import {RetryableCallbackContext} from '../../Dynatrace-Common/src/abstract-base-resource';
import {AbstractDynatraceResource} from '../../Dynatrace-Common/src/abstract-dynatrace-resource';
import {ApiErrorResponse, DynatraceClient} from '../../Dynatrace-Common/src/dynatrace-client';
import {CaseTransformer, Transformer} from '../../Dynatrace-Common/src/util';
import {version} from "../package.json";
import {AxiosError, AxiosResponse} from "axios";
import {
    Action,
    AwsTaskWorkerPool,
    BaseModel,
    Constructor,
    exceptions,
    handlerEvent,
    HandlerSignatures,
    LoggerProxy,
    OperationStatus,
    Optional,
    ProgressEvent,
    ResourceHandlerRequest,
    SessionProxy
} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib";
import {NotFound} from "@amazon-web-services-cloudformation/cloudformation-cli-typescript-lib/dist/exceptions";

type SyntheticMonitorPayload = {
    entityId: string
    script?: { [key: string]: any },
    events?: any[],
    userAgent?: string,
    bandwidth?: any,
    anomalyDetection?: any
};

type SyntheticMonitorsPayload = {
    monitors: SyntheticMonitorPayload[]
}

type EventuallyConsistentCallbackContext = {
    serverTiming?: number
} & RetryableCallbackContext;

class Resource extends AbstractDynatraceResource<ResourceModel, AxiosResponse<SyntheticMonitorPayload>, AxiosResponse<SyntheticMonitorPayload>, AxiosResponse<SyntheticMonitorPayload>, TypeConfigurationModel> {

    private userAgent = `AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation resource ${this.typeName}/${version}`;
    private callbackDelay = 30;
    private stabilizationRetries = 5;

    constructor(typeName: string, modelTypeReference: Constructor<ResourceModel>, workerPool: AwsTaskWorkerPool, handlers: HandlerSignatures<ResourceModel, BaseModel>, typeConfigurationTypeReference: Constructor<BaseModel> & { deserialize: Function }) {
        super(typeName, modelTypeReference, workerPool, handlers, typeConfigurationTypeReference);
        this.maxRetries = 10;
    }

    @handlerEvent(Action.Create)
    public async createHandler(
      session: Optional<SessionProxy>,
      request: ResourceHandlerRequest<ResourceModel>,
      callbackContext: RetryableCallbackContext,
      logger: LoggerProxy,
      typeConfiguration: TypeConfigurationModel
    ): Promise<ProgressEvent<ResourceModel, RetryableCallbackContext>> {
        let model = this.newModel(request.desiredResourceState);

        if (!callbackContext.retry) {
            // GET to ensure doesn't already exist
            // if returned, throw error AlreadyExists
            // if 404 (NotFound), proceed since doesn't exist
            // if 400, proceed since that's what we get if we initially use undefined as entityId
            // otherwise, process the error and if 503 (ServiceInternalError) retry, else throw
            try {
                logger.log('>>>>> createHandler - INITIAL GET')
                const getResult = await this.get(model, typeConfiguration);
                if (getResult){
                    logger.log('>>>>> createHandler - INITIAL GET - already exists - BAD')
                    throw new exceptions.AlreadyExists(this.typeName, request.logicalResourceIdentifier);
                }
            } catch (e1) {
                logger.log('>>>>> createHandler - INITIAL GET - (error thrown) does not exist - GOOD')
                const error = JSON.parse(JSON.stringify(e1));
                if (!(error.status === 404) && !(error.status === 400)) {
                    logger.log('>>>>> createHandler - INITIAL GET - (error thrown) unexpected error - BAD')
                    try {
                        logger.log('>>>>> createHandler - INITIAL GET - (error thrown) checking for retry')
                        return this.processRequestExceptionWithRetryableErrors(e1, request, model, callbackContext,['ServiceInternalError']);
                    } catch (e2) {
                        logger.log('>>>>> createHandler - INITIAL GET - (error thrown) throwing unexpected error - BAD')
                        throw e2;
                    }
                }
            }

            // CREATE
            // if successful, retry to ensure if created successfully,
            // otherwise, process the error and if 404 (NotFound) or 503 (ServiceInternalError) retry, else throw
            try {
                logger.log('>>>>> createHandler - CREATE')
                let data = await this.create(model, typeConfiguration);
                logger.log('>>>>> createHandler - CREATE - success - GOOD')
                model = this.setModelFrom(model, data);
                const retry = 1;
                const maxDelay = Math.pow(2, Math.floor(retry/2)) * Math.random();
                return ProgressEvent.builder<ProgressEvent<ResourceModel, RetryableCallbackContext>>()
                  .status(OperationStatus.InProgress)
                  .resourceModel(model)
                  .callbackContext({
                      retry: retry
                  })
                  .callbackDelaySeconds(maxDelay * Math.random())
                  .build();
            } catch (e) {
                logger.log('>>>>> createHandler - CREATE - error - BAD')
                logger.log(`Error ${e}`);
                try {
                    return this.processRequestExceptionWithRetryableErrors(e, request, model, callbackContext,['NotFound','ServiceInternalError']);
                } catch (e) {
                    throw e;
                }
            }
        }

        // GET to ensure created successfully
        // if retrieved successfully 5 times in a row, return success
        // otherwise, process the error and if 404 (NotFound) or 503 (ServiceInternalError) retry, else throw
        try {
            // console.log('FINAL CHECK!!!!')
            logger.log('>>>>> createHandler - FINAL CHECK')
            const data = await this.get(model, typeConfiguration);

            logger.log('>>>>> createHandler - FINAL CHECK - exists - GOOD')

            const successfulCalls = callbackContext.successfulCalls || 0;
            if (successfulCalls < this.stabilizationRetries){
                logger.log('>>>>> createHandler - FINAL CHECK - stabilize try: ' + successfulCalls)
                if (callbackContext.retry <= this.maxRetries) {
                    const maxDelay = Math.pow(2, Math.floor(callbackContext.retry/2)) * Math.random();
                    return ProgressEvent.builder<ProgressEvent<ResourceModel, RetryableCallbackContext>>()
                      .status(OperationStatus.InProgress)
                      .resourceModel(model)
                      .callbackContext({
                          retry: callbackContext.retry,
                          successfulCalls: callbackContext.successfulCalls + 1
                      })
                      .callbackDelaySeconds(maxDelay * Math.random())
                      .build();
                }
            }

            model = this.setModelFrom(model, data);
            return ProgressEvent.success<ProgressEvent<ResourceModel, RetryableCallbackContext>>(model);
        } catch (e1) {
            logger.log('>>>>> createHandler - FINAL CHECK - error - check for retry: ' + callbackContext.retry)
            try {
                return this.processRequestExceptionWithRetryableErrors(e1, request, model, callbackContext,['NotFound','ServiceInternalError']);
            } catch (e2) {
                logger.log('>>>>> createHandler - FINAL CHECK - error no retry - BAD')
                throw e2;
            }
        }
    }



    @handlerEvent(Action.Update)
    async updateHandler(
        session: Optional<SessionProxy>,
        request: ResourceHandlerRequest<ResourceModel>,
        callbackContext: EventuallyConsistentCallbackContext,
        logger: LoggerProxy,
        typeConfiguration: TypeConfigurationModel
    ): Promise<ProgressEvent<ResourceModel, EventuallyConsistentCallbackContext>> {
        let model = this.newModel(request.desiredResourceState);

        if (callbackContext.retry && callbackContext.retry > this.maxRetries) {
            throw new exceptions.NotStabilized(`Resource failed to stabilized after ${this.maxRetries} retries`);
        }

        if (!callbackContext.serverTiming && !callbackContext.operationCompleted) {
            // GET to ensure the resource exists
            // if retrieved, proceed
            // otherwise, process the error and if 503 (ServiceInternalError) retry, else throw
            try {
                await this.get(model, typeConfiguration);
            } catch (e1) {
                try {
                    return this.processRequestExceptionWithRetryableErrors(e1, request, model, callbackContext,['ServiceInternalError']);
                } catch (e2) {
                    throw e2;
                }
            }

            // UPDATE
            // if successful, trigger a retry with operationCompleted that just does a final get (if proceeding immediately, the consecutive get seems to return non updated data)
            // otherwise, process the error and if 404 (NotFound) or 503 (ServiceInternalError) retry, else throw
            try {
                await this.update(model, typeConfiguration);
                const retry = callbackContext.retry || 1;
                const maxDelay = Math.pow(2, Math.floor(retry/2)) * Math.random();
                return ProgressEvent.builder<ProgressEvent<ResourceModel, RetryableCallbackContext>>()
                  .status(OperationStatus.InProgress)
                  .resourceModel(model)
                  .callbackContext({
                      retry: retry,
                      operationCompleted: true
                  })
                  .callbackDelaySeconds(maxDelay * Math.random())
                  .build();
            } catch (e1) {
                logger.log(`Error ${e1}`);
                try {
                    return this.processRequestExceptionWithRetryableErrors(e1, request, model, callbackContext,['NotFound','ServiceInternalError']);
                } catch (e2) {
                    throw e2;
                }
            }
        }

        // GET to ensure updated successfully
        // if retrieved successfully and server timing ok, proceed
        // otherwise, process the error and if 503 (ServiceInternalError) retry, else throw
        try {
            const getResponse = await this.get(model, typeConfiguration);
            const getServerTiming = this.getServerTiming(getResponse);

            if (callbackContext.serverTiming && getServerTiming < callbackContext.serverTiming) {
                return ProgressEvent.builder<ProgressEvent<ResourceModel, EventuallyConsistentCallbackContext>>()
                    .status(OperationStatus.InProgress)
                    .resourceModel(model)
                    .callbackContext({
                        serverTiming: getServerTiming,
                        retry: callbackContext.retry + 1
                    }).build();
            }

            model = this.setModelFrom(model, getResponse);
            return ProgressEvent.success<ProgressEvent<ResourceModel, EventuallyConsistentCallbackContext>>(model);
        } catch (e1) {
            if (!callbackContext.serverTiming) {
                throw new exceptions.NotStabilized(`Resource failed to stabilized after ${this.callbackDelay} seconds: ${e1.message}`);
            } else {
                try {
                    return this.processRequestExceptionWithRetryableErrors(e1, request, model, callbackContext,['ServiceInternalError']);
                } catch (e2) {
                    throw e2;
                }
            }
        }
    }
    @handlerEvent(Action.Delete)
    public async deleteHandler(
      session: Optional<SessionProxy>,
      request: ResourceHandlerRequest<ResourceModel>,
      callbackContext: RetryableCallbackContext,
      logger: LoggerProxy,
      typeConfiguration: TypeConfigurationModel
    ): Promise<ProgressEvent<ResourceModel, RetryableCallbackContext>> {
        logger.log('>>>>> deleteHandler')
        let model = this.newModel(request.desiredResourceState);


        if (!callbackContext.operationCompleted){
            // GET to ensure the resource exists
            // if retrieved, proceed
            // otherwise, process the error and if 'ServiceInternalError' retry, else throw
            logger.log('>>>>> deleteHandler - operation not completed')
            try {
                await this.get(model, typeConfiguration);
                logger.log('>>>>> deleteHandler - get ok - GOOD')
            } catch (e1) {
                logger.log('>>>>> deleteHandler - ERROR - check for retries')
                try {
                    return this.processRequestExceptionWithRetryableErrors(e1, request, model, callbackContext,['ServiceInternalError']);
                } catch (e2) {
                    logger.log('>>>>> deleteHandler - ERROR no retry - BAD')
                    throw e2;
                }
            }

            // DELETE
            // if successful, retry with the flag operationCompleted so can be verified
            // otherwise, process the error and if 404 (NotFound) or 503 (ServiceInternalError) retry, else throw
            try {
                logger.log('>>>>> deleteHandler - DELETE')
                await this.delete(model, typeConfiguration);
                logger.log('>>>>> deleteHandler - DELETE OK')
            } catch (e1) {
                logger.log('>>>>> deleteHandler - DELETE ERROR')
                logger.log(`Error ${e1}`);
                try {
                    return this.processRequestExceptionWithRetryableErrors(e1, request, model, callbackContext,['NotFound','ServiceInternalError']);
                } catch (e2) {
                    logger.log('>>>>> deleteHandler - DELETE ERROR - no retry - BAD')
                    throw e2;
                }
            }
        }

        // GET to ensure delete was successful
        // if retrieved, retry
        // otherwise, if error 404 (NotFound) mark as success, else if 503 (ServiceInternalError) retry, else throw
        try {
            logger.log('>>>>> deleteHandler - FINAL CHECK')
            await this.get(model, typeConfiguration);
            logger.log('>>>>> deleteHandler - FINAL CHECK - still exists')
            const retry = callbackContext.retry || 1;
            if (retry <= this.maxRetries) {
                const maxDelay = Math.pow(2, Math.floor(callbackContext.retry/2)) * Math.random();
                const retry = callbackContext.retry || 1;
                logger.log('>>>>> deleteHandler - FINAL CHECK - retry')
                return ProgressEvent.builder<ProgressEvent<ResourceModel, RetryableCallbackContext>>()
                  .status(OperationStatus.InProgress)
                  .resourceModel(model)
                  .callbackContext({
                      retry: retry + 1,
                      operationCompleted: true
                  })
                  .callbackDelaySeconds(maxDelay * Math.random())
                  .build();
            } else {
                logger.log('>>>>> deleteHandler - FINAL CHECK - not stabuilized - BAD')
                throw new exceptions.NotStabilized(`Resource failed to stabilized after ${this.maxRetries} retries`);
            }
        } catch (e1) {
            logger.log('>>>>> deleteHandler - FINAL CHECK - ERROR (expected)')
            try {
                const updatedCallbackContext : RetryableCallbackContext = {
                    retry: callbackContext.retry,
                    operationCompleted: true
                }
                const response = this.processRequestExceptionWithRetryableErrors(e1, request, model, updatedCallbackContext,['ServiceInternalError']);
                return response
            } catch (e2) {
                if (e2 instanceof NotFound) {
                    logger.log('>>>>> deleteHandler - FINAL CHECK - does not exist - GOOD!')
                    return ProgressEvent.success<ProgressEvent<ResourceModel, RetryableCallbackContext>>();
                }
                throw e2;
            }
        }
    }


    processRequestExceptionWithRetryableErrors(
      e: AxiosError<ApiErrorResponse>,
      request: ResourceHandlerRequest<ResourceModel>,
      model: ResourceModel,
      callbackContext: RetryableCallbackContext,
      retryableErrorsList: string[]) {
        try {
            this.processRequestException(e, request);
        } catch (e) {
            if (retryableErrorsList.includes(e.errorCode)){
                const updatedContext = {...callbackContext};
                updatedContext.retry = callbackContext.retry || 0 + 1
                const maxDelay = Math.pow(2, Math.floor(updatedContext.retry/2)) * Math.random();
                return ProgressEvent.builder<ProgressEvent<ResourceModel, RetryableCallbackContext>>()
                  .status(OperationStatus.InProgress)
                  .resourceModel(model)
                  .callbackContext(updatedContext)
                  .callbackDelaySeconds(maxDelay * Math.random())
                  .build();
            }
            throw e;
        }
    }


    async get(model: ResourceModel, typeConfiguration?: TypeConfigurationModel, numberRetries? : number): Promise<AxiosResponse<SyntheticMonitorPayload>> {
        // console.log('>>>>> GET')
        try {
            const a = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
              'get',
              `/api/v1/synthetic/monitors/${model.entityId}`);
            return a;
        } catch (e) {
            // console.log({
            //     estatus: e.status,
            //     estatuscode: e.statusCode,
            //     ecode: e.code
            // })
            throw e;
        }
    }

    async list(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<ResourceModel[]> {
        const response = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorsPayload>(
            'get',
            `/api/v1/synthetic/monitors`);
        return response.data.monitors.map(monitorPayload => this.setModelFrom(model, {data: monitorPayload} as AxiosResponse<SyntheticMonitorPayload>))
    }

    async create(model: ResourceModel, typeConfiguration?: TypeConfigurationModel): Promise<AxiosResponse<SyntheticMonitorPayload>> {
        try {
            const a = await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
              'post',
              '/api/v1/synthetic/monitors',
              {},
              Transformer.for(model.toJSON())
                .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
                .transform()
            );
            // console.log({
            //     createResult: a.status,
            //     createReturnData: a.data
            // })
            return a;
        } catch (e) {
            // console.log({
            //     estatus: e.status,
            //     estatuscode: e.statusCode,
            //     ecode: e.code
            // })
            throw e;
        }
    }

    async update(model: ResourceModel, typeConfiguration?: TypeConfigurationModel, numberRetries?: number): Promise<AxiosResponse<SyntheticMonitorPayload>> {
        return await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
          'put',
          `/api/v1/synthetic/monitors/${model.entityId}`,
          {},
          Transformer.for(model.toJSON())
            .transformKeys(CaseTransformer.PASCAL_TO_CAMEL)
            .transform());
    }

    async delete(model: ResourceModel, typeConfiguration?: TypeConfigurationModel, numberRetries?: number): Promise<void> {
        await new DynatraceClient(typeConfiguration?.dynatraceAccess.endpoint, typeConfiguration?.dynatraceAccess.token, this.userAgent).doRequest<SyntheticMonitorPayload>(
          'delete',
          `/api/v1/synthetic/monitors/${model.entityId}`);
    }

    newModel(partial?: any): ResourceModel {
        return new ResourceModel(partial);
    }

    setModelFrom(model: ResourceModel, from?: AxiosResponse<SyntheticMonitorPayload>): ResourceModel {
        if (!from.data) {
            return model;
        }

        if (!from.data.events){
            from.data.events = []
        }

        if (from.data.script && from.data.script.configuration && !from.data.script.configuration.userAgent && model.script?.configuration?.userAgent){
            from.data.script.configuration.userAgent = model.script.configuration.userAgent
        }

        if (from.data.script && from.data.script.configuration && !from.data.script.configuration.bandwidth && model.script?.configuration?.bandwidth){
            from.data.script.configuration.bandwidth = model.script.configuration.bandwidth
        }

        const resourceModel = new ResourceModel({
            ...Transformer.for(from.data)
                .transformKeys(CaseTransformer.IDENTITY)
                .forModelIngestion()
                .transform()
        });
        delete resourceModel.tags;
        delete (<any>resourceModel)?.requests;
        delete (<any>resourceModel)?.anomalyDetection;
        delete (<any>resourceModel)?.script?.configuration?.chromiumStartupFlags;
        return resourceModel;
    }

}

export const resource = new Resource(ResourceModel.TYPE_NAME, ResourceModel, null, null, TypeConfigurationModel);

// Entrypoint for production usage after registered in CloudFormation
export const entrypoint = resource.entrypoint;

// Entrypoint used for local testing
export const testEntrypoint = resource.testEntrypoint;