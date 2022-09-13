import {DynatraceClient, PaginatedResponseType} from "./dynatrace-client";
import axios from "axios";
import Mock = jest.Mock;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.request.mockResolvedValue({});

type TestPaginationResults = {
    results: number[]
} & PaginatedResponseType;

describe('DynatraceClient', () => {
    describe('doRequest', () => {
        const baseUrl = 'https://acme.com';
        const token = 'aabbccddee';
        const testInstance = new DynatraceClient(baseUrl, token);

        it('sets the request URL based on the main URL + path', async () => {
            const path = '/foo/bar';

            await testInstance.doRequest('get', path);

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                url: `${baseUrl}${path}`
            }));
        });

        it('sets the request headers based on the token', async () => {
            const path = '/foo/bar';

            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest('get', path);

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                headers: {
                    Authorization: `Api-Token ${token}`,
                    'Content-type': 'application/json; charset=utf-8',
                    'User-Agent': 'AWS CloudFormation (+https://aws.amazon.com/cloudformation/) CloudFormation custom resource'
                }
            }));
        });

        it.each([
            {foo: 'bar'},
            'foo=bar',
            undefined,
            null
        ])('sets the request params to "%p"', async (params) => {
            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest('get', '/foo/bar', params);

            expect(mockedAxios.request).toHaveBeenCalledWith(!!params
                ? expect.objectContaining({
                    params: params
                }) : expect.not.objectContaining({
                    params: undefined
                }));
        });

        it.each([
            'get',
            'put',
            'post',
            'delete'
        ])('sets the request method to "%p"', async (method) => {
            mockedAxios.request.mockResolvedValueOnce({});

            await testInstance.doRequest(method as 'get' | 'put' | 'post' | 'delete', '/foo/bar');

            expect(mockedAxios.request).toHaveBeenCalledWith(expect.objectContaining({
                method: method
            }));
        });
    });

    describe('paginate', () => {
        let testInstance: DynatraceClient;

        beforeEach(() => {
            testInstance = new DynatraceClient('https://acme.com', 'abcdefg');
            testInstance.doRequest = jest.fn().mockResolvedValue({});
        });

        afterEach(() => {
            jest.resetAllMocks();
        });

        it.each([
           1, 3, 5, 20, 100
        ])('calls "doRequest" for each %d page(s)', async (pageCount) => {
            const nextPageParams = {
                nextPageKey: 'a-b-c-e-d-f'
            };
            const method = 'get';
            const path = '/foo/bar';
            const params = {};
            const body = {
                foo: 'bar',
                hello: 123
            }

            for (let i = 0; i < pageCount; i++) {
                (testInstance.doRequest as Mock).mockResolvedValueOnce({data: i === pageCount - 1 ? params : nextPageParams});
            }

            await testInstance.paginate(method, path, () => [], params, body);

            expect(testInstance.doRequest).toHaveBeenCalledTimes(pageCount);
            expect(testInstance.doRequest).toHaveBeenCalledWith(method, path, params, body);
            if (pageCount > 1) {
                expect(testInstance.doRequest).toHaveBeenCalledWith(method, path, {nextPageToken: nextPageParams.nextPageKey}, body);
            }
        });

        it('aggregate results of each page', async () => {
            const nextPageParams = {
                nextPageKey: 'a-b-c-e-d-f'
            };
            const method = 'get';
            const path = '/foo/bar';
            const params = {};
            const body = {
                foo: 'bar',
                hello: 123
            }
            const pageNumber = 3;
            const results = [1, 2, 3];

            for (let i = 0; i < pageNumber; i++) {
                (testInstance.doRequest as Mock).mockResolvedValueOnce({
                    data: {
                        ...(i === pageNumber - 1 ? params : nextPageParams),
                        results: results
                    }
                });
            }

            const allResults = await testInstance.paginate<TestPaginationResults, number>(
                method,
                path,
                (response) => response.data.results,
                params,
                body);

            expect(allResults.length).toBe(results.length * pageNumber);
        });
    });
});