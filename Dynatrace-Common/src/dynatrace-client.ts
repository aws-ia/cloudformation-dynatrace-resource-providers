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
    private readonly baseUrl: string;
    private readonly apiToken: string;

    constructor(baseUrl: string, apiToken: string) {
        this.baseUrl = baseUrl;
        this.apiToken = apiToken;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}): Promise<AxiosResponse<ResponseType>> {
        return await axios.request<ResponseType>({
            url: `${this.baseUrl}${path}`,
            params: params,
            method: method,
            data: this.sanitizePayload(body),
            headers: {
                Authorization: `Api-Token ${this.apiToken}`,
                'Content-type': 'application/json; charset=utf-8'
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

    private sanitizePayload(model: { [key: string]: any }) {
        if (!model) {
            return model;
        }

        return Object.keys(model).reduce((map, key) => {
            let value = model[key];
            if (value && value instanceof Object && !(value instanceof Array) && !(value instanceof Set)) {
                value = this.sanitizePayload(value);
            }
            if (value && value instanceof Set) {
                value = Array.of(...value);
            }
            if (value && Array.isArray(value)) {
                value = value.map(item => item && item instanceof Object && !(item instanceof Array) && !(item instanceof Set)
                    ? this.sanitizePayload(item)
                    : item);
            }
            map[key.substring(0, 1).toLocaleLowerCase() + key.substring(1)] = value;
            return map;
        }, {} as { [key: string]: any })
    }
}