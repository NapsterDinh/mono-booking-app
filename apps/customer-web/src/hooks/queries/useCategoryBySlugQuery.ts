import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';
import { getCategoryBySlug } from '@customer-web/request-providers/category';

const useCategoryBySlugQuery = (slug?: string, options?: QueryOptions) => {
  const queryFn = () => getCategoryBySlug(slug!);

  return useQuery(['category-by-slug', slug], queryFn, {
    enabled: !!slug,
    ...options,
  });
};

export default useCategoryBySlugQuery;
