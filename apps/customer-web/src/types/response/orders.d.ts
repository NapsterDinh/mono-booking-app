declare namespace NhapThuocResponse {
  declare namespace Orders {
    interface List {
      totalCount: number;
      tabCode?: number;
      tabName?: string;
      orders: DetailInOrderList[];
    }

    interface DetailInOrderList {
      orderId: string;
      orderCode: string;
      orderCodeDisplay: string;
      orderName: string;
      orderDate: string;
      notes?: string;
      totalProduct: number;
      shipment?: ShipmentInList;
      status: Status;
      orderInformation: OrderInformationInOrderList;
      orderProducts: OrderProduct[];
      orderPrice: OrderPrice;
      dataRaw?: any;
      // isShowTransferInfo?: boolean | only for detail
      // transferInfoData?: TransferInfoData | null Only for detail
      allowReOrder?: boolean;
      canRebuy?: boolean;
    }

    interface ShipmentInList {
      code: number | null;
      statusShipment: string | null;
      shipmentMethod?: number | null;
      shipmentMethodLabel?: string | null;
    }

    interface OrderInformationInOrderList {
      customerName: string;
      phoneNumber: string;
      planning: Planning[] | [];
      shopCode: string;
      // paymentMethod: number
      paymentMethodLabel: string;
      paymentMethodDefault: string | null;
      paymentStatus: number;
      paymentStatusLabel: string;
      receiverAddress: string;
      receiverFullAddress: string;
      gender: string;
      intendTime?: string | null;
      intendTimeLabel?: string | null;
      eInvoice?: PayloadEInvoice | null;
    }

    export interface OrderInformationInDetail {
      customerName: string;
      phoneNumber: string;
      customerReceiverName: string;
      customerReceiverPhone: string;
      fsellPoint: number;
      planning: any[];
      shopCode: string;
      paymentMethodLabel: string[];
      paymentMethodDefault?: any;
      paymentMethodAvatar?: (string | null)[];
      paymentStatus: number;
      paymentStatusLabel: string;
      receiverAddress: string;
      receiverFullAddress: string;
      gender: string;
      intendTime: string;
      eInvoice?: any;
    }

    interface OrderProduct {
      sku: string;
      title: string;
      unit: number;
      unitLabel: string;
      discount: number;
      discountPromotion: number;
      quantity: number;
      price: number;
      total: number;
      image?: string;
      url?: string;
      isPromotion?: boolean;
    }

    interface OrderPrice {
      totalPrice: number;
      finalPrice: number;
      finalPriceAfterDiscount?: number;
      promotion?: number;
      deliveryFee?: number;
      amountPaid?: number;
      isShowAmountPaid?: boolean;
      discountNt?: number;
    }

    interface TransferInfoData {
      amount: number;
      bankName: string;
      accountNumber: string;
      accountName: string;
      content: string;
    }

    interface Planning {
      id: number;
      orderCode: string;
      orderID: string;
      planningID: string;
      packID?: any;
      createBy: string;
      createDate: string;
      updateBy?: any;
      updateDate?: any;
      status: number;
      deliveryId?: any;
      requestId?: any;
      carrierName?: any;
    }

    interface PayloadEInvoice {
      taxType: number;
      taxCode: string;
      businessName: string;
      businessAddress: string;
      businessPhone?: string;
      custName?: string;
      custAddress?: string;
    }

    interface Timeline {
      enumStatus: number;
      enumStatusText: string;
      creationTime: string;
      enable: boolean;
      display: boolean;
      isProcessing: boolean;
    }

    interface Status {
      code: number;
      statusLabel: string;
    }

    interface ShipmentInDetail {
      code: number;
      statusShipment: string;
      shipmentMethod: number;
      shipmentMethodLabel: string;
      shipmentMethodDescription?: string;
      isShowTimeline: boolean;
      timeline: Timeline[];
    }

    interface DeliveryDetail {
      deliveryMethod?: number;
      deliveryMethodLabel?: string;
      deliveryMethodDescription?: string;
      estimatedDeliveryDate?: string;
    }

    export interface OrderDetail {
      orderId: string;
      orderCode: string;
      orderCodeDisplay: string;
      orderName: string;
      orderDate: string;
      notes: string;
      totalProduct: number;
      shipment: ShipmentInDetail;
      delivery?: DeliveryDetail;
      status: Status;
      orderInformation: OrderInformationInDetail;
      orderProducts: OrderProduct[];
      orderPrice: OrderPrice;
      allowReOrder: boolean;
      isCancel: boolean;
      canCancel: boolean;
      isRepayment: boolean;
      isPaymentCompleted: boolean;
      isShowTransferInfo: boolean;
      transferInfoData?: Transfer;
      dataRaw: any;
      canRebuy: boolean;
      childType: string;
      orderSplit?: {
        parent?: OrderDetail;
        children?: OrderDetail[];
      };
      driverInfo?: {
        license?: string;
        image?: string;
        phone?: string;
        name?: string;
      };
      paymentRequestCode?: string;
    }

    interface Transfer {
      amount: number;
      bankName: string;
      accountNumber: string;
      accountName: string;
      content: string;
    }

    interface CheckOrderInterval {
      orderCode: string;
      url: string;
      status: string;
    }

    interface CancelOrder {
      datas: boolean;
      status: number;
    }

    interface ReBuyCondition {
      canBuy: ReBuyConditionProduct[];
      cannotBuy: ReBuyConditionProduct[];
    }

    interface NewRebuyList {
      totalRebuyProductList: ReBuyConditionProduct[];
    }

    // interface packageDetails {
    //   name: string;
    //   ratio: number;
    //   level: number;
    //   migrationId: number;
    //   measureUnit: string;
    //   isDefault: boolean;
    //   id: number;
    //   isActive: boolean;
    //   price: number;
    //   measureId: number;
    // }

    interface ReBuyConditionProduct {
      itemCode: string;
      unitCode: number;
      productName: string;
      quantity: number;
      url: string;
      image: string;
      price: number;
      discountPrice: number;
      finalPrice: number;
      unitName: string;
      isShownPrice: boolean;
      isDefault: boolean;
      policy: {
        messageType: number;
        message: string;
      };
      quantitySaleRestrict: number;
      restrictSaleStatus: number;
      isCannotBuy: boolean;
    }

    interface ParamCanBuyProductList {
      itemCode: string;
    }

    declare namespace Detail {
      interface Root {
        orderId: string;
        orderCode: string;
        orderCodeDisplay: string;
        orderName: string;
        orderDate: Date;
        orderStatus: number;
        orderStatusName: string;
        orderStatusDisplay: string;
        orderStatusDisplayEnum: string;
        note: string;
        orderMessage: OrderMessage;
        timeline?: Timeline[] | null;
        shipment: Shipment;
        deliveryInformation: DeliveryInformation;
        payment: Payment;
        products: Product[];
        pricing: Pricing;
        flags: Flags;
        transfer: Transfer;
      }

      interface Shipment {
        status: number;
        statusName: string;
        method: number;
        methodName: string;
        provider: string;
        providerLogo: string;
        deliveryID: string;
        driverName: string;
        driverPhone: string;
      }

      interface Payment {
        code: string;
        id: string;
        status: number;
        statusName: string;
        method: MethodPayment[];
        methodName: string[];
      }
      interface MethodPayment {
        id: number;
        image: string;
        name: string;
      }

      export interface Product {
        itemCode: string;
        itemName: string;
        itemType: number;
        itemTypeName: string;
        quantity: number;
        unit: number;
        unitName: string;
        price: number;
        priceAfterDiscount: number;
        image: string;
        url: string;
        promotionItems: any[];
      }

      interface Pricing {
        totalPrice: number;
        discount: number;
        voucherDiscount: number;
        deliveryFee: number;
        finalPrice: number;
        fsellPoint: number;
      }

      export interface Flags {
        isShowTimeline: boolean;
        isReBuy: boolean;
        isCancel: boolean;
        canCancel: boolean;
        isRepayment: boolean;
        canRebuy: boolean;
      }

      export interface Transfer {
        isShowTransferInfo: boolean;
        transferInfoData?: any;
      }

      interface DeliveryInformation {
        receiverName: string;
        receiverPhoneNumber: string;
        receiverAddress: string;
        estimatedTimeline: string;
        shopCode: string;
        shopName: string;
        shopNameDisplay: string;
      }

      interface OrderMessage {
        enum: string;
        message: string;
      }

      interface Timeline {
        status: number;
        statusName: string;
        completionTime: string;
        isSucceeded: boolean;
        isProcessing: boolean;
      }
    }
  }
}
