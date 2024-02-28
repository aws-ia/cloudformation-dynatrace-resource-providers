import {DynatraceClient} from "../../Dynatrace-Common/src/dynatrace-client";
import axios, {AxiosResponse} from "axios";

export class DynatraceOAuthClient extends DynatraceClient {
    private readonly clientId: string;
    private readonly clientSecret: string;
    private readonly scopes: string[];

    constructor(baseUrl: string, clientId: string, clientSecret: string, scopes: string[], userAgent?: string) {
        super(baseUrl, null, userAgent);
        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.scopes = scopes;
    }

    public async doRequest<ResponseType>(method: 'get' | 'put' | 'post' | 'delete', path: string, params: any = {}, body?: {}, headers?: {
        [key: string]: string
    }): Promise<AxiosResponse<ResponseType>> {
        let bearerToken = await this.doOAuth();

        return await axios.request<ResponseType>({
            url: `${this.baseUrl}${path}`,
            params: params,
            method: method,
            data: body,
            headers: {
                'User-Agent': this.userAgent || "AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource",
                Authorization: `Bearer ${bearerToken}`,
                'Content-type': 'application/json; charset=utf-8',
                Accept: 'application/json',
                ...headers
            }
        })
    }

    private async doOAuth() {
        const response = await axios.request<{ access_token: string }>({
            url: `https://sso.dynatrace.com/sso/oauth2/token`,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                grant_type: 'client_credentials',
                client_id: this.clientId,
                client_secret: this.clientSecret,
                scope: this.scopes.join(' ')
            }
        });

        return response.data.access_token;
    }
}
