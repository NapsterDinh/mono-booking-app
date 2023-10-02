import { getProductBySku } from '@customer-web/services/request/providers/search';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useProductBySkuQuery = (sku?: string, options?: QueryOptions) => {
  const queryFn = () => getProductBySku(sku!);

  return useQuery(['product-by-sku', sku], queryFn, {
    enabled: !!sku,
    ...options,
  });
};

export default useProductBySkuQuery;
