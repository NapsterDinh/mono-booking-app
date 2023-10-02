import { getToken } from '@customer-web/helpers/LocalStorage';
import {
  fetchCustomerByToken,
  submitBankAccountInfo,
  submitDeptTpbank,
  updateCustomerInformation,
} from '@customer-web/request-providers/customer';
import { registerLink } from '@customer-web/request-providers/s3';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { SubmitBankAccountPayload, SubmitDeptTpbankPayload } from '../../types/api/payload/customer';
import { ErrorTypeOfOTPResponse, SubmitCreditFileErrorResponse } from '../../types/api/response/customer';

export const setUser = createAction<NhapThuocResponse.Customers.Customer>('user/setUser');

export const setLoading = createAction<boolean>('user/setLoading');

export const successAgreeProtectionTerms = createAction('user/successAgreeProtectionTerms');

export const fetchUserInfo = createAsyncThunk('user/fetchUserInfo', async () => {
  const response = await fetchCustomerByToken(getToken());

  return response;
});

export const updateUserInfo = createAsyncThunk('user/updateUserInfo', async (info: any) => {
  const response = await updateCustomerInformation(info);

  return response;
});

export const logout = createAction('user/logout');

export const registerUploadDocImg = createAsyncThunk('user/registerUploadDocImg', async (fileName: any) => {
  const response = await registerLink(fileName);

  return response.data;
});

export const submitDeptTpbankUser = createAsyncThunk<
  any,
  SubmitDeptTpbankPayload,
  { rejectValue: SubmitCreditFileErrorResponse }
>('user/submitDeptTpbankUser', async (formValues: SubmitDeptTpbankPayload, { rejectWithValue }) => {
  try {
    const response = await submitDeptTpbank(formValues);

    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const submitBankAccountInfoUser = createAsyncThunk<
  any,
  SubmitBankAccountPayload,
  { rejectValue: SubmitCreditFileErrorResponse }
>('user/submitBankAccountInfoUser', async (formValues: SubmitBankAccountPayload, { rejectWithValue }) => {
  try {
    const response = await submitBankAccountInfo(formValues);

    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const resetStateSubmitFormCredit = createAction<string>('user/resetStateSubmitFormCredit');
export const setErrorOTP = createAction<ErrorTypeOfOTPResponse>('user/setErrorOTP');
