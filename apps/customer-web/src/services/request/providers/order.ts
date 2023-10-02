import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import { OrderByPaymentCodeResponse } from 'apps/nhapthuoc-estore/src/types/api/response/order';
import APIClient from '../APIClient';

export function getOrderDetail(orderCode: string) {
  return APIClient<NhapThuocResponse.Orders.OrderDetail>(
    `${RouteMapper.getHost('STORE_FRONT')}/order/${orderCode}`,
    HTTP_METHOD.GET,
  );
}

export function getOrderDetailCancelDeposit(orderCode: string, type?: string) {
  return APIClient<NhapThuocResponse.CancelDeposit.DepositDetail>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/order-refund/${orderCode}`,
    HTTP_METHOD.GET,
    { type },
  );
}

export function getOrderDetailReturn(code: string) {
  return APIClient<NhapThuocResponse.Return.DetailReturn>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/order-return/for-ecom/${code}`,
    HTTP_METHOD.GET,
  );
}

export function createOrderRefundRequest(data: NhapThuocPayload.CancelDeposit.RequestSubmitFormForDeposit) {
  return APIClient<any>(`${RouteMapper.getHost('STORE_FRONT', 'public')}/order-refund`, HTTP_METHOD.POST, data);
}

export function submitReturn(data: NhapThuocPayload.Return.RequestSubmitFormForReturn) {
  return APIClient<any>(`${RouteMapper.getHost('STORE_FRONT', 'public')}/order-return/submit`, HTTP_METHOD.POST, data);
}

export function checkTransactionSubmitted(paymentRequestCode: string) {
  //FIXME: Hardcode for front-door
  return APIClient<NhapThuocResponse.Return.CheckTransactionItem>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/payment/check-transfer/${paymentRequestCode}`,
    HTTP_METHOD.GET,
  );
}

export const getPaymentStatus = async (paymentRequestCode: string) => {
  return await APIClient<NhapThuocResponse.Orders.CheckOrderInterval>(
    `${RouteMapper.getHost('STORE_FRONT')}/order/check-and-push-interval`,
    HTTP_METHOD.POST,
    { paymentRequestCode },
  );
};

export const cancelOrder = async (params: { orderID: string; orderCode: string }) => {
  return await APIClient<NhapThuocResponse.Orders.CancelOrder>(
    `${RouteMapper.getHost('STORE_FRONT')}/order/cancel`,
    HTTP_METHOD.POST,
    params,
  );
};

export const reBuyChecker = async (orderCode: string) => {
  return await APIClient<NhapThuocResponse.Orders.ReBuyCondition>(
    `${RouteMapper.getHost('STORE_FRONT')}/order/rebuy-check/${encodeURI(orderCode)}`,
    HTTP_METHOD.GET,
  );
};

export const reBuySubmit = async (params: {
  orderCode: string;
  productListRebuy: NhapThuocResponse.Orders.ParamCanBuyProductList[];
}) => {
  const { orderCode, productListRebuy } = params;
  return await APIClient<Pick<NhapThuocPayload.Carts.AddCart, 'sessionId'>>(
    `${RouteMapper.getHost('STORE_FRONT')}/order/re-buy`,
    HTTP_METHOD.POST,
    { orderCode, productListRebuy },
  );
};

export const redirectPayment = async (paymentRequestCode: string) => {
  return await APIClient<Pick<NhapThuocResponse.Orders.OrderDetail, 'orderCode'>>(
    `${RouteMapper.getHost('STORE_FRONT')}/order/payment-request-code/${paymentRequestCode}`,
    HTTP_METHOD.GET,
  );
};

export const getOrderByPaymentCode = async (paymentCode: string) => {
  return await APIClient<OrderByPaymentCodeResponse>(
    `${RouteMapper.getHost('STORE_FRONT')}/order/payment-code/${paymentCode}`,
    HTTP_METHOD.GET,
  );
};
