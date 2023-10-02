declare namespace NhapThuocPayload {
  declare namespace Return {
    interface RequestSubmitFormForReturn {
      orderReturnId: string;
      paymentRequestCode: string;
      customerId: string;
      orderCode?: string;
      orderReturnCode: string;
      shopCode: string;
      transactionTime: string;
      transfers: {
        accountNum: string;
        accountName: string;
        bankName: string;
        dateTranfer: string;
        content: string;
        amount: number;
        createdBy: string;
        createdByName: string;
      };
    }
  }
}
