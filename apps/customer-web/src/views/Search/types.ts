import { SEARCH_SORT_TYPE } from '@customer-web/enums/Search';

export type SORT_TYPE =
  | SEARCH_SORT_TYPE.BY_RANKING
  | SEARCH_SORT_TYPE.BY_LOW_TO_HIGH_PRICE
  | SEARCH_SORT_TYPE.BY_HIGHT_TO_LOW_PRICE;

export type Filter = NhapThuocResponse.CMSGlobal.CategorySortAttributes & {
  values: string[];
};
