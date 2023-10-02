import ItemPromotion, {
  CanUsedEnum,
  PromotionMethodEnum,
  PromotionTypeEnum,
} from '@customer-web/views/Cart/components/ItemPromotion';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Column, Flex, Text } from '@tsu-org/ui-kit';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, DiscountShapeIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC, useEffect, useState } from 'react';

type PromotionsProps = AtomBoxProps & {
  promotions?: NhapThuocResponse.Promotions.Promotion[];
};

const data = [
  {
    code: '123',
    excludecode: ['excludecode1', 'excludecode2'],
    fromDate: '1/1/2023',
    imageUrl:
      'https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/IMG_1718_1ac3c4cfae.jpg',
    isShowOnline: true,
    name: 'name',
    priority: 1,
    promotionType: 'promotionType1',
    toDate: '12/12/2023',
    urlPage: 'http://localhost:4200/thuoc/smecta-2236.html',
    webName: 'Tặng 1 Gel rửa tay mỗi khi mua 1 Prospan',
    canUsed: CanUsedEnum.CAN_USED,
    method: PromotionMethodEnum.GIFT,
  },
  {
    code: '1233',
    excludecode: ['excludecode1', 'excludecode2'],
    fromDate: '1/1/2023',
    isShowOnline: true,
    name: 'name',
    priority: 1,
    promotionType: 'promotionType1',
    toDate: '12/12/2023',
    urlPage: 'http://localhost:4200/thuoc/smecta-2236.html',
    webName: 'Giảm giá 6% cho sản phẩm từ ngày 01/10/2023 đến ngày 03/10/2023',
    canUsed: CanUsedEnum.CAN_USED,
    method: PromotionMethodEnum.DISCOUNT_BY_PERCENTAGE,
  },
  {
    code: '1233333',
    excludecode: ['excludecode1', 'excludecode2'],
    fromDate: '1/1/2023',
    isShowOnline: true,
    name: 'name',
    priority: 1,
    promotionType: 'promotionType1',
    toDate: '12/12/2023',
    urlPage: 'http://localhost:4200/thuoc/smecta-2236.html',
    webName: 'Giảm giá 6% cho sản phẩm từ ngày 01/10/2023 đến ngày 03/10/2023',
    canUsed: CanUsedEnum.CAN_NOT_USED,
    method: PromotionMethodEnum.GIFT,
  },
  {
    code: '123333',
    excludecode: ['excludecode1', 'excludecode2'],
    fromDate: '1/1/2023',
    isShowOnline: true,
    name: 'name',
    priority: 1,
    promotionType: 'promotionType1',
    toDate: '12/12/2023',
    webName: 'Tặng voucher 20K cho đơn hàng sau',
    canUsed: CanUsedEnum.CAN_USED,
    method: PromotionMethodEnum.GIFT,
  },
  {
    code: '1231113333',
    excludecode: ['excludecode1', 'excludecode2'],
    fromDate: '1/1/2023',
    isShowOnline: true,
    name: 'name',
    priority: 1,
    promotionType: 'promotionType1',
    toDate: '12/12/2023',
    urlPage: 'http://localhost:4200/thuoc/smecta-2236.html',
    webName: 'Giảm giá 6% cho sản phẩm từ ngày 01/10/2023 đến ngày 03/10/2023',
    canUsed: CanUsedEnum.CAN_NOT_USED,
    method: PromotionMethodEnum.GIFT,
  },
  {
    code: '1333233333',
    excludecode: ['excludecode1', 'excludecode2'],
    fromDate: '1/1/2023',
    isShowOnline: true,
    name: 'name',
    priority: 1,
    promotionType: 'promotionType1',
    toDate: '12/12/2023',
    urlPage: 'http://localhost:4200/thuoc/smecta-2236.html',
    webName: 'Giảm giá 6% cho sản phẩm từ ngày 01/10/2023 đến ngày 03/10/2023',
    canUsed: CanUsedEnum.CAN_NOT_USED,
    method: PromotionMethodEnum.GIFT,
  },
  {
    code: '123332233',
    excludecode: ['excludecode1', 'excludecode2'],
    fromDate: '1/1/2023',
    isShowOnline: true,
    name: 'name',
    priority: 1,
    promotionType: 'promotionType1',
    toDate: '12/12/2023',
    urlPage: 'http://localhost:4200/thuoc/smecta-2236.html',
    webName: 'Giảm giá 6% cho sản phẩm từ ngày 01/10/2023 đến ngày 03/10/2023',
    canUsed: CanUsedEnum.CAN_NOT_USED,
    method: PromotionMethodEnum.GIFT,
  },
];

const MAX_DISPLAY_PROMOTIONS = 5;

const Promotions: FC<PromotionsProps> = ({ promotions, ...rest }) => {
  const [promotions1, _] = useState(data);
  const [displayPromotions, setDisplayPromotions] = useState<NhapThuocResponse.Promotions.Promotion[]>([]);
  const hasMore = promotions1?.length > 0 && displayPromotions?.length < promotions1?.length;

  const onViewMoreButtonClicked = () => {
    setDisplayPromotions(promotions1);
  };

  const onViewLessButtonClicked = () => {
    let displayPromotions = [];

    if (promotions1?.length) {
      displayPromotions = promotions1.slice(0, MAX_DISPLAY_PROMOTIONS);
    }

    setDisplayPromotions(displayPromotions);
  };

  useEffect(() => {
    let displayPromotions = [];

    if (promotions1?.length) {
      displayPromotions = promotions1.slice(0, MAX_DISPLAY_PROMOTIONS);
    }

    setDisplayPromotions(displayPromotions);
  }, [promotions1]);

  if (!displayPromotions?.length) {
    return null;
  }

  return (
    <AtomBox
      border="1"
      borderRadius="8px"
      backgroundColor="white"
      {...rest}
    >
      <Box
        backgroundColor="#FFF3E1"
        borderRadius="8px 8px 0px 0px"
        display="flex"
        gap="0.5rem"
        p="0.5rem 1rem"
      >
        <DiscountShapeIcon />
        <Text
          color="textWarning"
          small
        >
          Khuyến mại được áp dụng
        </Text>
      </Box>

      <Box p="1rem">
        <Column gap="0p75rem">
          {displayPromotions.map((promotion: any) => (
            <ItemPromotion
              key={promotion.code}
              imageUrl={promotion?.imageUrl}
              name={promotion.webName || promotion.name}
              urlPage={promotion.urlPage}
              type={PromotionTypeEnum.BY_PRODUCT}
              canUsed={promotion?.canUsed}
            />
          ))}
        </Column>
      </Box>

      {hasMore ? (
        <Flex
          borderTop="1px solid #E4E8ED"
          p="0.5rem"
          justifyContent="center"
        >
          <Button
            type="link"
            onClick={onViewMoreButtonClicked}
          >
            <Text
              small
              fontWeight="500"
            >
              <Flex justifyContent="center">
                <ChevronDoubleDownIcon mr="0.25rem" />
                Xem thêm {promotions1.length - displayPromotions.length} khuyến mại
              </Flex>
            </Text>
          </Button>
        </Flex>
      ) : (
        <Flex
          borderTop="1px solid #E4E8ED"
          p="0.5rem"
          justifyContent="center"
        >
          <Button
            type="link"
            onClick={onViewLessButtonClicked}
          >
            <Text
              small
              fontWeight="500"
            >
              <Flex justifyContent="center">
                <ChevronDoubleUpIcon mr="0.25rem" />
                Thu gọn
              </Flex>
            </Text>
          </Button>
        </Flex>
      )}
    </AtomBox>
  );
};

export default Promotions;
