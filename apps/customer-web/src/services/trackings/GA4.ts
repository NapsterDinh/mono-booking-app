import { GoogleAnalytic4Events } from '@customer-web/enums/Tracking';

const productDetailToGA4EcommerceItemMapping = (
  products: NhapThuocResponse.Product.ProductDetailItem[],
): GADataLayerEcommerceItems[] => {
  return products.map(
    (product, index) =>
      <GADataLayerEcommerceItems>{
        item_id: product.sku,
        item_name: product?.name,
        affiliation: 'Online',
        currency: 'VND',
        discount: product?.discount?.discountPrice || 0,
        index: index || 0,
        item_brand: product.brand || '',
        item_category: product.ecomCategory?.find((e) => e.level === 1)?.name || '',
        item_category2: product.ecomCategory?.find((e) => e.level === 2)?.name || '',
        item_category3: product.ecomCategory?.find((e) => e.level === 3)?.name || '',
        price: product.price,
        quantity: 1,
      },
  );
};
const fillIntoECommerce = (products: NhapThuocResponse.Carts.ListCart[]): GADataLayerEcommerceItems[] => {
  return products.map(
    (product, index) =>
      <GADataLayerEcommerceItems>{
        item_id: product.itemCart,
        item_name: product?.productInfo?.webName || product?.productInfo?.name,
        affiliation: 'Online',
        coupon: '',
        currency: 'VND',
        discount: product.detailCalculatorPriceInfo?.priceDiscountPromotion || 0,
        index: index || 0,
        item_brand: '', // Branch name
        item_category: '',
        item_category2: '',
        item_category3: '',
        price: product.detailCalculatorPriceInfo?.price,
        quantity: product.detailCalculatorPriceInfo?.quantity,
      },
  );
};

export const gaTrackAddToCart = (product: NhapThuocResponse.Product.ProductDetailItem) => {
  try {
    if (typeof window !== 'undefined') {
      window?.dataLayer?.push({ ecommerce: null });
      const items = productDetailToGA4EcommerceItemMapping([product]);
      window?.dataLayer?.push({
        event: GoogleAnalytic4Events.ADD_TO_CART,
        ecommerce: {
          items: items,
        },
      });
    }
  } catch (error) { }
};

export const gaTrackRemoveFromCart = (product: NhapThuocResponse.Carts.ListCart) => {
  try {
    if (typeof window !== 'undefined') {
      window?.dataLayer?.push({ ecommerce: null });
      const items = fillIntoECommerce([product]);
      window?.dataLayer?.push({
        event: GoogleAnalytic4Events.REMOVE_FROM_CART,
        ecommerce: {
          items: items,
        },
      });
    }
  } catch (error) { }
};

export const gaTrackBeginCheckout = (products: NhapThuocResponse.Carts.ListCart[]) => {
  try {
    window?.dataLayer?.push({ ecommerce: null });
    const items = fillIntoECommerce(products);
    window?.dataLayer?.push({
      event: GoogleAnalytic4Events.BEGIN_CHECKOUT,
      ecommerce: {
        items: items,
      },
    });
  } catch (error) { }
};

export const gaTrackAddShippingInfo = (products: NhapThuocResponse.Carts.ListCart[], estimatedPrice?: number) => {
  try {
    window?.dataLayer?.push({ ecommerce: null });
    const items = fillIntoECommerce(products);
    window?.dataLayer?.push({
      event: GoogleAnalytic4Events.ADD_SHIPPING_INFO,
      ecommerce: {
        value: estimatedPrice || 0,
        currency: 'VND',
        items: items,
      },
    });
  } catch (error) { }
};

export const gaTrackAddPaymentInfo = (
  products: NhapThuocResponse.Carts.ListCart[],
  estimatedPrice: number,
  paymentMethod: string,
) => {
  try {
    window?.dataLayer?.push({ ecommerce: null });
    const items = fillIntoECommerce(products);
    window?.dataLayer?.push({
      event: GoogleAnalytic4Events.ADD_PAYMENT_INFO,
      ecommerce: {
        value: estimatedPrice || 0,
        currency: 'VND',
        payment_type: paymentMethod,
        items: items,
      },
    });
  } catch (error) { }
};
