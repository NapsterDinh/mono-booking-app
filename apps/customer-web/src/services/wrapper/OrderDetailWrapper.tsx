import Button from '@customer-web/components/Common/Tags/Button/Button';
import { OrderPage } from '@customer-web/enums/Order';
import Link from 'next/link';

interface GetOrderTablesParams {
  data: Components.OrderDetail.Data;
  currentPage: OrderPage;
  onCancel?: () => void;
  onTracking?: () => void;
}

interface GetDeliveryItemParams {
  orderDelivery: Components.OrderDetail.OrderDelivery;
  orderInfoRefund?: Components.OrderDetail.InfoRefund;
  currentPage: OrderPage;
  onCancel?: () => void;
  flags: Components.OrderDetail.Flags;
}

export class OrderDetailWrapper {
  static validateThenMergeIntoTableItems(title: string, value: any, array: Components.OrderDetail.TableItem[]): void {
    if (value && value.length > 0) {
      array.push({
        key: title,
        value: value,
      });
    }
  }

  static getOrderDeliveryItem({
    orderDelivery,
    orderInfoRefund,
    currentPage,
    onCancel,
    flags,
  }: GetDeliveryItemParams): Components.OrderDetail.TableItem[] {
    const deliveryItem: Components.OrderDetail.TableItem[] = [];

    if (orderDelivery.orderCode && orderDelivery.orderCodeDisplay) {
      deliveryItem.push({
        key: 'Số đơn hàng',
        value: (
          <>
            <strong className="txt-primary-700 m-r-8">{orderDelivery.orderCodeDisplay}</strong>
            {currentPage === OrderPage.SUCCESS && (
              <Link href={`/ttdh/${orderDelivery.orderCode}`}>
                <span className="btn btn-sm btn-primary btn-rounded btn-xxs-md">Tra cứu đơn hàng</span>
              </Link>
            )}
            {currentPage === OrderPage.PROFILE && onCancel && flags.isCancel && (
              <Button
                className="btn btn-rounded btn-sm btn-danger"
                onClick={onCancel}
              >
                Hủy đơn
              </Button>
            )}
          </>
        ),
      });

      OrderDetailWrapper.validateThenMergeIntoTableItems(
        `Họ và tên ${currentPage !== OrderPage.REFUND && currentPage !== OrderPage.RETURN ? 'người đặt' : ''}`,
        orderDelivery.customerName,
        deliveryItem,
      );
      OrderDetailWrapper.validateThenMergeIntoTableItems(
        `Số điện thoại ${currentPage !== OrderPage.REFUND && currentPage !== OrderPage.RETURN ? 'người đặt' : ''}`,
        orderDelivery.customerPhone,
        deliveryItem,
      );
      if ((currentPage === OrderPage.REFUND || currentPage === OrderPage.RETURN) && orderDelivery.paymentMethodLabel) {
        OrderDetailWrapper.validateThenMergeIntoTableItems(
          'Phương thức thanh toán',
          orderDelivery.paymentMethodLabel,
          deliveryItem,
        );
      }
      if (orderInfoRefund) {
        deliveryItem.push({
          key: 'Tài khoản tiếp nhận trả hàng',
          value: (
            <>
              <p className="m-b-4">
                <span className="cursor-default">Ngân hàng: </span> {orderInfoRefund.bankName}
              </p>
              <p className="m-b-4">
                <span>Số tài khoản:</span>
                <strong className="f-w-500"> {orderInfoRefund.numberCard}</strong>
              </p>
              <p className="m-b-4">
                <span>Chủ tài khoản: </span>
                <strong className="f-w-500">{orderInfoRefund.name}</strong>
              </p>
            </>
          ),
        });
      }
    }

    return deliveryItem;
  }

  static getOrderReceiverAndPaymentMethod(
    orderReceiverAndPayment?: Components.OrderDetail.OrderReceivePayment,
  ): Components.OrderDetail.TableItem[] {
    if (orderReceiverAndPayment == null) {
      return [];
    }

    const receiverAndPayment: Components.OrderDetail.TableItem[] = [];

    OrderDetailWrapper.validateThenMergeIntoTableItems(
      'Họ và tên người nhận',
      orderReceiverAndPayment.customerReceiverName,
      receiverAndPayment,
    );
    OrderDetailWrapper.validateThenMergeIntoTableItems(
      'Số điện thoại người nhận',
      orderReceiverAndPayment.customerReceiverPhone,
      receiverAndPayment,
    );
    OrderDetailWrapper.validateThenMergeIntoTableItems(
      'Nhận hàng tại',
      orderReceiverAndPayment.receiverFullAddress,
      receiverAndPayment,
    );
    OrderDetailWrapper.validateThenMergeIntoTableItems(
      'Phương thức thanh toán',
      orderReceiverAndPayment.paymentMethodLabel,
      receiverAndPayment,
    );
    OrderDetailWrapper.validateThenMergeIntoTableItems(
      'Thời gian dự kiến',
      orderReceiverAndPayment.intendTime,
      receiverAndPayment,
    );
    OrderDetailWrapper.validateThenMergeIntoTableItems(
      'Ghi chú đơn hàng',
      orderReceiverAndPayment.note,
      receiverAndPayment,
    );

    return receiverAndPayment;
  }

  static getOrderTables({ data, currentPage, onCancel }: GetOrderTablesParams): Components.OrderDetail.Table[] {
    if (currentPage !== OrderPage.RETURN && currentPage !== OrderPage.REFUND) {
      return [
        {
          title: 'Thông tin giao hàng',
          items: OrderDetailWrapper.getOrderDeliveryItem({
            orderDelivery: data.orderDelivery,
            currentPage: currentPage,
            onCancel: onCancel,
            flags: data.flags,
          }),
        },
        {
          title: 'Thông tin nhận hàng & thanh toán',
          items: OrderDetailWrapper.getOrderReceiverAndPaymentMethod(data.orderReceivePayment),
        },
      ];
    } else {
      return [
        {
          title: 'Thông tin giao hàng',
          items: OrderDetailWrapper.getOrderDeliveryItem({
            orderDelivery: data.orderDelivery,
            orderInfoRefund: data.orderInfoRefund,
            currentPage: currentPage,
            onCancel: onCancel,
            flags: data.flags,
          }),
        },
      ];
    }
  }
}
