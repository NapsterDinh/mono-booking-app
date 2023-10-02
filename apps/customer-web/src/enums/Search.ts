export enum SEARCH_SORT_TYPE {
  NO_SORT = 0,
  BY_HIGHT_TO_LOW_PRICE = 1,
  BY_LOW_TO_HIGH_PRICE = 2,
  BY_NEWEST = 3,
  BY_RANKING = 4, // best seller
}

export enum SEARCH_DETAIL_SECTIONS {
  ALL = 'Tất cả',
  PRODUCT = 'Sản phẩm',
  HEALTH_ARTICLE = 'Bài viết sức khỏe',
}

export enum SearchType {
  ALL = 'all',
  PRODUCT = 'product',
  POST = 'post',
}

export enum SEARCH_DETAIL_CODES {
  OBJECT_USE = 'objectUse',
  CATEGORY = 'category',
}

export enum SEARCH_DETAIL_PARAM {
  OBJECT_USE = 'doi-tuong',
  CATEGORY = 'loai-san-pham',
  TYPE = 'loai',
  SORT = 'sap-xep',
}

export enum SEARCH_DETAIL_SORT {
  BESTSELLER = 'Bán chạy',
  LOWTOHIGH = 'Giá thấp',
  HIGHTOLOW = 'Giá cao',
}

export const SEARCH_SORT_TYPE_TO_NAME_MAP = {
  // [SEARCH_SORT_TYPE.BY_RANKING]: SEARCH_DETAIL_SORT.BESTSELLER,
  [SEARCH_SORT_TYPE.BY_LOW_TO_HIGH_PRICE]: SEARCH_DETAIL_SORT.LOWTOHIGH,
  [SEARCH_SORT_TYPE.BY_HIGHT_TO_LOW_PRICE]: SEARCH_DETAIL_SORT.HIGHTOLOW,
};

export const SEARCH_SORT_VALUE_TO_MAP = [
  // SEARCH_SORT_TYPE.BY_RANKING,
  SEARCH_SORT_TYPE.BY_LOW_TO_HIGH_PRICE,
  SEARCH_SORT_TYPE.BY_HIGHT_TO_LOW_PRICE,
] as const;
