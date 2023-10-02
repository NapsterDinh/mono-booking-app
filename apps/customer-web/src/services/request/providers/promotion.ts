import { RouteMapper } from '@customer-web/services/routes/routes';
import { HTTP_METHOD } from '../../../enums/HTTP';
import APIClient from '../APIClient';

// export const getPromotions = async (items: { unit: number, itemCode: string }[]) => {
//   return await APIClient<NhapThuocResponse.Product.Products>(`${apiPath.STORE_FRONT.PATH}/product`, HTTP_METHOD.POST, { items: items })
// }

export function getPromotionPrices(items: NhapThuocPayload.Promotions.GetPromotionPrices[]) {
  return [];

  // TODO: uncomment when done integrate promotion
  // return APIClient<NhapThuocResponse.Promotions.DiscountPromotion[]>(
  //   `${RouteMapper.getHost('STORE_FRONT')}/promotions/price`,
  //   HTTP_METHOD.POST,
  //   items,
  // );
}

export function getSuggestPromotion(items: NhapThuocPayload.Promotions.Suggest) {
  return APIClient<NhapThuocResponse.Promotions.SuggestPromotion[]>(
    `${RouteMapper.getHost('STORE_FRONT')}/promotions/suggest-promotion-by-product`,
    HTTP_METHOD.POST,
    items,
  );
}
