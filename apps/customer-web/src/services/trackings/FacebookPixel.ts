import type { FacebookPixelTrackAction } from '@customer-web/enums/Tracking';
import ReactPixel from 'react-facebook-pixel';

export const trackFbPageView = (
  trackName: FacebookPixelTrackAction,
  data:
    | NhapThuocPayload.FacebookPixel.AddToCart
    | NhapThuocPayload.FacebookPixel.InitiateCheckout
    | NhapThuocPayload.FacebookPixel.Purchase,
) => {
  // ReactPixel.init("FB_PIXEL_ID", undefined, {
  //   autoConfig: true,
  //   debug: true,
  // });
  ReactPixel.track(`${trackName}`, data);
};

export const fbPixelAddToCartPayload = (
  product: NhapThuocResponse.Product.ProductDetailItem,
): NhapThuocPayload.FacebookPixel.AddToCart => {
  return <NhapThuocPayload.FacebookPixel.AddToCart>{
    content_type: 'product',
    content_ids: product.sku,
    content_name: product.name,
    content_category: product.ecomCategory.find((cate) => cate.level === 1)?.name || null,
    content_category_2: product.ecomCategory.find((cate) => cate.level === 2)?.name || null,
    content_category_3: product.ecomCategory.find((cate) => cate.level === 3)?.name || null,
    currency: 'VND',
  };
};
