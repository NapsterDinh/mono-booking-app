import { OrderStatusCode } from '@customer-web/enums/Order';
import { PaymentMethod, PaymentStatus } from '@customer-web/enums/Payment';
import { ModalType } from '@customer-web/enums/index';
import { getErrorNotificationSetting } from '@customer-web/helpers/Notification';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { useCreateTpBankPaymentLinkMutation } from '@customer-web/hooks/mutations';
import { useModal } from '@customer-web/state/global/hooks';
import { useCheckRebuyOrder, useCheckRebuying, useRebuyOrderProductList } from '@customer-web/state/order/hooks';
import { AtomBox, AtomBoxProps } from '@tsu-org/ui';
import { Box, Button, ColumnCenter, Divider, Image, Row, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { AlertGradientRedIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useResponsive } from 'ahooks';
import { notification } from 'antd';
import dayjs from 'dayjs';
import { FC } from 'react';
import OrderSummaryPaymentStatus from './OrderSummaryPaymentStatus';
import RebuyProductListModal from './RebuyProductListModal';

interface OrderSummaryProps extends AtomBoxProps {
  order?: Components.OrderDetail.Data;
  onDeleteOrder?: () => void;
}

const OrderSummary: FC<OrderSummaryProps> = ({ order, onDeleteOrder, ...rest }) => {
  const responsive = useResponsive();
  const checkRebuying = useCheckRebuying();
  const checkOrderResponse = useRebuyOrderProductList();
  const { mutate: createTpBankPaymentLink, isLoading: creatingTpBankPaymentLink } = useCreateTpBankPaymentLinkMutation({
    onSuccess: (data) => {
      window.location.href = data.url;
    },
    onError: () => {
      notification.error({
        ...getErrorNotificationSetting(),
        message: 'Có lỗi xảy ra. Vui lòng thử lại!',
      });
    },
  });

  const { isOpenModal, type } = useModal();

  const { checkRebuy } = useCheckRebuyOrder();

  const handleCheckCanRebuy = (orderCode: string) => () => {
    checkRebuy(orderCode);
  };

  return (
    <AtomBox
      px="3"
      py="0p75rem"
      bgc="white"
      borderTopRadius="12px"
      position="relative"
      {...rest}
    >
      <Text
        fontWeight="500"
        mb="0p75rem"
      >
        Thông tin thanh toán
      </Text>
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
          {order?.orderPrice?.totalPrice ? convertPriceToVNDPrice(order.orderPrice.totalPrice) : '0đ'}
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
          {order?.orderPrice?.promotion ? convertPriceToVNDPrice(order.orderPrice.promotion) : '0đ'}
        </Text>
      </RowBetween>
      <RowBetween
        mb="2"
        flexWrap="nowrap"
        gap="3"
      >
        <Box flexShrink="0">
          <Text color="textSecondary">Chiết khấu</Text>
        </Box>
        <Text
          fontWeight="bold"
          ellipsis
        >
          {order?.orderPrice?.discountNt ? convertPriceToVNDPrice(order.orderPrice.discountNt) : '0đ'}
        </Text>
      </RowBetween>
      <RowBetween
        mb="2"
        flexWrap="nowrap"
        gap="3"
      >
        <Box flexShrink="0">
          <Text color="textSecondary">Phí vận chuyển</Text>
        </Box>
        <Text
          fontWeight="bold"
          color="textLink"
          ellipsis
        >
          {order?.orderPrice?.deliveryFee ? convertPriceToVNDPrice(order.orderPrice.deliveryFee) : 'Miễn phí'}
        </Text>
      </RowBetween>
      <Divider />
      <RowBetween
        flexWrap="nowrap"
        gap="3"
      >
        <Box flexShrink="0">
          <Text color="textSecondary">Thành tiền</Text>
        </Box>
        <Text
          fontWeight="bold"
          color="textFocus"
          ellipsis
          fontSize="18px"
        >
          {order?.orderPrice?.finalPriceAfterDiscount
            ? convertPriceToVNDPrice(order.orderPrice.finalPriceAfterDiscount)
            : '0đ'}
        </Text>
      </RowBetween>
      <Divider />
      {!order?.orderReceivePayment?.paymentMethodDefault?.includes(PaymentMethod.CASH) &&
        order?.status?.code !== OrderStatusCode.CANCELED && (
          <RowBetween mb="0p75rem">
            <Text
              small
              fontWeight="500"
            >
              Phương thức thanh toán
            </Text>
            <RowFixed gap="1">
              <OrderSummaryPaymentStatus
                paymentStatus={order?.paymentStatus}
                paymentStatusLabel={order?.paymentStatusLabel}
              />
            </RowFixed>
          </RowBetween>
        )}
      {order?.orderReceivePayment?.paymentMethodDefault?.map((paymentMethod, index) => (
        <Row
          gap="0p75rem"
          mb="3"
          key={paymentMethod}
        >
          {order?.orderReceivePayment?.paymentMethodAvatar?.[index] ? (
            <Image
              alt=""
              src={order?.orderReceivePayment?.paymentMethodAvatar?.[index]}
              width="40px"
              height="40px"
            />
          ) : null}

          <Text small>{order?.orderReceivePayment?.paymentMethodLabel?.[index]}</Text>
        </Row>
      ))}
      {order?.orderReceivePayment?.paymentMethodDefault?.includes(PaymentMethod.TP_BANK_OVERDRAFT_LOAN) &&
        order?.paymentStatus === PaymentStatus.UNPAID &&
        order?.status?.code !== OrderStatusCode.CANCELED && (
          <Row
            gap="1"
            alignItems="flex-start"
            mb="0p75rem"
          >
            <Box
              flexShrink={0}
              mt="2px"
            >
              <AlertGradientRedIcon />
            </Box>
            <Text
              color="colorError"
              small
            >
              Vui lòng thanh toán trước{' '}
              {dayjs(order?.orderDate)
                .add(1, 'day')
                .format('DD/MM/YYYY HH:mm')}
              ,
              <br />
              Quý khách vui lòng liên hệ hotline 1800 6001 để được hỗ trợ.
            </Text>
          </Row>
        )}
      {order?.flags.canRebuy && (
        <Button
          mb="0.75rem"
          scale="xl"
          width="100%"
          key={order?.orderCode}
          loading={checkRebuying}
          onClick={handleCheckCanRebuy(order?.orderCode)}
        >
          <Text
            color="white"
            fontWeight="500"
          >
            Mua lại
          </Text>
        </Button>
      )}
      {(order?.flags?.canCancel ||
        (order?.orderReceivePayment?.paymentMethodDefault?.includes(PaymentMethod.TP_BANK_OVERDRAFT_LOAN) &&
          order?.paymentStatus === PaymentStatus.UNPAID &&
          order?.status?.code !== OrderStatusCode.CANCELED)) && (
        <ColumnCenter gap="0p75rem">
          {order?.orderReceivePayment?.paymentMethodDefault?.includes(PaymentMethod.TP_BANK_OVERDRAFT_LOAN) &&
            order?.paymentStatus === PaymentStatus.UNPAID &&
            order?.status?.code !== OrderStatusCode.CANCELED && (
              <Button
                width="100%"
                scale="xl"
                loading={creatingTpBankPaymentLink}
                onClick={createTpBankPaymentLink.bind(this, order?.orderCode)}
              >
                Thanh toán lại
              </Button>
            )}
          {order?.flags?.canCancel && (
            <Button
              type="link"
              onClick={onDeleteOrder}
            >
              <Text
                fontWeight="500"
                color="textFocus"
              >
                Huỷ đơn hàng
              </Text>
            </Button>
          )}
        </ColumnCenter>
      )}
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
      <RebuyProductListModal
        orderCode={order?.orderCode}
        open={isOpenModal && type === ModalType.REBUY_PRODUCTS}
        productList={checkOrderResponse}
      />
    </AtomBox>
  );
};

export default OrderSummary;
