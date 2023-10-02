import { getOrderDetailReturn } from '@customer-web/request-providers/order';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useOrderReturnQuery = (code?: string, options?: QueryOptions) => {
  const queryFn = () => getOrderDetailReturn(code);

  return useQuery(['order-return', code], queryFn, {
    enabled: !!code,
    ...options,
  });
};

export default useOrderReturnQuery;
