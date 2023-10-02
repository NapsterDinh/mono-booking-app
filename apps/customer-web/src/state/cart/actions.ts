import { updateVoucher } from '@customer-web/request-providers/voucher';
import * as cartService from '@customer-web/services/request/providers/cart';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartData = createAsyncThunk(
  'cart/fetchCart',
  async (params: NhapThuocPayload.Carts.GetCart, { rejectWithValue }) => {
    try {
      const response = await cartService.getCart(params);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const adjustItem = createAsyncThunk(
  'cart/adjustItem',
  async ({ params, itemId }: { params: NhapThuocPayload.Carts.AdjustCart; itemId: string }) => {
    const response = await cartService.adjustItem(params, itemId);

    return response;
  },
);

export const addItem = createAsyncThunk('cart/addItem', async (params: NhapThuocPayload.Carts.AddCart) => {
  const response = await cartService.addItem(params);

  return response;
});

export const removeItem = createAsyncThunk('cart/removeItem', async (params: NhapThuocPayload.Carts.RemoveItem) => {
  const response = await cartService.removeItem(params);

  return response;
});

export const selectItems = createAsyncThunk('cart/selectItems', async (params: NhapThuocPayload.Carts.AddListItem) => {
  const response = await cartService.addListItem(params);

  return response;
});

export const unselectItems = createAsyncThunk(
  'cart/unselectItemCart',
  async (params: NhapThuocPayload.Carts.UnSelectItem) => {
    const response = await cartService.unSelectItem(params);

    return response;
  },
);

export const mergeCart = createAsyncThunk('cart/mergeCart', async (params: NhapThuocPayload.Carts.MergeCart) => {
  const response = await cartService.mergeCart(params);

  return response;
});

export const updateVouchers = createAsyncThunk(
  'cart/updateVouchers',
  async (params: NhapThuocPayload.Voucher.UpdateVoucher) => {
    const response = await updateVoucher(params);

    return response;
  },
);

export const setDeliveryMethod = createAction<number>('cart/setDeliveryMethod');

export const setDeliveryAddress = createAction<NhapThuocResponse.Customers.Address>('cart/setDeliveryAddress');
