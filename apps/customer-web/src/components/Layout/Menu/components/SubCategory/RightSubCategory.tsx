import styled from '@emotion/styled';
import { getPromotionPrices } from '@customer-web/services/request/providers/promotion';
import { AtomBox } from '@tsu-org/ui';
import { Box, Image, Row, Text } from '@tsu-org/ui-kit';
import { useDebounce } from 'ahooks';
import { Col as AntdCol, Row as AntdRow, Card } from 'antd';
import map from 'lodash/map';
import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import BestSellerList from './BestSellerList';
import { StyledRightSubCategory } from './styles';
import type { RightSubCategoryProps } from './types';

const StyledCard = styled(Card)`
  width: 100%;

  .ant-card-body {
    padding: 1.25rem 0.75rem;
  }
`;

const RightSubCategory: FC<RightSubCategoryProps> = ({ index, category }) => {
  const [indexToProductsMap, setIndexToProductsMap] = useState<{
    [key: string]: NhapThuocResponse.SearchService.ProductBasic[] | undefined;
  }>({});
  const level3Categories = category?.children;
  const hasLevel4Categories = level3Categories?.[0]?.children?.length > 0;
  const firstDisplayCategories = hasLevel4Categories ? level3Categories?.[0]?.children : level3Categories;
  const filteredFirstDisplayCategories = useMemo(() => {
    return firstDisplayCategories ? firstDisplayCategories.slice(0, 6) : firstDisplayCategories;
  }, [firstDisplayCategories]);
  const products: NhapThuocResponse.SearchService.ProductBasic[] | undefined = hasLevel4Categories
    ? level3Categories?.[0]?.products
    : category?.products;
  const delayedIndex = useDebounce(index, { wait: 500 });

  useEffect(() => {
    setIndexToProductsMap((prev) => ({
      ...prev,
      [index]: products,
    }));
  }, [index, products]);

  useEffect(() => {
    const fetchPromotion = async (index: number) => {
      const requestProducts = products || [];
      const request =
        requestProducts
          .filter((i) => i.price && i.price.discount === undefined)
          .map((i: any) => ({
            itemCode: i.sku,
            unitCode: i.price?.measureUnitCode,
            price: i.price?.price,
          })) || [];

      if (request.length > 0) {
        const promotions = await getPromotionPrices(request);

        setIndexToProductsMap((prev) => ({
          ...prev,
          [index]: requestProducts.map((product) => ({
            ...product,
            price: {
              ...product.price,
              discount:
                promotions.find((i) => i.itemCode === product.sku && i.unitCode === product.price?.measureUnitCode) ||
                null,
            },
          })),
        }));
      }
    };

    fetchPromotion(delayedIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delayedIndex]);

  return (
    <StyledRightSubCategory>
      <AtomBox p="3">
        <AntdRow gutter={[16, 16]}>
          {map(filteredFirstDisplayCategories, (item, index) => {
            if (item?.name && item?.children?.length > 0) {
              return (
                <AtomBox
                  key={item.name || index}
                  px="3"
                >
                  <Text
                    bold
                    mb="1rem"
                  >
                    {item.name}
                  </Text>

                  <AntdRow gutter={[16, 16]}>
                    {item?.children?.map((child) => (
                      <AntdCol
                        key={child?.fullPathSlug}
                        span={8}
                      >
                        <Link href={child?.fullPathSlug}>
                          <Text
                            color="textLink"
                            small
                          >
                            {child?.name}
                          </Text>
                        </Link>
                      </AntdCol>
                    ))}
                  </AntdRow>
                </AtomBox>
              );
            }

            if (!item?.name && !item?.children?.length) {
              return null;
            }

            return (
              <AntdCol
                key={item.name || index}
                span={8}
              >
                <Link href={item.fullPathSlug || '/'}>
                  <StyledCard>
                    <Row gap="3">
                      {!!item.image?.url && (
                        <Box
                          flexShrink="0"
                          width="40px"
                          height="40px"
                        >
                          <Image
                            alt={item.image?.alt}
                            src={item.image?.url}
                            aspectRatio="1/1"
                            showLoading
                            dimension={1}
                            useCDN
                            cdnWidth={92}
                          />
                        </Box>
                      )}

                      <AtomBox flexGrow={1}>
                        <Text
                          small
                          ellipsis
                          fontWeight="500"
                        >
                          {item.name}
                        </Text>
                      </AtomBox>
                    </Row>
                  </StyledCard>
                </Link>
              </AntdCol>
            );
          })}
        </AntdRow>
      </AtomBox>

      <Box
        bg="divider"
        height="1px"
      />

      <BestSellerList products={indexToProductsMap[index]} />
    </StyledRightSubCategory>
  );
};

RightSubCategory.defaultProps = {
  index: 0,
};

export default RightSubCategory;
