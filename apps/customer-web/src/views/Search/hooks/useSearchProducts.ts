import { DEFAULT_SORT_TYPE } from '@customer-web/constants/search';
import { SEARCH_SORT_VALUE_TO_MAP } from '@customer-web/enums/Search';
import { UserRanking } from '@customer-web/enums/User';
import { getRestrictInfo } from '@customer-web/request-providers/product';
import { useIsCorrectSearch } from '@customer-web/state/global/hooks';
import { useDeepCompareEffect, useToggle, useUpdateEffect } from 'ahooks';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { useMemo, useState } from 'react';
import { MAX_PRODUCT_PER_FETCH } from '../constants';

export const useSearchProducts = <
  T extends (
    payload?: NhapThuocPayload.SearchService.SearchDetail,
  ) => Promise<NhapThuocResponse.SearchService.SearchDetail>,
>({
  getProductsFn,
  keyword,
  categories,
  categorySortAttributes,
  ...rest
}: {
  getProductsFn: T;
  type?: 'search' | 'category';
  keyword?: string;
  categories: string[];
  categorySortAttributes: NhapThuocResponse.CMSGlobal.CategorySortAttributes[];
  productsByCategorySlug?: NhapThuocResponse.SearchService.SearchDetail;
}) => {
  const codes = useMemo(() => {
    return categorySortAttributes?.map((attr) => attr.code);
  }, [categorySortAttributes]);
  const [totalCount, setTotalCount] = useState(0);
  const [aggregations, setAggregations] = useState<NhapThuocResponse.SearchService.SearchDetail['aggregations']>();
  const [products, setProducts] = useState<NhapThuocResponse.SearchService.ProductByCategorySlug[]>(
    rest?.productsByCategorySlug?.products || [],
  );
  const hasMore = !!(totalCount && products?.length < totalCount);
  const isCorrectSearch = useIsCorrectSearch();
  const [productsByCategorySlugPayload, setProductsByCategorySlugPayload] =
    useState<NhapThuocPayload.SearchService.SearchDetail>({
      isCorrect: isCorrectSearch,
      keyword,
      category: categories,
      codes: categorySortAttributes?.map((attr) => attr.code),
      skipCount: 0,
      sortType: DEFAULT_SORT_TYPE,
      maxResultCount: MAX_PRODUCT_PER_FETCH,
    });
  const [isLoading, { setLeft: offLoading, setRight: onLoading }] = useToggle(false);

  const handleGetProducts = async (payload: NhapThuocPayload.SearchService.SearchDetail) => {
    onLoading();

    try {
      let productRestrictList: NhapThuocResponse.Product.ProductRestrictInfo[] = [];

      const productsByCategorySlug = await getProductsFn(payload);

      if (productsByCategorySlug.products?.length > 0) {
        const productRequestRestrictInfo: NhapThuocPayload.Product.RestrictInfoRequest = {
          listDataVerified: productsByCategorySlug.products?.map((item) => {
            return {
              itemCode: item?.sku,
              unitCode: item.price?.measureUnitCode ?? 1,
            };
          }),
          rankId: UserRanking.BRONZE_LEVEL,
        };

        try {
          productRestrictList = await getRestrictInfo(productRequestRestrictInfo);
        } catch (error) { }
      }

      const formattedProducts = productsByCategorySlug.products?.map((prod) => {
        return {
          ...prod,
          restrictInfo: productRestrictList?.find((item) => item.itemCode === prod?.sku),
        };
      });

      // if payload.skipCount = 0, set products = new response, else append to existing products list
      setProducts(payload.skipCount === 0 ? formattedProducts : products.concat(formattedProducts));
      setTotalCount(productsByCategorySlug.totalCount);
      setAggregations(productsByCategorySlug.aggregations);
    } finally {
      offLoading();
    }
  };

  const handleViewMore = () => {
    setProductsByCategorySlugPayload((prev) => ({
      ...prev,
      skipCount: (prev.skipCount ?? 0) + MAX_PRODUCT_PER_FETCH,
    }));
  };

  const handleChangeSortType = (sortType: any) => {
    setProductsByCategorySlugPayload((prev) => {
      if (prev.sortType === sortType) {
        sortType = DEFAULT_SORT_TYPE;
      }

      return {
        ...prev,
        sortType,
        skipCount: 0,
      };
    });
  };

  const handleSelectFilterValue = (
    {
      code,
      value,
    }: {
      code: string;
      value: string;
    },
    event: CheckboxChangeEvent,
  ) => {
    if (isLoading) {
      return;
    }

    setProductsByCategorySlugPayload((prev) => {
      const isSelect = event.target.checked;
      let values = (prev[code] || []).slice() as string[];
      const index = values.findIndex((item) => item === value);
      const selected = index !== -1;

      // if selected filter value already exist
      if (selected && isSelect) {
        return prev;
      }

      // Unselect filter value case
      if (selected && !isSelect) {
        values = values.filter((item) => item !== value);
      } else if (!selected && isSelect) {
        values.push(value);
      }

      const newPayload = {
        ...prev,
        skipCount: 0,
        [code]: values,
      };

      return newPayload;
    });
  };

  const handleToggleSelectAllFilterValue = (code: string, event: CheckboxChangeEvent) => {
    if (isLoading) {
      return;
    }

    setProductsByCategorySlugPayload((prev) => {
      const isSelect = event.target.checked;
      const isExistCode = codes?.findIndex((item) => item === code) !== -1;

      // if already select all
      if (!isExistCode || !isSelect) {
        return prev;
      }

      const newPayload = {
        ...prev,
        [code]: [],
      };

      return newPayload;
    });
  };

  const handleClearFilter = () => {
    setProductsByCategorySlugPayload((prev) => ({
      keyword,
      category: prev.category,
      codes: prev.codes,
      skipCount: 0,
      sortType: SEARCH_SORT_VALUE_TO_MAP[0],
      maxResultCount: MAX_PRODUCT_PER_FETCH,
    }));
  };

  const handleSetFilter = (filters: NhapThuocPayload.SearchService.SearchDetail) => {
    setProductsByCategorySlugPayload((prev) => ({
      ...prev,
      ...filters,
    }));
  };

  useUpdateEffect(() => {
    handleGetProducts(productsByCategorySlugPayload);
  }, [productsByCategorySlugPayload]);

  useDeepCompareEffect(() => {
    setProductsByCategorySlugPayload({
      ...productsByCategorySlugPayload,
      isCorrect: isCorrectSearch,
      category: categories,
      codes,
      skipCount: 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, codes, isCorrectSearch]);

  return {
    aggregations,
    categorySortAttributeCodes: codes,
    products,
    totalCount,
    isLoading,
    hasMore,
    productsByCategorySlugPayload,
    onViewMore: handleViewMore,
    handleChangeSortType,
    handleSelectFilterValue,
    handleToggleSelectAllFilterValue,
    handleClearFilter,
    handleSetFilter,
  };
};
