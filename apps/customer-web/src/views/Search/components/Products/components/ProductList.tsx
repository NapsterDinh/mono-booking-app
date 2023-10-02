import styled from '@emotion/styled';
import { SEARCH_SORT_TYPE_TO_NAME_MAP, SEARCH_SORT_VALUE_TO_MAP } from '@customer-web/enums/Search';
import ProductCard from '@customer-web/views/Home/components/ProductCard';
import { Filter, SORT_TYPE } from '@customer-web/views/Search/types';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Button, Flex, Image, Row, RowFixed, Text, useMatchBreakpoints } from '@tsu-org/ui-kit';
import { ChevronDoubleDownIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Row as AntdRow, Col } from 'antd';
import type { FC } from 'react';
import Empty from './Empty';
import FiltersMobile from './FiltersMobile';

interface ProductListProps extends AtomBoxProps {
  products?: NhapThuocResponse.SearchService.ProductByCategorySlug[];
  productsByCategorySlugPayload?: NhapThuocPayload.SearchService.SearchDetail;
  hasMoreProducts?: boolean;
  totalProduct?: number;
  sortType?: SORT_TYPE;
  filters: Filter[];
  categorySortAttributeCodes?: string[];
  onViewMore?: () => void;
  onChangeSortType?: (sortType: SORT_TYPE) => void;
  onClearFilter?: () => void;
  onSetFilter?: (filters: NhapThuocPayload.SearchService.SearchDetail) => void;
}

const StyledButton = styled(Button as any)`
  .ant-image {
    position: absolute;
    right: -2px;
    top: -2px;
  }
`;

const ProductList: FC<ProductListProps> = ({
  products,
  hasMoreProducts,
  totalProduct,
  onViewMore,
  sortType,
  filters,
  productsByCategorySlugPayload,
  categorySortAttributeCodes,
  onChangeSortType,
  onClearFilter,
  onSetFilter,
  ...rest
}) => {
  const hasProducts = products?.length > 0;
  const { isDesktop } = useMatchBreakpoints();

  return (
    <AtomBox
      flexGrow={1}
      {...rest}
    >
      <Flex
        alignItems={{
          md: 'center',
        }}
        justifyContent={{
          md: 'space-between',
        }}
        mb="3"
        flexDirection={{
          _: 'column',
          md: 'row',
        }}
        backgroundColor={{
          _: 'white',
          md: 'transparent',
        }}
      >
        <AtomBox
          borderBottom={{
            xs: '1',
            md: 'none',
          }}
          px={{
            xs: '1rem',
            md: '0',
          }}
          py={{
            xs: '0p75rem',
            md: '0',
          }}
        >
          <Text
            bold
            fontSize="18px"
          >
            Danh sách sản phẩm
          </Text>
        </AtomBox>

        <RowFixed
          px={{
            xs: '1rem',
            md: '0',
          }}
          py={{
            xs: '0p75rem',
            md: '0',
          }}
        >
          <Row
            gap="2"
            flexWrap="wrap"
          >
            <Text
              display={{
                _: 'none',
                xl: 'block',
              }}
            >
              Sắp xếp theo
            </Text>
            {SEARCH_SORT_VALUE_TO_MAP.map((item) => (
              <StyledButton
                key={item}
                type={sortType === item ? 'white_primary' : 'outlined'}
                height="2rem"
                px="1rem"
                shape="default"
                onClick={onChangeSortType?.bind(this, item)}
              >
                {sortType === item && (
                  <Image
                    src="/estore-images/ico-check.svg"
                    alt="icon-checked"
                  />
                )}
                {SEARCH_SORT_TYPE_TO_NAME_MAP[item]}
              </StyledButton>
            ))}

            {!isDesktop && (
              <FiltersMobile
                filters={filters}
                categorySortAttributeCodes={categorySortAttributeCodes}
                productsByCategorySlugPayload={productsByCategorySlugPayload}
                onClearFilter={onClearFilter}
                onSetFilter={onSetFilter}
              />
            )}
          </Row>
        </RowFixed>
      </Flex>

      {hasProducts ? (
        <>
          <AntdRow gutter={[20, 20]}>
            {products?.map((product) => (
              <Col
                key={product?.sku}
                lg={{ span: 6 }}
                md={{ span: 8 }}
                span={12}
              >
                <ProductCard product={product} />
              </Col>
            ))}
          </AntdRow>

          {hasMoreProducts && (
            <Row
              gap="0p75rem"
              justifyContent="center"
              mt="1p25rem"
            >
              <Button
                type="link"
                onClick={onViewMore}
              >
                <ChevronDoubleDownIcon />
                <Text fontWeight="500">Xem thêm {totalProduct! - products!.length} sản phẩm</Text>
              </Button>
            </Row>
          )}
        </>
      ) : (
        <Empty onClearFilter={onClearFilter} />
      )}
    </AtomBox>
  );
};

export default ProductList;
