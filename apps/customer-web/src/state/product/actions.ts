import { UserRanking } from '@customer-web/enums/User';
import { getProductContent } from '@customer-web/request-providers/cms';
import { getProduct, getRestrictInfo } from '@customer-web/services/request/providers/product';
import { getPromotionPrices, getSuggestPromotion } from '@customer-web/services/request/providers/promotion';
import { getListProduct, getProductBySlug } from '@customer-web/services/request/providers/search';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRecentlyWatched = createAsyncThunk('product/fetchRecentlyWatched', async (skus: string[]) => {
  const response = await getListProduct(skus);
  const products = response || [];
  let productRestrictList: NhapThuocResponse.Product.ProductRestrictInfo[] = [];

  if (products.length > 0) {
    const productRequestRestrictInfo: NhapThuocPayload.Product.RestrictInfoRequest = {
      listDataVerified: products.map((item) => {
        return {
          itemCode: item.sku,
          unitCode: item.price?.measureUnitCode,
        };
      }),
      rankId: UserRanking.BRONZE_LEVEL,
    };

    try {
      productRestrictList = await getRestrictInfo(productRequestRestrictInfo);
    } catch (error) { }

    const payload = products.map((i) => ({
      itemCode: i.sku,
      unitCode: i.price?.measureUnitCode || 0,
      price: i.price?.price || 0,
    }));
    const promotions = await getPromotionPrices(payload);
    const res = skus.reduce<NhapThuocResponse.SearchService.ProductBasic[]>((prev, next) => {
      const product = products.find((e) => e.sku === next);
      if (product && product.price) {
        prev.push({
          ...product,
          price: {
            ...product.price,
            discount:
              promotions.find(
                (promotion) =>
                  promotion.itemCode === product.sku &&
                  promotion.unitCode.toString() === product.price?.measureUnitCode?.toString(),
              ) || null,
          },
          restrictInfo: productRestrictList?.find(
            (prodRstrict) =>
              prodRstrict.itemCode === product.sku &&
              prodRstrict.unitCode.toString() === product.price?.measureUnitCode?.toString(),
          ),
        });
      } else if (product?.sku) {
        prev.push({
          ...product,
        });
      }
      return prev;
    }, []);

    return res;
  }

  return products;
});

export const fetchBuyLaters = createAsyncThunk('product/fetchBuyLaters', async (skus: string[]) => {
  const response = await getProduct(skus);
  const products = response.data || [];
  return products;
});

export const fetchBySlug = createAsyncThunk('product/fetchBySlug', async (slug: string) => {
  let product = await getProductBySlug(slug);
  let content: {
    sku: string;
    noteCate: string;
  };

  try {
    content = (await getProductContent(product?.sku)).data;
  } catch (error) { }

  if (!product?.price) {
    return {
      product,
      content,
    };
  }

  try {
    const promotionPrices = await getPromotionPrices([
      {
        itemCode: product?.sku,
        unitCode: product?.price?.measureUnitCode || 0,
        price: product?.price?.price || 0,
      },
    ]);

    if (promotionPrices?.length) {
      product = {
        ...product,
        price: {
          ...product.price,
          discount: promotionPrices[0],
        },
      };
    }

    // restrict info products
    const payloadProductRestrict: NhapThuocPayload.Product.RestrictInfoRequest = {
      listDataVerified: [
        {
          itemCode: product?.sku,
          unitCode: product?.price?.measureUnitCode,
        },
      ],
      rankId: UserRanking.BRONZE_LEVEL,
    };
    let productRestrictData: NhapThuocResponse.Product.ProductRestrictInfo[] = [];

    try {
      productRestrictData = await getRestrictInfo(payloadProductRestrict);
    } catch (error) { }

    product = {
      ...product,
      restrictInfo: productRestrictData.find(
        (item) => item.itemCode === product?.sku && item.unitCode === product?.price?.measureUnitCode,
      ),
    };
  } catch (error) { }

  return {
    product,
    content,
  };
});

export const fetchSuggestPromotions = createAsyncThunk(
  'product/fetchSuggestPromotions',
  async (payload?: NhapThuocPayload.Promotions.Suggest) => {
    const response = await getSuggestPromotion(payload);

    return response || [];
  },
);

export const clearSuggestPromotions = createAction('product/clearSuggestPromotions');
