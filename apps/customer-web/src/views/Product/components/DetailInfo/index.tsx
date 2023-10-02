import styled from '@emotion/styled';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Column, ColumnCenter, Text } from '@tsu-org/ui-kit';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useSize, useToggle } from 'ahooks';
import { Tabs } from 'antd';
import { FC, useEffect, useMemo, useRef, useState } from 'react';
import Attentions from './Attentions';
import Dosage from './Dosage';
import Functions from './Functions';
import Ingredients from './Ingredients';
import Preserve from './Preserve';
import SideEffects from './SideEffects';

const StyledTabs = styled(Tabs)`
  &.ant-tabs {
    .ant-tabs-tab {
      font-size: 16px;
      padding: 12px 16px;

      &-active {
        background: ${({ theme }) => theme.colors.backgroundGrey2};
        border-radius: 8px 8px 0px 0px;
      }
    }
  }
`;

const Sections = styled(Column)`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure {
    line-height: 28px;
    margin-bottom: 20px;
  }

  ul {
    margin-bottom: 20px;

    li {
      line-height: 28px;

      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }

  em {
    color: ${({ theme }) => theme.colors.textTertiary};
  }

  a {
    color: ${({ theme }) => theme.colors.textLink};
  }

  sup {
    font-size: 75%;
    position: relative;
    top: -0.5em;
  }
`;

const ViewMore = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.7) 21.88%,
    rgba(255, 255, 255, 0.95) 45.31%,
    #ffffff 67.71%,
    #ffffff 100%
  );
  bottom: 0;
  padding: 1.5rem 1.5rem 0.5rem;
  position: absolute;
  text-align: center;
  width: 100%;
`;

const DetailInfo: FC<
  AtomBoxProps & {
    product?: NhapThuocResponse.SearchService.ProductSearchDetail;
    isFetching?: boolean;
    productContent: NhapThuocResponse.CMS.ProductContent;
  }
> = ({ product, productContent, isFetching, ...rest }) => {
  const [isViewMore, { setRight: viewMore, setLeft: viewLess }] = useToggle(false);
  const productDetailInfoRef = useRef(null);
  const size = useSize(productDetailInfoRef);
  const [needViewMore, setNeedViewMore] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const sections = useMemo(() => {
    const sections = [];

    if (product?.ingredient) {
      sections.push({
        title: 'Thành phần',
        id: 'ingredients',
        component: Ingredients,
        content: product?.webIngredient,
      });
    }

    if (product?.usage) {
      sections.push({
        title: 'Công dụng',
        id: 'functions',
        component: Functions,
        content: product.usage,
      });
    }

    if (product?.dosage) {
      sections.push({
        title: 'Liều dùng',
        id: 'dosage',
        component: Dosage,
        content: product?.dosage,
      });
    }

    if (product?.adverseEffect) {
      sections.push({
        title: 'Tác dụng phụ',
        id: 'side-effects',
        component: SideEffects,
        content: product.adverseEffect,
      });
    }

    if (product?.careful) {
      sections.push({
        title: 'Lưu ý',
        id: 'attentions',
        component: Attentions,
        content: product.careful,
      });
    }

    if (product?.preservation) {
      sections.push({
        title: 'Bảo quản',
        id: 'preserve',
        component: Preserve,
        content: product.preservation,
      });
    }

    return sections;
  }, [product]);

  const handleChangeTab = (tab: string) => {
    setActiveTab(tab);
  };

  const updateViewMore = (height) => {
    if (height > 0 && height <= 300) {
      setNeedViewMore(false);
    } else {
      setNeedViewMore(true);
    }
  };

  useEffect(() => {
    updateViewMore(size?.height);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size?.height]);

  useEffect(() => {
    viewLess();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product?.sku]);

  useEffect(() => {
    setActiveTab(sections?.[0]?.title);
  }, [sections]);

  if (!isFetching && !sections?.length) {
    return;
  }

  return (
    <AtomBox
      bgc="white"
      p="3"
      borderRadius="12px"
      {...rest}
    >
      <Box position="relative">
        <Box
          overflow="hidden"
          maxHeight={isViewMore ? '30000px' : '300px'}
        >
          <Box
            id="product-detail-info"
            ref={productDetailInfoRef}
          >
            <StyledTabs
              items={sections.map((section) => {
                return {
                  key: section.title,
                  label: section.title,
                  children: (
                    <Sections>
                      <section.component
                        content={section.content}
                        product={product}
                      />
                    </Sections>
                  ),
                };
              })}
              activeKey={activeTab}
              onChange={handleChangeTab}
            />
          </Box>
        </Box>

        {needViewMore && (
          <>
            {!isViewMore && (
              <ViewMore>
                <Button
                  type="link"
                  onClick={viewMore}
                >
                  <ChevronDoubleDownIcon />
                  <Text
                    color="textPrimary"
                    small
                    fontWeight="500"
                  >
                    Xem thêm
                  </Text>
                </Button>
              </ViewMore>
            )}

            {isViewMore && (
              <ColumnCenter
                mt="2"
                mb="1p5rem"
              >
                <Button
                  type="link"
                  onClick={viewLess}
                >
                  <ChevronDoubleUpIcon />
                  <Text
                    color="textPrimary"
                    small
                    fontWeight="500"
                  >
                    Rút gọn
                  </Text>
                </Button>
              </ColumnCenter>
            )}
          </>
        )}
      </Box>

      {!!productContent?.noteCate && (
        <Box
          backgroundColor="backgroundLightOrange"
          borderRadius="8px"
          px="1rem"
          py="0.625rem"
          borderLeft="5px solid"
          borderLeftColor="aliasColorOrange"
          mt="1rem"
        >
          <Text
            small
            color="darkOrange"
          >
            {productContent.noteCate}
          </Text>
        </Box>
      )}
    </AtomBox>
  );
};

export default DetailInfo;
