import { OTPCode, TpBankCode } from '@customer-web/enums/ErrorCode';
import { HTTP_STATUS } from '@customer-web/enums/HTTP';
import { clearAllToken } from '@customer-web/helpers/LocalStorage';
import { COMPONENT_TYPE_CREDIT_FORM } from '@customer-web/views/Personal/OverdraftLoanRegister/constants';
import { createReducer } from '@reduxjs/toolkit';
import { ErrorTypeOfOTPResponse, SubmitDeptFileResponse } from '../../types/api/response/customer';
import { fetchCustomerAddressesByCustomerId, fetchCustomerById } from '../customer/actions';
import {
  fetchUserInfo,
  logout,
  registerUploadDocImg,
  resetStateSubmitFormCredit,
  setErrorOTP,
  setLoading,
  setUser,
  submitBankAccountInfoUser,
  submitDeptTpbankUser,
  successAgreeProtectionTerms,
  updateUserInfo,
} from './actions';

export interface UserState {
  authenticated: boolean;
  loading: boolean;
  id?: string;
  profile?: NhapThuocResponse.Customers.Customer['profile'];
  addresses: NhapThuocResponse.Customers.Address[];
  includeAttributes?: NhapThuocResponse.Customers.Customer['includeAttributes'];
  documentFile: NhapThuocResponse.Customers.Document[];
  loadingSendOTP: boolean;
  loadingSubmitForm: boolean;
  submitedForm: SubmitDeptFileResponse;
  errorOTP: ErrorTypeOfOTPResponse;
}

const initialState: UserState = {
  authenticated: false,
  loading: true,
  addresses: [],
  documentFile: [
    {
      preSignedUrl: '',
      key: '',
    },
  ],
  loadingSendOTP: false,
  loadingSubmitForm: false,
  submitedForm: {
    data: { message: '', componentType: '' },
  },
  errorOTP: {
    message: '',
    headerMessage: '',
  },
};

export default createReducer<UserState>(initialState, (builder) =>
  builder
    .addCase(setLoading, (state, { payload }) => {
      state.loading = payload;
    })
    .addCase(fetchCustomerById.fulfilled, (state, { payload }) => {
      state.id = payload.customerId;
      state.profile = payload.profile;
    })
    .addCase(fetchCustomerAddressesByCustomerId.fulfilled, (state, { payload }) => {
      state.addresses = payload;
    })
    .addCase(setUser, (state, { payload }) => {
      state.id = payload.customerId;
      state.profile = payload.profile;
    })
    .addCase(fetchUserInfo.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
      state.authenticated = true;
      state.id = payload.customerId;
      state.profile = payload.profile;
      state.includeAttributes = payload.includeAttributes;
      state.loading = false;
    })
    .addCase(fetchUserInfo.rejected, (state) => {
      state.loading = false;
    })
    .addCase(logout, () => {
      clearAllToken();
    })
    .addCase(updateUserInfo.fulfilled, (state, { payload }) => {
      state.profile = payload.profile;
    })
    .addCase(registerUploadDocImg.fulfilled, (state, { payload }) => {
      state.documentFile = payload;
    })
    .addCase(successAgreeProtectionTerms, (state) => {
      if (state?.profile) {
        state.profile.isAgreeProtectionTerms = true;
      }
    })
    .addCase(submitDeptTpbankUser.pending, (state) => {
      state.loadingSubmitForm = true;
    })
    .addCase(submitDeptTpbankUser.fulfilled, (state) => {
      state.loadingSubmitForm = false;
      state.submitedForm = {
        data: { componentType: COMPONENT_TYPE_CREDIT_FORM.SUCCESS_COMPONENT, message: '' },
      };
    })
    .addCase(submitDeptTpbankUser.rejected, (state, { payload }) => {
      let componentType = COMPONENT_TYPE_CREDIT_FORM.OTP_COMPONENT;

      if (
        payload?.status === HTTP_STATUS.INTERNAL_SERVER_ERROR ||
        [
          OTPCode.REACHED_LIMIT,
          OTPCode.HIT_LIMIT_SEND_OTP_1H,
          OTPCode.HIT_LIMIT_SEND_OTP_2H,
          OTPCode.HIT_LIMIT_SEND_OTP_4H,
          OTPCode.HIT_LIMIT_SEND_OTP_24H,
          TpBankCode.BUSY,
        ].includes(payload?.errorCode)
      ) {
        componentType = COMPONENT_TYPE_CREDIT_FORM.FAILURE_COMPONENT;
      }

      state.loadingSubmitForm = false;
      state.submitedForm = {
        data: {
          componentType,
          message: payload?.message,
          status: payload?.status,
          errorCode: payload?.errorCode,
        },
      };
    })
    .addCase(resetStateSubmitFormCredit, (state, { payload }) => {
      state.submitedForm = {
        data: {
          componentType: payload,
          message: '',
        },
      };
    })
    .addCase(setErrorOTP, (state, { payload }) => {
      state.errorOTP = {
        headerMessage: payload.headerMessage,
        message: payload.message,
      };
    })
    .addCase(submitBankAccountInfoUser.pending, (state) => {
      state.loadingSubmitForm = true;
    })
    .addCase(submitBankAccountInfoUser.fulfilled, (state) => {
      state.loadingSubmitForm = false;
      state.submitedForm = {
        data: { componentType: COMPONENT_TYPE_CREDIT_FORM.SUCCESS_COMPONENT, message: '' },
      };
    })
    .addCase(submitBankAccountInfoUser.rejected, (state, { payload }) => {
      state.loadingSubmitForm = false;
      state.submitedForm = {
        data: {
          componentType:
            payload?.status === HTTP_STATUS.INTERNAL_SERVER_ERROR
              ? COMPONENT_TYPE_CREDIT_FORM.FAILURE_COMPONENT
              : COMPONENT_TYPE_CREDIT_FORM.OTP_COMPONENT,
          message: payload?.message,
          status: payload?.status,
          errorCode: payload?.errorCode,
        },
      };
    }),
);
