import { CART_PROMOTION_STATUS_CODE, ItemType } from '@customer-web/enums/Cart';
import {
  mergeAndSortCartItems,
  mergeListSuggestPromotionByStatus,
} from '@customer-web/services/carts/CartBusinessService';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createReducer } from '@reduxjs/toolkit';
import type { WritableDraft } from 'immer/dist/types/types-external';
import {
  addItem,
  adjustItem,
  fetchCartData,
  mergeCart,
  removeItem,
  selectItems,
  setDeliveryAddress,
  setDeliveryMethod,
  unselectItems,
  updateVouchers,
} from './actions';

export interface CartState {
  information?: NhapThuocResponse.Carts.CartInfo;
  items: NhapThuocResponse.Carts.ListCart[];
  cartPromotionItems?: NhapThuocResponse.Carts.ListCart[];
  cartPromotionUsedItems: NhapThuocResponse.Carts.CartPromotion[];
  cartPromotionNotUsedItems: NhapThuocResponse.Carts.CartPromotion[];
  productPromotionUsed: NhapThuocResponse.Carts.ListSuggestPromotion[];
  productPromotionNotUsed: NhapThuocResponse.Carts.ListSuggestPromotion[];
  deliveryMethod?: number;
  deliveryAddress?: NhapThuocResponse.Customers.Address;
}

const initialState: CartState = {
  cartPromotionUsedItems: [],
  cartPromotionNotUsedItems: [],
  productPromotionUsed: [],
  productPromotionNotUsed: [],
  items: [],
};

const updateCartInfo = (state: WritableDraft<CartState>, action: PayloadAction<NhapThuocResponse.Carts.CartInfo>) => {
  state.information = action.payload;
  state.items = mergeAndSortCartItems(action.payload);
  state.cartPromotionItems =
    action.payload.listCart?.filter((item) => [ItemType.VOUCHER, ItemType.PROMOTION].includes(item.itemType)) || [];
  state.cartPromotionUsedItems = action.payload.cartPromotions.filter(
    (i) => i?.statusCode === CART_PROMOTION_STATUS_CODE.USED,
  );
  state.cartPromotionNotUsedItems = action.payload.cartPromotions.filter(
    (i) => i?.statusCode === CART_PROMOTION_STATUS_CODE.NOT_USED,
  );
  state.productPromotionUsed = mergeListSuggestPromotionByStatus(action.payload, CART_PROMOTION_STATUS_CODE.USED);
  state.productPromotionNotUsed = mergeListSuggestPromotionByStatus(
    action.payload,
    CART_PROMOTION_STATUS_CODE.NOT_USED,
  );
};

export default createReducer<CartState>(initialState, (builder) =>
  builder
    .addCase(fetchCartData.fulfilled, updateCartInfo)
    .addCase(adjustItem.fulfilled, updateCartInfo)
    .addCase(addItem.fulfilled, updateCartInfo)
    .addCase(removeItem.fulfilled, updateCartInfo)
    .addCase(selectItems.fulfilled, updateCartInfo)
    .addCase(unselectItems.fulfilled, updateCartInfo)
    .addCase(mergeCart.fulfilled, (state, action) => {
      updateCartInfo(state, action);
    })
    .addCase(updateVouchers.fulfilled, (state, action) => {
      updateCartInfo(state, action);
    })
    .addCase(setDeliveryMethod, (state, { payload }) => {
      state.deliveryMethod = payload;
    })
    .addCase(setDeliveryAddress, (state, { payload }) => {
      state.deliveryAddress = payload;
    }),
);
