declare namespace Components {
  declare namespace OrderDetail {
    type PageName = 'refund' | 'return' | 'success' | 'failure' | 'tracking' | 'profile';

    type TableRow =
      | {
          title: string;
          key: string;
          value: string;
        }
      | undefined;

    interface RowTableInfo {
      key: string;
      title: string;
      value?: string;
    }

    interface OrderDelivery {
      orderCodeDisplay: string;
      orderCode: string;
      customerName: string;
      customerPhone: string;
      customerReceiverName?: string;
      customerReceiverPhone?: string;
      paymentMethodLabel?: string;
      BankTransfer?: InfoRefund;
      deliveryMethod?: number;
      deliveryMethodLabel?: string;
      deliveryMethodDescription?: string;
      estimatedDeliveryDate?: string;
    }

    interface OrderReceivePayment {
      customerReceiverName: string;
      customerReceiverPhone: string;
      receiverAddress: string;
      receiverFullAddress: string;
      intendTime: string;
      note: string;
      paymentMethodDefault?: number[];
      paymentMethodLabel?: string[];
      paymentMethodAvatar?: (string | null)[];
    }

    interface OrderPrice {
      totalPrice: number;
      finalPrice?: number;
      finalPriceAfterDiscount?: number;
      deliveryFee?: number;
      promotion?: number;
      totalFee?: number;
      totalPayment?: number;
      totalPaid?: number;
      discountNt?: number;
      isShowAmountPaid: boolean;
      // isPaymentCompleted: boolean
    }

    interface Data {
      orderCode: string;
      orderName?: string;
      orderReturnStatus?: number;
      isCompleteTransaction?: boolean;
      paymentRequestId?: string;
      paymentRequestCode?: string;
      paymentStatus?: number;
      paymentStatusLabel?: string;
      orderReturnId?: string;
      orderReturnCode?: string;
      customerId?: string;
      shopCode?: string;
      modifiedBy?: string;
      modifiedByName?: string;
      orderDate?: string;
      orderDelivery: OrderDelivery;
      orderReceivePayment?: OrderReceivePayment;
      orderProducts: NhapThuocResponse.Orders.OrderProduct[];
      orderShipment?: NhapThuocResponse.Orders.ShipmentInDetail;
      orderPrice: OrderPrice;
      orderInfoRefund?: InfoRefund;
      flags: Flags;
      transfer?: Transfer | null;
      otp?: string;
      phoneNumber?: string;
      orderSplit?: {
        parent?: {
          orderCode?: string;
          orderCodeDisplay?: string;
        };
        children?: { orderCode?: string; orderCodeDisplay?: string; childType?: string }[];
      };
      driverInfo?: {
        license?: string;
        image?: string;
        phone?: string;
        name?: string;
      };
      status?: {
        code?: number;
        label?: string;
      };
    }

    interface Flags {
      allowReOrder: boolean;
      isCancel: boolean;
      isPaymentCompleted: boolean;
      isRepayment: boolean;
      isShowTransferInfo: boolean;
      canCancel: boolean;
      canRebuy: boolean;
    }

    interface Transfer {
      amount: number;
      bankName: string;
      accountNumber: string;
      accountName: string;
      content: string;
    }

    interface InfoRefund {
      bankName: string;
      numberCard: string;
      name: string;
      brand: string;
    }

    interface ErrorsRefund extends InfoRefund {
      errors: string;
    }

    interface TableItem {
      key: React.ReactNode;
      value: React.ReactNode;
    }

    interface Table {
      title: string;
      items: TableItem[];
    }
  }
}
