import { RouteMapper } from '@customer-web/services/routes/routes';
import { HTTP_METHOD } from '../../../enums/HTTP';
import APIClient from '../APIClient';

export function getSearchSuggest(params: any) {
  return APIClient<NhapThuocResponse.SearchService.SearchSuggest>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/products/suggest`,
    HTTP_METHOD.GET,
    params,
  );
}

export function getPromotionsSuggest() {
  return APIClient<NhapThuocResponse.SearchService.SearchSuggest>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/products/suggest`,
    HTTP_METHOD.GET,
  );
}

export function getSearchDetail(payload: NhapThuocPayload.SearchService.SearchDetail) {
  return APIClient<NhapThuocResponse.SearchService.SearchDetail>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/search`,
    HTTP_METHOD.POST,
    payload,
  );
}

export function getBestSeller(params: NhapThuocPayload.SearchService.BestSeller) {
  return APIClient<NhapThuocResponse.SearchService.BestSellersResponse>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/products/ecom/product/search/best-seller`,
    HTTP_METHOD.GET,
    params,
  );
}

export function getFilterObject(params: NhapThuocPayload.SearchService.FilterObject) {
  return APIClient<NhapThuocResponse.SearchService.FilterObject>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/products/ecom/product/search/object`,
    HTTP_METHOD.GET,
    params,
  );
}

export function getListProduct(payload: string[]) {
  return APIClient<NhapThuocResponse.SearchService.ListProduct[]>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/search/by-list`,
    HTTP_METHOD.POST,
    payload,
  );
}

export function getProductBySlug(slug: string) {
  return APIClient<NhapThuocResponse.SearchService.ProductSearchDetail>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/products/detail-by-slug`,
    HTTP_METHOD.GET,
    {
      slug,
    },
  );
}

export function getProductBySku(sku: string) {
  return APIClient<NhapThuocResponse.SearchService.ProductSearchDetail>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/products/ecom/product/detail/${sku}`,
    HTTP_METHOD.GET,
  );
}

export function getListCategory(payload: string[]) {
  return APIClient<NhapThuocResponse.SearchService.ListCategory[]>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/products/aggregation-by-cate`,
    HTTP_METHOD.POST,
    payload,
  );
}

export function getListProductByCategorySlug(payload: NhapThuocPayload.SearchService.ListProductByCategorySlug) {
  return APIClient<NhapThuocResponse.SearchService.SearchDetail>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/search/by-cate`,
    HTTP_METHOD.POST,
    payload,
  );
}

export function getPosts(params: NhapThuocPayload.SearchService.Post) {
  return APIClient<NhapThuocResponse.SearchService.Posts>(
    `${RouteMapper.getHost('STORE_FRONT', 'public')}/posts/ecom/search`,
    HTTP_METHOD.GET,
    params,
  );
}
