import { SEARCH_SORT_TYPE } from '@customer-web/enums/Search';
import { getListProductByCategorySlug } from '@customer-web/services/request/providers/search';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useRelatedProductsQuery = (
  payload?: NhapThuocPayload.SearchService.ListProductByCategorySlug,
  options?: QueryOptions,
) => {
  const formattedPayload = {
    skipCount: 0,
    maxResultCount: 20,
    sortType: SEARCH_SORT_TYPE.BY_RANKING,
    category: [],
    ...payload,
  };
  const queryFn = () => getListProductByCategorySlug(formattedPayload);

  return useQuery(['related-products', formattedPayload], queryFn, {
    ...options,
  });
};

export default useRelatedProductsQuery;
