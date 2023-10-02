import RecentlyWatchedProducts from '@customer-web/components/RecentlyWatchedProducts';
import useFiltersQuery from '@customer-web/hooks/queries/useFiltersQuery';
import { getListProductByCategorySlug } from '@customer-web/request-providers/search';
import { AtomBox, breakpoints } from '@tsu-org/ui';
import { Box } from '@tsu-org/ui-kit';
import dynamic from 'next/dynamic';
import { FC, useMemo } from 'react';
import Products from '../Search/components/Products';
import { useSearchProducts } from '../Search/hooks/useSearchProducts';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import CategoryList from './components/CategoryList';
import useSlugString from './hooks/useSlugString';
import useSubCatesProductCountMap from './hooks/useSubCatesProductCountMap';
import type { CategoryProps } from './types';

const LoadingFRT = dynamic(() => import('@customer-web/components/Common/Pages/LoadingFRT'), {
  ssr: false,
});

const Category: FC<CategoryProps> = ({ category, breadcrumbItems }) => {
  const slugString = useSlugString();
  const { data: filters } = useFiltersQuery(slugString);
  const categorySortAttributes = useMemo(() => {
    const attributes = filters?.data?.attributes || [];

    return attributes;
  }, [filters?.data?.attributes]);
  const searchProductsData = useSearchProducts({
    categories: [slugString],
    categorySortAttributes,
    getProductsFn: getListProductByCategorySlug,
  });
  const subCatesProductCountMap = useSubCatesProductCountMap(category);

  return (
    <Box>
      <Box
        p={{
          lg: '1rem 0rem',
        }}
      >
        <BreadCrumb
          px={{
            xs: '1rem',
            lg: '0',
          }}
          pt={{
            xs: '1rem',
            lg: '0',
          }}
          pb="4"
          items={breadcrumbItems}
        />

        {/* slug category */}
        <AtomBox mb="3">
          <CategoryList
            subCatesProductCountMap={subCatesProductCountMap}
            category={category}
          />
        </AtomBox>
      </Box>

      <Products
        categorySortAttributes={categorySortAttributes}
        searchProductsData={searchProductsData}
      />

      <Box p="1rem">
        <RecentlyWatchedProducts
          slidesPerView={2}
          spaceBetween={12}
          breakpoints={{
            [breakpoints.xs]: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            [breakpoints.md]: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            [breakpoints.xl]: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }}
        />
      </Box>

      {searchProductsData.isLoading && <LoadingFRT />}
    </Box>
  );
};

export default Category;
