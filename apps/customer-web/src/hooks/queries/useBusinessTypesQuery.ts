import { getBusinessTypes } from '@customer-web/request-providers/master-data';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useBusinessTypesQuery = (options?: QueryOptions) => {
  const queryFn = () => getBusinessTypes();

  return useQuery(['business-types'], queryFn, {
    ...options,
  });
};

export default useBusinessTypesQuery;
