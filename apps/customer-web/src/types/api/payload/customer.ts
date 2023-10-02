import { OrderHistoriesTabCode } from '@customer-web/enums/Order';
import { DateRangePayload } from '.';

export interface ResetPasswordPayload {
  key: string;
  newPassword: string;
  phone: string;
}

export interface ChangePasswordPayload {
  currentPassword: string;
  newPassword: string;
}

export interface TabCountsPayload extends DateRangePayload {
  phone: string;
  status: OrderHistoriesTabCode;
}

export interface SendOTPPayload {
  phoneNumber: string;
}
export interface SubmitDeptTpbankPayload {
  param: {
    customerId: string;
  };
  body: {
    customerName: string;
    identifyNumber: string;
    phoneNumber: string;
    email: string;
    limitRangeOverDraft: number;
    otp: string;
  };
}

export interface GetListTpBankCreditPayload {
  customerId: string;
  maxResultCount?: number;
  skipCount?: number;
  contractId?: string;
  status?: number;
}

export interface SubmitBankAccountPayload {
  param: {
    customerId: string;
  };
  body: {
    returnBankName: string;
    returnCustomerName: string;
    returnBankAccount: string;
    otp: string;
  };
}

export interface GetInfoRefundCreditPayload {
  customerId: string;
}
