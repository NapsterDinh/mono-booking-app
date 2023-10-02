import { ITEM_SHIPMENT } from '@customer-web/helpers/Constant';
import { getListProduct } from '@customer-web/request-providers/search';
import { checkTransactionSubmitted } from '@customer-web/services/request/providers/order';
import { getProduct } from '@customer-web/services/request/providers/product';

export class OrderDetailMapping {
  static mappingOrderDetail(order: NhapThuocResponse.Orders.OrderDetail): Components.OrderDetail.Data {
    const orderDetailData: Components.OrderDetail.Data = {
      orderCode: order.orderCode,
      orderName: order.orderName,
      isCompleteTransaction: true,
      orderDate: order.orderDate,
      paymentStatus: order.orderInformation.paymentStatus,
      paymentStatusLabel: order.orderInformation.paymentStatusLabel,
      orderShipment: {
        ...order.shipment,
      },
      orderDelivery: {
        ...order.delivery,
        orderCodeDisplay: order.orderCodeDisplay,
        orderCode: order.orderCode,
        customerName: order.orderInformation.customerName,
        customerPhone: order.orderInformation.phoneNumber,
        customerReceiverName: order.orderInformation?.customerReceiverName,
        customerReceiverPhone: order.orderInformation?.customerReceiverPhone,
      },
      orderReceivePayment: {
        customerReceiverName: order.orderInformation?.customerReceiverName,
        customerReceiverPhone: order.orderInformation?.customerReceiverPhone,
        receiverAddress: order.orderInformation?.receiverAddress,
        receiverFullAddress: order.orderInformation?.receiverFullAddress,
        note: order.notes,
        intendTime: order.orderInformation?.intendTime,
        paymentMethodDefault: order.orderInformation?.paymentMethodDefault,
        paymentMethodLabel: order.orderInformation?.paymentMethodLabel,
        paymentMethodAvatar: order.orderInformation?.paymentMethodAvatar,
      },
      orderProducts: [...order.orderProducts],
      orderPrice: {
        totalPrice: order.orderPrice.totalPrice,
        finalPrice: order.orderPrice?.isShowAmountPaid ? order.orderPrice.amountPaid : order.orderPrice.finalPrice,
        finalPriceAfterDiscount: order.orderPrice.finalPriceAfterDiscount,
        deliveryFee: order.orderPrice.deliveryFee,
        promotion: order.orderPrice.promotion,
        isShowAmountPaid: order.orderPrice.isShowAmountPaid || false,
        discountNt: order.orderPrice?.discountNt,
      },
      flags: {
        allowReOrder: order.allowReOrder,
        isCancel: order.isCancel,
        isPaymentCompleted: order.isPaymentCompleted,
        isRepayment: order.isRepayment,
        isShowTransferInfo: order.isShowTransferInfo,
        canCancel: order.canCancel,
        canRebuy: order.canRebuy,
      },
      transfer: null,
      orderSplit: order.orderSplit,
      driverInfo: order.driverInfo,
      status: order.status,
    };

    if (order.isShowTransferInfo && order.transferInfoData) {
      orderDetailData.transfer = {
        accountName: order.transferInfoData.accountName || '',
        accountNumber: order.transferInfoData.accountNumber || '',
        amount: order.transferInfoData.amount || 0,
        bankName: order.transferInfoData.bankName || '',
        content: order.transferInfoData.content || '',
      };
    }

    return orderDetailData;
  }

