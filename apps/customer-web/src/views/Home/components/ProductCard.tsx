import { AtomBox } from '@tsu-org/ui';
import { Box, Column, Flex, Image, InputNumber, Tag, Text } from '@tsu-org/ui-kit';
// import { Discount50PercentIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import styled from '@emotion/styled';
import { DEFAULT_EMPTY_PLACEHOLDER, DEFAULT_PRODUCT_IMAGE, PRODUCT_CANT_BUY } from '@customer-web/constants';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { useCartActions, useCartItemBySku } from '@customer-web/state/cart/hooks';
import { useDebounceFn } from 'ahooks';
// import isNil from 'lodash/isNil';
import RibbonCard from '@customer-web/components/RibbonCard';
import useHandleSuccessUpdateCart from '@customer-web/hooks/useHandleSuccessUpdateCart';
import usePromotionCountdown, { PromotionCountdownEnum } from '@customer-web/hooks/usePromotionCountdown';
import { useAuthenticated, useUserBusinessType } from '@customer-web/state/user/hooks';
import { DEFAULT_MAXIMUM_QUANTITY } from '@customer-web/views/Product/constants';
import { GiftIcon, WhiteVoucherIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { Tooltip } from 'antd';
interface ProductCardProps {
  product: NhapThuocResponse.SearchService.ProductSearchDetail;
}

const ProductCardContainer = styled(AtomBox)`
  &:hover {
    border-color: ${({ theme }) => theme.colors.darkOrange};
  }
`;

const ImageContainer = styled(AtomBox)`
  .ant-image {
    width: 100%;
  }
`;

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { adjustItem } = useCartActions();
  const cartItem = useCartItemBySku(product?.sku);
  const userBusinessType = useUserBusinessType();
  const handleSuccessUpdateCart = useHandleSuccessUpdateCart();
  const price = product?.price;
  const productImage = product?.image || DEFAULT_PRODUCT_IMAGE;
  const finalPrice = price?.discount?.finalPrice || price?.price;
  const isAuthenticated = useAuthenticated();
  const [quantity, setQuantity] = useState(cartItem?.quantity ?? 0);

  const handleChange = (quantity: number) => {
    if (Number(quantity) >= 0) {
      setQuantity(quantity);
    }
    emitAdjustQuantity(quantity);
  };

  const handleAdjustQuantity = (quantity: number) => {
    adjustItem(product, quantity)
      ?.unwrap()
      .then((cartInfo) => {
        handleSuccessUpdateCart(cartInfo, product.sku, price.inventory);
      })
      .catch(() => {
        setQuantity(cartItem?.quantity ?? 0);
      });
  };

  const { run: emitAdjustQuantity } = useDebounceFn(handleAdjustQuantity, {
    wait: 1000, // 1 second
  });

  useEffect(() => {
    setQuantity(cartItem?.quantity);
  }, [cartItem?.quantity]);

  const promotion = {
    discount: (
      <Flex alignItems="center">
        <WhiteVoucherIcon />
        <Text
          lineHeight="14px"
          p="5px 0px 5px 3px"
          fontSize="14px"
          color="white"
          bold
        >
          Ưu đãi lớn
        </Text>
      </Flex>
    ),
    spec: (
      <Tooltip title="1 hộp Acemuc 500ml giảm nhiều tiền lắm đos">
        <Flex
          backgroundColor="#FEF3F2"
          borderRadius="20px"
          p="4px 8px"
          my="4px"
          alignItems="center"
          width="fit-content"
          maxWidth="100%"
        >
          <GiftIcon />
          <Text
            width="calc(100% - 10px)"
            color="colorError"
            fontWeight="600"
            lineHeight="16px"
            fontSize="12px"
            marginLeft="4px"
            ellipsis
          >
            1 hộp Acemuc 500ml giảm nhiều tiền lắm đó
          </Text>
        </Flex>
      </Tooltip>
    ),
    timeLeft: dayjs(new Date('2023-09-25 11:05:22')).diff(dayjs(new Date()), 'second'),
  };
  const { textDisplay } = usePromotionCountdown({
    timeLeft: promotion?.timeLeft,
    type: PromotionCountdownEnum.PRODUCT_CARD,
  });

  if (!product) {
    return;
  }

  return (
    <RibbonCard
      color="colorError"
      text={promotion?.discount}
      placement="start"
    >
      <ProductCardContainer
        borderRadius="12px"
        bgc="white"
        border="1"
        height="100%"
        p="0p75rem"
        position="relative"
      >
        <Column
          height="100%"
          justifyContent="space-between"
        >
          <div>
            <Link href={product.slug ?? '/'}>
              <ImageContainer mb="3">
                <Image
                  alt="product-img"
                  showLoading
                  dimension={1}
                  src={productImage}
                  cdnWidth={373}
                  aspectRatio="1/1"
                />
              </ImageContainer>

              {promotion?.timeLeft && promotion?.timeLeft > 0 && (
                <Box
                  backgroundColor="#FEF8D8"
                  borderRadius="20px"
                  p="4px 8px"
                  my="4px"
                  width="100%"
                >
                  <Text
                    color="textWarning2"
                    fontSize="12px"
                    lineHeight="16px"
                    bold
                    textAlign="center"
                  >
                    {textDisplay}
                  </Text>
                </Box>
              )}

              <Box
                height="63px"
                mb="0p25rem"
              >
                <Text
                  bold
                  small
                  lineClamp={3}
                >
                  {product.webName || product.name}
                </Text>
              </Box>
            </Link>

            {!isAuthenticated || product.notBuy ? (
              <Box
                marginBottom={'4px'}
                width={'fit-content'}
                p={'0.375rem 0.5rem'}
                fontSize={'0.8rem'}
                bg={'functionYellow2'}
                borderRadius={'8px'}
              >
                <Text
                  color="darkOrangeSecondary"
                  bold
                  small
                  fontWeight={'500'}
                >
                  {PRODUCT_CANT_BUY}
                </Text>
              </Box>
            ) : (
              <Text
                bold
                color="darkOrangeSecondary"
                mb="0.5rem"
                small
              >
                {convertPriceToVNDPrice(finalPrice)}
                <Text
                  as="span"
                  bold
                  color="darkOrangeSecondary"
                  mx="0.25rem"
                  small
                >
                  /
                </Text>
                <Text
                  small
                  bold
                  color="darkOrangeSecondary"
                  as="span"
                >
                  {price?.measureUnitName ?? DEFAULT_EMPTY_PLACEHOLDER}
                </Text>
              </Text>
            )}
            {/* <AtomBox as="del" mb="1" display="block">
          <Text fontSize="12px" color="textTertiary">
            {convertPriceToVNDPrice(price?.discount?.discountPrice ?? 0)}
          </Text>
        </AtomBox> */}
            {promotion?.spec}
            {!!product.specification && (
              <Tag
                backgroundColor="backgroundGrey2"
                border="none"
                borderRadius="12px"
                color="textSecondary"
                fontSize="12px"
                fontWeight="500"
                px="2"
                py="1"
                whiteSpace="pre-wrap"
              >
                {product.specification}
              </Tag>
            )}
          </div>

          {isAuthenticated && !product.notBuy && (
            <>
              <AtomBox
                mt="0p75rem"
                mb="1"
              >
                {product.restrictInfo?.isRestrictSale && (
                  <Text
                    fontSize={12}
                    color={'textWarning'}
                  >
                    Đặt tối đa {product.restrictInfo?.quantity} {price?.measureUnitName ?? DEFAULT_EMPTY_PLACEHOLDER}
                  </Text>
                )}

                {product.restrictInfo?.businessTypeRestrictList?.includes(userBusinessType) && (
                  <Text
                    fontSize={12}
                    color={'textWarning'}
                  >
                    Sản phẩm không nằm trong danh mục đăng ký kinh doanh của bạn.
                  </Text>
                )}
              </AtomBox>

              {!product.restrictInfo?.businessTypeRestrictList?.includes(userBusinessType) && (
                <AtomBox>
                  <InputNumber
                    min={0}
                    max={product.restrictInfo?.quantity ?? DEFAULT_MAXIMUM_QUANTITY}
                    defaultValue={quantity}
                    onChange={handleChange}
                  />
                </AtomBox>
              )}
            </>
          )}
        </Column>

        <AtomBox
          position="absolute"
          top="0"
          right="2"
        >
          {/* <Discount50PercentIcon /> */}
        </AtomBox>
      </ProductCardContainer>
    </RibbonCard>
  );
};

export default ProductCard;
