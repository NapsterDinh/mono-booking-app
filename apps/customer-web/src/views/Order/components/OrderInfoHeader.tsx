import { TypeOfSplitingOrder } from '@customer-web/enums/Order';
import { useCopyToClipboard } from '@customer-web/hooks';
import OrderSplit from '@customer-web/views/Personal/MyOrder/components/OrderSplit';
import { Column, Link, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { DocumentCopyIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Button } from 'antd';
import { FC, Fragment } from 'react';

const OrderInfoHeader: FC<{ order?: Components.OrderDetail.Data }> = ({ order }) => {
  const [_, copy] = useCopyToClipboard();

  return (
    <Column
      bgc="backgroundGreySecondary"
      borderTopRadius="12px"
      borderBottom="1"
      px="3"
      py="0p75rem"
    >
      <RowBetween alignItems="flex-end">
        <RowFixed gap="1">
          <Text bold>{order?.orderName}</Text>

          <Text color="textDisabled">&bull;</Text>

          <RowFixed alignItems="center">
            <Text
              color="textSecondary"
              small
              fontWeight="500"
            >
              #{order?.orderDelivery?.orderCodeDisplay}
            </Text>
            <Button
              type="text"
              size="small"
              onClick={copy.bind(this, order?.orderDelivery?.orderCode)}
            >
              <DocumentCopyIcon color="link" />
            </Button>
          </RowFixed>
        </RowFixed>
      </RowBetween>

      {order?.orderSplit?.parent?.orderCode && (
        <OrderSplit
          orderSplit={order.orderSplit}
          caseOrder={TypeOfSplitingOrder.PARENT}
        />
      )}

      {order?.orderSplit?.children?.length > 0 && (
        <OrderSplit
          orderSplit={order.orderSplit}
          caseOrder={TypeOfSplitingOrder.CHILDREN}
        />
      )}
    </Column>
  );
};

export default OrderInfoHeader;
