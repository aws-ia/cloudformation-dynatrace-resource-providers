export class DynatraceClient {
    private baseUrl: string;
    private apiToken: string;

    constructor(baseUrl: string, apiToken: string) {
        this.baseUrl = baseUrl;
        this.apiToken = apiToken;
    }

    public async doRequest(method: 'GET' | 'PUT' | 'POST' | 'DELETE', path: string, body?: {}): Promise<Response> {
        const response = await fetch(`${this.baseUrl}/${path}`, {
            method: method,
            body: !!body ? JSON.stringify(body) : undefined,
            headers: {
                Authorization: `Api-Token ${this.apiToken}`
            }
        });

        if (response.status < 200 || response.status >= 400) {
            throw new DynatraceClientError(response.status, response.statusText);
        }

        return response;
    }
}

export class DynatraceClientError extends Error {
    private readonly _status: number;

    constructor(status: number, statusText: string) {
        super(statusText);
        this._status = status;
    }

    get status(): number {
        return this._status;
    }
}