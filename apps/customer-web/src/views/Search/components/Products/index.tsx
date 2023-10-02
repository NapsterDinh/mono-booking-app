import { AtomBox } from '@tsu-org/ui';
import { Box, Row, useMatchBreakpoints } from '@tsu-org/ui-kit';
import type { FC } from 'react';
import { useFormattedCategorySortAttributes } from '../../hooks/useFormattedCategorySortAttributes';
import { useSearchProducts } from '../../hooks/useSearchProducts';
import { SORT_TYPE } from '../../types';
import Filters from './components/Filters';
import ProductList from './components/ProductList';

interface ProductsProps {
  categorySortAttributes?: NhapThuocResponse.CMSGlobal.CategorySortAttributes[];
  searchProductsData?: ReturnType<typeof useSearchProducts>;
}

const Products: FC<ProductsProps> = ({ categorySortAttributes, searchProductsData }) => {
  const formattedCategorySortAttributes = useFormattedCategorySortAttributes({
    categorySortAttributes,
    productsByCategorySlugAggregations: searchProductsData?.aggregations,
  });
  const { isDesktop } = useMatchBreakpoints();

  return (
    <Box
      p={{
        lg: '1rem 0rem',
      }}
    >
      <AtomBox
        px={{
          xs: '3',
          lg: '0',
        }}
      >
        <Row
          alignItems="flex-start"
          gap="3"
          mb="1p5rem"
          flexDirection={{
            xs: 'column',
            lg: 'row',
          }}
        >
          {isDesktop && (
            <Filters
              filters={formattedCategorySortAttributes}
              flexShrink={0}
              width={{
                xs: 'full',
                lg: 'auto',
              }}
              position={{ lg: 'sticky' }}
              top="1rem"
              productsByCategorySlugPayload={searchProductsData.productsByCategorySlugPayload}
              onSelectFilterValue={searchProductsData.handleSelectFilterValue}
              onToggleSelectAll={searchProductsData.handleToggleSelectAllFilterValue}
            />
          )}

          <ProductList
            width={{
              xs: 'full',
              lg: 'auto',
            }}
            categorySortAttributeCodes={searchProductsData.categorySortAttributeCodes}
            filters={formattedCategorySortAttributes}
            productsByCategorySlugPayload={searchProductsData.productsByCategorySlugPayload}
            products={searchProductsData.products}
            hasMoreProducts={searchProductsData.hasMore}
            totalProduct={searchProductsData?.totalCount}
            sortType={searchProductsData.productsByCategorySlugPayload.sortType as SORT_TYPE}
            onViewMore={searchProductsData.onViewMore}
            onChangeSortType={searchProductsData.handleChangeSortType}
            onClearFilter={searchProductsData.handleClearFilter}
            onSetFilter={searchProductsData.handleSetFilter}
          />
        </Row>
      </AtomBox>
    </Box>
  );
};

export default Products;
