import axios, {AxiosResponse} from "axios";

export class DynatraceClient {
    private baseUrl: string;
    private apiToken: string;

    constructor(baseUrl: string, apiToken: string) {
        this.baseUrl = baseUrl;
        this.apiToken = apiToken;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, body?: {}): Promise<AxiosResponse<ResponseType>> {
        return await axios.request<ResponseType>({
            url: `${this.baseUrl}${path}`,
            method: method,
            data: body,
            headers: {
                Authorization: `Api-Token ${this.apiToken}`
            }
        });
    }
}