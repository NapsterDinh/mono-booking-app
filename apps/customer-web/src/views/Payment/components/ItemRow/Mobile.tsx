import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { AtomBox } from '@tsu-org/ui';
import { Box, Column, Flex, Image, Row, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { ColdProductIcon, SpecialControlProductIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC } from 'react';
import ItemPromotionsPreOrder from '../ItemPromotionsPreOrder';
import { ItemRowProps } from './types';

const Mobile: FC<ItemRowProps> = ({ item }) => {
  return (
    <Row
      gap="3"
      alignItems="center"
      flexWrap="wrap"
    >
      <Flex
        gap="0.75rem"
        width="100%"
        flexDirection={{
          sm: 'row',
          _: 'column',
        }}
      >
        <Box
          width="3.75rem"
          height="3.75rem"
          borderRadius="8px"
          border="1px solid #E4E8ED"
          backgroundColor="white"
          p="0.25rem"
          flexShrink={0}
        >
          <Image
            alt=""
            src={item.productInfo.mainImage}
          />
        </Box>
        <RowFixed
          gap="2"
          flexGrow={1}
        >
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

          <Column flexGrow={1}>
            <Text
              small
              mb="0.5rem"
            >
              {item.productInfo.webName || item.productInfo.name}
            </Text>
            <RowBetween flexGrow={1}>
              {item.detailCalculatorPriceInfo.priceDiscountPromotion > 0 ? (
                <>
                  <Text
                    bold
                    small
                    color="textFocus"
                  >
                    {convertPriceToVNDPrice(item.detailCalculatorPriceInfo.totalBill)}
                  </Text>
                  <Text
                    color="textTertiary"
                    small
                  >
                    <AtomBox as="del">{convertPriceToVNDPrice(item.detailCalculatorPriceInfo.total)}</AtomBox>
                  </Text>
                </>
              ) : (
                <>
                  <Text
                    bold
                    small
                    color="textFocus"
                  >
                    {convertPriceToVNDPrice(item.detailCalculatorPriceInfo.totalBill)}
                  </Text>
                </>
              )}

              <Text small>
                x{item.quantity} {item.unitName}
              </Text>
            </RowBetween>
          </Column>
        </RowFixed>
      </Flex>
      <ItemPromotionsPreOrder item={item} />
    </Row>
  );
};

export default Mobile;
