import { PRODUCT_CANT_BUY } from '@customer-web/constants';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import useHandleSuccessUpdateCart from '@customer-web/hooks/useHandleSuccessUpdateCart';
import { useCartActions, useCartItemBySku } from '@customer-web/state/cart/hooks';
import { useSuggestPromotions } from '@customer-web/state/product/hooks';
import { useAuthenticated, useUserBusinessType } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, InputNumber, Row, RowFixed, Text } from '@tsu-org/ui-kit';
import {
  BoxReturnGradientOrangeIcon,
  InvoiceGradientOrangeIcon,
  SaleBadgeIcon,
  TruckGradientOrangeIcon,
} from '@tsu-org/ui-kit/components/Svg/Icons';
import type { ValueType } from '@rc-component/mini-decimal';
import { useDebounceFn } from 'ahooks';
import { Tooltip } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';
import { DEFAULT_MAXIMUM_QUANTITY } from '../../constants';
import PromotionCountdown from './PromotionCountDown';
import Promotions from './Promotions';

const RightInfo: FC<{ product?: NhapThuocResponse.SearchService.ProductSearchDetail }> = ({ product }) => {
  const cartItem = useCartItemBySku(product?.sku);
  const userBusinessType = useUserBusinessType();

  const { adjustItem } = useCartActions();
  const [quantity, setQuantity] = useState(cartItem?.quantity ?? 0);
  const defaultPrice = product?.price;
  const [currentPrice, setCurrentPrice] = useState<NhapThuocResponse.SearchService.Price | undefined>(defaultPrice);
  const suggestPromotions = useSuggestPromotions();
  const isAuthenticated = useAuthenticated();
  const handleSuccessUpdateCart = useHandleSuccessUpdateCart();

  const handleChangeQuantity = (value: ValueType | null) => {
    if (Number(value) >= 0) {
      setQuantity(value as number);
    }
    emitQuantityChange(value as number);
  };

  const handleAdjustQuantityNumber = (value: number) => {
    adjustItem(product, value)
      ?.unwrap()
      .then((cartInfo) => {
        handleSuccessUpdateCart(cartInfo, product.sku, currentPrice?.inventory);
      })
      .catch(() => {
        setQuantity(cartItem?.quantity ?? 0);
      });
  };

  const { run: emitQuantityChange } = useDebounceFn(handleAdjustQuantityNumber, {
    wait: 1000, // 1 second
  });

  useEffect(() => {
    setCurrentPrice(defaultPrice);
  }, [defaultPrice]);

  useEffect(() => {
    setQuantity(cartItem?.quantity ?? 0);
  }, [cartItem?.quantity]);

  // temporary hide
  // usePollSuggestPromotions(product?.sku, currentPrice, debouncedQuantity);

  const promotion = {
    spec: 1,
    timeLeft: dayjs(new Date('2023-09-29 11:05:22')).diff(dayjs(new Date()), 'second'),
  };

  return (
    <div>
      <Row
        gap="1"
        mb="0p75rem"
      >
        <Text color="textSecondary">Thương hiệu:</Text>
        <Text color="textLink">{product?.brand}</Text>
      </Row>

      <Text
        fontSize="24px"
        mb="0.5rem"
        bold
      >
        {promotion?.spec && (
          // <PromotionBadgeIcon
          //   css={{ transform: 'translateY(16px)' }}
          //   paddingRight="5px"
          // />
          <SaleBadgeIcon
            css={{ transform: 'translateY(16px)' }}
            paddingRight="5px"
          />
          // <BigSaleBadgeIcon
          //   css={{ transform: 'translateY(16px)' }}
          //   paddingRight="5px"
          // />
        )}

        {product?.webName || product?.name}
      </Text>

      {promotion?.timeLeft && promotion?.timeLeft > 0 && <PromotionCountdown timeLeft={promotion?.timeLeft} />}

      <AtomBox mb="3">
        {isAuthenticated && !product?.notBuy ? (
          <>
            <Text
              bold
              color="darkOrangeSecondary"
              fontSize="2rem"
            >
              <Text
                as="b"
                bold
                fontSize="2.25rem"
                color="darkOrangeSecondary"
              >
                {convertPriceToVNDPrice(currentPrice?.discount?.finalPrice ?? currentPrice?.price ?? 0)}
              </Text>{' '}
              {currentPrice?.measureUnitName && <>/ {currentPrice?.measureUnitName}</>}
            </Text>
            {Number(currentPrice?.discount?.discountPrice) > 0 && (
              <Text
                as="del"
                fontSize="24px"
                color="textSecondary"
              >
                {convertPriceToVNDPrice(currentPrice?.price)}
              </Text>
            )}
          </>
        ) : (
          <Box
            marginBottom={'0.5rem'}
            width={'fit-content'}
            p={'0.375rem 0.5rem'}
            fontSize={'1rem'}
            bg={'functionYellow2'}
            borderRadius={'8px'}
            fontWeight={'500'}
          >
            <Text
              color="darkOrangeSecondary"
              bold
              small
            >
              {PRODUCT_CANT_BUY}
            </Text>
          </Box>
        )}
      </AtomBox>

      {isAuthenticated &&
        !product?.notBuy &&
        !product?.restrictInfo?.businessTypeRestrictList?.includes(userBusinessType) && (
          <AtomBox mb="3">
            <Row
              gap="3"
              mb="1p5rem"
              flexDirection={{
                xs: 'column',
                md: 'row',
              }}
              alignItems={'flex-start'}
            >
              <Text
                color="textSecondary"
                whiteSpace="nowrap"
              >
                Chọn số lượng
              </Text>

              <AtomBox
                flexDirection={{
                  xs: 'column',
                }}
              >
                <Box
                  width={{
                    xs: '100%',
                    lg: '12rem',
                  }}
                  display={'flex'}
                  alignItems={'center'}
                  gap={12}
                >
                  <InputNumber
                    defaultValue={quantity}
                    value={quantity}
                    min={0}
                    max={product.restrictInfo?.quantity ?? DEFAULT_MAXIMUM_QUANTITY}
                    onChange={handleChangeQuantity}
                  />
                  <Text>{currentPrice?.measureUnitName}</Text>
                </Box>
                {product.restrictInfo?.isRestrictSale && (
                  <Text
                    fontSize={14}
                    color={'textWarning'}
                    mt="2"
                  >
                    Đặt tối đa {product.restrictInfo?.quantity} {currentPrice?.measureUnitName}
                  </Text>
                )}
              </AtomBox>
            </Row>
          </AtomBox>
        )}

      {product?.restrictInfo?.businessTypeRestrictList?.includes(userBusinessType) && (
        <AtomBox mb="3">
          <Text
            color="#B54708"
            small
          >
            Sản phẩm này không nằm trong danh mục đăng ký kinh doanh của bạn.
          </Text>
        </AtomBox>
      )}

      {!!product?.categories?.length && (
        <Row
          gap={{
            md: '3',
            xs: '1',
          }}
          mb="3"
          alignItems="flex-start"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Box
            width="9.6875rem"
            flexShrink={0}
          >
            <Text color="textSecondary">Danh mục</Text>
          </Box>

          <Row gap="2">
            <Link href={`/${product.categories[product.categories.length - 1].slug}` || '/'}>
              <Text color="link">{product.categories[0].name}</Text>
            </Link>
          </Row>
        </Row>
      )}

      {!!product?.dosageForm && (
        <Row
          gap={{
            md: '3',
            xs: '1',
          }}
          mb="3"
          alignItems="flex-start"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Box
            width="9.6875rem"
            flexShrink={0}
          >
            <Text color="textSecondary">Dạng bào chế</Text>
          </Box>
          <Text>{product?.dosageForm}</Text>
        </Row>
      )}

      {!!product?.specification && (
        <Row
          gap={{
            md: '3',
            xs: '1',
          }}
          mb="3"
          alignItems="flex-start"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Box
            width="9.6875rem"
            flexShrink={0}
          >
            <Text color="textSecondary">Quy cách</Text>
          </Box>
          <Text>{product?.specification}</Text>
        </Row>
      )}

      {!!product?.specification && (
        <Row
          gap={{
            md: '3',
            xs: '1',
          }}
          mb="3"
          alignItems="flex-start"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Box
            width="9.6875rem"
            flexShrink={0}
          >
            <Text color="textSecondary">Thành phần</Text>
          </Box>
          <Text>{product?.ingredient?.map((item) => item?.name).join(', ')}</Text>
        </Row>
      )}

      {!!product?.manufactor && (
        <Row
          gap={{
            md: '3',
            xs: '1',
          }}
          mb="3"
          alignItems="flex-start"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Box
            width="9.6875rem"
            flexShrink={0}
          >
            <Text color="textSecondary">Xuất xứ thương hiệu</Text>
          </Box>
          <Text>{product?.manufactor}</Text>
        </Row>
      )}

      {!!product?.producer && (
        <Row
          gap={{
            md: '3',
            xs: '1',
          }}
          mb="3"
          alignItems="flex-start"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Box
            width="9.6875rem"
            flexShrink={0}
          >
            <Text color="textSecondary">Nhà sản xuất</Text>
          </Box>
          <Text>{product?.producer}</Text>
        </Row>
      )}

      {!!product?.warrantyPeriod && (
        <Row
          gap={{
            md: '3',
            xs: '1',
          }}
          mb="3"
          alignItems="flex-start"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Box
            width="9.6875rem"
            flexShrink={0}
          >
            <Text color="textSecondary">Thời hạn bảo hành</Text>
          </Box>
          <Text>{product?.warrantyPeriod}</Text>
        </Row>
      )}

      {!!product?.registNum && (
        <Row
          gap={{
            md: '3',
            xs: '1',
          }}
          mb="3"
          alignItems="flex-start"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
        >
          <Box
            width="9.6875rem"
            flexShrink={0}
          >
            <Text color="textSecondary">Số đăng ký</Text>
          </Box>
          <Text>{product?.registNum}</Text>
        </Row>
      )}

      <Promotions
        promotions={suggestPromotions}
        mb="3"
      />

      <Row
        border="1"
        borderRadius="small"
        px="3"
        py="3"
        justifyContent="space-between"
        alignItems={{
          xs: 'flex-start',
          md: 'center',
        }}
        flexDirection={{
          xs: 'column',
          md: 'row',
        }}
        gap="3"
      >
        <RowFixed
          gap="3"
          flexWrap="nowrap"
        >
          <BoxReturnGradientOrangeIcon />
          <Tooltip title="Chấp nhận đổi trả 100% đơn hàng">
            <Text fontWeight="500">Đổi trả trong 30 ngày</Text>
            <Text color="textSecondary">kể từ ngày mua hàng</Text>
          </Tooltip>
        </RowFixed>
        <RowFixed
          gap="3"
          flexWrap="nowrap"
        >
          <InvoiceGradientOrangeIcon />
          <Tooltip title="Nhận ngay khi hoàn tất đơn hàng, nói không với hàng kém chất lượng không rõ nguồn gốc">
            <Text fontWeight="500">Cấp hóa đơn VAT 100%</Text>
            <Text color="textSecondary">cho tất cả đơn hàng</Text>
          </Tooltip>
        </RowFixed>
        <RowFixed
          gap="3"
          flexWrap="nowrap"
        >
          <TruckGradientOrangeIcon />
          <Tooltip title="Cho đơn hàng nhỏ chỉ từ 1,5 triệu VND">
            <Text fontWeight="500">Miễn phí vận chuyển</Text>
            <Text color="textSecondary">theo chính sách giao hàng</Text>
          </Tooltip>
        </RowFixed>
      </Row>
    </div>
  );
};

export default RightInfo;
