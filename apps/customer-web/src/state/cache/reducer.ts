import { CartCode } from '@customer-web/enums/ErrorCode';
import { createReducer } from '@reduxjs/toolkit';
import { fetchCartData, mergeCart } from '../cart/actions';
import { rebuyOrder } from '../order/actions';
import { logout } from '../user/actions';
import {
  addRecentlyWatchedSku,
  addSearchHistory,
  agreeToTermsAndConditions,
  deleteSearchHistories,
  deleteSearchHistory,
  genSession,
  setAlertAccountLocked,
  setNeedMergeCart,
  setSessionId,
} from './actions';

export interface CacheState {
  recentlyWatchedSkus: string[];
  agreedToTermsAndConditions: boolean;
  searchHistories: string[];
  sessionId: string;
  needMergeCart: boolean;
  alertAccountLocked: boolean;
}

const MAX_SEARCH_HISTORIES = 5;

const initialState: CacheState = {
  recentlyWatchedSkus: [],
  agreedToTermsAndConditions: false,
  searchHistories: [],
  sessionId: '',
  needMergeCart: false,
  alertAccountLocked: false,
};

export default createReducer<CacheState>(initialState, (builder) =>
  builder
    .addCase(addRecentlyWatchedSku, (state, { payload }) => {
      if (!state.recentlyWatchedSkus) {
        state.recentlyWatchedSkus = [];
      }

      // find existing sku in list
      const index = state?.recentlyWatchedSkus
        ? state.recentlyWatchedSkus.findIndex((sku) => {
          return sku === payload;
        })
        : -1;

      const isFound = index !== -1;

      if (index === 0) {
        return state;
      }

      if (isFound) {
        // if found, remove from the list, then add to top in the next line of code
        state.recentlyWatchedSkus.splice(index, 1);
      }

      state.recentlyWatchedSkus.unshift(payload);

      if (state.recentlyWatchedSkus.length > 10) {
        state.recentlyWatchedSkus = state.recentlyWatchedSkus.slice(0, 10);
      }
    })
    .addCase(agreeToTermsAndConditions, (state) => {
      state.agreedToTermsAndConditions = true;
    })
    .addCase(deleteSearchHistories, (state) => {
      state.searchHistories = [];
    })
    .addCase(addSearchHistory, (state, { payload }) => {
      if (!state.searchHistories?.length) {
        state.searchHistories = [];
      }

      // find existing keyword in list
      const index = state?.searchHistories ? state.searchHistories.findIndex((keyword) => keyword === payload) : -1;
      const isFound = index !== -1;

      if (index === 0) {
        return state;
      }

      if (isFound) {
        // if found, remove from the list, then add to top in the next line of code
        state.searchHistories.splice(index, 1);
      }

      state.searchHistories.unshift(payload);

      if (state.searchHistories.length > MAX_SEARCH_HISTORIES) {
        state.searchHistories = state.searchHistories.slice(0, MAX_SEARCH_HISTORIES);
      }
    })
    .addCase(deleteSearchHistory, (state, { payload }) => {
      if (!state.searchHistories) {
        state.searchHistories = [];
      }

      // find existing keyword in list
      const index = state?.searchHistories ? state.searchHistories.findIndex((keyword) => keyword === payload) : -1;
      const isFound = index !== -1;

      if (isFound) {
        state.searchHistories = [...state.searchHistories.slice(0, index), ...state.searchHistories.slice(index + 1)];
      }
    })
    .addCase(setSessionId, (state, { payload }) => {
      state.sessionId = payload;
    })
    .addCase(genSession.fulfilled, (state, { payload }) => {
      state.sessionId = payload.sessionId;
    })
    .addCase(logout, (state) => {
      state.sessionId = '';
    })
    .addCase(mergeCart.fulfilled, (state) => {
      state.needMergeCart = false;
    })
    .addCase(setNeedMergeCart, (state) => {
      state.needMergeCart = true;
    })
    .addCase(setAlertAccountLocked, (state, { payload }) => {
      state.alertAccountLocked = payload;
    })
    .addCase(rebuyOrder.fulfilled, (state, action) => {
      state.sessionId = action.payload.sessionId;
    })
    .addCase(fetchCartData.rejected, (state, { payload }: { payload: any }) => {
      if (payload?.errorCode === CartCode.SESSION_NOT_FOUND) {
        state.sessionId = '';
      }
    }),
);
