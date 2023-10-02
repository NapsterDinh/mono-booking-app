import { CART_PROMOTION_STATUS_CODE } from '@customer-web/enums/Cart';
import useDisplayPromotion, { DisplayPromotionType } from '@customer-web/hooks/useDisplayPromotion';
import { Box, Button, Flex, Text } from '@tsu-org/ui-kit';
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon, WhiteFlameIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Col } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CollapseProps } from 'antd/lib';
import { FC, useEffect, useMemo, useState } from 'react';
import CartPromotionCollapse from './CartPromotionCollapse';
import ItemPromotion, { CanUsedEnum, PromotionMethodEnum, PromotionTypeEnum } from './ItemPromotion';

interface ItemPromotionsProps {
  item: NhapThuocResponse.Carts.ListCart;
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

const ItemPromotions: FC<ItemPromotionsProps> = ({ item }) => {
  // const { listSuggestPromotion } = item;
  const [listSuggestPromotion, _] = useState(listSuggestPromotionTest);

  const filteredListSuggestPromotion = useMemo(
    () =>
      listSuggestPromotion ? listSuggestPromotion.filter((i) => i.statusCode === CART_PROMOTION_STATUS_CODE.USED) : [],
    [listSuggestPromotion],
  );

  const isListSuggestPromotionUsed: boolean = filteredListSuggestPromotion.length > 0;

  // const listRenderSuggestPromotionUsed: {
  //   key: number;
  //   image: string;
  //   label: string;
  // }[] = useMemo(() => {
  //   const suggestPromotionUsed: DisplayPromotionType[] = [];
  //   if (!filteredListSuggestPromotion?.length && filteredListSuggestPromotion.length === 0) {
  //     return [];
  //   }

  //   for (let index = 0; index < filteredListSuggestPromotion.length; index++) {
  //     const promotion = filteredListSuggestPromotion[index];
  //     //if has only promotion, no gift product
  //     if (!promotion.giftProduct || promotion.giftProduct?.length <= 0) {
  //       suggestPromotionUsed.push({
  //         key: index,
  //         image: promotion?.image,
  //         label: promotion?.promotionName,
  //       });
  //       continue;
  //     }
  //     // if has gift product
  //     for (let i = 0; i < promotion.giftProduct.length; i++) {
  //       const giftProduct = promotion.giftProduct[i];
  //       if (giftProduct?.quantity && giftProduct?.webName) {
  //         suggestPromotionUsed.push({
  //           key: i,
  //           image: giftProduct?.mainImage,
  //           label: giftProduct?.webName,
  //         });
  //       }
  //     }
  //   }
  //   return suggestPromotionUsed;
  // }, [filteredListSuggestPromotion]);

  const listRenderSuggestPromotionUsed = data;

  const { displayPromotions, hasMore, onViewMoreButtonClicked, countMore, onViewLessButtonClicked } =
    useDisplayPromotion({
      promotions: listRenderSuggestPromotionUsed,
      MAX_DISPLAY_PROMOTIONS: 3,
    });

  useEffect(() => {
    if (listSuggestPromotion.length <= 0) {
      return;
    }

    const giftProductsFiltered = listSuggestPromotion.map((promo) => promo.giftProduct);

    if (!giftProductsFiltered || giftProductsFiltered?.length <= 0) {
      return;
    }
  }, [listSuggestPromotion]);

  if (item?.isSelected === false) {
    return null;
  }

  if (listSuggestPromotion.length <= 0) {
    return null;
  }

  const onChangeCheckboxPromotion = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
    //TODO: emit with debounced and dispatch to store
  };

  const items: CollapseProps['items'] = [
    {
      key: item?.productInfo?.name,
      extra: (
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
      ),
      label: (
        <Text
          color="textWarning"
          small
          fontWeight="500"
          lineHeight="20px"
        >
          {listRenderSuggestPromotionUsed.length} khuyến mãi theo sản phẩm
        </Text>
      ),
      children: (
        <Flex
          flexDirection="column"
          gap="0.75rem"
        >
          {isListSuggestPromotionUsed &&
            displayPromotions.map((promotion: any) => (
              <ItemPromotion
                key={promotion.code}
                imageUrl={promotion?.imageUrl}
                name={promotion.webName || promotion.name}
                urlPage={promotion.urlPage}
                type={PromotionTypeEnum.BY_PRODUCT_CART}
                canUsed={promotion?.canUsed}
                onChangeCheckbox={onChangeCheckboxPromotion}
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
        </Flex>
      ),
    },
  ];

  return (
    <Col span={24}>
      <CartPromotionCollapse
        items={items}
        defaultActiveKey={[items[0]?.key || item?.productInfo?.name]}
      />
    </Col>
  );
};

export default ItemPromotions;
