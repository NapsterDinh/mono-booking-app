import { LocalStorageKey } from '@customer-web/enums/LocalStorage';
import { genSession } from '@customer-web/services/request/providers/cart';

export const getAddItemPayload = async (product: NhapThuocResponse.Product.ProductDetailItem) => {
  const sessionId = localStorage.getItem(LocalStorageKey.CART_SESSION_ID);
  const addItemPayload: NhapThuocPayload.Carts.AddCart = {
    sessionId: '',
    cartItem: {
      itemCart: product.sku,
      quantity: 1,
      unitCode: product.unitDefault,
    },
    isCustomerToCart: false,
  };
  if (sessionId) {
    addItemPayload.sessionId = sessionId;
  } else {
    const { sessionId: newSessionId } = await genSession({ shopCode: '' });
    localStorage.setItem(LocalStorageKey.CART_SESSION_ID, newSessionId);
    addItemPayload.sessionId = newSessionId;
  }

  return addItemPayload;
};
