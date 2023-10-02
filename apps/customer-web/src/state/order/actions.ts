import { reBuyChecker, reBuySubmit } from '@customer-web/request-providers/order';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setCreating = createAction<boolean>('order/setCreating');

export const rebuyOrder = createAsyncThunk(
  'order/rebuyOrder',
  async (params: { orderCode: string; productListRebuy: NhapThuocResponse.Orders.ParamCanBuyProductList[] }) => {
    const response = await reBuySubmit(params);

    return response;
  },
);

export const checkRebuyOrder = createAsyncThunk('order/checkRebuyOrder', async (orderCode: string) => {
  const response = await reBuyChecker(orderCode);

  return response;
});

export const setCreateOrderErrorCode = createAction<string | undefined>('order/setCreateOrderErrorCode');
