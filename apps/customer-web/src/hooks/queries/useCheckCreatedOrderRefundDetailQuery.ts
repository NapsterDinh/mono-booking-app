import { checkTransactionSubmitted } from '@customer-web/request-providers/order';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useCheckCreatedOrderRefundDetailQuery = (paymentRequestCode?: string, options?: QueryOptions) => {
  const queryFn = () => checkTransactionSubmitted(paymentRequestCode);

  return useQuery(['order-refund-detail', paymentRequestCode], queryFn, {
    enabled: !!paymentRequestCode,
    ...options,
  });
};

export default useCheckCreatedOrderRefundDetailQuery;
