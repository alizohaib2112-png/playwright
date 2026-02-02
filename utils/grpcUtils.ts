import * as grpc from '@grpc/grpc-js';

export function grpcUnary<TReq, TRes>(
  client: any,
  methodName: string,
  request: TReq,
  timeoutMs = 10_000
): Promise<TRes> {
  return new Promise((resolve, reject) => {
    const deadline = new Date(Date.now() + timeoutMs);

    client[methodName](
      request,
      { deadline },
      (err: grpc.ServiceError | null, res: TRes) => {
        if (err) return reject(err);
        resolve(res);
      }
    );
  });
}
