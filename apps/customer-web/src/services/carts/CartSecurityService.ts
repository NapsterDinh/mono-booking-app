import { encryptWithCryptoJS } from '@customer-web/helpers/Hash';

export const hashCheckVoucherPayload = (payload: any): { data: string } => {
  return {
    data: encryptWithCryptoJS(JSON.stringify(payload)),
  };
};
