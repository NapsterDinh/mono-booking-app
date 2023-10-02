import { RouteMapper } from '@customer-web/services/routes/routes';
import {
  CreateTpBankPaymentLinkResponse,
  PaymentStatusByPaymentCodeResponse,
} from 'apps/nhapthuoc-estore/src/types/api/response/payment';
import { HTTP_METHOD } from '../../../enums/HTTP';
import type { CancelToken } from '../APIClient';
import APIClient from '../APIClient';

export const getListMethod = async (payload: NhapThuocPayload.Payments.ListMethod, cancelToken?: CancelToken) => {
  return await APIClient<NhapThuocResponse.Payments.Method[]>(
    `${RouteMapper.getHost('STORE_FRONT')}/payment/list-method`,
    HTTP_METHOD.POST,
    payload,
    { cancelToken },
  );
};

export const getListBank = async (cancelToken?: CancelToken) => {
  return await APIClient<NhapThuocResponse.Payments.Bank[]>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/payment/banks`,
    HTTP_METHOD.GET,
    null,
    { cancelToken },
  );
};

export const getPaymentStatusByPaymentCode = async (paymentCode?: string) => {
  return await APIClient<PaymentStatusByPaymentCodeResponse>(
    `${RouteMapper.getHost('STORE_FRONT')}/payment/payment-status/${paymentCode}`,
    HTTP_METHOD.GET,
    null,
  );
};

export const createTpBankPaymentLink = async (orderCode?: string) => {
  return await APIClient<CreateTpBankPaymentLinkResponse>(
    `${RouteMapper.getHost('STORE_FRONT')}/tp-bank/payment-link`,
    HTTP_METHOD.POST,
    {
      orderCode,
    },
  );
};
