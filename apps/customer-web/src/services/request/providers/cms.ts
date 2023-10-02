import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import { RouteMapper } from '@customer-web/services/routes/routes';
import type { AxiosRequestConfig } from 'axios';
import APIClient from '../APIClient';

const optionsForLanding: AxiosRequestConfig = {
  headers: {
    'Accept-Encoding': 'gzip, deflate, br',
  },
  timeout: 15000,
};

export const getHomePage = async () => {
  return APIClient<NhapThuocResponse.CMS.HomePage>(
    `${RouteMapper.getHost('API_CMS', 'origin')}/pages/home`,
    HTTP_METHOD.GET,
    {},
    optionsForLanding,
  );
};

export const getGlobalPage = async () => {
  return APIClient<NhapThuocResponse.CMSGlobal.Data>(
    `${RouteMapper.getHost('API_CMS', 'origin')}/pages/global`,
    HTTP_METHOD.GET,
    {},
    optionsForLanding,
  );
};

export const getProductContent = async (sku: string) => {
  return APIClient<{
    code: number;
    message: string;
    data: NhapThuocResponse.CMS.ProductContent;
  }>(`${RouteMapper.getHost('API_CMS', 'origin')}/products/${sku}`, HTTP_METHOD.GET);
};
