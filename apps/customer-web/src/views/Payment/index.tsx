import SelectVouchersModal from '@customer-web/components/Modal/SelectVouchersModal';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import useOpenCloseModal from '@customer-web/hooks/useOpenCloseModal';
import {
  useCartState,
  useEstimatedPrice,
  useShipmentPrice,
  useTotalUniqueSelectedCartItems,
} from '@customer-web/state/cart/hooks';
import { useCreatingOrder } from '@customer-web/state/order/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Flex, Link, RowBetween, Text } from '@tsu-org/ui-kit';
import {
  DiscountGradientOrange,
  LeftOutlinedIcon,
  QuestionCircleFilled,
  RightOutlinedIcon,
} from '@tsu-org/ui-kit/components/Svg/Icons';
import { useResponsive } from 'ahooks';
import { Col, Row, Tooltip } from 'antd';
import type { FC } from 'react';
import DeliveryForm from './components/DeliveryForm';
import ExportInvoice from './components/ExportInvoice';
import ItemList from './components/ItemList';
import PaymentMethod from './components/PaymentMethod';

interface PaymentProps {
  deliveryServices?: {
    serviceCode?: number;
    description?: string;
    serviceName?: string;
    estimatedDeliveryDate?: string;
    isEnable?: boolean;
  }[];
  form: any;
  onBack?: () => void;
}

const Payment: FC<PaymentProps> = ({ deliveryServices, form, onBack }) => {
  const cartState = useCartState();
  const { information } = cartState;
  const creating = useCreatingOrder();
  const responsive = useResponsive();
  const totalSelectedCartItems = useTotalUniqueSelectedCartItems();
  const shipmentPrice = useShipmentPrice();
  const estimatedPrice = useEstimatedPrice();

  return (
    <>
      <Box
        p={{
          xl: '1rem 0rem',
          _: '1rem',
        }}
      >
        <AtomBox>
          <AtomBox
            display="inline-block"
            mb="3"
          >
            <Button
              type="link"
              onClick={onBack}
            >
              <Flex>
                <LeftOutlinedIcon
                  color="link"
                  width="0.375rem"
                  mr="1rem"
                />

                <Text color="link">Quay lại giỏ hàng</Text>
              </Flex>
            </Button>
          </AtomBox>
          <Row gutter={32}>
            <Col
              lg={{ span: 16 }}
              span={24}
            >
              <ItemList mb="4" />

              <ExportInvoice
                mb="4"
                formInstance={form}
              />

              <DeliveryForm
                deliveryServices={deliveryServices}
                mb="4"
                formInstance={form}
              />

              <PaymentMethod formInstance={form} />
            </Col>

            <Col
              lg={{ span: 8 }}
              span={24}
              style={{ marginTop: '29px' }}
            >
              <AtomBox
                px="3"
                py="0p75rem"
                bgc="white"
                borderTopRadius="12px"
                position="relative"
              >
                <RowBetween mb="2">
                  <Text color="textSecondary">Tổng tiền</Text>
                  <Text
                    color="textSecondary"
                    fontWeight="bold"
                  >
                    {information?.calculatorPriceInfo?.principalAmount
                      ? convertPriceToVNDPrice(information?.calculatorPriceInfo?.principalAmount)
                      : '0đ'}
                  </Text>
                </RowBetween>

                <RowBetween mb="2">
                  <Text color="textSecondary">Giảm giá trực tiếp</Text>
                  <Text
                    color="textSecondary"
                    fontWeight="bold"
                  >
                    {information?.calculatorPriceInfo?.totalDiscount
                      ? convertPriceToVNDPrice(information?.calculatorPriceInfo.totalDiscount)
                      : '0đ'}
                  </Text>
                </RowBetween>

                <RowBetween mb="2">
                  <Flex gap="0.5rem">
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
                    color="textSecondary"
                    fontWeight="bold"
                  >
                    {information?.calculatorPriceInfo?.totalVoucherPrice
                      ? convertPriceToVNDPrice(information?.calculatorPriceInfo.totalVoucherPrice)
                      : '0đ'}
                  </Text>
                </RowBetween>

                <RowBetween mb="2">
                  <Text color="textSecondary">Tiết kiệm được</Text>
                  <Text
                    color="textSecondary"
                    fontWeight="bold"
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

                <RowBetween mb="0p75rem">
                  <Text color="textSecondary">Phí vận chuyển</Text>
                  <Text
                    color="textFocus"
                    bold
                    fontSize="20px"
                  >
                    {shipmentPrice <= 0 ? 'Miễn phí' : convertPriceToVNDPrice(shipmentPrice)}
                  </Text>
                </RowBetween>

                <Box
                  border="1px solid #E4E8ED"
                  height="1px"
                  mt="0.25rem"
                  mb="0.875rem"
                />

                <RowBetween mb="0p75rem">
                  <Text
                    color="textSecondary"
                    bold
                    fontSize="18px"
                  >
                    Thành tiền
                  </Text>
                  <Text
                    color="textFocus"
                    bold
                    fontSize="20px"
                  >
                    {estimatedPrice ? convertPriceToVNDPrice(estimatedPrice) : '0đ'}
                  </Text>
                </RowBetween>

                <Button
                  scale="xl"
                  width="100%"
                  mb="0.75rem"
                  htmlType="submit"
                  loading={creating}
                >
                  <Text
                    color="white"
                    fontWeight="500"
                  >
                    Hoàn tất ({totalSelectedCartItems})
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
              </AtomBox>
            </Col>
          </Row>
        </AtomBox>
      </Box>
    </>
  );
};

export default Payment;
