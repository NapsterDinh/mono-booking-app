import { getDeliveryServices } from '@customer-web/request-providers/promising';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useDeliveryServicesQuery = (
  payload?: NhapThuocPayload.Promisings.GetDeliveryServices,
  options?: QueryOptions,
) => {
  const queryFn = () => getDeliveryServices(payload);

  return useQuery(['delivery-services', payload], queryFn, {
    ...options,
  });
};

export default useDeliveryServicesQuery;
