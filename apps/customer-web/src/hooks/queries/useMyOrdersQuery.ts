import { getMyOrders } from '@customer-web/request-providers/customer';
import { MyOrdersPayload } from '../../types/api/payload/order';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useMyOrdersQuery = (payload: MyOrdersPayload, options?: QueryOptions) => {
  const queryFn = () => getMyOrders(payload);

  return useQuery(['my-orders', payload], queryFn, {
    ...options,
  });
};

export default useMyOrdersQuery;
