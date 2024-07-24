import { BaseRequestCTX } from 'modules/base/base.ctx';

export const addName = async (ctx: BaseRequestCTX) => {
  ctx.dtoExtras.companyId = 'someTestCompanyId';
  ctx.dtoExtras.userId = 'someTestUserId';
  ctx.next();
};
