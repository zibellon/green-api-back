import { throwErrorSimple } from 'core/utils/error';
import { HeadersDefaultReqDto } from 'modules/dto/common/headers-default.dto';
import { GreenApiFileSendReqDto, GreenApiMessageSendReqDto } from 'modules/dto/green-api.dto';
import { greenApiGetUrlByInstanceId, greenApiNetClient } from 'utils/utils-green-api';

export const GreenApiService = {
  getSettings: async (dtoHeaders: HeadersDefaultReqDto) => {
    let url = greenApiGetUrlByInstanceId(dtoHeaders['x-instance-id']);

    url += `/getSettings`;
    url += `/${dtoHeaders['x-instance-api-token']}`;

    const netResult = await greenApiNetClient.get({
      url,
    });
    if (!netResult.isSuccess) {
      throwErrorSimple('NetRequest.ERROR', {
        netResult,
      });
    }
    if (!netResult.data) {
      throwErrorSimple('NetRequest.NO_DATA', {
        netResult,
      });
    }

    return netResult.data;
  },
  getInstanceState: async (dtoHeaders: HeadersDefaultReqDto) => {
    let url = greenApiGetUrlByInstanceId(dtoHeaders['x-instance-id']);

    url += `/getStateInstance`;
    url += `/${dtoHeaders['x-instance-api-token']}`;

    const netResult = await greenApiNetClient.get({
      url,
    });
    if (!netResult.isSuccess) {
      throwErrorSimple('NetRequest.ERROR', {
        netResult,
      });
    }
    if (!netResult.data) {
      throwErrorSimple('NetRequest.NO_DATA', {
        netResult,
      });
    }

    return netResult.data;
  },
  messageSend: async (dtoHeaders: HeadersDefaultReqDto, dtoBody: GreenApiMessageSendReqDto) => {
    // REGEX - только цифры
    const phoneNumber = dtoBody.phone.replace(/\D/g, '');
    if (phoneNumber.length === 0) {
      throwErrorSimple('Incorrect phone number');
    }

    let url = greenApiGetUrlByInstanceId(dtoHeaders['x-instance-id']);

    url += `/sendMessage`;
    url += `/${dtoHeaders['x-instance-api-token']}`;

    const netResult = await greenApiNetClient.post({
      url,
      data: {
        chatId: `${phoneNumber}@c.us`,
        message: dtoBody.message,
      },
    });
    if (!netResult.isSuccess) {
      throwErrorSimple('NetRequest.ERROR', {
        netResult,
      });
    }
    if (!netResult.data) {
      throwErrorSimple('NetRequest.NO_DATA', {
        netResult,
      });
    }

    return netResult.data;
  },
  fileSend: async (dtoHeaders: HeadersDefaultReqDto, dtoBody: GreenApiFileSendReqDto) => {
    // REGEX - только цифры
    const phoneNumber = dtoBody.phone.replace(/\D/g, '');
    if (phoneNumber.length === 0) {
      throwErrorSimple('Incorrect phone number');
    }

    // dtoBody.fileUrl = https://i.pinimg.com/236x/24/15/21/24152197af38deb718eb730992d441d0.jpg
    const fileNameWithExtensionSplit = dtoBody.fileUrl.split('/');
    if (fileNameWithExtensionSplit.length < 2) {
      throwErrorSimple('Incorrect fileUrl');
    }

    // 24152197af38deb718eb730992d441d0.jpg
    const fileNameWithExtension = fileNameWithExtensionSplit[fileNameWithExtensionSplit.length - 1];

    let url = greenApiGetUrlByInstanceId(dtoHeaders['x-instance-id']);

    url += `/sendFileByUrl`;
    url += `/${dtoHeaders['x-instance-api-token']}`;

    // REGEX - fileUrl -> проверит zod

    const netResult = await greenApiNetClient.post({
      url,
      data: {
        chatId: `${phoneNumber}@c.us`,
        urlFile: dtoBody.fileUrl,
        fileName: fileNameWithExtension,
      },
    });
    if (!netResult.isSuccess) {
      throwErrorSimple('NetRequest.ERROR', {
        netResult,
      });
    }
    if (!netResult.data) {
      throwErrorSimple('NetRequest.NO_DATA', {
        netResult,
      });
    }

    return netResult.data;
  },
};
