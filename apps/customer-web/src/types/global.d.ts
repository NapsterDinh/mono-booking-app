export {};

declare global {
  type ValueOf<T> = T[keyof T];

  type InitialGlobal = {
    menu: Menu[];
    header: Header;
    footer: Footer;
  };

  type Image = ImageDefault | null | undefined;
  interface ImageDefault {
    alt: string;
    name: string;
    url: string;
  }

  interface Background {
    web: Image;
    mobile: Image;
  }
  interface Keyword {
    id: number;
    keyword: string;
    url: string;
  }
  interface TopSearch {
    icon: Image;
    keywords: Keyword[];
    background: Background;
  }

  interface Header {
    logo: Image;
    topSearch: TopSearch;
  }

  interface FooterBasicChildrenItem {
    text: string;
    title: string;
    phone: string;
    redirectUrl: string;
    note: string;
    icon: Image;
  }

  interface FooterItem {
    title: string;
    items: Array<Pick<FooterBasicChildrenItem, 'redirectUrl' | 'title' | 'text'>>;
  }
  interface Footer {
    background: Background;
    copyRight: string;
    items: FooterItem[];
    callCenter: {
      title: string;
      items: Array<Pick<FooterBasicChildrenItem, 'title' | 'redirectUrl' | 'icon' | 'phone' | 'note'>>;
    };
    certificated: {
      title: string;
      items: Array<Pick<FooterBasicChildrenItem, 'title' | 'redirectUrl' | 'icon'>>;
    };
    connect: {
      title: string;
      items: Array<Pick<FooterBasicChildrenItem, 'title' | 'redirectUrl' | 'icon'>>;
    };
    app: {
      title: string;
      qr: Image;
      items: Array<Pick<FooterBasicChildrenItem, 'redirectUrl' | 'icon'>>;
    };
  }

  interface MenuCateChildren {
    fullPathSlug: string;
    name: string;
    image: Image;
    products?: NhapThuocResponse.SearchService.ProductBasic[];
    children:
      | Array<
          MenuCateChildren & {
            products: NhapThuocResponse.SearchService.ProductBasic[];
          }
        >
      | any;
  }

  interface MenuAutoCate {
    fullPathSlug: string;
    name: string;
    image: Image;
    children: MenuCateChildren[];
  }

  interface MenuManualCate {
    fullPathSlug: string;
    name: string;
    image: Image;
    children: Array<Pick<MenuCateChildren, 'name' | 'children' | 'fullPathSlug'>>;
  }

  interface MenuLink {
    name: string;
    fullPathSlug: string;
    children: undefined;
  }

  type Menu = MenuAutoCate | MenuManualCate | MenuLink;

  interface Window {
    dataLayer?: GADataLayerItem[];
  }

  interface GADataLayerItem {
    event?: string;
    ecommerce?: GADataLayerEcommerce | null;
  }

  interface GADataLayerEcommerce {
    transaction_id?: string;
    value?: number | string;
    tax?: string;
    shipping?: string | number;
    currency?: 'VND' | string;
    coupon?: string;
    items?: GADataLayerEcommerceItems[];
    payment_type?: string;
  }

  interface GADataLayerEcommerceItems {
    item_id?: string;
    item_name?: string;
    affiliation?: string;
    coupon?: string;
    currency?: 'VND' | string;
    discount?: number;
    index?: number;
    item_brand?: string;
    item_category?: string;
    item_category2?: string;
    item_category3?: string;
    item_category4?: string;
    item_category5?: string;
    item_list_id?: string;
    item_list_name?: string;
    item_variant?: string;
    location_id?: string;
    price?: number;
    quantity?: number;
  }
}
