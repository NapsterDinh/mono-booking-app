import { ModalType } from '@customer-web/enums/index';
import { createReducer } from '@reduxjs/toolkit';
import {
  addItem,
  adjustItem,
  fetchCartData,
  mergeCart,
  removeItem,
  selectItems,
  unselectItems,
  updateVouchers,
} from '../cart/actions';
import {
  closeModal,
  openModal,
  setDeviceCode,
  setFocusedSearchInput,
  setHeaderSize,
  setIsCorrectSearch,
  toggleCorrectSearch,
} from './actions';

export interface GlobalState {
  headerSize: {
    width?: number;
    height?: number;
  };
  focusedSearchInput: boolean;
  modal: {
    isOpen: boolean;
    type?: ModalType;
    props?: any;
  };
  cartLoadingCount: number;
  isFirstLoadingCart: boolean;
  isCorrectSearch: boolean;
  deviceCode?: string;
}

const initialState: GlobalState = {
  headerSize: {},
  modal: {
    isOpen: false,
  },
  focusedSearchInput: false,
  cartLoadingCount: 0,
  isFirstLoadingCart: true,
  isCorrectSearch: false,
};

export default createReducer<GlobalState>(initialState, (builder) =>
  builder
    .addCase(setHeaderSize, (state, { payload }) => {
      state.headerSize = payload;
    })
    .addCase(setFocusedSearchInput, (state, { payload }) => {
      state.focusedSearchInput = payload;
    })
    .addCase(openModal, (state, { payload }) => {
      state.modal = {
        type: payload.type,
        isOpen: true,
        props: payload.props,
      };
    })
    .addCase(closeModal, (state) => {
      state.modal = {
        isOpen: false,
        props: {},
      };
    })
    .addCase(fetchCartData.fulfilled, (state) => {
      if (state.isFirstLoadingCart) {
        state.isFirstLoadingCart = false;
      }

      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(fetchCartData.pending, (state) => {
      state.cartLoadingCount++;
    })
    .addCase(fetchCartData.rejected, (state) => {
      if (state.isFirstLoadingCart) {
        state.isFirstLoadingCart = false;
      }

      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(adjustItem.fulfilled, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(adjustItem.pending, (state) => {
      state.cartLoadingCount++;
    })
    .addCase(adjustItem.rejected, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(addItem.fulfilled, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(addItem.pending, (state) => {
      state.cartLoadingCount++;
    })
    .addCase(addItem.rejected, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(removeItem.fulfilled, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(removeItem.pending, (state) => {
      state.cartLoadingCount++;
    })
    .addCase(removeItem.rejected, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(selectItems.fulfilled, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(selectItems.pending, (state) => {
      state.cartLoadingCount++;
    })
    .addCase(selectItems.rejected, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(unselectItems.fulfilled, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(unselectItems.pending, (state) => {
      state.cartLoadingCount++;
    })
    .addCase(unselectItems.rejected, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(mergeCart.fulfilled, (state) => {
      if (state.isFirstLoadingCart) {
        state.isFirstLoadingCart = false;
      }

      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(mergeCart.pending, (state) => {
      state.cartLoadingCount++;
    })
    .addCase(mergeCart.rejected, (state) => {
      if (state.isFirstLoadingCart) {
        state.isFirstLoadingCart = false;
      }

      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(updateVouchers.fulfilled, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(updateVouchers.pending, (state) => {
      state.cartLoadingCount++;
    })
    .addCase(updateVouchers.rejected, (state) => {
      state.cartLoadingCount = state.cartLoadingCount <= 0 ? 0 : state.cartLoadingCount - 1;
    })
    .addCase(toggleCorrectSearch, (state) => {
      state.isCorrectSearch = !state.isCorrectSearch;
    })
    .addCase(setIsCorrectSearch, (state, { payload }) => {
      state.isCorrectSearch = payload;
    })
    .addCase(setDeviceCode, (state, { payload }) => {
      state.deviceCode = payload;
    }),
);
