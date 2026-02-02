import { test, expect } from '@playwright/test';
import { createGrpcbinClient } from '../utils/grpcClient';
import { grpcUnary } from '../utils/grpcUtils';

test.describe('grpcbin', () => {
  let client: any;

  test.beforeAll(() => {
    client = createGrpcbinClient();
  });

  test.afterAll(() => {
    client.close();
  });

  test('Index (unary)', async () => {
    const response = await grpcUnary<any, any>(
      client,
      'Index',
      {} // EmptyMessage
    );

    expect(response.description).toBeTruthy();
    expect(response.endpoints.length).toBeGreaterThan(0);
  });

  test('HeadersUnary', async () => {
    const res = await grpcUnary<any, any>(
      client,
      'HeadersUnary',
      {}
    );
  
    expect(res.Metadata).toBeDefined();
    expect(typeof res.Metadata).toBe('object');
  });


  
});
