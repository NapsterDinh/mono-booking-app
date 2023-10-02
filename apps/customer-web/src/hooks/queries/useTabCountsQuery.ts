import { getTabCounts } from '@customer-web/request-providers/customer';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useTabCountsQuery = (options?: QueryOptions) => {
  const queryFn = () => getTabCounts();

  return useQuery(['tab-counts'], queryFn, {
    ...options,
  });
};

export default useTabCountsQuery;
