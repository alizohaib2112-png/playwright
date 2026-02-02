import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';

const PROTO_PATH = path.resolve(__dirname, '../proto/grpcbin.proto');

export function createGrpcbinClient() {
  const packageDef = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });

  const proto = grpc.loadPackageDefinition(packageDef) as any;

  const client = new proto.grpcbin.GRPCBin(
    'grpcb.in:9001',                  // ✅ host:port ONLY
    grpc.credentials.createSsl()      // ✅ TLS
  );

  return client;
}
