import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const headersDefaultReq = z.object({
  'x-instance-id': extendApi(z.string().min(1), {
    example: '123456789',
  }),
  'x-instance-api-token': extendApi(z.string().min(1), {
    example: 'verySecretToken',
  }),
});
export type HeadersDefaultReqDto = z.infer<typeof headersDefaultReq>;
