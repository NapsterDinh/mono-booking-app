import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';
import { getPromotionPrices } from '@customer-web/request-providers/promotion';

const usePromotionPricesQuery = (
  payload?: NhapThuocPayload.Promotions.GetPromotionPrices[],
  options?: QueryOptions,
) => {
  const queryFn = () => getPromotionPrices(payload);

  return useQuery(['promotion-prices', payload], queryFn, {
    ...options,
  });
};

export default usePromotionPricesQuery;
