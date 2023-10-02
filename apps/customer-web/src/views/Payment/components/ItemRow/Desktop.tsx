import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { AtomBox } from '@tsu-org/ui';
import { Box, Flex, Image, RowFixed, Text } from '@tsu-org/ui-kit';
import { ColdProductIcon, SpecialControlProductIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Row as AntdRow, Col } from 'antd';
import { FC } from 'react';
import ItemPromotionsPreOrder from '../ItemPromotionsPreOrder';
import { ItemRowProps } from './types';

const Desktop: FC<ItemRowProps> = ({ item }) => {
  return (
    <AntdRow
      gutter={[16, 16]}
      style={{ alignItems: 'center', flexWrap: 'wrap' }}
    >
      <Col
        sm={{ span: 9 }}
        span={24}
      >
        <Flex alignItems="center">
          <Box
            width="3.75rem"
            height="3.75rem"
            borderRadius="8px"
            border="1px solid #E4E8ED"
            backgroundColor="white"
            mr="0.75rem"
            p="0.25rem"
            flexShrink={0}
          >
            <Image
              alt=""
              src={item.productInfo?.mainImage}
            />
          </Box>
          <RowFixed gap="2">
            {item?.productInfo?.isColdStorage && (
              <Box
                backgroundColor="tagPrimaryBackground"
                borderRadius="6px"
                border="1px solid"
                borderColor="#EDF2F8"
                p="2px 8px"
              >
                <RowFixed
                  gap="1"
                  flexWrap="nowrap"
                >
                  <ColdProductIcon />
                  <Text
                    color="textSecondary"
                    fontSize="12px"
                    whiteSpace="nowrap"
                  >
                    Bảo quản lạnh
                  </Text>
                </RowFixed>
              </Box>
            )}
            {item?.productInfo?.isSpecialControl && (
              <Box
                backgroundColor="tagSuccessBackground"
                borderRadius="6px"
                border="1px solid"
                borderColor="#EDF2F8"
                p="2px 8px"
              >
                <RowFixed
                  gap="1"
                  flexWrap="nowrap"
                >
                  <SpecialControlProductIcon />
                  <Text
                    color="textSecondary"
                    fontSize="12px"
                    whiteSpace="nowrap"
                  >
                    Hàng KSĐB
                  </Text>
                </RowFixed>
              </Box>
            )}
            <Text
              small
              lineClamp={2}
            >
              {item.productInfo?.webName || item.productInfo?.name}
            </Text>
          </RowFixed>
        </Flex>
      </Col>

      <Col
        sm={{ span: 3 }}
        span={24}
      >
        <Text
          fontWeight={500}
          small
          textAlign="right"
        >
          {item.productInfo.unitName}
        </Text>
      </Col>
      <Col span={4}>
        <Text
          bold
          small
          color="textFocus"
          textAlign="right"
        >
          {convertPriceToVNDPrice(item.detailCalculatorPriceInfo?.price)}
        </Text>
      </Col>
      <Col
        sm={{ span: 4 }}
        span={24}
      >
        <Text
          textAlign={{
            sm: 'right',
          }}
          small
        >
          x{item.quantity}
        </Text>
      </Col>
      <Col
        sm={{ span: 4 }}
        span={24}
      >
        {item.detailCalculatorPriceInfo?.priceDiscountPromotion > 0 ? (
          <>
            <Text
              bold
              small
              color="textFocus"
              textAlign="right"
            >
              {convertPriceToVNDPrice(item.detailCalculatorPriceInfo?.totalBill)}
            </Text>
            <Text
              color="textTertiary"
              small
              textAlign={{
                sm: 'right',
              }}
            >
              <AtomBox as="del">{convertPriceToVNDPrice(item.detailCalculatorPriceInfo?.total)}</AtomBox>
            </Text>
          </>
        ) : (
          <>
            <Text
              bold
              small
              color="textFocus"
              textAlign={{
                sm: 'right',
              }}
            >
              {convertPriceToVNDPrice(item.detailCalculatorPriceInfo?.totalBill)}
            </Text>
          </>
        )}
      </Col>
      <Flex
        justifyContent="end"
        width="100%"
      >
        <Col span="21">
          <ItemPromotionsPreOrder item={item} />
        </Col>
      </Flex>
    </AntdRow>
  );
};

export default Desktop;
