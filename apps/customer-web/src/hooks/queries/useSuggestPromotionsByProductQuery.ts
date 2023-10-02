import { getSuggestPromotion } from '@customer-web/request-providers/promotion';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useSuggestPromotionsByProductQuery = (payload?: NhapThuocPayload.Promotions.Suggest, options?: QueryOptions) => {
  const queryFn = () => getSuggestPromotion(payload);

  return useQuery(['suggest-promotions-by-product', payload], queryFn, {
    ...options,
  });
};

export default useSuggestPromotionsByProductQuery;
