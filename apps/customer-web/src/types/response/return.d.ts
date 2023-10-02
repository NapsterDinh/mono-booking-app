declare namespace NhapThuocResponse.Return {
  export interface Detail {
    orderReturnDetailId: string;
    orderDetailId: string;
    itemCode: string;
    itemName: string;
    barCode: string;
    quantity: number;
    unitCode: number;
    unitName: string;
    whsCode: string;
    whsName?: any;
    priceOrder: number;
    taxCode: string;
    taxRate: number;
    isHot: string;
    total: number;
    iSProduct?: any;
    lineNum: number;
    discountPromotion: number;
  }

  export interface Fee {
    id: number;
    orderReturnDetailId: string;
    orderReturnId: string;
    orderDetailId: string;
    createdDate: Date;
    modifiedDate: Date;
    criteriaHeaderId: number;
    criteriaHeaderName: string;
    criteriaDetailParentId: number;
    criteriaDetailParentName: string;
    criteriaDetailId: number;
    criteriaDetailName: string;
    percentFee: number;
    amountFeeReturn: number;
  }

  export interface DetailReturn {
    orderReturnStatus: number;
    orderReturnStatusName?: any;
    orderReturnId: string;
    orderReturnCode: string;
    orderId: string;
    orderCode: string;
    shopCode: string;
    shopName: string;
    employeeCode: string;
    employeeName: string;
    phone: string;
    custName: string;
    custCode: string;
    createdDate: Date;
    total: number;
    totalPayment: number;
    totalFee: number;
    totalPaid: number;
    totalTax: number;
    paymentRequestCode: string;
    paymentRequestID?: any;
    paymentMethodIds: number[];
    orderCodeDisplay: string;
    priceVoucher?: any;
    email: string;
    taxCode: string;
    nameCompany: string;
    modifiedBy: string;
    modifiedByName: string;
    details: Detail[];
    fees: Fee[];
    totalDiscount: number;
    paymentMethodLabel: string;
  }

  export interface CheckTransactionItem {
    accountName: string;
    accountNum: string;
    amount: number;
    bankName: string;
    content: string;
    createdBy: string;
    createdDate: string;
    dateTranfer: string;
    id: string;
    image: string | null;
    isConfirm: string | null;
    modifiedBy: string | null;
    modifiedDate: string | null;
    referenceBanking: string | null;
    transactionId: string;
    transferNum: string | null;
  }
}
