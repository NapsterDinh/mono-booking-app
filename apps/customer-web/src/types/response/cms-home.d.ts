declare namespace NhapThuocResponse {
  declare namespace CMS {
    type ExistingComponent =
      | 'section.banner'
      | 'section.policies'
      | 'section.featured-product'
      | 'section.program'
      | 'section.featured-cate'
      | 'section.filtered-product'
      | 'section.health-center'
      | 'section.cancer-center'
      | 'section.top-search'
      | 'section.disease'
      | 'section.recommend'
      | 'section.cta'
      | 'section.flash-sale';
    interface HomePage {
      code: number;
      data: Data;
    }

    interface Data {
      id: number;
      attributes: Attributes;
    }

    interface Attributes {
      mobileBackground: NhapThuocResponse.Landings.Image;
      webBackground: NhapThuocResponse.Landings.Image;
      sections: Array<Section>;
      seo: NhapThuocResponse.Landings.Seo | null;
    }

    interface BasicSection {
      id: number;
      readonly __component: ExistingComponent;
      title?: string;
      isVisible: boolean;
      mobileBackground?: NhapThuocResponse.Landings.Image;
      webBackground?: NhapThuocResponse.Landings.Image;
      webTitleBackground?: NhapThuocResponse.Landings.Image;
      mobileTitleBackground?: NhapThuocResponse.Landings.Image;
    }

    type Section =
      | SectionBanner
      | SectionPoliciy
      | SectionFeaturedProduct
      | SectionProgram
      | SectionFeaturedCategory
      | SectionFilteredProduct
      | SectionFilteredProduct
      | SectionHealthCenter
      | SectionCancerCenter
      | SectionTopSearch
      | SectionDisease
      | SectionRecommend
      | SectionCTA
      | SectionFlashSale;

    interface SectionBanner extends BasicSection {
      __component: 'section.banner';
      sideLinkUrl: string;
      mainSlider: MainSlider[];
      sideLinkImage: NhapThuocResponse.Landings.Image;
      quickAccess: QuickAccess[];
    }

    interface SectionPoliciy extends BasicSection {
      __component: 'section.policies';
      items: QuickAccess[];
    }

    interface SectionFeaturedProduct extends BasicSection {
      __component: 'section.featured-product';
      products: Array<Pick<NhapThuocResponse.Product.ProductDetailItem, 'sku'>>;
    }

    interface SectionFlashSale extends BasicSection {
      __component: 'section.flash-sale';
      products: Array<Pick<NhapThuocResponse.Product.ProductDetailItem, 'sku'>>;
      background?: string;
      endDate: string;
    }

    interface SectionProgram extends BasicSection {
      __component: 'section.program';
      title: string;
      description: string;
      quickAccess: QuickAccess[];
    }

    interface SectionFeaturedCategory extends BasicSection {
      __component: 'section.featured-cate';
      title: string;
      categories: Category[];
      icon: NhapThuocResponse.Landings.Image;
    }

    interface SectionFilteredProduct extends BasicSection {
      __component: 'section.filtered-product';
      title: string;
      icon: NhapThuocResponse.Landings.Icon;
      filters: SectionFilter[];
      leftBanner: MainSlider;
      rightBanner: MainSlider;
    }

    interface SectionHealthCenter extends BasicSection {
      __component: 'section.health-center';
      title: string;
      redirectUrl: string;
      icon: NhapThuocResponse.Landings.Icon;
      filters: SectionFilter[];
      articles: Articles[];
    }

    interface SectionCancerCenter extends BasicSection {
      __component: 'section.cancer-center';
      title: string;
      description: string;
      redirectUrl: string;
      quickAccess: QuickAccess[];
      articles: CancerCenterArticles[];
    }

    interface SectionTopSearch extends BasicSection {
      __component: 'section.top-search';
      title: string;
      icon: NhapThuocResponse.Landings.Icon;
      keywords: Keyword[];
    }

    interface SectionDisease extends BasicSection {
      __component: 'section.disease';
      title: string;
      redirectUrl: string;
      icon: NhapThuocResponse.Landings.Icon;
      representativeDiseases: RepresentativeDisease[];
    }

    interface SectionRecommend extends BasicSection {
      __component: 'section.recommend';
      title: string;
      products: Array<Pick<NhapThuocResponse.Product.ProductDetailItem, 'sku'>>;
      icon: NhapThuocResponse.Landings.Icon;
    }

    interface SectionCTA extends BasicSection {
      __component: 'section.cta';
      links: SectionCTALink[];
    }

    interface RepresentativeDisease {
      id: number;
      title: string;
      items: RepresentativeDiseaseItem[];
    }

    interface RepresentativeDiseaseItem {
      id: number;
      name: string;
      category: number;
      image: NhapThuocResponse.Landings.Image;
      articles: RepresentativeDiseaseItemArticle[];
    }

    interface RepresentativeDiseaseItemArticle {
      id: number;
      name: string;
      slug: string;
    }

    interface Keyword {
      id: number;
      keyword: string;
      url: string;
    }

    interface CancerCenterArticles {
      id: number;
      title: string;
      redirectUrl: string;
      image: NhapThuocResponse.Landings.Image;
    }
    interface Articles {
      id: number;
      name: string;
      slug: string;
      primaryImage: NhapThuocResponse.Landings.Attributes;
      category: CategoryArticles;
    }

    interface CategoryArticles {
      id: number;
      isPrimary: boolean;
      name: string;
      fullPathSlug: string;
    }

    interface Category {
      id: number;
      name: string;
      fullPathSlug: string;
      mobileImage?: NhapThuocResponse.Landings.Attributes;
      totalProducts: number;
      desktopImage?: NhapThuocResponse.Landings.Attributes;
    }

    interface SectionFilter {
      id: number;
      title: string;
      filter: string;
      filterId: number;
    }
    interface SectionCTALink {
      id: number;
      redirectUrl: string;
      webImage: NhapThuocResponse.Landings.Image;
      mobileImage: NhapThuocResponse.Landings.Image;
    }
    interface MainSlider {
      id: number;
      redirectUrl: string;
      webImage: NhapThuocResponse.Landings.Image;
      mobileImage: NhapThuocResponse.Landings.Image;
    }
    interface QuickAccess {
      id: number;
      title: string;
      redirectUrl: string;
      icon: NhapThuocResponse.Landings.Icon;
    }

    interface ProductContent {
      sku: string;
      noteCate: string;
    }
  }
}
