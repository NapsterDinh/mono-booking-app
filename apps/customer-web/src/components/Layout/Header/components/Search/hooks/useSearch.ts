import { getPromotionPrices } from '@customer-web/request-providers/promotion';
import { getPromotionsSuggest, getSearchSuggest } from '@customer-web/request-providers/search';
import { useAppDispatch } from '@customer-web/state';
import { setFocusedSearchInput } from '@customer-web/state/global/actions';
import { useFocusedSearchInput, useIsCorrectSearch } from '@customer-web/state/global/hooks';
import { InputProps } from '@tsu-org/ui-kit';
import { useDebounce } from 'ahooks';
import { useCallback, useState } from 'react';

const useSearch = () => {
  const [keyword, setKeyword] = useState('');
  const focused = useFocusedSearchInput();
  const debouncedKeyword = useDebounce(keyword, { wait: 250 });
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<NhapThuocResponse.SearchService.SearchSuggest>();
  const dispatch = useAppDispatch();
  const isCorrectSearch = useIsCorrectSearch();

  const handleFocus = () => {
    dispatch(setFocusedSearchInput(true));
  };

  const handleBlur = () => {
    dispatch(setFocusedSearchInput(false));
  };

  const handleChange = (event: Parameters<InputProps['onChange']>[0]) => {
    setKeyword(event.target.value);
  };

  const search = useCallback(
    async (keyword) => {
      if (!keyword) {
        return;
      }

      setIsLoading(true);

      try {
        const data = await getSearchSuggest({
          keyword,
          KeywordSuggestSize: 4,
          CatEcomSuggestSize: 3,
          ProductSuggestSize: 3,
          isCorrect: isCorrectSearch,
        });

        const promotionsPayload = data?.products?.map((product) => ({
          itemCode: product.sku,
          unitCode: product.price?.measureUnitCode || 0,
          price: product.price?.price || 0,
        }));
        let promotions = [];

        try {
          promotions = await getPromotionPrices(promotionsPayload);
        } catch (error) { }

        const products = data?.products?.map((product) => ({
          ...product,
          price: {
            ...product.price,
            discount:
              promotions.find(
                (promotion) =>
                  promotion.itemCode === product.sku &&
                  promotion.unitCode.toString() === product.price?.measureUnitCode?.toString(),
              ) || null,
          },
        }));

        setData({
          ...data,
          products,
        });
      } catch (error) { }

      setIsLoading(false);
    },
    [isCorrectSearch],
  );

  return {
    focused,
    keyword,
    debouncedKeyword,
    isLoading,
    data,
    setKeyword,
    handleFocus,
    handleBlur,
    handleChange,
    search,
  };
};

export default useSearch;
