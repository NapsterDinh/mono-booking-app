declare namespace NhapThuocResponse {
  declare namespace CancelDeposit {
    interface TotalRefund {
      totalDeposit: number;
      dateCurrent: Date;
      dateDeposit: Date;
      dateDiff: number;
      case: number;
      totalVoucher: number;
      remainingAmount: number;
      totalCustomerDeposit: number;
      arrayVoucher: any[];
    }

    interface Detail {
      orderDetailID: string;
      orderID: string;
      orderCode: string;
      lineCode: string;
      createdDate: Date;
      modifiedDate: Date;
      itemCode: string;
      itemName: string;
      barcode: string;
      whsCode: string;
      whsName: string;
      quantity: number;
      unitCode: number;
      unitName: string;
      price: number;
      total: number;
      totalBill: number;
      discount: number;
      discountPromotion: number;
      totalTax: number;
      taxRate: number;
      isPromotion: string;
      isHot: string;
      discountType: string;
      userManual?: any;
      reasonPriceDiscountCode: number;
      note: string;
      point: number;
      pointID: number;
      isInventoryManagement: string;
      lineNum: number;
      isExpiredDate: boolean;
      isCheckPrice: boolean;
      metaData: string;
      isProject: string;
      isSpecialControl: string;
      image?: string;
    }

    interface Employee {
      id: number;
      orderID: string;
      orderCode: string;
      employeeCode: string;
      employeeName: string;
      step: number;
      createdDate: Date;
      modifiedDate: Date;
      orderCancelChannel?: number;
    }

    interface OrderInfo {
      orderID: string;
      orderStatus: number;
      orderStatusName: string;
      createdDate: Date;
      modifiedBy: string;
      modifiedByName: string;
      modifiedDate: Date;
      payment: number;
      fulfilment: number;
      shipment: number;
      orderVersion: number;
      orderCode: string;
      paymentRequestCode: string;
      paymentRequestID: string;
      fsellPoint: number;
      isCOD: string;
      amountCOD: number;
      reasonCancel: string;
      details: Detail[];
      promotions: any[];
      shipmentPlannings: any[];
      productCombos: any[];
      urlImagePriceProduct: any[];
      orderPayments: any[];
      employees: Employee[];
      custCode: string;
      custName: string;
      phone: string;
      taxCode?: any;
      custAddress: string;
      shopCode: string;
      shopName: string;
      orderType: string;
      orderChanel: string;
      orderIdBase: string;
      orderIdInter: string;
      createdBy: string;
      createdByName: string;
      totalBill: number;
      totalDiscount: number;
      totalTax: number;
      total: number;
      note?: any;
      shipmentMethod: number;
      rewardPoints: number;
      extraData?: any;
      ecomDisplay: number;
      commitTime: Date;
      taxNumber?: any;
      orderCodeDisplay: string;
      totalVoucher: number;
    }

    interface Inventory {
      itemCode: string;
      itemName: string;
      whsCode: string;
      whsName: string;
      shopCode: string;
      shopName: string;
      sl: number;
      dvt: number;
      name_dvt: string;
      sL_QuiDoi: number;
      is_Level: number;
      qty_onorder: number;
      quantity_available: number;
      qty_order: number;
    }

    interface PaymentTransaction {
      id: string;
      createdDate: Date;
      createdBy?: any;
      modifiedDate?: any;
      modifiedBy?: any;
      accountId: string;
      transactionTypeId: number;
      paymentRequestId: string;
      shopCode: string;
      paymentMethodId?: any;
      amount: number;
      transactionFee?: any;
      transactionTime: Date;
      note?: any;
      additionAttributes?: any;
      status: number;
    }

    interface EWallet {
      id: string;
      createdDate: Date;
      createdBy?: any;
      modifiedDate?: any;
      modifiedBy?: any;
      transactionId: string;
      transactionVendor: string;
      typeWalletId: number;
      amount: number;
      realAmount: number;
      paymentMethodId: number;
    }

    interface DetailForDepositTransaction {
      eWallets: EWallet[];
      cards: any[];
      vouchers: any[];
      coDs: any[];
      transfers: any[];
    }

    interface DepositTransaction {
      detail: DetailForDepositTransaction;
      id: string;
      createdDate: Date;
      createdBy?: any;
      modifiedDate?: any;
      modifiedBy?: any;
      accountId: string;
      transactionTypeId: number;
      paymentRequestId: string;
      shopCode: string;
      paymentMethodId: number;
      amount: number;
      transactionFee?: any;
      transactionTime: Date;
      note?: any;
      additionAttributes?: any;
      status: number;
    }

    interface DetailForPaymentHistory {
      paymentTransaction: PaymentTransaction;
      depositTransactions: DepositTransaction[];
      qrHistory: any[];
      discount?: { amount: number }[];
    }

    interface PaymentHistory {
      remainingAmount: number;
      detail: DetailForPaymentHistory;
      id: string;
      paymentRequestCode: string;
      totalPayment: number;
      typePayment: number;
      status: number;
      createdDate: Date;
      createdBy: string;
      modifiedDate: Date;
      modifiedBy?: any;
      orderCode: string;
      orderReturnId?: any;
    }

    interface PaymentRequestTransferInfo {
      id: string;
      paymentRequestCode: string;
      totalPayment: number;
      typePayment: number;
      status: number;
      createdDate: Date;
      createdBy: string;
      modifiedDate?: any;
      modifiedBy?: any;
      orderCode: string;
      orderReturnId?: any;
    }

    interface DepositDetail {
      id: number;
      reasonId: number;
      reasonNote: string;
      orderCode: string;
      orderStatus: number;
      orderType: number;
      cancelDepositType: number;
      createdBy: string;
      updatedBy: string;
      totalRefund: TotalRefund;
      orderInfo: OrderInfo;
      inventory: Inventory[];
      paymentHistory: PaymentHistory;
      paymentRequestTransferInfo: PaymentRequestTransferInfo;
      expiredDate: Date;
      created_at: Date;
      updated_at: Date;
      orderChanel: number;
      paymentMethodLabel: string;
      otp: string;
      phoneNumber: string;
    }
  }
}
