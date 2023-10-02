import { getFilters } from '@customer-web/services/request/providers/category';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useFiltersQuery = (slug?: string, options?: QueryOptions) => {
  const queryFn = () => getFilters(slug);

  return useQuery(['filters', slug], queryFn, {
    ...options,
  });
};

export default useFiltersQuery;
