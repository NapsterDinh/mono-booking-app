import RibbonCard from '@customer-web/components/RibbonCard';
import { DEFAULT_PRODUCT_IMAGE } from '@customer-web/constants';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import useTopSearchKeywords from '@customer-web/hooks/useTopSearchKeywords';
import { useAuthenticated } from '@customer-web/state/user/hooks';
import { Box, BoxProps, Button, Column, Divider, Flex, Image, Link, Row, RowFixed, Tag, Text } from '@tsu-org/ui-kit';
import { SearchIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import dynamic from 'next/dynamic';
import NextLink from 'next/link';
import { Ref, forwardRef } from 'react';
import EmptyResult from './EmptyResult';

const SearchHistories = dynamic(() => import('./SearchHistories'), {
  ssr: false,
});

interface ResultProps extends BoxProps {
  result?: NhapThuocResponse.SearchService.SearchSuggest;
  keyword?: string;
  isFetching?: boolean;
  onNavigate?: () => void;
}

const getHighlightedText = (text?: string, highlight?: string) => {
  if (!text || !highlight) {
    return;
  }

  let parts: any[];

  try {
    parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  } catch (error) {
    parts = [text];
  }

  return (
    <span>
      {parts?.map((part, index) =>
        part.toLowerCase() === highlight?.toLowerCase() ? (
          <Text
            as="span"
            bold
            color="textLink"
            key={index}
          >
            {part}
          </Text>
        ) : (
          <Text
            as="span"
            fontWeight="500"
            key={index}
          >
            {part}
          </Text>
        ),
      )}
    </span>
  );
};

const Result = forwardRef(({ result, keyword, isFetching, onNavigate, ...rest }: ResultProps, ref: Ref<any>) => {
  const topSearchKeywords = useTopSearchKeywords();
  const emptyResult = Boolean(
    keyword && !result?.keywords?.length && !result?.categories?.length && !result?.products?.length,
  );
  const hasResult = Boolean(
    keyword && (result?.keywords?.length || result?.categories?.length || result?.products?.length),
  );
  const authenticated = useAuthenticated();

  if (isFetching) {
    return null;
  }

  return (
    <Box
      {...rest}
      backgroundColor="white"
      borderRadius={{
        lg: '16px',
      }}
      minHeight={{
        _: 'calc(100svh - 52px)',
        lg: 'auto',
      }}
      left="0"
      right="0"
      p="1rem 1rem 1.5rem"
      position="absolute"
      top={{
        _: '52px',
        lg: '60px',
      }}
      zIndex="1000"
      ref={ref}
    >
      {emptyResult ? (
        <EmptyResult keyword={keyword} />
      ) : (
        <>
          {hasResult ? (
            <>
              {result?.keywords?.map((item) => (
                <NextLink
                  key={item.keyword}
                  href={`/tim-kiem?s=${encodeURI(item.keyword)}`}
                  onClick={onNavigate}
                >
                  <Row
                    gap="2"
                    py="2"
                  >
                    <SearchIcon color="textTertiary" />
                    <Text>{getHighlightedText(item.keyword, keyword)}</Text>
                  </Row>
                </NextLink>
              ))}
              {result?.keywords?.length && (result?.categories?.length || result?.products?.length) ? (
                <Divider my="2" />
              ) : null}
              {result?.categories?.map((category) => (
                <NextLink
                  key={category.id}
                  href={`/${category.slug}`}
                  onClick={onNavigate}
                >
                  <Row
                    gap="2"
                    py="2"
                  >
                    <SearchIcon color="textTertiary" />
                    <Text>
                      Danh mục {getHighlightedText(category.name, keyword)}{' '}
                      {category.parentName ? (
                        <>
                          trong danh mục{' '}
                          <Text
                            as="span"
                            bold
                          >
                            {category.parentName}
                          </Text>
                        </>
                      ) : null}
                    </Text>
                  </Row>
                </NextLink>
              ))}
              {result?.categories?.length && result?.products?.length ? (
                <Divider
                  mt="2"
                  mb="3"
                />
              ) : null}
              <Column gap="3">
                {result?.products?.map((product) => {
                  const finalPrice = product?.price?.discount?.finalPrice ?? product?.price?.price;

                  const productImage = product?.image || DEFAULT_PRODUCT_IMAGE;

                  const promotion = {
                    discount: (
                      <Text
                        lineHeight="14px"
                        p="5px 0px"
                        fontSize="12px"
                        color="white"
                        bold
                      >
                        -100.000đ
                      </Text>
                    ),
                    spec: {
                      text: '1 hộp Acemuc 500ml',
                      icon: (
                        <Image
                          src="/estore-images/ico-coupon.svg"
                          alt="icon-coupon"
                          width="14px"
                          height="16px"
                        />
                      ),
                    },
                  };

                  return (
                    <NextLink
                      key={product.sku}
                      href={`/${product.slug}` || '/'}
                      onClick={onNavigate}
                    >
                      <RibbonCard
                        color="colorError"
                        text={promotion?.discount}
                        placement="start"
                      >
                        <Row
                          gap="2"
                          position="relative"
                        >
                          <Flex
                            width="80px"
                            height="80px"
                            border="1px solid"
                            borderColor="cardBorder"
                            borderRadius="8px"
                            px="2"
                            alignItems="center"
                            flexShrink={0}
                          >
                            <Image
                              src={productImage}
                              alt=""
                              aspectRatio="1/1"
                              dimension={1}
                              cdnWidth={133}
                            />
                          </Flex>

                          <Column gap="2">
                            <Text as="span">
                              {promotion?.spec?.text && (
                                <Tag
                                  css={{ float: 'left', width: 'fit-content' }}
                                  backgroundColor="#FEF3F2"
                                  borderRadius="20px"
                                  p="0px 8px"
                                  mr="4px"
                                >
                                  {promotion?.spec?.icon}
                                  <Text
                                    color="colorError"
                                    as="span"
                                    fontWeight="600"
                                    lineHeight="16px"
                                    fontSize="12px"
                                    marginLeft="4px"
                                  >
                                    {promotion?.spec?.text}
                                  </Text>
                                </Tag>
                              )}
                              {getHighlightedText(product?.webName || product?.name, keyword)}
                            </Text>

                            {authenticated && !product?.notBuy && (
                              <>
                                {!!finalPrice && (
                                  <Text
                                    as="span"
                                    bold
                                  >
                                    {convertPriceToVNDPrice(finalPrice)}/{' '}
                                    <Text as="span">{product?.price?.measureUnitName}</Text>
                                  </Text>
                                )}

                                {product?.price?.discount?.discountPrice ? (
                                  <Row>
                                    <Text
                                      as="del"
                                      color="textTertiary"
                                      fontWeight="400"
                                      fontSize="14px"
                                    >
                                      {convertPriceToVNDPrice(product?.price?.price ?? 0)}
                                    </Text>
                                  </Row>
                                ) : null}
                              </>
                            )}
                          </Column>
                        </Row>
                      </RibbonCard>
                    </NextLink>
                  );
                })}
              </Column>
            </>
          ) : (
            <Box>
              <SearchHistories onNavigate={onNavigate} />
              <Text
                fontWeight="500"
                mb="1rem"
              >
                Tra cứu hàng đầu
              </Text>

              <RowFixed gap="2">
                {topSearchKeywords?.map((keyword) => (
                  <Button
                    key={keyword.id}
                    type="outlined"
                  >
                    <Link
                      external
                      href={keyword.url}
                    >
                      {keyword.keyword}
                    </Link>
                  </Button>
                ))}
              </RowFixed>
            </Box>
          )}
        </>
      )}
    </Box>
  );
});

Result.displayName = 'Result';

export default Result;
