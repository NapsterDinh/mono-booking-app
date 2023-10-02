import { Filter } from '@customer-web/views/Search/types';
import { useMemo } from 'react';

export const useFormattedCategorySortAttributes = ({
  categorySortAttributes,
  productsByCategorySlugAggregations,
}: {
  categorySortAttributes: NhapThuocResponse.CMSGlobal.CategorySortAttributes[];
  productsByCategorySlugAggregations: NhapThuocResponse.SearchService.Aggregation[];
}) => {
  const formattedCategorySortAttributes = useMemo(() => {
    let formattedCategorySortAttributes: Filter[] = [];

    if (productsByCategorySlugAggregations?.length) {
      formattedCategorySortAttributes = productsByCategorySlugAggregations
        .map((item) => {
          const filter = categorySortAttributes?.find((attr) => attr.code === item.code);

          if (filter) {
            return {
              ...filter,
              values: item.values || [],
            };
          }
        })
        .filter((item) => item?.values?.length && item.values.length > 0) as any;
    }

    return formattedCategorySortAttributes;
  }, [categorySortAttributes, productsByCategorySlugAggregations]);

  return formattedCategorySortAttributes;
};
