import RecentlyWatchedProducts from '@customer-web/components/RecentlyWatchedProducts';
import { TpBankCode } from '@customer-web/enums/ErrorCode';
import { PaymentMethod } from '@customer-web/enums/Payment';
import { ModalType } from '@customer-web/enums/index';
import { getErrorNotificationSetting } from '@customer-web/helpers/Notification';
import { useCopyToClipboard } from '@customer-web/hooks';
import { useCreateTpBankPaymentLinkMutation } from '@customer-web/hooks/mutations';
import { useOrderQuery } from '@customer-web/hooks/queries';
import usePaymentStatusByPaymentCodeQuery from '@customer-web/hooks/queries/usePaymentStatusByPaymentCodeQuery';
import { useAppDispatch } from '@customer-web/state';
import { useModal } from '@customer-web/state/global/hooks';
import { setCreateOrderErrorCode } from '@customer-web/state/order/actions';
import { useCheckRebuyOrder, useCheckRebuying, useRebuyOrderProductList } from '@customer-web/state/order/hooks';
import Success from '@customer-web/views/Cart/components/Success';
import { AtomBox, breakpoints } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Column, ColumnCenter, Flex, Image, Row, RowFixed, Text } from '@tsu-org/ui-kit';
import {
  AlertGradientRedIcon,
  CheckCircleGradientGreenIcon,
  DocumentCopyIcon,
} from '@tsu-org/ui-kit/components/Svg/Icons';
import { notification } from 'antd';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo } from 'react';
import Loading from '../components/Loading';
import RebuyProductListModal from '../components/RebuyProductListModal';

