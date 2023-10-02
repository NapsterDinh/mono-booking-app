import { getWards } from '@customer-web/request-providers/master-data';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useWardsQuery = (districtId?: string, options?: QueryOptions) => {
  const queryFn = () => getWards(districtId);

  return useQuery(['wards', districtId], queryFn, {
    enabled: !!districtId,
    ...options,
  });
};

export default useWardsQuery;
