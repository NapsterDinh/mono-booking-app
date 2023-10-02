import { getCities } from '@customer-web/request-providers/master-data';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useCitiesQuery = (options?: QueryOptions) => {
  const queryFn = () => getCities();

  return useQuery(['cities'], queryFn, {
    ...options,
  });
};

export default useCitiesQuery;
