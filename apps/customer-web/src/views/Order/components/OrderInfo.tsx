import { OrderDetailMapping } from '@customer-web/services/mapping/OrderDetailMapping';
import { Box, Row } from '@tsu-org/ui-kit';
import { FC, useEffect, useState } from 'react';
import DeliveryInfo from './DeliveryInfo';
import OrderInfoHeader from './OrderInfoHeader';
import OrderItems from './OrderItems';
import OrderSummary from './OrderSummary';
import ReceiverInfo from './ReceiverInfo';
import TransferInfo from './TransferInfo';

interface OrderInfoProps {
  order?: NhapThuocResponse.Orders.OrderDetail;
  onDeleteOrder?: () => void;
}

const OrderInfo: FC<OrderInfoProps> = ({ order, onDeleteOrder }) => {
  const [formattedOrder, setFormattedOrder] = useState<Components.OrderDetail.Data>();

  useEffect(() => {
    if (order) {
      setFormattedOrder(OrderDetailMapping.mappingOrderDetail(order));
    }
  }, [order]);

  return (
    <Box
      p={{
        _: '2rem 1rem',
      }}
    >
      <Row
        gap="3"
        alignItems="flex-start"
        flexDirection={{
          lg: 'row',
          xs: 'column',
        }}
      >
        <Box
          flexGrow="1"
          width={{
            lg: 'auto',
            _: '100%',
          }}
        >
          <OrderInfoHeader order={formattedOrder} />

          {!(order?.orderSplit?.children?.length > 0) && <DeliveryInfo order={formattedOrder} />}

          <ReceiverInfo
            order={formattedOrder}
            mb="1p5rem"
          />

          <OrderItems items={formattedOrder?.orderProducts} />
        </Box>

        <Box
          width={{
            xl: '384px',
            lg: '280px',
            _: '100%',
          }}
          flexShrink="0"
        >
          <OrderSummary
            order={formattedOrder}
            mb="6"
            onDeleteOrder={onDeleteOrder}
          />

          <TransferInfo
            order={formattedOrder}
            transfer={formattedOrder?.transfer}
          />
        </Box>
      </Row>
    </Box>
  );
};

export default OrderInfo;
