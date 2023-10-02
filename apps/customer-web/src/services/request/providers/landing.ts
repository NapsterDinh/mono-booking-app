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
export const getLandingBySlug = async (slug: string) => {
  return APIClient<NhapThuocResponse.Landings.Detail>(
    `${RouteMapper.getHost('API_CMS')}/landing-pages/slug/${encodeURIComponent(slug)}`,
    HTTP_METHOD.GET,
    {},
    optionsForLanding,
  );
};

export const getLandingPreviewBySlug = async (slug: string) => {
  return APIClient<NhapThuocResponse.Landings.Detail>(
    `${RouteMapper.getHost('API_CMS')}/landing-pages/preview/${encodeURIComponent(slug)}`,
    HTTP_METHOD.GET,
    {},
    optionsForLanding,
  );
};
