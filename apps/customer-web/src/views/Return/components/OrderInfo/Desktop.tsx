import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Image, Row, Text } from '@tsu-org/ui-kit';
import { Row as AntdRow, Col } from 'antd';
import { FC } from 'react';
import { OrderInfoProps } from '.';

const Desktop: FC<OrderInfoProps> = ({ order }) => {
  return (
    <>
      <Box
        backgroundColor="backgroundGrey2"
        p="12px 10px"
      >
        <AntdRow>
          <Col span={12}>
            <Text fontWeight="500">Thông tin đơn hàng</Text>
          </Col>

          <Col span={4}>
            <Text fontWeight="500">Quy cách</Text>
          </Col>

          <Col span={4}>
            <Text
              textAlign="center"
              fontWeight="500"
            >
              Số lượng
            </Text>
          </Col>

          <Col span={4}>
            <Text
              fontWeight="500"
              textAlign="center"
            >
              Thành tiền
            </Text>
          </Col>
        </AntdRow>
      </Box>
      <AtomBox px="3">
        {order?.orderProducts?.map((item) => (
          <AtomBox
            key={item.sku}
            py="0p75rem"
            borderBottom="1"
          >
            <AntdRow
              className={sprinkles({
                alignItems: 'center',
              })}
              gutter={[16, 16]}
            >
              <Col span={12}>
                <Row gap="0p75rem">
                  <Box
                    width="3.75rem"
                    height="3.75rem"
                    borderRadius="8px"
                    border="1px solid"
                    borderColor="divider"
                    backgroundColor="white"
                    p="0.25rem"
                    flexShrink={0}
                  >
                    <Image
                      alt=""
                      src={item.image}
                    />
                  </Box>
                  <Text
                    small
                    lineClamp={2}
                  >
                    {item.title}
                  </Text>
                </Row>
              </Col>

              <Col span={4}>
                <Text small>{item.unitLabel}</Text>
              </Col>

              <Col span={4}>
                <Text textAlign="center">{item.quantity}</Text>
              </Col>

              <Col span={4}>
                <Text
                  fontWeight="500"
                  textAlign="center"
                >
                  {convertPriceToVNDPrice(item.total)}
                </Text>
              </Col>
            </AntdRow>
          </AtomBox>
        ))}
      </AtomBox>
    </>
  );
};

export default Desktop;
