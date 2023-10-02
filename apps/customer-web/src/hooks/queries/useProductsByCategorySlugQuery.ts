import { SEARCH_SORT_TYPE } from '@customer-web/enums/Search';
import { getListProductByCategorySlug } from '@customer-web/services/request/providers/search';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useProductsByCategorySlugQuery = (
  payload?: NhapThuocPayload.SearchService.ListProductByCategorySlug,
  options?: QueryOptions,
) => {
  const formattedPayload = {
    skipCount: 0,
    maxResultCount: 20,
    sortType: SEARCH_SORT_TYPE.NO_SORT,
    category: [],
    ...payload,
  };
  const queryFn = () => getListProductByCategorySlug(formattedPayload);

  return useQuery(['products-by-category-slug', formattedPayload], queryFn, {
    ...options,
  });
};

export default useProductsByCategorySlugQuery;
