declare namespace NhapThuocResponse {
  declare namespace CMSGlobal {
    type CateComponentName = 'menu.menu-auto-cate' | 'menu.menu-manual-cate' | 'menu.menu-link';

    interface Data {
      code: number;
      message: string;
      data?: {
        id: number;
        attributes?: {
          header: Header;
          menu: Array<Menu>;
          footer: any;
        };
      };
    }

    interface BasicCategory {
      id: number;
      fullPathSlug: string;
      name: name;
      desktopImage: any | null;
      level: number;
      children: BasicCategory[];
    }

    interface MenuCategory extends BasicCategory {}

    interface BasicModelAttribute<T> {
      data: {
        id: number;
        attributes?: T | null;
      } | null;
    }

    type Menu = AutoCate | ManualCate | Link;

    interface AutoCate {
      id: number;
      __component: CateComponentName;
      targetCategory: MenuCategory;
    }

    interface ManualCate {
      id: number;
      __component: CateComponentName;
      targetCategory: Omit<MenuCategory, 'children'>;
      tabs: ManualCateTab[];
    }

    interface ManualCateTab {
      id: number;
      tabTitle: string;
      productTitle: string;
      ingredientTitle: string;
      redirectUrl: string;
      categories: any[];
      products: Array<{ sku: string }>;
      tabIcon: BasicModelAttribute;
      ingredients: {
        data: Array<{
          id: number;
          attributes?: {
            slug: string;
            compoundName: string;
          };
        }>;
      };
    }

    interface Link {
      id: number;
      __component: CateComponentName;
      title: string;
      redirectUrl: string;
    }

    interface Header {
      id: number;
      logo: BasicModelAttribute;
      webBackground: BasicModelAttribute;
      mobileBackground: BasicModelAttribute;
      topSearch: TopSearch;
    }

    interface TopSearch {
      id: number;
      title: string;
      isVisible: boolean;
      icon: BasicModelAttribute;
      webBackground: BasicModelAttribute;
      mobileBackground: BasicModelAttribute;
      keywords: TopSearchKeyWord[];
    }

    interface TopSearchKeyWord {
      id: number;
      keyword: string;
      url: string;
    }

    interface CategorySortAttributes {
      id: number;
      code: string;
      rank?: number;
      webName: string;
    }
  }
}
