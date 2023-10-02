import styled from '@emotion/styled';
import { DEFAULT_PRODUCT_IMAGE } from '@customer-web/constants';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Image, Row, RowFixed, Text } from '@tsu-org/ui-kit';
import { Row as AntdRow, Col } from 'antd';
import isNumber from 'lodash/isNumber';
import { FC } from 'react';

interface RebuyItemsProps {
  item: NhapThuocResponse.Orders.ReBuyConditionProduct;
  isCannotBuy: boolean;
}

const RebuyList = styled(AtomBox)`
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
    padding-bottom: 8px;
  }
  padding-top: 8px;
`;

const RebuyItems: FC<RebuyItemsProps> = ({ item, isCannotBuy }) => {
  const productImage = item?.image || DEFAULT_PRODUCT_IMAGE;
  const isRestrictPrice =
    isNumber(item.quantitySaleRestrict) && isNumber(item.quantity) && item.quantity > item.quantitySaleRestrict;
  return (
    <RebuyList>
      <AntdRow
        className={sprinkles(
          !isCannotBuy
            ? {
                width: '100%',
              }
            : { width: '100%', opacity: '0.5' },
        )}
        gutter={[12, 12]}
        key={item.itemCode}
        align={'middle'}
      >
        <Col
          lg={{ span: 16 }}
          span={24}
        >
          <RowFixed
            gap="0p75rem"
            flexWrap="nowrap"
            marginLeft={'1'}
          >
            <Box
              border="1px solid"
              borderColor="cardBorder"
              borderRadius="8px"
              width="60px"
              height="60px"
              flexShrink={0}
              padding={2}
            >
              <Image
                alt="productImage"
                src={productImage}
                aspectRatio="1/1"
                dimension={1}
              />
            </Box>
            <Text
              lineClamp={2}
              small
              fontSize={14}
            >
              {item.productName}
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
            {convertPriceToVNDPrice(item.price)}
          </Text>
        </Col>
        <Col
          lg={{ span: 4 }}
          span={10}
        >
          <Box>
            <Text
              color="textSecondary"
              textAlign={{
                _: 'left',
                lg: 'right',
              }}
              fontWeight={400}
            >
              x{isRestrictPrice ? item.quantitySaleRestrict : item.quantity} {item.unitName}
            </Text>
            {isRestrictPrice && (
              <Text
                color="textTertiary"
                textAlign={{
                  _: 'left',
                  lg: 'right',
                }}
                fontSize={14}
                fontWeight={400}
                textDecoration={'line-through'}
              >
                x{item.quantity} {item.unitName}
              </Text>
            )}
          </Box>
        </Col>
      </AntdRow>
      {!!item.policy?.message && (
        <Row
          alignItems={'center'}
          mt={'2'}
        >
          <AtomBox mr={'1'}>
            <Image
              alt="warning"
              src={'/images/warning-circle.svg'}
            />
          </AtomBox>

          <Text
            color="#B54708"
            bold
          >
            {item.policy?.message}
          </Text>
        </Row>
      )}
    </RebuyList>
  );
};
export default RebuyItems;
