import styled from '@emotion/styled';
import { DEFAULT_PRODUCT_IMAGE } from '@customer-web/constants';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import ItemPromotionsPreOrder from '@customer-web/views/Payment/components/ItemPromotionsPreOrder';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Flex, Image, Row, RowFixed, Text } from '@tsu-org/ui-kit';
import { Row as AntdRow, Col } from 'antd';
import { FC } from 'react';

const ItemRow = styled(Row)`
  align-items: center;
`;

const ItemList = styled(AtomBox)`
  ${ItemRow} {
    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
      padding-bottom: 12px;
    }

    &:not(:first-child) {
      padding-top: 12px;
    }
  }
`;

const OrderItems: FC<{ items?: NhapThuocResponse.Orders.OrderProduct[] }> = ({ items }) => {
  return (
    <div>
      <Text
        small
        mb="0.5rem"
        fontWeight="500"
      >
        Danh sách sản phẩm <Text as="span">&bull;</Text>{' '}
        <Text
          color="textSecondary"
          small
          as="span"
        >
          {items?.length} sản phẩm
        </Text>
      </Text>

      <ItemList
        bgc="white"
        p="3"
        borderRadius="12px"
      >
        {items?.map((item) => {
          const productImage = item?.image || DEFAULT_PRODUCT_IMAGE;

          return (
            <ItemRow
              gap="0p75rem"
              key={item.sku}
              flexDirection="column"
              alignItems="start"
            >
              <Flex
                gap={'0p75rem'}
                width="100%"
              >
                <Box
                  border="1px solid"
                  borderColor="cardBorder"
                  borderRadius="8px"
                  width="60px"
                  height="60px"
                  p="2"
                  flexShrink={0}
                >
                  <Image
                    alt=""
                    src={productImage}
                    aspectRatio="1/1"
                    dimension={1}
                  />
                </Box>

                <AntdRow
                  className={sprinkles({
                    width: '100%',
                  })}
                  gutter={[12, 12]}
                  key={item.sku}
                >
                  <Col
                    lg={{ span: 16 }}
                    span={24}
                  >
                    <RowFixed
                      gap="0p75rem"
                      flexWrap="nowrap"
                    >
                      <Text
                        lineClamp={2}
                        small
                      >
                        {item.title}
                      </Text>
                    </RowFixed>
                  </Col>

                  <Col
                    lg={{ span: 4 }}
                    span={24}
                  >
                    <Text
                      bold
                      textAlign={{
                        _: 'left',
                        lg: 'right',
                      }}
                    >
                      {convertPriceToVNDPrice(item.total)}
                    </Text>
                    {/* {item.discount ? (
                    <Text
                      as="del"
                      small
                      color="textTertiary"
                      textAlign={{
                        _: 'left',
                        lg: 'right',
                      }}
                    >
                      {convertPriceToVNDPrice(item.discount)}
                    </Text>
                  ) : null} */}
                  </Col>
                  <Col
                    lg={{ span: 4 }}
                    span={24}
                  >
                    <Text
                      color="textSecondary"
                      textAlign={{
                        _: 'left',
                        lg: 'right',
                      }}
                    >
                      x{item.quantity} {item.unitLabel}
                    </Text>
                  </Col>
                </AntdRow>
              </Flex>

              <Flex
                justifyContent="end"
                width="100%"
              >
                <Col span="21">
                  <ItemPromotionsPreOrder item={item} />
                </Col>
              </Flex>
            </ItemRow>
          );
        })}
      </ItemList>
    </div>
  );
};

export default OrderItems;
