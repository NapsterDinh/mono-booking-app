import styled from '@emotion/styled';
import { DEFAULT_PRODUCT_IMAGE } from '@customer-web/constants';
import { OrderHistoriesTabCode, OrderStatusCode, TypeOfSplitingOrder } from '@customer-web/enums/Order';
import { PaymentMethod, PaymentStatus } from '@customer-web/enums/Payment';
import { ModalType } from '@customer-web/enums/index';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { useCopyToClipboard } from '@customer-web/hooks';
import { useModal } from '@customer-web/state/global/hooks';
import {
  useCheckRebuyOrder,
  useCheckRebuying,
  useRebuyOrderProductList,
  useRebuying,
} from '@customer-web/state/order/hooks';
import RebuyProductListModal from '@customer-web/views/Order/components/RebuyProductListModal';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Column, Divider, Flex, Image, Row, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { DocumentCopyIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { MyOrdersResponse } from 'apps/nhapthuoc-estore/src/types/api/response/order';
import { Order } from 'apps/nhapthuoc-estore/src/types/models/order';
import dayjs from 'dayjs';
import NextLink from 'next/link';
import { useMemo, useState } from 'react';
import { MAX_ORDERS_PER_FETCH } from '../constants';
import { Filters } from '../types';
import Loading from './Loading';
import OrderSplit from './OrderSplit';

const StyledTable = styled(Table)`
  &.ant-table-wrapper {
    .ant-table {
      background-color: transparent;

      .ant-table-footer {
        background-color: #fff;
      }
      tr.ant-table-row {
        .ant-table-cell {
          background-color: transparent;
          border-bottom: none;
          padding: 8px 0;
        }
      }

      tr.ant-table-row:hover > td {
        background-color: transparent;
      }
    }

    .ant-table-pagination.ant-pagination {
      gap: 8px;
      align-items: center;

      margin: 16px auto;

      .ant-pagination-item {
        padding: 6px 12px;

        width: 40px;
        height: 40px;

        font-weight: 500;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .ant-pagination-item-active,
      .ant-pagination-item:not(.ant-pagination-item-active):hover {
        background: linear-gradient(180deg, #ffe5c3 0%, #ffe4c3 100%);
        border: none;
      }
    }
  }
`;

interface IProps {
  tabCode: OrderHistoriesTabCode;
  ordersData?: MyOrdersResponse;
  filters?: Filters;
  isFetching?: boolean;
  onChangeFilters?: TableProps<Order>['onChange'];
}

const ORDER_STATUS_COLORS = {
  [OrderStatusCode.PROCESSING]: 'textWarning',
  [OrderStatusCode.COMPLETED]: 'success',
  [OrderStatusCode.CANCELED]: 'colorError',
};

function ChildrenTabPane({ ordersData, filters, isFetching, onChangeFilters }: IProps) {
  const checkRebuying = useCheckRebuying();
  const rebuying = useRebuying();
  const [_, copy] = useCopyToClipboard();

  const checkOrderResponse = useRebuyOrderProductList();

  const { checkRebuy } = useCheckRebuyOrder();
  const { isOpenModal, type } = useModal();

  const [orderCode, setOrderCode] = useState<string>('');

  const handleCheckCanRebuy = (orderCode: string) => () => {
    checkRebuy(orderCode);
    setOrderCode(orderCode);
  };

  const columns: ColumnsType<Order> = useMemo(() => {
    return [
      {
        title: '',
        dataIndex: 'name',
        render: (_, order) => {
          const products = order?.orderProducts || [];
          const firstProduct = products?.[0];
          const productImage = firstProduct?.image || DEFAULT_PRODUCT_IMAGE;

          return (
            <Box bg="white">
              {/* header table */}
              <Column
                px="3"
                py="0p75rem"
                backgroundColor={'backgroundGrey'}
              >
                <RowBetween flexGrow={1}>
                  <Row
                    flexWrap="wrap"
                    justifyContent="space-between"
                    alignItems="flex-end"
                  >
                    <RowFixed
                      gap="1"
                      alignItems="center"
                    >
                      <Text
                        fontWeight={600}
                        fontSize={'1rem'}
                      >
                        {order?.orderName}
                      </Text>
                      <Text color="textDisabled">&bull;</Text>
                      <RowFixed alignItems="center">
                        <Text
                          fontWeight={500}
                          fontSize={'0.875rem'}
                          pl={'0.2rem'}
                          color="textSecondary"
                        >
                          #{order?.orderCodeDisplay}
                        </Text>
                        <Button
                          type="text"
                          size="small"
                          style={{ padding: 0 }}
                          onClick={copy.bind(this, order?.orderCode)}
                        >
                          <DocumentCopyIcon color="link" />
                        </Button>
                      </RowFixed>
                    </RowFixed>

                    <Flex
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Text
                        color={ORDER_STATUS_COLORS[order?.status?.code] || 'textWarning'}
                        fontSize={'1rem'}
                        fontWeight={500}
                      >
                        &bull; {order?.status?.statusLabel}
                      </Text>
                    </Flex>
                  </Row>
                </RowBetween>

                <RowFixed>
                  {order?.orderSplit?.parent?.orderCode && (
                    <OrderSplit
                      orderSplit={order.orderSplit}
                      caseOrder={TypeOfSplitingOrder.PARENT}
                    />
                  )}

                  {!!order?.orderSplit?.children && (
                    <OrderSplit
                      orderSplit={order.orderSplit}
                      caseOrder={TypeOfSplitingOrder.CHILDREN}
                    />
                  )}
                </RowFixed>
              </Column>
              {/* content table */}

              <Column
                px="3"
                py="0p75rem"
              >
                {order?.status?.code !== OrderStatusCode.CANCELED &&
                  order?.orderInformation?.paymentMethodDefault?.includes(PaymentMethod.TP_BANK_OVERDRAFT_LOAN) &&
                  order?.orderInformation?.paymentStatus === PaymentStatus.UNPAID && (
                    <AtomBox
                      px="3"
                      py="2"
                      backgroundColor="functionYellow2"
                      borderRadius="small"
                      mb="0p75rem"
                    >
                      <Text
                        small
                        color="textSecondary"
                      >
                        Đơn hàng vay thấu chi chưa được thanh toán. Vui lòng thanh toán trước{' '}
                        {dayjs(order?.orderDate)
                          .add(1, 'day')
                          .format('DD/MM/YYYY HH:mm')}
                        .
                      </Text>
                    </AtomBox>
                  )}

                <Row
                  gap={'2'}
                  alignItems={'start'}
                >
                  <Flex
                    width="64px"
                    height="64px"
                    border="1px solid"
                    borderColor="cardBorder"
                    borderRadius="8px"
                    px="2"
                    alignItems="center"
                    flexShrink={0}
                  >
                    <Image
                      alt={firstProduct?.title}
                      preview={false}
                      src={productImage}
                    />
                  </Flex>
                  <Column width={'75%'}>
                    <Text
                      fontWeight={500}
                      fontSize={'0p875rem'}
                    >
                      {firstProduct?.title}
                    </Text>
                    {products?.length > 1 && (
                      <Text
                        fontWeight={500}
                        fontSize={'0p875rem'}
                        color="#657384"
                      >
                        +{products?.length - 1} sản phẩm khác{' '}
                      </Text>
                    )}
                  </Column>
                  <Column flexShrink={0}>
                    <Text
                      bold
                      fontSize={'0p875rem'}
                    >
                      {convertPriceToVNDPrice(firstProduct?.price)}
                    </Text>
                  </Column>
                  <Column flexShrink={0}>
                    <Text
                      fontWeight={500}
                      fontSize={'0p875rem'}
                      color="textTertiary"
                    >
                      x{firstProduct?.quantity} {firstProduct?.unitLabel}{' '}
                    </Text>
                  </Column>
                </Row>
              </Column>

              {/* footer table */}
              <AtomBox
                bg={'white'}
                px={'1rem'}
                py="0p75rem"
              >
                <AtomBox
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <NextLink href={`/ttdh/${order?.orderCode}`}>
                    <Text
                      cursor={'pointer'}
                      color="textLink"
                      small
                    >
                      Xem chi tiết {'>'}
                    </Text>
                  </NextLink>
                  <AtomBox
                    display={'flex'}
                    alignItems={'center'}
                  >
                    Tổng tiền:
                    <Text
                      color="darkOrange"
                      bold
                      padding={'0 2px'}
                    >
                      {' '}
                      {convertPriceToVNDPrice(order?.orderPrice?.finalPrice ?? 0)}
                    </Text>
                  </AtomBox>
                </AtomBox>

                {order?.status?.code === OrderStatusCode.PROCESSING && (
                  <>
                    <Divider my="14px" />
                    <Box>
                      <Text
                        color="textTertiary"
                        fontSize="12px"
                      >
                        nhapthuoc.com sẽ liên hệ bạn trong thời gian sớm nhất.
                      </Text>
                    </Box>
                  </>
                )}

                {order.canRebuy && (
                  <>
                    <Divider my={'12px'} />
                    <Box
                      display={'flex'}
                      justifyContent={'flex-end'}
                    >
                      <Button
                        scale="md"
                        width={158}
                        id={order.orderCode}
                        disabled={rebuying}
                        onClick={handleCheckCanRebuy(order?.orderCode)}
                      >
                        <Text
                          id={order.orderCode}
                          color="white"
                          fontWeight="500"
                        >
                          Mua lại
                        </Text>
                      </Button>
                    </Box>
                  </>
                )}
              </AtomBox>
            </Box>
          );
        },
      },
    ];
  }, [checkRebuying, rebuying]);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <StyledTable
        columns={columns}
        dataSource={ordersData?.orders}
        size="middle"
        pagination={{
          position: ['bottomCenter'],
          total: ordersData?.totalCount || 0,
          current: Number(filters?.page || 1),
          pageSize: MAX_ORDERS_PER_FETCH,
          hideOnSinglePage: true,
        }}
        showHeader={false}
        onChange={onChangeFilters}
        rowKey="orderId"
      />
      <RebuyProductListModal
        open={isOpenModal && type === ModalType.REBUY_PRODUCTS}
        orderCode={orderCode}
        productList={checkOrderResponse}
      />
    </>
  );
}

export default ChildrenTabPane;
