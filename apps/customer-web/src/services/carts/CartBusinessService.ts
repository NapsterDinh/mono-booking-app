import { CART_PROMOTION_STATUS_CODE, ItemType } from '@customer-web/enums/Cart';
import { OrderChannel } from '@customer-web/enums/Channel';
import { END_HOUR, START_HOUR } from '@customer-web/helpers/Constant';
import { setDate } from '@customer-web/helpers/DateTime';

const sortCartItemsLogic = (cartItems: NhapThuocResponse.Carts.ListCart[]) => {
  return cartItems.sort((a, b) => {
    if (Date.parse(b.creationTime) - Date.parse(a.creationTime) === 0) {
      if (a?.productInfo?.name > b?.productInfo?.name) {
        return -1;
      }

      if (a?.productInfo?.name < b?.productInfo?.name) {
        return 1;
      }

      return 0;
    }

    return Date.parse(b.creationTime) - Date.parse(a.creationTime);
  });
};
export const mergeAndSortCartItems = (
  cartInfo: NhapThuocResponse.Carts.CartInfo,
): NhapThuocResponse.Carts.ListCart[] => {
  const cartItems = cartInfo.listCart
    .concat(cartInfo.listCartCustomer)
    .filter((item) => item.itemType === ItemType.PRODUCT);
  return sortCartItemsLogic(cartItems);
};

export const filterSelectedItemsInCart = (
  cartItems: NhapThuocResponse.Carts.ListCart[],
): NhapThuocResponse.Carts.ListCart[] => {
  if (!cartItems) {
    return [];
  }
  const cartItemsSelected = cartItems.filter((i) => i.isSelected === true);

  return sortCartItemsLogic(cartItemsSelected);
};

export const addAnItemToCartPayload = (params: {
  sessionId: string;
  product: NhapThuocResponse.SearchService.ProductBasic & {
    unitDefault?: string;
  };
  phoneNumber?: string;
  customer?: Omit<NhapThuocResponse.Customers.Customer, 'address' | 'includeAttributes'> | null;
}) => {
  return addItemToCartPayload(params);
};

export const addItemToCartPayload = ({
  sessionId,
  product,
  quantity,
}: {
  sessionId: string;
  product: NhapThuocResponse.SearchService.ProductBasic & {
    unitDefault?: string;
  };
  phoneNumber?: string;
  quantity?: number;
}) => {
  return {
    sessionId: sessionId || '',
    cartItem: {
      itemCart: product.sku,
      quantity: quantity ?? 1,
      unitCode: product.price?.measureUnitCode || product.unitDefault, //hard for handle old and new response
      inventory: product?.price?.inventory,
    },
    isCustomerToCart: false,
  } as NhapThuocPayload.Carts.AddCart;
};

export const mergeListSuggestPromotionByStatus = (
  cartInfo: NhapThuocResponse.Carts.CartInfo,
  filterStatus: CART_PROMOTION_STATUS_CODE,
): NhapThuocResponse.Carts.ListSuggestPromotion[] => {
  if (cartInfo.listCart.length <= 0) {
    return [];
  }

  let listSuggestPromotion: NhapThuocResponse.Carts.ListSuggestPromotion[] = [];
  cartInfo.listCart
    .filter((cart) => cart.itemType === ItemType.PRODUCT)
    .map((cart) => {
      if (cart.listSuggestPromotion.length > 0) {
        listSuggestPromotion.push(...cart.listSuggestPromotion);
      }
    });

  if (listSuggestPromotion?.length <= 0) {
    return [];
  }

  //Filter by status
  listSuggestPromotion = listSuggestPromotion.filter(
    (suggestPromotion) => suggestPromotion.statusCode === filterStatus,
  );

  return listSuggestPromotion;
};

export const getCartPayload = (sessionId: string, shipmentFee: number): NhapThuocPayload.Carts.GetCart => {
  return {
    channelCode: OrderChannel.WEB_NHAP_THUOC,
    sessionId: sessionId,
    shipmentPrice: shipmentFee || 0,
  } as NhapThuocPayload.Carts.GetCart;
};

export const addListItemCartPayload = (
  sessionId: string,
  products: NhapThuocResponse.Carts.ListCart[],
): NhapThuocPayload.Carts.AddListItem => {
  const listCartItems: NhapThuocPayload.Carts.ListCartItemsInput[] = [];
  if (products) {
    products.map((product) => {
      listCartItems.push({
        itemCart: product.itemCart,
        quantity: product.quantity,
        unitCode: product.unitCode,
      });
    });
  }

  return {
    channelCode: OrderChannel.WEB_NHAP_THUOC,
    sessionId: sessionId,
    isCustomerToCart: true,
    listCartItemsInput: listCartItems || [],
  } as NhapThuocPayload.Carts.AddListItem;
};

export const unSelectedItemCartPayload = (
  sessionId: string,
  products: NhapThuocResponse.Carts.ListCart[],
): NhapThuocPayload.Carts.UnSelectItem => {
  const ids = products.map((p) => p.id);
  return {
    sessionId: sessionId,
    isCustomerToCart: false,
    ids: ids || [],
  } as NhapThuocPayload.Carts.UnSelectItem;
};

