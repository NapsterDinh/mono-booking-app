import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import type { CancelToken } from '../APIClient';
import APIClient from '../APIClient';

export const pickUpShopByProvince = async (
  payload: NhapThuocPayload.Promisings.PickUpShop,
  cancelToken?: CancelToken,
) => {
  return await APIClient<NhapThuocResponse.Promisings.PickUpShop[]>(
    `${RouteMapper.getHost('STORE_FRONT')}/order-promissing/pickup-shop-by-province`,
    HTTP_METHOD.POST,
    { ...payload },
    { cancelToken: cancelToken },
  );
};

export const promiseHomeDelivery = async (
  payload: NhapThuocPayload.Promisings.HomeDelivery,
  cancelToken?: CancelToken,
) => {
  return await APIClient<NhapThuocResponse.Promisings.HomeDelivery>(
    `${RouteMapper.getHost('STORE_FRONT')}/order-promissing/delivery`,
    HTTP_METHOD.POST,
    { ...payload },
    { cancelToken: cancelToken },
  );
};

export const homeDeliveryUpdate = async (
  payload: NhapThuocPayload.Promisings.UpdatePromise,
  cancelToken?: CancelToken,
) => {
  return await APIClient<NhapThuocResponse.Promisings.HomeDelivery>(
    `${RouteMapper.getHost('STORE_FRONT')}/order-promissing/delivery/update`,
    HTTP_METHOD.POST,
    { ...payload },
    { cancelToken: cancelToken },
  );
};

export const getDeliveryServices = async (payload: NhapThuocPayload.Promisings.GetDeliveryServices) => {
  return await APIClient<NhapThuocResponse.Promisings.GetDeliveryServices>(
    `${RouteMapper.getHost('STORE_FRONT')}/order-promissing/delivery-service`,
    HTTP_METHOD.POST,
    { ...payload },
  );
};
