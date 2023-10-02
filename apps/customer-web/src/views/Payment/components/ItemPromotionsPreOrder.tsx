import useDisplayPromotion from '@customer-web/hooks/useDisplayPromotion';
import ItemPromotion, {
  CanUsedEnum,
  PromotionMethodEnum,
  PromotionTypeEnum,
} from '@customer-web/views/Cart/components/ItemPromotion';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Column, Flex, Text } from '@tsu-org/ui-kit';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, WhiteFlameIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC, useState } from 'react';

interface ItemPromotionsPreOrderProps {
  // item: NhapThuocResponse.Carts.ListCart;
  item: any;
}

const listSuggestPromotionTest = [
  {
    // giftProduct: [
    //   {
    //     fullPathSlug: 'product/123',
    //     itemCode: 'itemCode1',
    //     mainImage: 'mainImage',
    //     quantity: 1,
    //     unitCode: 1,
    //     unitName: 'unitName',
    //     webName: 'webName',
    //   },
    //   {
    //     fullPathSlug: 'product/1233',
    //     itemCode: 'itemCode2',
    //     mainImage: 'mainImag2',
    //     quantity: 2,
    //     unitCode: 1,
    //     unitName: 'unitNam3',
    //     webName: 'webName2',
    //   },
    // ],
    giftProduct: [],
    image: '/estore-images/default/promotions/promotion_used.png',
    isMatching: true,
    promotionCode: 'promotionCode',
    promotionName: 'promotionName',
    promotionExcluded: [],
    promotionTypeCode: 'promotionTypeCode',
    returnCode: 'returnCode',
    returnMessage: 'returnMessage',
    statusCode: 'USED',
  },
  {
    giftProduct: [
      {
        fullPathSlug: 'product/123',
        itemCode: 'itemCode1',
        mainImage: '/estore-images/default/promotions/promotion_used.png',
        quantity: 1,
        unitCode: 1,
        unitName: 'unitName',
        webName: 'Giảm giá 6% cho từ ngày 01/10/2023 đến ngày 03/10/2023.',
      },
      {
        fullPathSlug: 'product/1233',
        itemCode: 'itemCode2',
        mainImage: '/estore-images/default/promotions/promotion_used.png',
        quantity: 2,
        unitCode: 1,
        unitName: 'unitNam3',
        webName: 'Tặng 1 Gel rửa tay mỗi khi mua 1 Teen Active Vitamins',
      },
      {
        fullPathSlug: 'product/1233',
        itemCode: 'itemCode2',
        mainImage: '/estore-images/default/promotions/promotion_used.png',
        quantity: 2,
        unitCode: 1,
        unitName: 'unitNam3',
        webName: 'Tặng 1 Gel rửa tay mỗi khi mua 1 Teen Active Vitamins',
      },
      {
        fullPathSlug: 'product/1233',
        itemCode: 'itemCode2',
        mainImage: '/estore-images/default/promotions/promotion_used.png',
        quantity: 2,
        unitCode: 1,
        unitName: 'unitNam3',
        webName: 'Tặng 1 Gel rửa tay mỗi khi mua 1 Teen Active Vitamins',
      },
      {
        fullPathSlug: 'product/1233',
        itemCode: 'itemCode2',
        mainImage: '/estore-images/default/promotions/promotion_used.png',
        quantity: 2,
        unitCode: 1,
        unitName: 'unitNam3',
        webName: 'Tặng 1 Gel rửa tay mỗi khi mua 1 Teen Active Vitamins',
      },
    ],
    image: '/estore-images/default/promotions/promotion_used.png',
    isMatching: true,
    promotionCode: 'promotionCode',
    promotionName: 'promotionName',
    promotionExcluded: [],
    promotionTypeCode: 'promotionTypeCode',
    returnCode: 'returnCode',
    returnMessage: 'returnMessage',
    statusCode: 'USED',
  },
];

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

const ItemPromotionsPreOrder: FC<ItemPromotionsPreOrderProps> = ({ item }) => {
  const [listPromotionUsed, _] = useState(data);

  const { displayPromotions, hasMore, onViewMoreButtonClicked, countMore, onViewLessButtonClicked } =
    useDisplayPromotion({
      promotions: listPromotionUsed,
      MAX_DISPLAY_PROMOTIONS: 3,
    });

  // useEffect(() => {
  //   if (listPromotionUsed.length <= 0) {
  //     return;
  //   }

  //   const giftProductsFiltered = listPromotionUsed.map((promo) => promo.giftProduct);

  //   if (!giftProductsFiltered || giftProductsFiltered?.length <= 0) {
  //     return;
  //   }
  // }, [listPromotionUsed]);

  // if (item?.isSelected === false) {
  //   return null;
  // }

  if (listPromotionUsed.length <= 0) {
    return null;
  }

  return (
    <AtomBox
      width="100%"
      border="1"
      borderRadius="8px"
      backgroundColor="white"
    >
      <Box
        backgroundColor="#FFF3E1"
        borderRadius="8px 8px 0px 0px"
        display="flex"
        gap="0.5rem"
        p="0.5rem 1rem"
        alignItems="baseline"
      >
        <Box
          background="var(--alias-color-semantic-warning-gradient, linear-gradient(315deg, #F79009 0%, #FDB022 100%))"
          borderRadius="50%"
          display="flex"
          padding="4px"
          width="16px"
          height="16px"
        >
          <WhiteFlameIcon />
        </Box>
        <Text
          color="textWarning"
          small
        >
          Khuyến mại theo sản phẩm
        </Text>
      </Box>

      <Column
        gap="0p75rem"
        padding="1rem"
      >
        {displayPromotions.map((promotion: any) => (
          <ItemPromotion
            key={promotion.code}
            imageUrl={promotion?.imageUrl}
            name={promotion.webName || promotion.name}
            urlPage={promotion.urlPage}
            type={PromotionTypeEnum.BY_PRODUCT_CART}
            canUsed={promotion?.canUsed}
            quantityAmount="x1 hộp"
            hasRibbon={true}
            method={PromotionMethodEnum.GIFT}
          />
        ))}
        {hasMore ? (
          <Flex
            borderTop="1px solid #E4E8ED"
            pt="1rem"
            pb="0.5rem"
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
            pt="1rem"
            pb="0.5rem"
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
      </Column>
    </AtomBox>
  );
};

export default ItemPromotionsPreOrder;
