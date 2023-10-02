import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import {
  ChangePasswordPayload,
  GetInfoRefundCreditPayload,
  GetListTpBankCreditPayload,
  ResetPasswordPayload,
  SubmitBankAccountPayload,
  SubmitDeptTpbankPayload,
} from 'apps/nhapthuoc-estore/src/types/api/payload/customer';
import { MyOrdersPayload } from 'apps/nhapthuoc-estore/src/types/api/payload/order';
import {
  GetListTpBankCreditResponse,
  RefundInfoAccountInfo,
  SubmitCreditFileErrorResponse,
} from 'apps/nhapthuoc-estore/src/types/api/response/customer';
import { MyOrdersResponse, TabCountsResponse } from 'apps/nhapthuoc-estore/src/types/api/response/order';
import type { AxiosRequestHeaders } from 'axios';
import APIClient from '../APIClient';

export function createCustomer(payload: NhapThuocPayload.Customers.CreateCustomer) {
  return APIClient<NhapThuocResponse.Customers.Auth>(
    `${RouteMapper.getHost('STORE_FRONT', 'internal')}/customer`,
    HTTP_METHOD.POST,
    payload,
  );
}

export function login(payload: NhapThuocPayload.Customers.Login) {
  return APIClient<NhapThuocResponse.Customers.Auth>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/customer/login`,
    HTTP_METHOD.POST,
    payload,
  );
}

export function refreshToken(refreshToken: string) {
  return APIClient<{ refresh_token: string; access_token: string }>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/refresh-token`,
    HTTP_METHOD.POST,
    {
      refreshToken,
    },
  );
}

export function changePassword(payload: ChangePasswordPayload) {
  return APIClient(`${RouteMapper.getHost('STORE_FRONT')}/customer/change-password`, HTTP_METHOD.PUT, payload);
}

export function fetchCustomerByToken(token: string) {
  const headers: AxiosRequestHeaders = {
    Authorization: `Bearer ${token.replace('Bearer ', '')}`,
  };
  return APIClient<NhapThuocResponse.Customers.Customer>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer`,
    HTTP_METHOD.GET,
    {},
    { headers },
  );
}

export function fetchCustomerById(id: string) {
  return APIClient<NhapThuocResponse.Customers.Customer>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${id}`,
    HTTP_METHOD.GET,
  );
}

export function update(id: string, payload: NhapThuocPayload.Customers.Update) {
  return APIClient<NhapThuocResponse.Customers.Customer>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/update-all/${id}`,
    HTTP_METHOD.PUT,
    payload,
  );
}

export function createCustomerAddress(payload: NhapThuocPayload.Customers.CreateAddress) {
  return APIClient<NhapThuocResponse.Customers.CreateAddress>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${payload.customerId}/address`,
    HTTP_METHOD.POST,
    payload,
  );
}

export function updateCustomerAddress(payload: NhapThuocPayload.Customers.UpdateAddress) {
  return APIClient<NhapThuocResponse.Customers.UpdateAddress>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${payload.customerId}/address/${payload.addressId}`,
    HTTP_METHOD.PUT,
    payload,
  );
}

export function deleteCustomerAddress(payload: NhapThuocPayload.Customers.DeleteAddress) {
  return APIClient<boolean>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${payload.customerId}/address/${payload.addressId}`,
    HTTP_METHOD.DELETE,
    {},
  );
}

export function fetchCustomerAddressByCustomerId(customerId: string) {
  return APIClient<NhapThuocResponse.Customers.Address[]>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${customerId}/address`,
    HTTP_METHOD.GET,
  );
}

export function updateCustomerInformation(payload: NhapThuocPayload.Customers.UpdateInformation) {
  return APIClient<NhapThuocResponse.Customers.UpdateInformation>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${payload.customerId}`,
    HTTP_METHOD.PUT,
    payload,
  );
}

