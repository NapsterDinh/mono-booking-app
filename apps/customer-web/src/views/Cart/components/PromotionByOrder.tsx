import useDisplayPromotion from '@customer-web/hooks/useDisplayPromotion';
import { AtomBox } from '@tsu-org/ui';
import { Box, Column, Flex, Text } from '@tsu-org/ui-kit';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Button } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { FC, useState } from 'react';
import ItemPromotion, { CanUsedEnum, PromotionMethodEnum, PromotionTypeEnum } from './ItemPromotion';

interface PromotionByOrderProps {}

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

const PromotionByOrder: FC<PromotionByOrderProps> = () => {
  const [promotions, _] = useState(data);

  const { displayPromotions, hasMore, onViewMoreButtonClicked, countMore, onViewLessButtonClicked } =
    useDisplayPromotion({
      promotions: promotions,
      MAX_DISPLAY_PROMOTIONS: 3,
    });

  const hasListPromotionByOrder = true;

  const onChangeCheckboxPromotion = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    //TODO: emit with debounced and dispatch to store
  };

  if (!hasListPromotionByOrder) {
    return null;
  }

  return (
    <AtomBox
      mb="1rem"
      border="1"
      borderRadius="8px"
      backgroundColor="white"
    >
      <Box
        backgroundColor="#FA8C16"
        borderRadius="8px 8px 0px 0px"
        display="flex"
        gap="0.5rem"
        p="0.5rem 1rem"
      >
        <Text
          fontSize="14px"
          lineHeight="20px"
          fontWeight="600"
          color="white"
          small
        >
          Khuyến mãi theo đơn hàng
        </Text>
      </Box>

      <Box p="1rem">
        <Column gap="0p75rem">
          <Text
            fontSize="14px"
            lineHeight="20px"
            fontWeight="600"
            color="textTertiary"
            small
          >
            Chọn khuyến mãi
          </Text>
          {displayPromotions.map((promotion: any) => (
            <ItemPromotion
              key={promotion.code}
              imageUrl={promotion?.imageUrl}
              name={promotion.webName || promotion.name}
              urlPage={promotion.urlPage}
              type={PromotionTypeEnum.BY_ORDER}
              canUsed={promotion?.canUsed}
              onChangeCheckbox={onChangeCheckboxPromotion}
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
                Xem thêm {countMore} khuyến mại
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

export default PromotionByOrder;
