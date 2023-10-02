import { SEARCH_SORT_TYPE } from '@customer-web/enums/Search';

export const dayName = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

export const END_HOUR = 20;
export const START_HOUR = 10;
export const MAXIMUM_INVENTORY = 30;
export const MINIMUM_QUANTITY = 1;
export const MAXIMUM_QUANTITY = 999;

export const ITEM_SHIPMENT = '00015952';
export const NAME_SHIPMENT = 'Phí giao hàng';
export const UNIT_SHIPMENT = 1005;

export const DEFAULT_CATEGORIES = [
  {
    title: 'Thực phẩm chức năng',
    slug: 'thuc-pham-chuc-nang',
    url: '/thuc-pham-chuc-nang',
    apiAllow: true,
    type: undefined,
  },
  {
    title: 'Dược mỹ phẩm',
    slug: 'duoc-my-pham',
    url: '/duoc-my-pham',
    apiAllow: true,
    type: undefined,
  },
  {
    title: 'Chăm sóc cá nhân',
    slug: 'cham-soc-ca-nhan',
    url: '/cham-soc-ca-nhan',
    apiAllow: true,
    type: undefined,
  },
  {
    title: 'Thuốc',
    slug: 'thuoc',
    url: '/thuoc',
    apiAllow: true,
    type: 'thuoc',
  },
  {
    title: 'Thiết bị y tế',
    slug: 'trang-thiet-bi-y-te',
    url: '/trang-thiet-bi-y-te',
    apiAllow: true,
    type: undefined,
  },
  {
    title: 'Bệnh',
    slug: 'benh',
    url: '/benh',
    apiAllow: false,
    type: undefined,
  },
  {
    title: 'Góc sức khoẻ',
    slug: 'goc-suc-khoe',
    url: '/bai-viet',
    apiAllow: false,
    type: undefined,
  },
  {
    title: 'Hệ thống nhà thuốc',
    slug: 'he-thong-nha-thuoc',
    url: '/he-thong-cua-hang',
    apiAllow: false,
    type: undefined,
  },
  {
    title: 'Dinh dưỡng thể thao thể hình',
    url: '/dinh-duong-the-thao-the-hinh',
    slug: 'dinh-duong-the-thao-the-hinh',
  },
];
export const SHOW_DRUG_SLUG = 'tra-cuu-thuoc-a-z';
export const TYPE_CATEGORIES = 'Ecom';
export const MAX_SHOW_SUB_CATE = 8;
export const PAYLOAD_CATEGORIES_BEST_SELLER = {
  type: 'ecomCategory',
  sort: 'best-seller',
};
export const TOP_KEYWORDS = [
  'panadol',
  'vitamin',
  'bao cao su',
  'tinh chất hàu',
  'SpO2',
  'khẩu trang',
  'test covid',
  'nước muối',
  'xịt mũi',
  'bổ phổi',
];
export const META_TITLE = 'nhapthuoc.com';
export const META_DESCRIPTION_DEFAULT = 'nhapthuoc.com';
export const MEDIA_MOBILE_QUERY = '(max-width: 992px)';

export const DEFAULT_IMAGES = {
  PRODUCT: `/estore-images/default/drugs/thuoc.png`,
  PROMOTION: `/estore-images/default/promotions/promotion_used.png`,
  PROMOTION_DISABLED: `/estore-images/default/promotions/promotion_disabled.png`,
};

export const INSIDE_CANCEL_ORDER = {
  modifiedBy: '10676',
  modifiedByName: 'LinhPTH3',
  reason: 1,
};

export const HOME_COMPONENT_SECTION = {
  BANNER: 'section.banner',
  POLICY: 'section.policies',
  FEATURED_PRODUCT: 'section.featured-product',
  PROGRAM: 'section.program',
  FEATURED_CATEGORY: 'section.featured-cate',
  FILTER_PRODUCT: 'section.filtered-product',
  FLASH_SALE: 'section.flash-sale',
  HEALTH_CENTER: 'section.health-center',
  CANCER_CENTER: 'section.cancer-center',
  TOP_SEARCH: 'section.top-search',
  DISEASE: 'section.disease',
  RECOMMEND: 'section.recommend',
  CTA: 'section.cta',
};

export const listSearchType = [
  {
    value: SEARCH_SORT_TYPE.BY_RANKING,
    label: 'Bán chạy',
  },
  {
    value: SEARCH_SORT_TYPE.BY_LOW_TO_HIGH_PRICE,
    label: 'Giá thấp',
  },
  {
    value: SEARCH_SORT_TYPE.BY_HIGHT_TO_LOW_PRICE,
    label: 'Giá cao',
  },
];
