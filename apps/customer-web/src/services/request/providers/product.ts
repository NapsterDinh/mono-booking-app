import { RouteMapper } from '@customer-web/services/routes/routes';
import { HTTP_METHOD } from '../../../enums/HTTP';
import APIClient from '../APIClient';

export const getProduct = async (itemCodes: string[]) => {
  return await APIClient<NhapThuocResponse.Product.Products>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/product`,
    HTTP_METHOD.POST,
    { skus: itemCodes },
  );
};

export const getProductDetail = async (itemCodes: string[]) => {
  return await APIClient<NhapThuocResponse.Product.Products>(
    `${RouteMapper.getHost('STORE_FRONT')}/product`,
    HTTP_METHOD.POST,
    { skus: itemCodes },
  );
};

export const getRestrictInfo = async (payload: NhapThuocPayload.Product.RestrictInfoRequest) => {
  return await APIClient<NhapThuocResponse.Product.ProductRestrictInfo[]>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/restrict-for-nt/restrict-info`,
    HTTP_METHOD.POST,
    payload,
  );
};
