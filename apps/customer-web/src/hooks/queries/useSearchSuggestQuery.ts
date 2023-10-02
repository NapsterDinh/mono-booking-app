import { getSearchSuggest } from '@customer-web/request-providers/search';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const useSearchSuggestQuery = (payload: NhapThuocPayload.SearchService.SearchSuggest, options?: QueryOptions) => {
  const queryFn = () => getSearchSuggest(payload);

  return useQuery(['search-suggest', payload], queryFn, {
    ...options,
  });
};

export default useSearchSuggestQuery;
