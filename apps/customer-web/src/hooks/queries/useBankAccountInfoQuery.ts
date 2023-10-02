import { getInfoRefundCredit } from '@customer-web/request-providers/customer';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useBankAccountInfoQuery = (customerId?: string, options?: QueryOptions) => {
  const queryFn = () => getInfoRefundCredit({ customerId });

  return useQuery(['bank-info', customerId], queryFn, {
    enabled: !!customerId,
    ...options,
  });
};

export default useBankAccountInfoQuery;
