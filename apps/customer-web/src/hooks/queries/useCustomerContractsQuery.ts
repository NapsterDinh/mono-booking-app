import { fetchCustomerContracts } from '@customer-web/request-providers/customer';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useCustomerContractsQuery = (customerId?: string, options?: QueryOptions) => {
  const queryFn = () => fetchCustomerContracts(customerId!);

  return useQuery(['contracts', customerId], queryFn, {
    enabled: !!customerId,
    ...options,
  });
};

export default useCustomerContractsQuery;
