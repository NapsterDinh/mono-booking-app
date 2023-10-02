import { OrderSplitType, TypeOfSplitingOrder } from '@customer-web/enums/Order';
import { Link, Text } from '@tsu-org/ui-kit';
import { Fragment } from 'react';

interface OrderSplitProps {
  orderSplit: {
    parent?: {
      orderCode?: string;
      orderCodeDisplay?: string;
    };
    children?: { orderCode?: string; orderCodeDisplay?: string; childType?: string }[];
  };
  caseOrder: string;
}

const OrderSplit = ({ orderSplit, caseOrder }: OrderSplitProps) => {
  const sumOfChildrenSplitOrder = orderSplit.children?.length;

  switch (caseOrder) {
    case TypeOfSplitingOrder.PARENT:
      return (
        <Text
          color="textSecondary"
          small
          as="div"
        >
          Đơn hàng này được tách từ đơn hàng{' '}
          <Link
            external
            display="inline-block"
            small
            fontWeight={500}
            href={`/ttdh/${orderSplit.parent?.orderCode}`}
          >
            #{orderSplit.parent?.orderCodeDisplay}
          </Link>
        </Text>
      );
    case TypeOfSplitingOrder.CHILDREN:
      return (
        <Text
          color="textSecondary"
          small
          as="div"
        >
          Đơn hàng này đã được tách thành {sumOfChildrenSplitOrder} đơn hàng{' '}
          {orderSplit?.children.map((childOrder, index) => {
            const isCancelledAndRefundOrder = childOrder?.childType === OrderSplitType.SO3;
            const childOrderCodeDisplay = childOrder?.orderCodeDisplay;

            return (
              <Fragment key={childOrder.orderCode}>
                <Link
                  external
                  display="inline-block"
                  fontWeight={500}
                  small
                  color={isCancelledAndRefundOrder ? 'colorError' : 'textLink'}
                  href={`/ttdh/${childOrder.orderCode}`}
                >
                  #{isCancelledAndRefundOrder ? `${childOrderCodeDisplay} (Đơn hủy hoàn tiền)` : childOrderCodeDisplay}
                </Link>

                {index !== orderSplit?.children.length - 1 && ', '}
              </Fragment>
            );
          })}
        </Text>
      );
    default:
      break;
  }
};

export default OrderSplit;
