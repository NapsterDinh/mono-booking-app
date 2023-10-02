import { getOrderDetail } from '@customer-web/request-providers/order';
import useQuery from './useQuery';

type Options = Parameters<typeof useQuery<NhapThuocResponse.Orders.OrderDetail>>[2];

const useOrderQuery = (orderCode?: string, options?: Options) => {
  const queryFn = () => getOrderDetail(orderCode);

  return useQuery(['order', orderCode], queryFn, {
    enabled: !!orderCode,
    ...options,
  });
};

export default useOrderQuery;
