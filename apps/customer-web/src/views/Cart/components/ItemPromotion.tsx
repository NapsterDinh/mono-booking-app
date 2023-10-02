import RibbonCard from '@customer-web/components/RibbonCard';
import { DEFAULT_IMAGES } from '@customer-web/helpers/Constant';
import { Box, Flex, Image, Link, Row, RowBetween, Text, TextProps } from '@tsu-org/ui-kit';
import { UudaiCannotUsedIcon, UudaiIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Badge, Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { FC, ReactNode } from 'react';

export enum PromotionMethodEnum {
  DISCOUNT_BY_PERCENTAGE,
  GIFT,
}
export enum PromotionTypeEnum {
  BY_PRODUCT,
  BY_ORDER,
  BY_PRODUCT_CART,
}
export enum CanUsedEnum {
  CAN_USED,
  CAN_NOT_USED,
}

type ItemPromotionProps = {
  key: React.Key;
  imageUrl?: string;
  name: string;
  urlPage?: string;
  method?: PromotionMethodEnum;
  canUsed?: CanUsedEnum;
  type?: PromotionTypeEnum;
  isDetailLinkInline?: boolean;
  onChangeCheckbox?: (e: CheckboxChangeEvent) => void;
  hasRibbon?: boolean;
  quantityAmount?: string;
};

const ItemPromotion: FC<ItemPromotionProps & TextProps> = (props) => {
  const {
    key,
    imageUrl,
    name,
    urlPage,
    method = PromotionMethodEnum.DISCOUNT_BY_PERCENTAGE,
    canUsed = CanUsedEnum.CAN_USED,
    type = PromotionTypeEnum.BY_PRODUCT_CART,
    isDetailLinkInline = false,
    onChangeCheckbox,
    hasRibbon = false,
    quantityAmount,
    ...rest
  } = props;

  const promotionEntries = {
    [PromotionMethodEnum.DISCOUNT_BY_PERCENTAGE]: {
      [CanUsedEnum.CAN_USED]: <UudaiIcon />,
      [CanUsedEnum.CAN_NOT_USED]: <UudaiCannotUsedIcon />,
      ribbon: (
        <Text
          as="span"
          css={{
            backgroundColor: '#D92D20',
            borderRadius: '4px 0px 0px 4px',
            clipPath: 'polygon(100% 0%, 90% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);',
          }}
          color="white"
          fontSize="12px"
          paddingY="2px"
          paddingLeft="5px"
          mr="5px"
        >
          Phiếu mua hàng
          <Text
            width="15px"
            as="span"
            display="inline-block"
          />
        </Text>
      ),
    },
    [PromotionMethodEnum.GIFT]: {
      [CanUsedEnum.CAN_USED]:
        (
          <Box
            border="1px solid #e4e8ed"
            borderRadius="4px"
            padding="6px"
          >
            <Image
              src={imageUrl}
              alt="promotion-image"
            />
          </Box>
        ) || DEFAULT_IMAGES.PROMOTION,
      [CanUsedEnum.CAN_NOT_USED]:
        (
          <Box
            border="1px solid #e4e8ed"
            borderRadius="4px"
          >
            <Image
              src={imageUrl}
              alt="promotion-image"
            />
          </Box>
        ) || DEFAULT_IMAGES.PROMOTION_DISABLED,
      ribbon: (
        <Text
          as="span"
          css={{
            backgroundColor: '#D92D20',
            borderRadius: '4px 0px 0px 4px',
            clipPath: 'polygon(100% 0%, 90% 50%, 100% 100%, 0 100%, 0% 50%, 0 0);',
          }}
          color="white"
          fontSize="12px"
          paddingY="2px"
          paddingLeft="5px"
          mr="5px"
        >
          Quà tặng
          <Text
            width="15px"
            as="span"
            display="inline-block"
          />
        </Text>
      ),
    },
  };

  const promotionRibbon = hasRibbon ? promotionEntries[method]?.ribbon : null;

  const promotionImage =
    promotionEntries[method]?.[canUsed] ||
    promotionEntries[PromotionMethodEnum.DISCOUNT_BY_PERCENTAGE][CanUsedEnum.CAN_USED];

  return (
    <Flex
      key={key}
      gap="2"
      justifyContent="space-between"
    >
      <Row
        gap="2"
        alignItems="center"
        flexDirection="row"
        width="fit"
      >
        {onChangeCheckbox && <Checkbox onChange={onChangeCheckbox} />}
        {canUsed === CanUsedEnum.CAN_USED ? (
          <Flex
            backgroundColor={imageUrl ? 'white' : '#FFF3E1'}
            borderRadius="8px"
            width="2.75rem"
            height="2.75rem"
            justifyContent="center"
            alignItems="center"
            flexShrink={0}
          >
            {promotionImage}
          </Flex>
        ) : (
          <Flex
            backgroundColor="#D9DFE5"
            borderRadius="8px"
            width="2.75rem"
            height="2.75rem"
            justifyContent="center"
            alignItems="center"
            flexShrink={0}
          >
            {promotionImage}
          </Flex>
        )}
        <Box position="relative">
          <Text
            small
            as="span"
            color={canUsed === CanUsedEnum.CAN_USED ? 'textPrimary' : 'textSecondary'}
            {...rest}
          >
            {promotionRibbon}
            {name}
            {urlPage && isDetailLinkInline && (
              <Link
                href={urlPage}
                display="inline"
              >
                <Text
                  color="link"
                  small
                  paddingLeft="5px"
                  as="span"
                >
                  Xem chi tiết
                </Text>
              </Link>
            )}
          </Text>
          <Flex>
            {urlPage && !isDetailLinkInline ? (
              canUsed === CanUsedEnum.CAN_NOT_USED ? (
                <Text
                  color="textSecondary"
                  small
                  as="span"
                  {...rest}
                >
                  Chưa đủ điều kiện nhận khuyến mãi
                  <Link
                    href={urlPage}
                    display="inline"
                  >
                    <Text
                      as="span"
                      color="link"
                      small
                      paddingLeft="5px"
                    >
                      Xem chi tiết
                    </Text>
                  </Link>
                </Text>
              ) : (
                <Link href={urlPage}>
                  <Text
                    color="link"
                    small
                  >
                    Xem chi tiết
                  </Text>
                </Link>
              )
            ) : null}
          </Flex>
        </Box>
      </Row>
      {quantityAmount && (
        <Text
          minWidth="fit-content"
          small
          color="textSecondary"
        >
          {quantityAmount}
        </Text>
      )}
    </Flex>
  );
};

export default ItemPromotion;
