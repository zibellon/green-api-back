import { NetClient } from 'core/net-client/net-client';

export const greenApiNetClient = new NetClient();

// instanceId = 7103961390
// https://7103.api.greenapi.com/waInstance7103961390
export function greenApiGetUrlByInstanceId(instanceId: string) {
  return `https://${instanceId.substring(0, 4)}.api.greenapi.com/waInstance${instanceId}`;
}
