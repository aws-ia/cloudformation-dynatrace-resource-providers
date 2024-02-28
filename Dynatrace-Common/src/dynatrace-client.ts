import axios, {AxiosResponse} from "axios";

export type ApiErrorResponse = {
    error: ApiError
}
export type ApiError = {
    code: number
    message: string
    constraintViolations?: ConstraintViolation[]
    details?: Record<string, unknown>
}
export type ConstraintViolation = {
    path: string
    message: string
    parameterLocation: string
    location?: string
}
export type PaginatedResponseType = {
    totalCount: number
    pageSize: number
    nextPageKey: string
}

export class DynatraceClient {
    protected readonly baseUrl: string;
    private readonly apiToken: string;
    protected readonly userAgent: string;

    constructor(baseUrl: string, apiToken: string, userAgent?: string) {
        this.baseUrl = baseUrl;
        this.apiToken = apiToken;
        this.userAgent = userAgent;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}, headers?: {[key: string]: string}): Promise<AxiosResponse<ResponseType>> {
        return await axios.request<ResponseType>({
            url: `${this.baseUrl}${path}`,
            params: params,
            method: method,
            data: body,
            headers: {
                'User-Agent': this.userAgent || "AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource",
                Authorization: `Api-Token ${this.apiToken}`,
                'Content-type': 'application/json; charset=utf-8',
                ...headers
            }
        });
    }

    public async paginate<ResponseType extends PaginatedResponseType, ResultType>(method: 'get' | 'put' | 'post' | 'delete', path: string, transform: (response: AxiosResponse<ResponseType>) => ResultType[], params: any = {}, body?: {}): Promise<ResultType[]> {
        const results: ResultType[] = [];

        let page = 1;
        let delegateParams = {...params};
        delete delegateParams.nextPageToken;

        while (delegateParams.nextPageToken || page === 1) {
            const response = await this.doRequest<ResponseType>(method, path, delegateParams, body);
            results.push(...transform(response))
            delegateParams = {
                ...delegateParams,
                nextPageToken: response.data ? response.data.nextPageKey : undefined
            };
            page++;
        }

        return results;
    }
}