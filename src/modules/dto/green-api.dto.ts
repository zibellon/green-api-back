import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

// REQ

export const greenApiMessageSendReq = z.object({
  phone: extendApi(z.string().min(1), {
    example: '79998881122',
  }),
  message: extendApi(z.string().min(1), {
    example: 'Some text for message',
  }),
});
export type GreenApiMessageSendReqDto = z.infer<typeof greenApiMessageSendReq>;

export const greenApiFileSendReq = z.object({
  phone: extendApi(z.string().min(1), {
    example: '79998881122',
  }),
  fileUrl: extendApi(z.string().url(), {
    example: 'https://google-images.com/...',
  }),
});
export type GreenApiFileSendReqDto = z.infer<typeof greenApiFileSendReq>;

// RES

export const greenApiSettingsRes = z.object({
  wid: extendApi(z.string(), {
    example: '...',
  }),
  countryInstance: extendApi(z.string(), {
    example: '...',
  }),
  typeAccount: extendApi(z.string(), {
    example: '...',
  }),
  webhookUrl: extendApi(z.string(), {
    example: '...',
  }),
  webhookUrlToken: extendApi(z.string(), {
    example: '...',
  }),
  delaySendMessagesMilliseconds: extendApi(z.number(), {
    example: 0,
  }),
  markIncomingMessagesReaded: extendApi(z.string(), {
    example: 'no',
  }),
  markIncomingMessagesReadedOnReply: extendApi(z.string(), {
    example: 'no',
  }),
  sharedSession: extendApi(z.string(), {
    example: 'no',
  }),
  proxyInstance: extendApi(z.string(), {
    example: 'system proxy',
  }),
  outgoingWebhook: extendApi(z.string(), {
    example: 'no',
  }),
  outgoingMessageWebhook: extendApi(z.string(), {
    example: 'no',
  }),
  outgoingAPIMessageWebhook: extendApi(z.string(), {
    example: 'no',
  }),
  incomingWebhook: extendApi(z.string(), {
    example: 'no',
  }),
  deviceWebhook: extendApi(z.string(), {
    example: 'no',
  }),
  statusInstanceWebhook: extendApi(z.string(), {
    example: 'no',
  }),
  stateWebhook: extendApi(z.string(), {
    example: 'no',
  }),
  enableMessagesHistory: extendApi(z.string(), {
    example: 'no',
  }),
  keepOnlineStatus: extendApi(z.string(), {
    example: 'no',
  }),
  pollMessageWebhook: extendApi(z.string(), {
    example: 'no',
  }),
  incomingBlockWebhook: extendApi(z.string(), {
    example: 'no',
  }),
  incomingCallWebhook: extendApi(z.string(), {
    example: 'no',
  }),
});

export const greenApiInstanceStateRes = z.object({
  stateInstance: extendApi(z.string(), {
    example: 'authorized/notAuthorized',
  }),
});

export const greenApiMessageSendRes = z.object({
  idMessage: extendApi(z.string(), {
    example: 'ASD123ZXC456',
  }),
});

export const greenApiFileSendRes = z.object({
  idMessage: extendApi(z.string(), {
    example: 'ASD123ZXC456',
  }),
});
