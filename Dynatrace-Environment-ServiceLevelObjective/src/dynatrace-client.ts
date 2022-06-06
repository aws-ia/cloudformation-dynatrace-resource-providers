import axios, {AxiosResponse} from "axios";

export type ApiErrorResponse = {
    error: ApiError
}
export type ApiError = {
    code: number
    message: string
    constraintViolations?: ConstraintViolation[]
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
    private baseUrl: string;
    private apiToken: string;

    constructor(baseUrl: string, apiToken: string) {
        this.baseUrl = baseUrl;
        this.apiToken = apiToken;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}): Promise<AxiosResponse<ResponseType>> {
        return await axios.request<ResponseType>({
            url: `${this.baseUrl}${path}`,
            params: params,
            method: method,
            data: body,
            headers: {
                Authorization: `Api-Token ${this.apiToken}`,
                'Content-type': 'application/json; charset=utf-8'
            }
        });
    }

    public async paginate<ResponseType extends PaginatedResponseType, ResultType>(method: 'get' | 'put' | 'post' | 'delete', path: string, transform: (response: AxiosResponse<ResponseType>) => ResultType[], params: any = {}, body?: {}): Promise<ResultType[]> {
        const results: ResultType[] = [];

        let page = 1;
        params.nexPageToken = undefined;

        while (params.nexPageToken || page === 1) {
            const response = await this.doRequest<ResponseType>(method, `${path}`);
            results.push(...transform(response))
            params.nexPageToken = response.data ? response.data.nextPageKey : undefined;
            page++;
        }

        return results;
    }
}