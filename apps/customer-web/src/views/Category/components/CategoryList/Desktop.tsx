import { AtomBox } from '@tsu-org/ui';
import { Box, Image, Text } from '@tsu-org/ui-kit';
import { Col, Row } from 'antd';
import clsx from 'clsx';
import Link from 'next/link';
import { useMemo } from 'react';
import { CategoryListProps } from '.';
import { RowStyle } from './styles';

function CategoryList({ category, subCatesProductCountMap }: CategoryListProps) {
  const anyHasChild = useMemo(() => {
    return category?.children?.some((item) => item?.children?.length > 0);
  }, [category?.children]);

  return (
    <>
      <Row
        gutter={[12, 12]}
        style={{ marginBottom: '12px' }}
      >
        {category?.children?.map((cate, index) => {
          const hasChild = cate?.children?.length > 0;

          return (
            cate?.desktopImage?.url &&
            (anyHasChild ? (
              <Col
                span={24}
                md={{ span: 12 }}
                xl={{ span: 8 }}
                key={index}
              >
                <AtomBox
                  borderRadius="12px"
                  border="1"
                  background="white"
                  height="full"
                >
                  <RowStyle>
                    <Col
                      className={clsx('content-left')}
                      flex="148px"
                      style={{
                        minHeight: hasChild ? '166px' : undefined,
                      }}
                    >
                      <AtomBox
                        as={Link}
                        href={cate?.fullPathSlug}
                        width="full"
                      >
                        <AtomBox padding="1">
                          <Image
                            width={40}
                            src={cate?.desktopImage?.url}
                            alt={cate?.desktopImage?.url}
                            useCDN
                            cdnWidth={40}
                          />
                        </AtomBox>
                        {hasChild && (
                          <AtomBox padding="0p75rem">
                            <Text
                              small
                              bold
                              color="textSecondary"
                              mb="1"
                            >
                              {cate.name}
                            </Text>
                            {subCatesProductCountMap?.[cate.fullPathSlug] ? (
                              <Text
                                small
                                color="textTertiary"
                                mb="1"
                              >
                                {subCatesProductCountMap[cate.fullPathSlug]} sản phẩm
                              </Text>
                            ) : null}
                          </AtomBox>
                        )}
                      </AtomBox>
                    </Col>
                    <Col
                      className="content-right"
                      flex={'auto'}
                    >
                      {hasChild ? (
                        <AtomBox padding="1">
                          {cate.children?.map((child, _index) => (
                            <AtomBox
                              key={_index}
                              className="child-name"
                              padding="2"
                            >
                              <Link href={child?.fullPathSlug}>{child?.name}</Link>
                            </AtomBox>
                          ))}
                        </AtomBox>
                      ) : (
                        <AtomBox padding="1">
                          <AtomBox
                            className="child-name"
                            padding="2"
                          >
                            <Link href={cate?.fullPathSlug || '/'}>{cate?.name}</Link>
                          </AtomBox>

                          {subCatesProductCountMap?.[cate.fullPathSlug] ? (
                            <Text
                              small
                              color="textTertiary"
                              mb="1"
                            >
                              {subCatesProductCountMap[cate.fullPathSlug]} sản phẩm
                            </Text>
                          ) : null}
                        </AtomBox>
                      )}
                    </Col>
                  </RowStyle>
                </AtomBox>
              </Col>
            ) : (
              <Col
                span={12}
                sm={{ span: 8 }}
                xl={{ span: 6 }}
                key={index}
              >
                <Link href={cate?.fullPathSlug || '/'}>
                  <AtomBox
                    display="flex"
                    borderRadius="12px"
                    background="white"
                    height="full"
                    p="0p75rem"
                    gap="2"
                  >
                    <AtomBox flexShrink={0}>
                      <AtomBox padding="1">
                        <Image
                          width={40}
                          src={cate?.desktopImage?.url}
                          alt={cate?.desktopImage?.url}
                          useCDN
                          cdnWidth={40}
                        />
                      </AtomBox>
                    </AtomBox>
                    <Box>
                      <AtomBox>
                        <Text
                          fontWeight="500"
                          small
                        >
                          {cate?.name}
                        </Text>
                      </AtomBox>

                      {subCatesProductCountMap?.[cate.fullPathSlug] ? (
                        <Text
                          small
                          color="textTertiary"
                          mb="1"
                        >
                          {subCatesProductCountMap[cate.fullPathSlug]} sản phẩm
                        </Text>
                      ) : null}
                    </Box>
                  </AtomBox>
                </Link>
              </Col>
            ))
          );
        })}
      </Row>
    </>
  );
}

export default CategoryList;
