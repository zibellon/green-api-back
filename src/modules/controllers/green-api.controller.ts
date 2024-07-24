import { ApiController, Get, Post } from 'core/api-decorators';
import { bodyValidator } from 'core/middlewares/validators/body-validator';
import { headersValidator } from 'core/middlewares/validators/headers-validator';
import { headersDefaultReq } from 'modules/dto/common/headers-default.dto';
import {
  greenApiFileSendReq,
  greenApiFileSendRes,
  greenApiInstanceStateRes,
  greenApiMessageSendReq,
  greenApiMessageSendRes,
  greenApiSettingsRes,
} from 'modules/dto/green-api.dto';
import { GreenApiService } from 'modules/services/green-api.service';
import { swBody200 } from 'utils/utils-swagger';

@ApiController('/green-api')
@Get({
  path: '/settings',
  summary: 'GreenApi - /getSettings, {{apiUrl}}/waInstance{{idInstance}}/getSettings/{{apiTokenInstance}}',
  dtoHeadersSchema: headersDefaultReq,
  responseList: [swBody200(greenApiSettingsRes)],
  handlers: [headersValidator],
  func: async (ctx) => {
    return await GreenApiService.getSettings(ctx.dtoHeaders);
  },
})
@Get({
  path: '/instance-state',
  summary: 'GreenApi - /getStateInstance, {{apiUrl}}/waInstance{{idInstance}}/getStateInstance/{{apiTokenInstance}}',
  dtoHeadersSchema: headersDefaultReq,
  responseList: [swBody200(greenApiInstanceStateRes)],
  handlers: [headersValidator],
  func: async (ctx) => {
    return await GreenApiService.getInstanceState(ctx.dtoHeaders);
  },
})
@Post({
  path: '/message-send',
  summary: 'GreenApi - /sendMessage, {{apiUrl}}/waInstance{{idInstance}}/sendMessage/{{apiTokenInstance}}',
  dtoHeadersSchema: headersDefaultReq,
  dtoBodySchema: greenApiMessageSendReq,
  responseList: [swBody200(greenApiMessageSendRes)],
  handlers: [headersValidator, bodyValidator],
  func: async (ctx) => {
    return await GreenApiService.messageSend(ctx.dtoHeaders, ctx.dtoBody);
  },
})
@Post({
  path: '/file-send',
  summary: 'GreenApi - /sendFileByUrl, {{apiUrl}}/waInstance{{idInstance}}/sendFileByUrl/{{apiTokenInstance}}',
  dtoHeadersSchema: headersDefaultReq,
  dtoBodySchema: greenApiFileSendReq,
  responseList: [swBody200(greenApiFileSendRes)],
  handlers: [headersValidator, bodyValidator],
  func: async (ctx) => {
    return await GreenApiService.fileSend(ctx.dtoHeaders, ctx.dtoBody);
  },
})
export class GreenApiController {}
