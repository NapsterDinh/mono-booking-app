import { fetchCustomerInvoicesByCustomerId } from '@customer-web/request-providers/customer';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useUserInvoicesByUserIdQuery = (userId?: string, options?: QueryOptions) => {
  const queryFn = () => fetchCustomerInvoicesByCustomerId(userId);

  return useQuery(['user-invoices-by-user-id', userId], queryFn, {
    enabled: !!userId,
    ...options,
  });
};

export default useUserInvoicesByUserIdQuery;
