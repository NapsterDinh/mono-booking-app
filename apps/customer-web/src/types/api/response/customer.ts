import { OTPCode, TpBankCode } from '@customer-web/enums/ErrorCode';

export interface TpBankCreditFileInformation {
  customerId: string;
  reason: string;
  metaData?: {
    customerName?: string;
  };
  contractId: string;
  contractType: number;
  contractTypeCode: string;
  status: number;
  statusCode: string;
  returnBankName: string;
  returnCustomerName: string;
  returnNote: string;
  returnBankAccount: string;
  returnCreatedDate: string;
  returnApprovedDate: string;
  returnStatus: number;
  returnStatusCode: string;
  creationTime: string;
  lastModificationTime: string;
  id: string;
}

export interface GetListTpBankCreditResponse {
  totalCount: number;
  items: TpBankCreditFileInformation[];
  canCreateContract: boolean;
  canCreateReturnTpBankCredit: boolean;
}

export interface SubmitDeptFileResponse {
  data: SubmitCreditFileErrorResponse;
}
export interface SubmitCreditFileErrorResponse {
  message: string;
  componentType: string;
  status?: number;
  errorCode?: OTPCode | TpBankCode;
}

export interface ErrorTypeOfOTPResponse {
  message: string;
  headerMessage: string;
}

export interface DebtAccountInfoResponse {
  accountNumer: string;
  accountName: string;
  isLinkedToNT: boolean;
}

export interface RefundInfoAccountInfo {
  id: string;
  customerId: string;
  returnBankName: string;
  returnCustomerName: string;
  returnNote: string;
  returnBankAccount: string;
  returnCreatedDate: string;
  returnApprovedDate: string;
  returnStatus: number;
  returnStatusCode: string;
  metaData?: {
    customerName?: string;
    phoneNumber?: string;
    description?: string;
    modificationTime?: string;
  };
}
