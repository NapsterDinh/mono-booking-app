import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { hashCheckVoucherPayload } from '@customer-web/services/carts/CartSecurityService';
import { RouteMapper } from '@customer-web/services/routes/routes';
import APIClient from '../APIClient';

/**
 * Cart StoreFront v1
 */

export const checkVoucher = async (payload: NhapThuocPayload.Voucher.CheckVoucher) => {
  return await APIClient<NhapThuocResponse.Voucher.VoucherInfo[]>(
    `${RouteMapper.getHost('STORE_FRONT')}/voucher/check`,
    HTTP_METHOD.POST,
    payload,
  );
};

export const checkSecurityVoucher = async (payload: NhapThuocPayload.Voucher.CheckVoucher) => {
  const data = hashCheckVoucherPayload(payload);
  return await APIClient<NhapThuocResponse.Voucher.VoucherInfo[]>(
    `${RouteMapper.getHost('STORE_FRONT')}/voucher/verify`,
    HTTP_METHOD.POST,
    data,
  );
};

export const addVoucher = async (payload: NhapThuocPayload.Voucher.AddVoucher) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart/add-voucher`,
    HTTP_METHOD.POST,
    payload,
  );
};

export const updateVoucher = async (payload: NhapThuocPayload.Voucher.UpdateVoucher) => {
  return await APIClient<NhapThuocResponse.Carts.CartInfo>(
    `${RouteMapper.getHost('STORE_FRONT')}/cart/update-voucher`,
    HTTP_METHOD.POST,
    payload,
  );
};