const Processing = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const endTime = useMemo(() => dayjs().add(15, 'minutes'), []);
  const { data: order, isFetching } = useOrderQuery(router.query.orderCode as string);
  const { data: paymentStatus } = usePaymentStatusByPaymentCodeQuery(order?.paymentRequestCode, {
    refetchInterval: (data) => {
      // check payment status every 3 seconds if payment is not done yet (isPayment = false) in 15 minutes
      const now = dayjs();

      if (data?.isPayment || now.isAfter(endTime)) {
        return false;
      }

      return 1000 * 3;
    },
  });
  const { mutate: createTpBankPaymentLink, isLoading } = useCreateTpBankPaymentLinkMutation({
    onSuccess: (data) => {
      window.location.href = data.url;
    },
    onError: (error) => {
      if (
        [
          TpBankCode.BUSY,
          TpBankCode.INVALID_ACCOUNT_NAME,
          TpBankCode.NOTFOUND_ORDER_PAYMENT,
          TpBankCode.REFUND_ACCOUNT_NOT_APPROVED,
          TpBankCode.REFUND_ACCOUNT_NOT_FOUND,
        ].includes(error?.errorCode)
      ) {
        notification.error({
          ...getErrorNotificationSetting(),
          message: error?.message,
        });
      } else {
        notification.error({
          ...getErrorNotificationSetting(),
          message: 'Có lỗi xảy ra. Vui lòng thử lại!',
        });
      }
    },
  });
  const checkRebuying = useCheckRebuying();
  const checkOrderResponse = useRebuyOrderProductList();
  const { isOpenModal, type } = useModal();
  const { checkRebuy } = useCheckRebuyOrder();
  const [_, copy] = useCopyToClipboard();

  const handleCheckCanRebuy = (orderCode: string) => () => {
    checkRebuy(orderCode);
  };

  const handleRepay = () => {
    if (order?.orderInformation?.paymentMethodDefault?.includes(PaymentMethod.TP_BANK_OVERDRAFT_LOAN)) {
      createTpBankPaymentLink(router.query.orderCode);
    }
  };

  const isPaymentCompleted = paymentStatus?.isPayment;

  useEffect(() => {
    return () => {
      dispatch(setCreateOrderErrorCode());
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isFetching) {
    return <Loading />;
  }

  if (!order?.orderId) {
    return (
      <Flex
        alignItems="center"
        justifyContent="center"
        flexGrow="1"
        minHeight="300px"
      >
        <Text fontWeight="500">Đơn hàng không tồn tại</Text>
      </Flex>
    );
  }

  if (isPaymentCompleted || order?.orderInformation?.paymentMethodDefault?.includes(PaymentMethod.CASH)) {
    return (
      <Success
        orderCode={order?.orderCode}
        isPaymentCompleted={order?.isPaymentCompleted}
        paymentMethodDefault={order?.orderInformation?.paymentMethodDefault}
        paymentMethodLabel={order?.orderInformation?.paymentMethodLabel}
        paymentMethodAvatar={order?.orderInformation?.paymentMethodAvatar}
      />
    );
  }

  return (
    <AtomBox py="1p5rem">
      <AtomBox mb="2p5rem">
        <ColumnCenter>
          <Image
            alt=""
            src="/images/processing-mascot-with-background.svg"
          />
        </ColumnCenter>
        <Box
          width={{
            xl: '31vw',
            lg: '41vw',
            md: '48vw',
          }}
          mx="auto"
          borderRadius="12px"
          p="1rem"
          backgroundColor="white"
        >
          <ColumnCenter>
            {order?.orderInformation?.paymentMethodDefault?.includes(PaymentMethod.TP_BANK_OVERDRAFT_LOAN) ? (
              <Text
                bold
                fontSize="20px"
                mb="0.5rem"
              >
                Đơn hàng{' '}
                <Text
                  as="span"
                  display="inline-flex"
                  cursor="pointer"
                  bold
                  color="textLink"
                  fontSize="20px"
                  onClick={copy.bind(this, order?.orderCode)}
                >
                  #{order?.orderCodeDisplay}{' '}
                  <DocumentCopyIcon
                    ml="1"
                    color="textLink"
                  />
                </Text>{' '}
                đang chờ thanh toán
              </Text>
            ) : (
              <Text
                color="textLink"
                bold
                fontSize="20px"
                mb="0.5rem"
              >
                Đơn hàng đang chờ thanh toán
              </Text>
            )}

            {order?.orderInformation?.paymentMethodDefault?.includes(PaymentMethod.TP_BANK_OVERDRAFT_LOAN) ? (
              <AtomBox>
                <AtomBox mb="3">
                  <Text
                    color="textSecondary"
                    small
                  >
                    Hệ thống TPBank đang bảo trì. Để tránh ảnh hưởng đến tiến độ đơn hàng, Quý khách vui lòng:
                    <br />
                    1. Thanh toán lại trước{' '}
                    {dayjs(order?.orderDate)
                      .add(1, 'day')
                      .format('DD/MM/YYYY HH:mm')}{' '}
                    để đơn không bị hủy.
                    <br />
                    2. Hoặc mua lại đơn hàng và chọn phương thức thanh toán khác.
                    <br />
                    3. Hoặc lên app TPBank, nhập mã đơn hàng để thanh toán.
                  </Text>
                </AtomBox>

                <Row
                  gap="3"
                  flexDirection={{
                    xs: 'column',
                    md: 'row',
                  }}
                >
                  <Button
                    width={{
                      _: '100%',
                      md: '50%',
                    }}
                    scale="xl"
                    loading={checkRebuying}
                    onClick={handleCheckCanRebuy(order?.orderCode)}
                  >
                    Mua lại đơn mới
                  </Button>
                  <Button
                    width={{
                      _: '100%',
                      md: '50%',
                    }}
                    type="secondary"
                    scale="xl"
                    loading={isLoading}
                    onClick={handleRepay}
                  >
                    Thanh toán lại
                  </Button>
                </Row>
              </AtomBox>
            ) : (
              <>
                {order?.orderInformation?.paymentMethodDefault?.map((paymentMethod, index) => (
                  <Row
                    gap="0p75rem"
                    mb="3"
                    key={index}
                  >
                    <Image
                      alt=""
                      src={order?.orderInformation?.paymentMethodAvatar?.[index]}
                      width="40px"
                      height="40px"
                    />
                    <Column gap="1">
                      <Text small>{order?.orderInformation?.paymentMethodLabel?.[index]}</Text>
                      {paymentMethod === PaymentMethod.TP_BANK_OVERDRAFT_LOAN && isPaymentCompleted && (
                        <RowFixed gap="1">
                          <CheckCircleGradientGreenIcon />
                          <Text
                            color="success"
                            small
                          >
                            Đã thanh toán
                          </Text>
                        </RowFixed>
                      )}
                    </Column>
                  </Row>
                ))}

                <Row
                  gap="1"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  mb="3"
                >
                  <Box mt="4px">
                    <AlertGradientRedIcon color="colorError" />
                  </Box>
                  <Text
                    color="colorError"
                    small
                  >
                    Đơn hàng chưa được thanh toán. Vui lòng thanh toán trước{' '}
                    {dayjs(order?.orderDate)
                      .add(1, 'day')
                      .format('DD/MM/YYYY HH:mm')}{' '}
                    để đơn hàng không bị hủy.
                  </Text>
                </Row>

                <Row
                  gap="3"
                  flexDirection={{
                    xs: 'column',
                    md: 'row',
                  }}
                >
                  <Button
                    width={{
                      _: '100%',
                      md: '50%',
                    }}
                    scale="xl"
                    loading={isLoading}
                    onClick={handleRepay}
                  >
                    Thanh toán lại
                  </Button>

                  <Link
                    className={sprinkles({
                      width: {
                        xs: '100%',
                        md: '50%',
                      },
                    })}
                    href="/"
                  >
                    <Button
                      type="secondary"
                      scale="xl"
                      width="100%"
                    >
                      Về trang chủ
                    </Button>
                  </Link>
                </Row>
              </>
            )}
          </ColumnCenter>
        </Box>
      </AtomBox>

      <AtomBox
        px={{
          xs: '3',
          lg: '0',
        }}
      >
        <RecentlyWatchedProducts
          slidesPerView={2}
          spaceBetween={12}
          breakpoints={{
            [breakpoints.xs]: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            [breakpoints.md]: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            [breakpoints.xl]: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }}
        />
      </AtomBox>

      <RebuyProductListModal
        orderCode={order?.orderCode}
        open={isOpenModal && type === ModalType.REBUY_PRODUCTS}
        productList={checkOrderResponse}
      />
    </AtomBox>
  );
};

export default Processing;
