import { SearchType } from '@customer-web/enums/Search';
import { useUrlState } from '@customer-web/hooks';

export const useSearch = () => {
  const [searchParams, setSearchParams] = useUrlState({
    type: SearchType.ALL,
  });

  const onChangeType = (event?: any) => {
    setSearchParams({
      type: event.target.value,
    });
  };

  return {
    searchParams,
    onChangeType,
  };
};
