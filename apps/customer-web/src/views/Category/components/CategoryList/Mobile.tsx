import styled from '@emotion/styled';
import { AtomBox } from '@tsu-org/ui';
import { Button, Column, Image, Row, Text } from '@tsu-org/ui-kit';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Collapse } from 'antd';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { CategoryListProps } from '.';

const StyledCollapse = styled(Collapse)`
  &.ant-collapse {
    background-color: transparent;

    .ant-collapse-header {
      align-items: center;
    }

    .ant-collapse-content-box {
      padding-left: 72px;

      a {
        display: block;
      }

      & > a:not(:last-child) {
        margin-bottom: 0.75rem;
      }
    }
  }
`;

const MAX_DISPLAY = 5;

const Mobile: FC<CategoryListProps> = ({ category, subCatesProductCountMap }) => {
  const categories = category?.children;
  const [isViewMore, setIsViewMore] = useState(false);
  const hasViewMore = categories?.length > MAX_DISPLAY;
  const [displayCategories, setDisplayCategories] = useState([]);

  const viewMore = () => {
    setIsViewMore(true);
    setDisplayCategories(categories);
  };

  const viewLess = () => {
    setIsViewMore(false);
    setDisplayCategories(categories?.slice(0, MAX_DISPLAY));
  };

  useEffect(() => {
    setDisplayCategories(categories?.slice(0, MAX_DISPLAY));
  }, [categories]);

  return (
    <AtomBox
      bgc="white"
      p="3"
    >
      <Column
        gap="2"
        mb="3"
      >
        {displayCategories?.map((category) => (
          <StyledCollapse
            expandIconPosition="end"
            key={category.id}
          >
            <Collapse.Panel
              header={
                <Row gap="3">
                  <Image
                    width={40}
                    alt=""
                    src={category?.desktopImage?.url}
                    useCDN
                    cdnWidth={40}
                  />

                  <Column>
                    <Link href={category.fullPathSlug}>
                      <Text
                        bold
                        small
                      >
                        {category.name}
                      </Text>
                    </Link>
                    {subCatesProductCountMap?.[category.fullPathSlug] ? (
                      <Text
                        small
                        color="textTertiary"
                        mb="1"
                      >
                        {subCatesProductCountMap[category.fullPathSlug]} sản phẩm
                      </Text>
                    ) : null}
                  </Column>
                </Row>
              }
              key={category.id}
            >
              {category?.children?.map((subCategory) => (
                <Link
                  key={subCategory.id}
                  href={subCategory.fullPathSlug}
                >
                  <Text
                    color="textLink"
                    small
                    fontWeight="500"
                  >
                    {subCategory.name}
                  </Text>
                </Link>
              ))}
            </Collapse.Panel>
          </StyledCollapse>
        ))}
      </Column>

      <Row justifyContent="center">
        {isViewMore ? (
          <Button
            icon={
              <ChevronDoubleUpIcon
                width="20"
                height="20"
              />
            }
            type="link"
            onClick={viewLess}
          >
            <Text>Thu gọn</Text>
          </Button>
        ) : hasViewMore ? (
          <Button
            icon={
              <ChevronDoubleDownIcon
                width="20"
                height="20"
              />
            }
            type="link"
            onClick={viewMore}
          >
            <Text>Xem thêm {categories.length - MAX_DISPLAY} danh mục</Text>
          </Button>
        ) : null}
      </Row>
    </AtomBox>
  );
};

export default Mobile;
