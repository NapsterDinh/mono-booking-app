import SelectVouchersModal from '@customer-web/components/Modal/SelectVouchersModal';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import useOpenCloseModal from '@customer-web/hooks/useOpenCloseModal';
import { useCartState, useHasRestrictProduct, useTotalUniqueSelectedCartItems } from '@customer-web/state/cart/hooks';
import { useIsCartLoading } from '@customer-web/state/global/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Flex, Link, RowBetween, Text } from '@tsu-org/ui-kit';
import { DiscountGradientOrange, QuestionCircleFilled, RightOutlinedIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useResponsive } from 'ahooks';
import { Tooltip } from 'antd';
import type { FC } from 'react';

interface OrderSummaryProps {
  onBuy?: () => void;
}

const OrderSummary: FC<OrderSummaryProps> = ({ onBuy }) => {
  const cartState = useCartState();
  const responsive = useResponsive();
  const { information } = cartState;
  const totalSelectedCartItems = useTotalUniqueSelectedCartItems();
  const isLoading = useIsCartLoading();
  const hasRestrictProduct = useHasRestrictProduct();
  const {
    isOpen: isOpenSelectVouchersModal,
    openModal: openSelectVouchersModal,
    closeModal: closeSelectVouchersModal,
  } = useOpenCloseModal();

  return (
    <AtomBox
      px="3"
      py="0p75rem"
      bgc="white"
      borderTopRadius="12px"
      position="relative"
    >
      <Box
        py="0.75rem"
        px="1rem"
        backgroundColor="backgroundLightOrange"
        mb="0.75rem"
        borderRadius="8px"
        cursor="pointer"
        onClick={openSelectVouchersModal}
      >
        <RowBetween>
          <Flex gap="0.5rem">
            <DiscountGradientOrange
              width="20"
              height="18"
            />
            <Text
              width={{ _: '150px', xl: 'fit-content' }}
              color="textFocus"
              fontSize={{ _: '14px', xl: '16px' }}
              textAlign="center"
              fontWeight="500"
            >
              Sử dụng voucher hoặc đổi điểm
            </Text>
          </Flex>

          <RightOutlinedIcon
            color="textFocus"
            width="8"
            height="14"
          />
        </RowBetween>
      </Box>
      <RowBetween
        mb="2"
        flexWrap="nowrap"
        gap="3"
      >
        <Box flexShrink="0">
          <Text color="textSecondary">Tổng tiền</Text>
        </Box>
        <Text
          fontWeight="bold"
          ellipsis
        >
          {information?.calculatorPriceInfo?.principalAmount
            ? convertPriceToVNDPrice(information?.calculatorPriceInfo?.principalAmount)
            : '0đ'}
        </Text>
      </RowBetween>

      <RowBetween
        mb="2"
        flexWrap="nowrap"
        gap="3"
      >
        <Box flexShrink="0">
          <Text color="textSecondary">Giảm giá trực tiếp</Text>
        </Box>
        <Text
          fontWeight="bold"
          ellipsis
        >
          {information?.calculatorPriceInfo?.totalDiscount
            ? convertPriceToVNDPrice(information?.calculatorPriceInfo.totalDiscount)
            : '0đ'}
        </Text>
      </RowBetween>

      <RowBetween
        mb="2"
        flexWrap="nowrap"
        gap="3"
      >
        <Flex
          gap="0.5rem"
          flexShrink="0"
        >
          <Text color="textSecondary">Giảm giá voucher</Text>
          <Tooltip title="Voucher được áp dụng khi chọn hoặc nhập mã giảm giá">
            <QuestionCircleFilled
              color="textDisabled"
              width="16"
              height="16"
            />
          </Tooltip>
        </Flex>
        <Text
          fontWeight="bold"
          ellipsis
        >
          {information?.calculatorPriceInfo?.totalVoucherPrice
            ? convertPriceToVNDPrice(information?.calculatorPriceInfo.totalVoucherPrice)
            : '0đ'}
        </Text>
      </RowBetween>

      <RowBetween
        mb="2"
        flexWrap="nowrap"
        gap="3"
      >
        <Box flexShrink="0">
          <Text color="textSecondary">Tiết kiệm được</Text>
        </Box>
        <Text
          fontWeight="bold"
          ellipsis
        >
          {information?.calculatorPriceInfo?.sumDiscount
            ? convertPriceToVNDPrice(information?.calculatorPriceInfo.sumDiscount)
            : '0đ'}
        </Text>
      </RowBetween>

      <Box
        border="1px solid #E4E8ED"
        height="1px"
        mt="0.25rem"
        mb="0.875rem"
      />

      <RowBetween
        mb="0p75rem"
        flexWrap="nowrap"
        gap="3"
      >
        <Box flexShrink="0">
          <Text
            color="textSecondary"
            bold
            fontSize="18px"
          >
            Tạm tính
          </Text>
        </Box>
        <Text
          color="textFocus"
          bold
          fontSize="20px"
          ellipsis
        >
          {information?.calculatorPriceInfo?.estimatedPrice
            ? convertPriceToVNDPrice(information?.calculatorPriceInfo.estimatedPrice)
            : '0đ'}
        </Text>
      </RowBetween>

      <Button
        mb="0.75rem"
        scale="xl"
        width="100%"
        disabled={!totalSelectedCartItems || hasRestrictProduct}
        loading={isLoading}
        onClick={onBuy}
      >
        <Text
          color="white"
          fontWeight="500"
        >
          Mua hàng
        </Text>
      </Button>

      <Text
        as="div"
        fontSize="13px"
        textAlign="center"
      >
        Bằng việc tiến hành đặt mua hàng, bạn đồng ý với
        <br />
        <Link
          display="inline-block"
          external
          href="/chinh-sach-bao-mat"
        >
          <Text fontSize="13px">
            <u>Điều khoản của nhapthuoc.com</u>
          </Text>
        </Link>
      </Text>

      {responsive.lg && (
        <Box
          position="absolute"
          background="url(/images/price-decorator.svg) no-repeat"
          left="0"
          right="0"
          bottom="-24px"
          height="24px"
        />
      )}
      <SelectVouchersModal
        open={isOpenSelectVouchersModal}
        onCancel={closeSelectVouchersModal}
        onOk={closeSelectVouchersModal}
      />
    </AtomBox>
  );
};

export default OrderSummary;
