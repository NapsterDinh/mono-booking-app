import { HTTP_METHOD } from '@customer-web/enums/HTTP';
import APIClient from '../APIClient';
import { PAYLOAD_CATEGORIES_BEST_SELLER } from '@customer-web/helpers/Constant';
import { RouteMapper } from '@customer-web/services/routes/routes';

export const getCategories = async (payload: NhapThuocPayload.Categories.GetCategories) => {
  return await APIClient<NhapThuocResponse.Categories.TypeItems>(
    `${RouteMapper.getHost('STORE_FRONT')}/categories`,
    HTTP_METHOD.POST,
    payload,
  );
};

export const getCategoryBySlug = async (slug: string) => {
  return await APIClient<NhapThuocResponse.Categories.CategoryChildItem>(
    `${RouteMapper.getHost('API_CMS', 'origin')}/categories/slug`,
    HTTP_METHOD.GET,
    {
      slug,
      type: 'product',
    },
  );
};

export const getFilters = (slug?: string) => {
  return APIClient<{ data: { attributes: NhapThuocResponse.CMSGlobal.CategorySortAttributes[] } }>(
    `${RouteMapper.getHost('API_CMS', 'origin')}/categories/sort-attributes`,
    HTTP_METHOD.GET,
    { slug, type: 2 },
  );
};

export function productBestSellerFilter(category: string, page = 1, size = 8) {
  const data = {
    ...PAYLOAD_CATEGORIES_BEST_SELLER,
    category: category,
    page: page,
    size: size,
  };

  return APIClient<NhapThuocResponse.Global.FrontDoorReturnStruct<NhapThuocResponse.Product.FilterData>>(
    `${RouteMapper.getHost('STORE_FRONT')}/product/filter`,
    HTTP_METHOD.POST,
    data,
  );
}

export const getMenuForDrug = async () => {
  return await APIClient(`${RouteMapper.getHost('STORE_FRONT')}/product/menu-for-drug`, HTTP_METHOD.GET);
};
