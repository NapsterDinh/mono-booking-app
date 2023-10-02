declare namespace NhapThuocPayload {
  declare namespace CancelDeposit {
    interface RequestSubmitFormForDeposit {
      orderCode: string;
      paymentRequestId: string;
      paymentRequestCode: string;
      customerId: string;
      shopCode: string;
      transactionTime: string;
      transfers: Transfers;
    }
    interface Transfers {
      accountNum: string;
      accountName: string;
      bankName: string;
      dateTranfer: string;
      content: string;
      amount: number;
      createdBy: string;
      createdByName: string;
    }
  }
}