  static async mappingOrderReturn(order: NhapThuocResponse.Return.DetailReturn): Promise<Components.OrderDetail.Data> {
    const skus: string[] = order.details.map((i) => i.itemCode);
    let productItems: NhapThuocResponse.SearchService.ListProduct[] = [];

    try {
      productItems = skus.length > 0 ? await getListProduct(skus) : [];
    } catch (error) { }

    const initData: Components.OrderDetail.Data = {
      orderCode: order.orderCode,
      paymentRequestCode: order.paymentRequestCode,
      orderReturnCode: order.orderReturnCode,
      orderReturnStatus: order.orderReturnStatus,
      isCompleteTransaction: false,
      orderReturnId: order.orderReturnId,
      customerId: order.custCode,
      shopCode: order.shopCode,
      modifiedBy: order.modifiedBy,
      modifiedByName: order.modifiedByName,
      orderDelivery: {
        orderCodeDisplay: order.orderCodeDisplay,
        orderCode: order.orderCode,
        customerName: order.custName,
        customerPhone: order.phone,
        paymentMethodLabel: order.paymentMethodLabel ?? '',
      },
      orderProducts: order.details?.map((i) => {
        const product = productItems.find((e) => e.sku === i.itemCode);
        return {
          sku: i.itemCode,
          title: i.itemName,
          quantity: i.quantity,
          unitLabel: i.unitName,
          price: i.total,
          discount: 0,
          discountPromotion: 0,
          image: product?.image,
          url: product?.slug || '',
          total: i.total,
          unit: i.unitCode,
        };
      }),
      orderPrice: {
        totalPrice: order.total,
        finalPrice: order.totalPayment,
        promotion: order.totalDiscount ?? 0,
        totalFee: order.totalFee,
        totalPayment: order.totalPayment,
        totalPaid: order.totalPaid,
        isShowAmountPaid: false,
      },
      flags: {
        allowReOrder: false,
        isCancel: false,
        isPaymentCompleted: false,
        isRepayment: false,
        isShowTransferInfo: false,
        canCancel: false,
        canRebuy: false,
      },
    };
    try {
      const checkTransaction = await checkTransactionSubmitted(order?.paymentRequestCode);
      return {
        ...initData,
        isCompleteTransaction: true,
        orderInfoRefund: {
          bankName: checkTransaction.bankName,
          numberCard: checkTransaction.accountNum,
          name: checkTransaction.accountName,
          brand: '',
        },
      };
    } catch (error) {
      return initData;
    }
  }

  static async mappingOrderRefund(
    order: NhapThuocResponse.CancelDeposit.DepositDetail,
  ): Promise<Components.OrderDetail.Data> {
    const skus: string[] = order.orderInfo.details.map((i) => i.itemCode);
    let productItems: NhapThuocResponse.SearchService.ListProduct[] = [];

    try {
      productItems = skus.length > 0 ? await getListProduct(skus) : [];
    } catch (error) { }

    const initData: Components.OrderDetail.Data = {
      orderCode: order.orderCode,
      isCompleteTransaction: false,
      paymentRequestId: order.paymentRequestTransferInfo.id,
      paymentRequestCode: order.paymentRequestTransferInfo.paymentRequestCode,
      customerId: order.orderInfo.custCode,
      shopCode: order.orderInfo.shopCode,
      modifiedBy: order.orderInfo.modifiedBy,
      modifiedByName: order.orderInfo.modifiedByName,
      orderDelivery: {
        orderCodeDisplay: order.orderInfo.orderCodeDisplay,
        orderCode: order.orderInfo.orderCode,
        customerName: order.orderInfo.custName,
        customerPhone: order.orderInfo.phone,
        paymentMethodLabel: order.paymentMethodLabel ?? '',
      },
      orderProducts: order.orderInfo.details
        ?.filter((i) => i.itemCode !== ITEM_SHIPMENT)
        .map((i) => {
          const product = productItems.find((e) => e.sku === i.itemCode);
          return {
            sku: i.itemCode,
            title: i.itemName,
            quantity: i.quantity,
            unitLabel: i.unitName,
            price: i.total,
            discount: 0,
            discountPromotion: 0,
            image: product?.image || '',
            url: product?.slug || '',
            total: i.total,
            unit: i.unitCode,
          };
        }),
      orderPrice: {
        totalPrice: order.orderInfo.total,
        promotion: order.orderInfo.totalDiscount ?? 0,
        totalPayment: order.paymentRequestTransferInfo.totalPayment,
        isShowAmountPaid: false,
        deliveryFee: order.orderInfo.details?.find((i) => i.itemCode === ITEM_SHIPMENT)?.totalBill || 0,
      },
      flags: {
        allowReOrder: false,
        isCancel: false,
        isPaymentCompleted: false,
        isRepayment: false,
        isShowTransferInfo: false,
        canCancel: false,
        canRebuy: false,
      },
    };

    try {
      const checkTransaction = await checkTransactionSubmitted(order.paymentRequestTransferInfo.paymentRequestCode);
      return {
        ...initData,
        isCompleteTransaction: true,
        orderInfoRefund: {
          bankName: checkTransaction.bankName,
          numberCard: checkTransaction.accountNum,
          name: checkTransaction.accountName,
          brand: '',
        },
      };
    } catch (error) {
      return initData;
    }
  }
}
