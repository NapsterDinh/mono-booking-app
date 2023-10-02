import { createReducer } from '@reduxjs/toolkit';
import { checkRebuyOrder, rebuyOrder, setCreateOrderErrorCode, setCreating } from './actions';

export interface OrderState {
  creating: boolean;
  rebuying: boolean;
  checkRebuying: boolean;
  checkRebuyOrderResponse: NhapThuocResponse.Orders.ReBuyConditionProduct[];
  productListRebuy: NhapThuocResponse.Orders.ParamCanBuyProductList[];
  createOrderErrorCode?: string;
}

const initialState: OrderState = {
  creating: false,
  rebuying: false,
  checkRebuying: false,
  checkRebuyOrderResponse: [],
  productListRebuy: [],
};

const mergeListRebuyProducts = (rebuyOrder: NhapThuocResponse.Orders.ReBuyCondition) => {
  if (!rebuyOrder) return;

  let newCanbuyList = [] as NhapThuocResponse.Orders.ReBuyConditionProduct[];
  let newCannotbuyList = [] as NhapThuocResponse.Orders.ReBuyConditionProduct[];

  if (rebuyOrder?.canBuy) {
    newCanbuyList = rebuyOrder.canBuy?.map((prod) => {
      return {
        ...prod,
        isCannotBuy: false,
      };
    });
  }

  if (rebuyOrder?.cannotBuy) {
    newCannotbuyList = rebuyOrder.cannotBuy?.map((prod) => {
      return {
        ...prod,
        isCannotBuy: true,
      };
    });
  }
  return [...newCannotbuyList, ...newCanbuyList];
};

const parseCanBuyProductList = (rebuyOrder: NhapThuocResponse.Orders.ReBuyConditionProduct[]) => {
  if (!rebuyOrder) return;

  return rebuyOrder.map((prod) => {
    return { itemCode: prod?.itemCode };
  });
};

export default createReducer<OrderState>(initialState, (builder) =>
  builder
    .addCase(setCreating, (state, { payload }) => {
      state.creating = payload;
    })
    .addCase(rebuyOrder.pending, (state) => {
      state.rebuying = true;
    })
    .addCase(rebuyOrder.fulfilled, (state) => {
      state.rebuying = false;
    })
    .addCase(rebuyOrder.rejected, (state) => {
      state.rebuying = false;
    })
    .addCase(checkRebuyOrder.pending, (state) => {
      state.checkRebuying = true;
      state.checkRebuyOrderResponse = [];
      state.productListRebuy = [];
    })
    .addCase(checkRebuyOrder.fulfilled, (state, { payload }) => {
      state.checkRebuying = false;
      state.checkRebuyOrderResponse = mergeListRebuyProducts(payload);
      state.productListRebuy = parseCanBuyProductList(payload?.canBuy);
    })
    .addCase(checkRebuyOrder.rejected, (state) => {
      state.checkRebuying = false;
      state.checkRebuyOrderResponse = [];
      state.productListRebuy = [];
    })
    .addCase(setCreateOrderErrorCode, (state, { payload }) => {
      state.createOrderErrorCode = payload;
    }),
);
