import { getOrderByPaymentCode } from '@customer-web/request-providers/order';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useOrderByPaymentCodeQuery = (paymentCode?: string, options?: QueryOptions) => {
  const queryFn = () => getOrderByPaymentCode(paymentCode);

  return useQuery(['order-by-payment-code'], queryFn, {
    enabled: !!paymentCode,
    ...options,
  });
};

export default useOrderByPaymentCodeQuery;
