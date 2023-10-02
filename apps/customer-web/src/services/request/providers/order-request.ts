import { RouteMapper } from '@customer-web/services/routes/routes';
import type { AxiosRequestConfig } from 'axios';
import { HTTP_METHOD } from '../../../enums/HTTP';
import APIClient from '../APIClient';

export function getOrderRequest(id: string | number) {
  return APIClient<NhapThuocResponse.OrderRequests.DetailData>(
    `${RouteMapper.getHost('STORE_FRONT')}/request-order/${id}`,
    HTTP_METHOD.GET,
    null,
  );
}

export function submitQuickDrugs(formData: FormData) {
  const options: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  return APIClient<NhapThuocResponse.OrderRequests.Submit>(
    `${RouteMapper.getHost('STORE_FRONT')}/request-order`,
    HTTP_METHOD.POST,
    formData,
    options,
  );
}

export function searchDrugs(keyword: string) {
  const params = {
    keyword: keyword,
    skipCount: 1,
    maxResultCount: 5,
  };

  return APIClient<NhapThuocResponse.OrderRequests.SearchDrugs>(
    `${RouteMapper.getHost('STORE_FRONT')}/request-order/search/quick-purchase`,
    HTTP_METHOD.GET,
    params,
  );
}
