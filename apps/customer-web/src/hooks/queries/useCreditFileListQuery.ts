import { getListTpBankCredit } from '@customer-web/request-providers/customer';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useCreditFileListQuery = (customerId?: string, options?: QueryOptions) => {
  const queryFn = () => getListTpBankCredit({ customerId });

  return useQuery(['credits', customerId], queryFn, {
    enabled: !!customerId,
    ...options,
  });
};

export default useCreditFileListQuery;
