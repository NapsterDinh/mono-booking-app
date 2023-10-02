import { getGenders } from '@customer-web/request-providers/master-data';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useGendersQuery = (options?: QueryOptions) => {
  const queryFn = () => getGenders();

  return useQuery(['genders'], queryFn, {
    ...options,
  });
};

export default useGendersQuery;
