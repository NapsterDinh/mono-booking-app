import { isServer } from '@customer-web/configs/server';
import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import APIClient from '../APIClient';

export function fetchMasterLayout() {
  if (isServer) {
    return APIClient<{ header: Header; footer: Footer }>(
      `${RouteMapper.getHost('ESTORE', 'origin')}/api/cache/master-layout`,
      HTTP_METHOD.GET,
    );
  }

  return APIClient<{ header: Header; footer: Footer }>(`/api/cache/master-layout`, HTTP_METHOD.GET);
}

export function register(payload: NhapThuocPayload.Customers.CreateCustomer) {
  if (isServer) {
    return APIClient<NhapThuocResponse.Customers.Auth>(
      `${RouteMapper.getHost('ESTORE', 'origin')}/register`,
      HTTP_METHOD.POST,
      payload,
    );
  }

  return APIClient<NhapThuocResponse.Customers.Auth>(`/api/register`, HTTP_METHOD.POST, payload);
}
