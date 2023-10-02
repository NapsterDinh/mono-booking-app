import { getListBank } from '@customer-web/request-providers/payment';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useBanksQuery = (options?: QueryOptions) => {
  const queryFn = () => getListBank();

  return useQuery(['banks'], queryFn, {
    ...options,
  });
};

export default useBanksQuery;
