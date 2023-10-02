import { DEFAULT_PRODUCT_IMAGE } from '@customer-web/constants';
import { ModalType } from '@customer-web/enums/index';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { useIsCartLoading, useModal } from '@customer-web/state/global/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Image, InputNumber, Row, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { BinIcon, ColdProductIcon, SpecialControlProductIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Checkbox } from 'antd';
import Link from 'next/link';
import { FC, forwardRef, memo, useEffect, useState } from 'react';
import { isDeepStrictEqual } from 'util';
import type { CartItemRowProps } from './types';
import { DEFAULT_MAXIMUM_QUANTITY } from '@customer-web/views/Product/constants';
import ItemPromotions from '../ItemPromotions';

const Mobile: FC<CartItemRowProps> = forwardRef(({ item, onSelectItem, onChangeQuantity, onRemove, ...rest }, ref) => {
  const productImage = item?.productInfo?.mainImage || DEFAULT_PRODUCT_IMAGE;
  const isLoading = useIsCartLoading();
  const [quantity, setQuantity] = useState(item?.quantity);
  const { openModal } = useModal();

  const handleChange = (newQuantity: number) => {
    if (!newQuantity) {
      openModal(ModalType.CONFIRM_REMOVE_ITEM_FROM_CART, {
        cartItem: item,
      });

      return;
    }

    setQuantity(newQuantity);

    onChangeQuantity && onChangeQuantity(item, newQuantity);
  };

  useEffect(() => {
    setQuantity(item?.quantity);
  }, [item]);

  return (
    <AtomBox
      p="3"
      ref={ref}
      {...rest}
    >
      <RowBetween
        flexWrap="nowrap"
        gap="2"
        mb="2"
      >
        <RowFixed
          flexWrap="nowrap"
          gap="2"
        >
          <Checkbox
            checked={item.isSelected}
            disabled={isLoading}
            value={item.id}
            onClick={onSelectItem.bind(this, item)}
          />
          <AtomBox display="flex">
            <Box
              width="3.75rem"
              height="3.75rem"
              borderRadius="8px"
              border="1px solid #E4E8ED"
              backgroundColor="white"
              mr="0.75rem"
              p="0.25rem"
              flexShrink={0}
            >
              <Image
                alt=""
                src={productImage}
              />
            </Box>
            <RowFixed gap="2">
              {item?.productInfo?.isColdStorage && (
                <Box
                  backgroundColor="tagPrimaryBackground"
                  borderRadius="6px"
                  border="1px solid"
                  borderColor="#EDF2F8"
                  p="2px 8px"
                >
                  <RowFixed
                    gap="1"
                    flexWrap="nowrap"
                  >
                    <ColdProductIcon />
                    <Text
                      color="textSecondary"
                      fontSize="12px"
                      whiteSpace="nowrap"
                    >
                      Bảo quản lạnh
                    </Text>
                  </RowFixed>
                </Box>
              )}
              {item?.productInfo?.isSpecialControl && (
                <Box
                  backgroundColor="tagSuccessBackground"
                  borderRadius="6px"
                  border="1px solid"
                  borderColor="#EDF2F8"
                  p="2px 8px"
                >
                  <RowFixed
                    gap="1"
                    flexWrap="nowrap"
                  >
                    <SpecialControlProductIcon />
                    <Text
                      color="textSecondary"
                      fontSize="12px"
                      whiteSpace="nowrap"
                    >
                      Hàng KSĐB
                    </Text>
                  </RowFixed>
                </Box>
              )}
              <Link href={item.productInfo?.fullPathSlug || '/'}>
                <Text
                  small
                  lineClamp={2}
                >
                  {item.productInfo?.webName || item.productInfo?.name}
                </Text>
                <Text
                  bold
                  small
                  color="textFocus"
                >
                  {convertPriceToVNDPrice(item.detailCalculatorPriceInfo?.totalBill)}
                </Text>
              </Link>
            </RowFixed>
          </AtomBox>
        </RowFixed>

        <Button
          type="link"
          onClick={onRemove.bind(this, item)}
        >
          <BinIcon color="textTertiary" />
        </Button>
      </RowBetween>

      <Row justifyContent="center">
        <AtomBox mr="2">
          <Box width="150px">
            <InputNumber
              defaultValue={quantity}
              value={quantity}
              min={0}
              max={item.policy?.quantityMax ?? DEFAULT_MAXIMUM_QUANTITY}
              onChange={handleChange}
            />
          </Box>
        </AtomBox>

        <Text
          textAlign="center"
          fontWeight="500"
          small
        >
          {item?.productInfo?.packageDetails?.[0]?.unitName}
        </Text>
      </Row>
      <Row mt="1rem">
        <ItemPromotions item={item} />
      </Row>
      {!!item.policy?.message && (
        <AtomBox
          display={'flex'}
          alignItems={'center'}
          mt={'2'}
        >
          <AtomBox mr={'1'}>
            <Image
              alt="warning"
              src={'/images/warning-circle.svg'}
            />
          </AtomBox>

          <Text
            color="#B54708"
            bold
            fontSize={13}
            lineHeight={'normal'}
          >
            {item.policy?.message}
          </Text>
        </AtomBox>
      )}
    </AtomBox>
  );
});

Mobile.displayName = 'CartItemRowMobile';

export default memo(Mobile, isDeepStrictEqual);
