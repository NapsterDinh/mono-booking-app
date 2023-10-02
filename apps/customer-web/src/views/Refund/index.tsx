import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { useBanksQuery, useOrderRefundDetailQuery } from '@customer-web/hooks/queries';
import { OrderDetailMapping } from '@customer-web/services/mapping/OrderDetailMapping';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Column, ColumnCenter, Flex, Image, Input, Row, RowBetween, Text } from '@tsu-org/ui-kit';
import { RefundGradientOrangeIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Form } from 'antd';
import sumBy from 'lodash/sumBy';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useLayoutEffect, useState } from 'react';
import Loading from '../Order/components/Loading';
import BankSelect from './components/BankSelect';
import OrderInfo from './components/OrderInfo';
import { useCreateOrderRefund } from './hooks';
import OTPModal from '@customer-web/components/Modal/OTPModal/OTPModal';
import { useModal } from '@customer-web/state/global/hooks';
import { ModalType } from '@customer-web/enums/index';
import FailureSendOtpModal from '@customer-web/components/Modal/FailureSendOtpModal';

interface RefundProps {
  order?: NhapThuocResponse.CancelDeposit.DepositDetail;
  formatModel?: Components.OrderDetail.Data;
}

const Refund: FC<RefundProps> = () => {
  const { openModal, type, isOpenModal, closeModal } = useModal();
  const router = useRouter();
  const orderCode = router.query.orderCode as string;
  const { data: order, isFetching } = useOrderRefundDetailQuery({
    orderCode,
    type: '1',
  });
  const [formatting, setFormatting] = useState(false);
  const [formatModel, setFormatOrder] = useState<Components.OrderDetail.Data>();
  const [detail, setDetail] = useState<Components.OrderDetail.Data>(formatModel);
  const [form] = Form.useForm();
  const { data: banks } = useBanksQuery();
  const { submit: createOrderRefund, isCreating } = useCreateOrderRefund({
    order,
  });
  const isFinish = detail?.isCompleteTransaction;

  const handleFinish = async (values: any) => {
    const customerPhone = detail?.orderDelivery?.customerPhone;

    values = {
      ...values,
      ...form.getFieldsValue(),
      customerPhone,
    };

    await createOrderRefund(values);
    const formatModel: Components.OrderDetail.Data = {
      ...detail,
      isCompleteTransaction: true,
      orderInfoRefund: {
        bankName: values.transfers.bankName,
        numberCard: values.transfers.accountNum,
        name: values.transfers.accountName,
        brand: values.transfers.brand,
      },
      otp: values?.otp,
      phoneNumber: detail?.orderDelivery?.customerPhone,
    };
    closeModal();
    setDetail(formatModel);
  };

  const handleOpenOTP = () => {
    openModal(ModalType.REQUEST_OTP);
  };

  const updateFormatOrder = async (order) => {
    setFormatting(true);

    try {
      const formatOrder = await OrderDetailMapping.mappingOrderRefund(order);

      setFormatOrder(formatOrder);
      setDetail(formatOrder);
      setFormatting(false);
    } catch (error) {
      setFormatting(false);
    }
  };

  useLayoutEffect(() => {
    if (order) {
      updateFormatOrder(order);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  if (isFetching || formatting) {
    return <Loading />;
  }

  if (!detail) {
    return (
      <ColumnCenter py="7rem">
        <Text>Đường dẫn đã hết hạn truy cập hoặc không tồn tại.</Text>
        <Text>Quý khách có thể liên hệ tổng đài miễn phí 1800 6001 để được hỗ trợ về trang chủ</Text>
      </ColumnCenter>
    );
  }

  return (
    <Box
      maxWidth={{
        _: '100%',
        lg: '740px',
      }}
      backgroundColor="white"
      mx="auto"
      my={{
        _: '0',
        lg: '1.5rem',
      }}
      borderRadius="12px"
    >
      {isFinish ? (
        <Column
          alignItems="center"
          py="4"
          px="3"
        >
          <Image
            src="/images/success-mascos-img.png"
            alt="success-request"
            style={{ marginBottom: '1rem' }}
          />

          <Text
            fontSize="20px"
            bold
            mb="0.5rem"
          >
            Yêu cầu hoàn tiền đã được tiếp nhận
          </Text>

          <Text color="textSecondary">Số tiền đã cọc sẽ được hoàn lại trong vòng 3 ngày làm việc.</Text>
          <Text color="textSecondary">
            Quý khách có thể liên hệ tổng đài{' '}
            <Link href="tel:18006001">
              <Text
                as="span"
                color="textLink"
              >
                1800 6001 (Nhánh 2)
              </Text>{' '}
            </Link>
            để được hỗ trợ
          </Text>
        </Column>
      ) : (
        <Column
          alignItems="center"
          py="4"
        >
          <RefundGradientOrangeIcon mb="1rem" />

          <Text
            fontSize="20px"
            bold
            mb="0.5rem"
          >
            Tiến hành thủ tục Hoàn tiền
          </Text>

          <Text color="textSecondary">Quý khách vui lòng xác nhận thông tin hoàn tiền.</Text>
        </Column>
      )}

      <Box>
        <Box
          backgroundColor="backgroundGrey2"
          p="12px 10px"
        >
          <Text fontWeight="500">Thông tin khách hàng</Text>
        </Box>

        <AtomBox
          px="3"
          pb="1p5rem"
        >
          <Row
            py="0p75rem"
            borderBottom="1"
          >
            <Text width="240px">Số đơn hàng</Text>
            <Link href="/">
              <Text color="textLink">{detail?.orderCode}</Text>
            </Link>
          </Row>

          <Row
            py="0p75rem"
            borderBottom="1"
          >
            <Text
              width="240px"
              fontSize="16px"
            >
              Họ và tên
            </Text>
            <Text>{detail?.orderDelivery?.customerName}</Text>
          </Row>

          <Row
            py="0p75rem"
            borderBottom={isFinish ? '1' : 'none'}
          >
            <Text
              width="240px"
              fontSize="16px"
            >
              Số điện thoại
            </Text>
            <Text>{detail?.orderDelivery?.customerPhone}</Text>
          </Row>

          {isFinish && (
            <Row
              py="0p75rem"
              alignItems="flex-start"
            >
              <Text
                width="240px"
                fontSize="16px"
              >
                Tài khoản tiếp nhận
              </Text>
              <Form
                form={form}
                onFinish={handleOpenOTP}
              >
                <div>
                  <Column
                    flexDirection="column"
                    gap="0p75rem"
                    py="0p75rem"
                  >
                    <RowBetween>
                      <Text width="156px">Ngân hàng:</Text>
                      <Text fontWeight="500">{detail?.orderInfoRefund?.bankName}</Text>
                    </RowBetween>

                    <RowBetween>
                      <Text width="156px">Số tài khoản:</Text>
                      <Text fontWeight="500">{detail?.orderInfoRefund?.numberCard}</Text>
                    </RowBetween>

                    <RowBetween>
                      <Text width="156px">Tên chủ tài khoản:</Text>
                      <Text fontWeight="500">{detail?.orderInfoRefund?.name}</Text>
                    </RowBetween>

                    {!!detail?.orderInfoRefund?.brand && (
                      <RowBetween>
                        <Box width="156px">Chi nhánh:</Box>
                        <Text fontWeight="500">{detail.orderInfoRefund.brand}</Text>
                      </RowBetween>
                    )}
                  </Column>
                </div>
              </Form>
            </Row>
          )}
        </AtomBox>
      </Box>

      <Box>
        <OrderInfo order={formatModel} />

        <Row
          borderBottom="1"
          justifyContent="flex-end"
          px="0p75rem"
        >
          <Flex
            width={{
              _: '100%',
              lg: '280px',
            }}
            flexDirection="column"
            gap="0p75rem"
            py="0p75rem"
          >
            <RowBetween>
              <Box width="156px">Tổng tiền:</Box>
              <Text fontWeight="500">{convertPriceToVNDPrice(detail?.orderPrice?.totalPrice ?? 0)}</Text>
            </RowBetween>

            <RowBetween>
              <Box width="156px">Số tiền chiết khấu:</Box>
              <Text fontWeight="500">
                {convertPriceToVNDPrice(sumBy(order?.paymentHistory?.detail?.discount, 'amount'))}
              </Text>
            </RowBetween>

            <RowBetween>
              <Box width="156px">Đã thanh toán:</Box>
              <Text fontWeight="500">{convertPriceToVNDPrice(order?.totalRefund?.totalCustomerDeposit)}</Text>
            </RowBetween>

            <RowBetween>
              <Box width="156px">Số tiền hoàn trả:</Box>
              <Text
                fontWeight="500"
                color="textFocus"
                fontSize="18px"
              >
                {convertPriceToVNDPrice(detail?.orderPrice.totalPayment)}
              </Text>
            </RowBetween>
          </Flex>
        </Row>
        {isFinish ? (
          <AtomBox
            px="3"
            py="3"
          >
            <Link href="/">
              <Button
                scale="xl"
                width="100%"
              >
                Về trang chủ
              </Button>
            </Link>
          </AtomBox>
        ) : (
          <AtomBox
            px="3"
            py="1p5rem"
          >
            <Text
              fontWeight="500"
              mb="0.25rem"
            >
              Thông tin tài khoản tiếp nhận
            </Text>
            <Text
              color="textTertiary"
              mb="0.75rem"
            >
              (nhapthuoc.com sẽ hoàn tiền qua tài khoản này)
            </Text>

            <Form
              form={form}
              onFinish={handleOpenOTP}
            >
              <Box>
                <Form.Item
                  className={sprinkles({
                    mb: '3',
                  })}
                  name={['transfers', 'bankName']}
                  rules={[{ required: true, message: 'Vui lòng chọn ngân hàng' }]}
                >
                  <BankSelect banks={banks} />
                </Form.Item>

                <Form.Item
                  className={sprinkles({
                    mb: '3',
                  })}
                  name={['transfers', 'accountNum']}
                  rules={[{ required: true, message: 'Vui lòng nhập số tài khoản' }]}
                >
                  <Input
                    placeholder="Nhập số tài khoản *"
                    scale="lg"
                  />
                </Form.Item>

                <Form.Item
                  className={sprinkles({
                    mb: '3',
                  })}
                  name={['transfers', 'accountName']}
                  rules={[{ required: true, message: 'Vui lòng nhập tên chủ tài khoản' }]}
                >
                  <Input
                    placeholder="Nhập tên chủ tài khoản *"
                    scale="lg"
                  />
                </Form.Item>

                <Form.Item name={['transfers', 'brand']}>
                  <Input
                    placeholder="Nhập chi nhánh (không bắt buộc)"
                    scale="lg"
                  />
                </Form.Item>

                <Button
                  scale="xl"
                  width="100%"
                  htmlType="submit"
                  loading={isCreating}
                >
                  Xác nhận
                </Button>
              </Box>
            </Form>
          </AtomBox>
        )}
      </Box>
      <OTPModal
        open={isOpenModal && type === ModalType.REQUEST_OTP}
        length={6}
        autoFocus
        onCancel={closeModal}
        mobilePhone={detail?.orderDelivery?.customerPhone}
        onSubmit={handleFinish}
      />
      <FailureSendOtpModal
        open={isOpenModal && type === ModalType.FAIL_TO_REQUEST_OTP}
        closable={false}
      />
    </Box>
  );
};

export default Refund;