export const getAdjustCartPayload = ({
  sessionId,
  product,
  quantity,
  inventory,
}: {
  sessionId: string;
  product: NhapThuocResponse.Carts.ListCart;
  phoneNumber?: string;
  quantity?: number;
  inventory?: number;
}): NhapThuocPayload.Carts.AdjustCart => {
  return {
    channelCode: OrderChannel.WEB_NHAP_THUOC,
    sessionId: sessionId,
    cartItem: {
      itemCart: product.productInfo.itemCode,
      quantity,
      unitCode: product.unitCode,
      inventory,
    },
  } as NhapThuocPayload.Carts.AdjustCart;
};

export const removeItemCartPayload = (
  sessionId: string,
  products: NhapThuocResponse.Carts.ListCart[],
): NhapThuocPayload.Carts.RemoveItem => {
  return {
    sessionId: sessionId,
    Ids: products?.map((p) => p.id) || [],
  } as NhapThuocPayload.Carts.RemoveItem;
};

export const cartPromotionSelectedPayload = (
  sessionId: string,
  cartId: string,
  cartPromotionUsedItems: NhapThuocResponse.Carts.CartPromotion[],
  cartPromotionNotUsedItems: NhapThuocResponse.Carts.CartPromotion[],
  phoneNumber: string,
  customer?: Omit<NhapThuocResponse.Customers.Customer, 'address' | 'includeAttributes'> | null,
): NhapThuocPayload.Carts.SelectedPromotion => {
  const payload: NhapThuocPayload.Carts.SelectedPromotion = {
    sessionId: sessionId,
    cartId: cartId,
    customerId: customer?.customerId || '',
    phoneNumber: customer?.profile?.mobilePhone || phoneNumber,
    cartPromotions: [],
    productPromotions: [],
  };

  // Changed status code for used
  const usedPromotion: NhapThuocPayload.Carts.PromotionSelectItem[] = cartPromotionUsedItems.map((p) => {
    return {
      promotionCode: p.promotionCode,
      statusCode: CART_PROMOTION_STATUS_CODE.USED,
    } as NhapThuocPayload.Carts.PromotionSelectItem;
  });

  // Changed status code for not used
  const notUsedPromotion: NhapThuocPayload.Carts.PromotionSelectItem[] = cartPromotionNotUsedItems.map((p) => {
    return {
      promotionCode: p.promotionCode,
      statusCode: CART_PROMOTION_STATUS_CODE.NOT_USED,
    } as NhapThuocPayload.Carts.PromotionSelectItem;
  });

  // Merge it together
  const cartPromotions = usedPromotion.concat(notUsedPromotion);
  payload.cartPromotions = cartPromotions;

  return payload;
};

export const productPromotionSelectedPayload = (
  sessionId: string,
  cartId: string,
  productPromotionUsed: NhapThuocResponse.Carts.ListSuggestPromotion[],
  productPromotionNotUsed: NhapThuocResponse.Carts.ListSuggestPromotion[],
  cartPromotionUsedItems: NhapThuocResponse.Carts.CartPromotion[],
  cartPromotionNotUsedItems: NhapThuocResponse.Carts.CartPromotion[],
  phoneNumber: string,
  customer?: Omit<NhapThuocResponse.Customers.Customer, 'address' | 'includeAttributes'> | null,
): NhapThuocPayload.Carts.SelectedPromotion => {
  const payload: NhapThuocPayload.Carts.SelectedPromotion = {
    sessionId: sessionId,
    cartId: cartId,
    customerId: customer?.customerId || '',
    phoneNumber: customer?.profile?.mobilePhone || phoneNumber,
    cartPromotions: [],
    productPromotions: [],
  };
  // Changed status code for used
  const promotionUsed: NhapThuocPayload.Carts.PromotionSelectItem[] = productPromotionUsed.map((p) => {
    return {
      promotionCode: p.promotionCode,
      statusCode: CART_PROMOTION_STATUS_CODE.USED,
    } as NhapThuocPayload.Carts.PromotionSelectItem;
  });

  // Changed status code for not used
  const promotionNotUsed: NhapThuocPayload.Carts.PromotionSelectItem[] = productPromotionNotUsed.map((p) => {
    return {
      promotionCode: p.promotionCode,
      statusCode: CART_PROMOTION_STATUS_CODE.NOT_USED,
    } as NhapThuocPayload.Carts.PromotionSelectItem;
  });

  const cartPromotions = cartPromotionSelectedPayload('', '', cartPromotionUsedItems, cartPromotionNotUsedItems, '');

  payload.productPromotions = promotionUsed.concat(promotionNotUsed);
  payload.cartPromotions = cartPromotions.cartPromotions;

  return payload;
};

export const getDateInRange = (start: string | number | Date, end: string | number | Date): Array<Date> => {
  const startDate = new Date(start),
    stopDate = new Date(end);
  startDate.setHours(startDate.getHours(), 0, 0, 0);
  stopDate.setHours(stopDate.getHours(), 0, 0, 0);
  const listDate: Array<Date> = [startDate];

  let currentDate = new Date(setDate(startDate, 1).setHours(0, 0, 0, 0));
  while (currentDate < stopDate) {
    if (currentDate.toDateString() === stopDate.toDateString()) {
      listDate.push(stopDate);
      break;
    }
    listDate.push(currentDate);
    currentDate = setDate(currentDate, 1);
  }
  return listDate;
};

export const getDefaultAvailableCommitTime = (start?: number, end?: number) => {
  const array = [];
  let hour = START_HOUR;
  if (start && start > hour) {
    hour = start;
  }
  if (!end || end >= END_HOUR) {
    end = END_HOUR;
  }
  for (let i = hour; i <= end; i++) {
    array.push({
      from: i - 1,
      to: i,
    });
  }
  return array;
};
