import { getProductBySlug } from '@customer-web/services/request/providers/search';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useProductBySlugQuery = (slug?: string, options?: QueryOptions) => {
  const queryFn = () => getProductBySlug(slug!);

  return useQuery(['product-by-slug', slug], queryFn, {
    enabled: !!slug,
    ...options,
  });
};

export default useProductBySlugQuery;
