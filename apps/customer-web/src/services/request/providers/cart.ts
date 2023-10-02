import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import APIClient from '../APIClient';

/**
 * Cart StoreFront v1
 */

export const getCart = async (params: NhapThuocPayload.Carts.GetCart) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart`,
    HTTP_METHOD.GET,
    params,
  );
};

export const addItem = async (payload: NhapThuocPayload.Carts.AddCart) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart`,
    HTTP_METHOD.POST,
    payload,
  );
};

export const adjustItem = async (params: NhapThuocPayload.Carts.AdjustCart, id: string) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart/${encodeURI(id)}`,
    HTTP_METHOD.PUT,
    params,
    // {cancelToken: }
  );
};

export const unSelectItem = async (params: NhapThuocPayload.Carts.UnSelectItem) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart/unselected-item`,
    HTTP_METHOD.POST,
    params,
  );
};

export const addListItem = async (params: NhapThuocPayload.Carts.AddListItem) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart/add-list-item`,
    HTTP_METHOD.POST,
    params,
  );
};

export const removeItem = async (params: NhapThuocPayload.Carts.RemoveItem) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart`,
    HTTP_METHOD.DELETE,
    params,
  );
};

export const mergeCart = async (payload: NhapThuocPayload.Carts.MergeCart) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart/merge`,
    HTTP_METHOD.POST,
    payload,
  );
};

export const genSession = async (payload: NhapThuocPayload.Carts.GenSession) => {
  return await APIClient<NhapThuocResponse.Carts.Session>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/cart/session`,
    HTTP_METHOD.POST,
    payload,
  );
};

export const submit = async (payload: NhapThuocPayload.Carts.Submit) => {
  return await APIClient<NhapThuocResponse.Carts.Submit>(
    `${RouteMapper.getHost('STORE_FRONT')}/order`,
    HTTP_METHOD.POST,
    payload,
  );
};

export const selectedPromotion = async (payload: NhapThuocPayload.Carts.SelectedPromotion) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart/selected-promotion`,
    HTTP_METHOD.POST,
    payload,
  );
};
