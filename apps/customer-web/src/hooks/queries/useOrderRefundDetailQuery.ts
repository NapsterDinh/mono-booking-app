import { getOrderDetailCancelDeposit } from '@customer-web/request-providers/order';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useOrderRefundDetailQuery = (
  { orderCode, type }: { orderCode?: string; type?: string },
  options?: QueryOptions,
) => {
  const queryFn = () => getOrderDetailCancelDeposit(orderCode, type);

  return useQuery(['order-refund-detail', orderCode, type], queryFn, {
    enabled: !!orderCode,
    ...options,
  });
};

export default useOrderRefundDetailQuery;
