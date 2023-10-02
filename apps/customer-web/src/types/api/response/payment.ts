export interface PaymentStatusByPaymentCodeResponse {
  paymentCode?: string;
  shopCode?: string;
  customerId?: string;
  total?: number;
  paymentDate?: string;
  createdDate?: string;
  createdBy?: string;
  updatedBy?: string;
  remainingAmount?: number;
  status?: boolean;
  isPayment?: boolean;
  paymentRequestCode?: string;
  paymentRequestCodeV2?: string;
}

export interface CreateTpBankPaymentLinkResponse {
  url: string;
}
