import axios from "axios";
import {PaginatedResponseType} from "./dynatrace-client";
import {DynatraceOAuthClient} from "./dynatrace-oauth-client";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.request.mockResolvedValue({});

type TestPaginationResults = {
    results: number[]
} & PaginatedResponseType;

describe('DynatraceOAuthClient', () => {
    const baseUrl = 'https://acme.com';
    const clientId = 'clientId';
    const clientSecret = 'clientSecret';
    const scopes = ['a', 'b', 'c'];
    const token = 'aabbccddee';

    let testInstance: DynatraceOAuthClient;

    beforeEach(() => {
        testInstance = new DynatraceOAuthClient(baseUrl, clientId, clientSecret, scopes);
        mockedAxios.request
            .mockResolvedValueOnce({data: {access_token: token}})
            .mockResolvedValue({});
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('retrieve an access token on every non-paginated requests', async () => {
        await testInstance.doRequest('get', '/foo/bar');

        expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
            url: `https://sso.dynatrace.com/sso/oauth2/token`,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            params: {
                grant_type: 'client_credentials',
                client_id: clientId,
                client_secret: clientSecret,
                scope: scopes.join(' ')
            }
        }));
    });

    it('sets the request headers based on the token', async () => {
        const path = '/foo/bar';

        mockedAxios.request.mockResolvedValueOnce({});

        await testInstance.doRequest('get', path);

        expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
            url: `${baseUrl}${path}`,
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json; charset=utf-8',
                'User-Agent': 'AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource',
                Accept: 'application/json'
            }
        }));
    });
});