import { useSelectedCartItems, useTotalUniqueSelectedCartItems } from '@customer-web/state/cart/hooks';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Box, Divider, Text, useMatchBreakpoints } from '@tsu-org/ui-kit';
import { Row as AntdRow, Col } from 'antd';
import VirtualList from 'rc-virtual-list';
import { FC } from 'react';
import ItemRow from './ItemRow';

const ItemList: FC<AtomBoxProps> = (props) => {
  const cartItems = useSelectedCartItems();

  const total = useTotalUniqueSelectedCartItems();
  const { isDesktop } = useMatchBreakpoints();

  return (
    <AtomBox {...props}>
      <Text
        bold
        mb="2"
        small
        fontWeight="500"
      >
        Danh sách sản phẩm •{' '}
        <Text
          as="span"
          color="textSecondary"
          small
          fontWeight="500"
        >
          {total} sản phẩm
        </Text>
      </Text>

      {isDesktop && (
        <Box
          backgroundColor="white"
          borderRadius="12px"
          p="1rem"
          mb="0.5rem"
        >
          <AtomBox px="2">
            <AntdRow
              gutter={[16, 16]}
              style={{ alignItems: 'center', flexWrap: 'wrap' }}
            >
              <Col
                sm={{ span: 9 }}
                span={24}
              >
                Tên sản phẩm
              </Col>

              <Col span={3}>
                <Text
                  small
                  textAlign={{
                    sm: 'right',
                  }}
                >
                  Đơn vị
                </Text>
              </Col>

              <Col span={4}>
                <Text
                  small
                  textAlign={{
                    sm: 'right',
                  }}
                >
                  Đơn giá
                </Text>
              </Col>

              <Col
                sm={{ span: 4 }}
                span={24}
              >
                <Text
                  small
                  textAlign={{
                    sm: 'right',
                  }}
                >
                  Số lượng
                </Text>
              </Col>

              <Col
                sm={{ span: 4 }}
                span={24}
              >
                <Text
                  small
                  textAlign={{
                    sm: 'right',
                  }}
                >
                  Thành tiền
                </Text>
              </Col>
            </AntdRow>
          </AtomBox>
        </Box>
      )}

      <Box
        backgroundColor="white"
        borderRadius="12px"
        p="1rem"
      >
        {cartItems?.length > 5 ? (
          <VirtualList
            data={cartItems}
            itemKey="id"
            height={450}
            itemHeight={167}
          >
            {(item, index) => (
              <AtomBox px="2">
                <ItemRow item={item} />

                {index !== cartItems.length - 1 && <Divider my="0p75rem" />}
              </AtomBox>
            )}
          </VirtualList>
        ) : (
          cartItems?.map((item, index) => (
            <AtomBox
              px="2"
              key={item.id}
            >
              <ItemRow item={item} />

              {index !== cartItems.length - 1 && <Divider my="0p75rem" />}
            </AtomBox>
          ))
        )}
      </Box>
    </AtomBox>
  );
};

export default ItemList;
