import { getDistricts } from '@customer-web/request-providers/master-data';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useDistrictsQuery = (cityId?: string, options?: QueryOptions) => {
  const queryFn = () => getDistricts(cityId);

  return useQuery(['districts', cityId], queryFn, {
    enabled: !!cityId,
    ...options,
  });
};

export default useDistrictsQuery;
