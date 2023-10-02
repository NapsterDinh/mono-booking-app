import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { AtomBox } from '@tsu-org/ui';
import { Box, Image, Row, RowBetween, Text } from '@tsu-org/ui-kit';
import { FC } from 'react';
import { OrderInfoProps } from '.';

const Mobile: FC<OrderInfoProps> = ({ order }) => {
  return (
    <>
      <Box
        backgroundColor="backgroundGrey2"
        p="12px 10px"
      >
        <Text fontWeight="500">Thông tin đơn hàng</Text>
      </Box>

      <AtomBox px="3">
        {order?.orderProducts?.map((item) => (
          <Row
            key={item.sku}
            alignItems="flex-start"
            borderBottom="1"
            gap="0p75rem"
            py="2"
          >
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

            <Box flexGrow="1">
              <Box mb="0.75rem">
                <Text
                  small
                  fontWeight="500"
                  lineClamp={2}
                >
                  {item.title}
                </Text>
              </Box>

              <RowBetween mb="1">
                <Text small>Quy cách: {item.unitLabel}</Text>
                <Text
                  fontWeight="500"
                  small
                >
                  {convertPriceToVNDPrice(item.total)}
                </Text>
              </RowBetween>

              <Text small>Số lượng: {item.quantity}</Text>
            </Box>
          </Row>
        ))}
      </AtomBox>
    </>
  );
};

export default Mobile;
