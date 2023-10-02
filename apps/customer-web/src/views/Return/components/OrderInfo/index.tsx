import { useMatchBreakpoints } from '@tsu-org/ui-kit';
import { FC } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

export interface OrderInfoProps {
  order?: Components.OrderDetail.Data;
}

const OrderInfo: FC<OrderInfoProps> = ({ order }) => {
  const { isDesktop } = useMatchBreakpoints();

  return isDesktop ? <Desktop order={order} /> : <Mobile order={order} />;
};

export default OrderInfo;
