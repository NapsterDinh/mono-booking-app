import { CartConfig } from '@customer-web/configs/cart';
import * as cartService from '@customer-web/services/request/providers/cart';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const addRecentlyWatchedSku = createAction<string>('cache/addRecentlyWatchedSku');

export const agreeToTermsAndConditions = createAction('cache/agreeToTermsAndConditions');

export const deleteSearchHistories = createAction('cache/deleteSearchHistories');

export const addSearchHistory = createAction<string>('cache/addSearchHistory');

export const deleteSearchHistory = createAction<string>('cache/deleteSearchHistory');

export const setSessionId = createAction<string>('cache/setSessionId');

export const genSession = createAsyncThunk('cache/genSession', async () => {
  const sessionId = await cartService.genSession({
    shopCode: CartConfig.DefaultShopCodeGenerate,
  });

  return sessionId;
});

export const setNeedMergeCart = createAction<boolean>('cache/setNeedMergeCart');

export const setAlertAccountLocked = createAction<boolean>('cache/setAlertAccountLocked');