export function fetchCustomerByPhone(params: { phone: string }) {
  return APIClient<NhapThuocResponse.Global.FrontDoorReturnStruct<NhapThuocResponse.Customers.UpdateInformation>>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer`,
    HTTP_METHOD.GET,
    params,
  );
}

export function fetchCdpCustomer(customerId: string, type: string) {
  return APIClient<NhapThuocResponse.Customers.Activity>(
    `${RouteMapper.getHost('STORE_FRONT')}/cdp-customer/${customerId}/landing-page/${type}`,
    HTTP_METHOD.GET,
    {},
  );
}

export function checkVoucherEventQuota(token: string) {
  return APIClient<NhapThuocResponse.Customers.Activity>(
    `${RouteMapper.getHost('STORE_FRONT')}/voucher-events/quota`,
    HTTP_METHOD.POST,
    { token },
  );
}

export function reward(token: string) {
  return APIClient<NhapThuocResponse.Customers.VoucherEventReward>(
    `${RouteMapper.getHost('STORE_FRONT')}/voucher-events/reward`,
    HTTP_METHOD.POST,
    { token },
  );
}

export function rewardConfirm(payload: NhapThuocPayload.Customers.RewardConfirm) {
  return APIClient<NhapThuocResponse.Customers.VoucherEventRewardConfirm>(
    `${RouteMapper.getHost('STORE_FRONT')}/voucher-events/reward-confirm`,
    HTTP_METHOD.POST,
    payload,
  );
}

export function getMyOrders(params: MyOrdersPayload) {
  return APIClient<MyOrdersResponse>(`${RouteMapper.getHost('STORE_FRONT')}/order`, HTTP_METHOD.GET, params);
}

export function getTabCounts() {
  return APIClient<TabCountsResponse>(`${RouteMapper.getHost('STORE_FRONT')}/order/tab/count`, HTTP_METHOD.GET);
}

export function fetchCustomerInvoicesByCustomerId(customerId: string) {
  return APIClient<NhapThuocResponse.Customers.Invoice[]>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${customerId}/invoices`,
    HTTP_METHOD.GET,
  );
}

export function updateCustomerInvoice(customerId: string, payload: NhapThuocPayload.Customers.UpdateInvoice) {
  return APIClient<NhapThuocResponse.Customers.Invoice>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${customerId}/invoices/${payload.id}`,
    HTTP_METHOD.PUT,
    payload,
  );
}

export function deleteCustomerInvoice(payload: NhapThuocPayload.Customers.DeleteInvoice) {
  return APIClient<boolean>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${payload.customerId}/invoices/${payload.invoiceId}`,
    HTTP_METHOD.DELETE,
    {},
  );
}

export function fetchCustomerContracts(customerId: string) {
  return APIClient<NhapThuocResponse.Customers.Contract>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${customerId}/contracts`,
    HTTP_METHOD.GET,
  );
}

export function registerResetPassword(phoneNumber: string) {
  return APIClient<NhapThuocResponse.Customers.Contract>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/register-reset-password`,
    HTTP_METHOD.POST,
    {
      phone: phoneNumber,
    },
  );
}

export function verifyResetPasswordKey(key: string) {
  return APIClient<NhapThuocResponse.Customers.Contract>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/customer/verify-reset-password-key`,
    HTTP_METHOD.POST,
    {
      key,
    },
  );
}

export function resetPassword(payload: ResetPasswordPayload) {
  return APIClient<NhapThuocResponse.Customers.Contract>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/customer/reset-password`,
    HTTP_METHOD.PUT,
    payload,
  );
}

export function fetchBlacklist() {
  return APIClient<string[]>(`${RouteMapper.getHost('STORE_FRONT', 'internal')}/black-list`, HTTP_METHOD.GET);
}

export function agreeProtectionTerms() {
  return APIClient<NhapThuocResponse.Customers.Customer>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/agree-protection-term`,
    HTTP_METHOD.POST,
  );
}

export function sendingOTP(phoneNumber: string) {
  return APIClient<any, SubmitCreditFileErrorResponse>(`${RouteMapper.getHost('STORE_FRONT')}/otp`, HTTP_METHOD.POST, {
    phoneNumber,
  });
}

export function submitDeptTpbank(payload: SubmitDeptTpbankPayload) {
  return APIClient<any, SubmitCreditFileErrorResponse>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${payload.param.customerId}/tp-bank-credits`,
    HTTP_METHOD.POST,
    payload.body,
  );
}

export function getListTpBankCredit(payload: GetListTpBankCreditPayload) {
  return APIClient<GetListTpBankCreditResponse>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${payload.customerId}/tp-bank-credits`,
    HTTP_METHOD.GET,
  );
}

export function submitBankAccountInfo(payload: SubmitBankAccountPayload) {
  return APIClient<any, SubmitCreditFileErrorResponse>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${payload.param.customerId}/tp-bank-credits`,
    HTTP_METHOD.PUT,
    payload.body,
  );
}

export function getInfoRefundCredit(payload: GetInfoRefundCreditPayload) {
  return APIClient<RefundInfoAccountInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/customer/${payload.customerId}/tp-bank-credits/refund-credit`,
    HTTP_METHOD.GET,
  );
}
