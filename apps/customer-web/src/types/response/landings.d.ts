declare namespace NhapThuocResponse {
  declare namespace Landings {
    interface Detail {
      code: number;
      message: string;
      data: DataDetail;
    }

    interface DataDetail {
      id: number;
      attributes: RootAttributes;
    }

    interface RootAttributes {
      title: string;
      slug: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      redirectUrl: string;
      description: string | null;
      desktopImage: DesktopImage;
      mobileImage: MobileImage;
      boxIcons: BoxIcon[];
      productSections: ProductSection[];
      landingConfigs: LandingConfigs;
      seo: Seo | null;
      faqs: Faqs;
      popupEvents: PopupEvents;
    }

    interface DesktopImage {
      data?: DataAttributes | null;
    }

    interface MobileImage {
      data?: DataAttributes | null;
    }

    interface BoxIcon {
      id: number;
      title?: any;
      redirectUrl?: any;
      rank?: any;
      description?: any;
      icon: Icon;
    }

    interface Icon {
      data?: DataAttributes;
    }

    interface ProductSection {
      id: number;
      sectionName: string;
      sectionType: string;
      isDisplay: boolean;
      rank?: number;
      redirectUrl?: any;
      desktopImage: DesktopImage;
      mobileImage: MobileImage;
      bannerDesktopImage: DesktopImage;
      bannerMobileImage: MobileImage;
      productItems: ProductItem[];
    }

    interface LandingConfigs {
      id: number;
      landingBackground: string;
      bannerBackground: string;
      brandBackground: string;
      navbarDisplayType: string;
      navbarTheme: string;
      navbarDisplayHotline: boolean;
      boxIconPosition: string;
    }

    interface Faqs {
      data: Datum[];
    }

    interface DataAttributes {
      id: number;
      attributes: Attributes;
    }

    interface PackageDetail {
      name: string;
      ratio: number;
      level: number;
      migrationId: number;
      measureUnit: string;
      isDefault: boolean;
      id: number;
      isActive: boolean;
      price: number;
      measureId: number;
    }

    interface Discount {
      discountPrice?: number;
      finalPrice?: number;
      itemCode: string;
      unitCode?: number;
      price?: number;
    }
    interface ProductItem {
      id: number;
      itemRank?: any;
      itemCode: string;
      sku: string;
      price?: number;
      packageType: string;
      measureUnitMigrationId?: number;
      measureUnit: string;
      packageDetails: PackageDetail[];
      fullPathSlug: string;
      inventoryQty?: number;
      webName: string;
      shortName: string;
      mainImage: string;
      brand: string;
      country: string;
      producer: string;
      brandCountry: string;
      drugForm: string;
      drugUse: string;
      ingredients: string[];
      ranking?: number;
      isDisplayCode: string;
      isPointBlock?: boolean;
      priceLabel: string;
      isShowPrice?: boolean;
      isShowBtn?: number;
      isOTC?: boolean;
      discount: Discount;
      discountIcon?: string | null;
    }

    interface Datum {
      id: number;
      attributes: DatumAttributes;
    }

    interface DatumAttributes {
      question: string;
      answer: string;
      createdAt: string;
      updatedAt: string;
    }

    interface Seo {
      id: number;
      metaTitle: string;
      metaDescription: string;
      keywords: string;
      metaRobots?: any;
      structuredData?: any;
      metaViewport?: any;
      canonicalURL?: any;
      metaImage: MetaImage;
      metaSocial: MetaSocial[];
    }

    interface MetaImage {
      data?: DataAttributes;
    }

    interface MetaSocial {
      id: number;
      socialNetwork: string;
      title: string;
      description: string;
      image: Image;
    }

    interface Image {
      data?: DataAttributes;
    }

    interface Attributes {
      name: string;
      alternativeText: string;
      caption: string;
      width: number;
      height: number;
      formats: ImagesAttributeFormats;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl?: any;
      provider: string;
      folderPath?: string;
      provider_metadata?: any;
      description?: string;
      createdAt: string;
      updatedAt: string;
      imageDesktop?: DesktopImage;
      imageMobile?: MobileImage;
    }

    interface ImagesAttributeFormats {
      small: Small;
      thumbnail: Thumbnail;
    }

    interface Small {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path?: any;
      size: number;
      width: number;
      height: number;
    }

    interface Thumbnail {
      ext: string;
      url: string;
      hash: string;
      mime: string;
      name: string;
      path?: any;
      size: number;
      width: number;
      height: number;
    }
    interface PopupEvents {
      data: NhapThuocResponse.Landings.PopupEvents.DataAttributes[];
    }
  }
}
