import { UserRanking } from '@customer-web/enums/User';
import { HOME_COMPONENT_SECTION } from '@customer-web/helpers/Constant';
import { getRestrictInfo } from '@customer-web/request-providers/product';
import { getPromotionPrices } from '@customer-web/services/request/providers/promotion';
import { getFilterObject, getListCategory, getListProduct } from '@customer-web/services/request/providers/search';
import { removeUndefinedProps } from '@tsu-org/sdk';

type BasicSection = {
  products?: Product[];
  component: NhapThuocResponse.CMS.Section['__component'];
  title?: string;
  background: {
    web: Image;
    mobile: Image;
  };
};

export type BannerSection = BasicSection & {
  mainSlider: {
    redirectUrl: string;
    webImage: Image;
    mobileImage: Image;
  }[];
  sideLinkImage: {
    url: NhapThuocResponse.CMS.SectionBanner['sideLinkUrl'];
    image: Image;
  };
  quickAccess: {
    title: NhapThuocResponse.CMS.QuickAccess['title'];
    redirectUrl: NhapThuocResponse.CMS.QuickAccess['redirectUrl'];
    icon: Image;
  }[];
};

type PolicySection = BasicSection & {
  items: {
    title: NhapThuocResponse.CMS.QuickAccess['title'];
    redirectUrl: NhapThuocResponse.CMS.QuickAccess['redirectUrl'];
    icon: Image;
  }[];
};

export type Product = Omit<NhapThuocResponse.SearchService.ProductBasic, 'price'> & {
  price: {
    discount: NhapThuocResponse.Promotions.DiscountPromotion | null;
    measureUnitCode?: number | undefined;
    measureUnitName?: string | undefined;
    price?: number | undefined;
    currencySymbol?: string | undefined;
  };
  restrictInfo: NhapThuocResponse.Product.ProductRestrictInfo;
};

export type FeaturedProductSection = BasicSection & {
  products: Product[];
  webTitleBackground: Image;
  mobileTitleBackground: Image;
};

export type FlashSaleProductSection = BasicSection & {
  products: Product[];
  webTitleBackground: Image;
  mobileTitleBackground: Image;
  backgroundColor?: string;
  endDate: string;
};

type ProgramSection = BasicSection & {
  title: NhapThuocResponse.CMS.SectionProgram['title'];
  description: NhapThuocResponse.CMS.SectionProgram['description'];
  quickAccess: {
    title: NhapThuocResponse.CMS.QuickAccess['title'];
    redirectUrl: NhapThuocResponse.CMS.QuickAccess['redirectUrl'];
    icon: Image;
  }[];
};

type FeaturedCategorySection = BasicSection & {
  title: NhapThuocResponse.CMS.SectionFeaturedCategory['title'];
  items: {
    name: NhapThuocResponse.SearchService.ListCategory['name'];
    fullPathSlug: NhapThuocResponse.SearchService.ListCategory['fullPathSlug'];
    desktopImage: Image;
    mobileImage: Image;
    totalProduct: NhapThuocResponse.SearchService.ListCategory['countProduct'] | 0;
  }[];
  icon: Image;
};

type Filter = Omit<NhapThuocResponse.CMS.SectionFilter, 'products'> & {
  products: Product[];
};

type FilteredProductSection = BasicSection & {
  title: NhapThuocResponse.CMS.SectionFilteredProduct['title'];
  filters: Filter[];
  icon: Image;
};

type HealthCenterSection = BasicSection & {
  title: NhapThuocResponse.CMS.SectionHealthCenter['title'];
  filters: NhapThuocResponse.CMS.SectionHealthCenter['filters'];
  redirectUrl: NhapThuocResponse.CMS.SectionHealthCenter['redirectUrl'];
  icon: Image;
  articles: {
    name: NhapThuocResponse.CMS.Articles['name'];
    category: NhapThuocResponse.CMS.Articles['category'];
    slug: NhapThuocResponse.CMS.Articles['slug'];
    image: Image;
  }[];
};

type CancerCenterSection = BasicSection &
  Pick<NhapThuocResponse.CMS.SectionCancerCenter, 'title' | 'description' | 'redirectUrl'> & {
    articles: (Omit<NhapThuocResponse.CMS.CancerCenterArticles, 'image'> & {
      image: Image;
    })[];
    quickAccess: (Pick<NhapThuocResponse.CMS.QuickAccess, 'title' | 'redirectUrl'> & {
      icon: Image;
    })[];
  };

type TopSearchSection = BasicSection &
  Pick<NhapThuocResponse.CMS.SectionTopSearch, 'title' | 'keywords'> & {
    icon: Image;
  };

type DiseaseSection = BasicSection &
  Pick<NhapThuocResponse.CMS.SectionDisease, 'title' | 'redirectUrl'> & {
    icon: Image;
    diseases: (Omit<NhapThuocResponse.CMS.RepresentativeDisease, 'items'> & {
      items: (Pick<NhapThuocResponse.CMS.RepresentativeDiseaseItem, 'id' | 'name'> & {
        image: Image;
        articles: Omit<NhapThuocResponse.CMS.RepresentativeDiseaseItemArticle, 'id'>[];
        category: number | null;
      })[];
    })[];
  };

export type ProductsSection = BasicSection &
  Pick<NhapThuocResponse.CMS.SectionRecommend, 'title'> & {
    icon: Image;
    products: (Omit<NhapThuocResponse.SearchService.ListProduct, 'price'> & {
      price: Omit<NhapThuocResponse.SearchService.Price, 'discount'> & {
        discount: NhapThuocResponse.Promotions.DiscountPromotion | null;
      };
    })[];
  };

type CTASection = BasicSection & {
  links: (Pick<NhapThuocResponse.CMS.SectionCTALink, 'redirectUrl'> & {
    image: {
      web: Image;
      mobile: Image;
    };
  })[];
};

interface SEOProperties {
  title: string;
  description: string;
  keywords: string;
  image?: Image;
  social?: {
    name: string;
    title: string;
    description: string;
    image?: Image;
  }[];
}

type Section =
  | BannerSection
  | PolicySection
  | FeaturedProductSection
  | ProgramSection
  | FeaturedCategorySection
  | FilteredProductSection
  | HealthCenterSection
  | CancerCenterSection
  | TopSearchSection
  | DiseaseSection
  | ProductsSection
  | CTASection;

export interface HomePageProps {
  background: {
    web: Image | null;
    mobile: Image | null;
  };
  sections?: Section[];
  seo: SEOProperties | null;
}

export class HomeProviderService {
  private data: NhapThuocResponse.CMS.Attributes;

  constructor(data: NhapThuocResponse.CMS.Data) {
    this.data = data?.attributes;
  }

  public async getActiveSections(): Promise<Section[]> {
    const wrappers =
      this.data.sections.reduce<ReturnType<typeof this.wrapSection>[]>((prev, next) => {
        if (next.isVisible) {
          prev.push(this.wrapSection(next));
        }
        return prev;
      }, []) || [];
    try {
      return await Promise.all(wrappers);
    } catch (error) {
      return [];
    }
  }

  private basicSectionWrapper<T extends NhapThuocResponse.CMS.BasicSection>(section: T): BasicSection {
    return {
      component: section.__component,
      title: section.title,
      background: {
        web: this.getImage(section.webBackground?.data?.attributes),
        mobile: this.getImage(section.mobileBackground?.data?.attributes),
      },
    };
  }

  private bannerSectionWrapper(section: NhapThuocResponse.CMS.SectionBanner): BannerSection {
    return {
      ...this.basicSectionWrapper(section),
      mainSlider: section.mainSlider?.map((i) => ({
        redirectUrl: i.redirectUrl,
        webImage: this.getImage(i.webImage?.data?.attributes),
        mobileImage: this.getImage(i.webImage?.data?.attributes),
      })),
      sideLinkImage: {
        url: section.sideLinkUrl,
        image: this.getImage(section.sideLinkImage?.data?.attributes),
      },
      quickAccess: section.quickAccess.map((i) => ({
        title: i.title,
        redirectUrl: i.redirectUrl,
        icon: this.getImage(i.icon?.data?.attributes),
      })),
    };
  }

  private policySectionWrapper(section: NhapThuocResponse.CMS.SectionPoliciy): PolicySection {
    return {
      ...this.basicSectionWrapper(section),
      items: section.items.map((i) => ({
        title: i.title,
        redirectUrl: i.redirectUrl,
        icon: this.getImage(i.icon.data?.attributes),
      })),
    };
  }

  private async featuredProductSectionWrapper(
    section: NhapThuocResponse.CMS.SectionFeaturedProduct,
  ): Promise<FeaturedProductSection> {
    let products: NhapThuocResponse.SearchService.ListProduct[] = [],
      promotions: NhapThuocResponse.Promotions.DiscountPromotion[] = [];

    let productRestrictList: NhapThuocResponse.Product.ProductRestrictInfo[];
    const productsRequest: string[] = section?.products?.map((i) => i.sku) || [];

    try {
      if (productsRequest.length > 0) {
        products = await getListProduct(productsRequest);

        const productsRequestPromotion =
          products.reduce?.<NhapThuocPayload.Promotions.GetPromotionPrices[]>((prev, next) => {
            if (next.price?.measureUnitCode) {
              prev.push({
                itemCode: next.sku,
                unitCode: next.price.measureUnitCode,
                price: next.price.price,
              });
            }
            return prev;
          }, []) || [];

        productRestrictList = await this.getRestrictInfoProduct(products);

        if (productsRequestPromotion.length > 0) {
          promotions = await getPromotionPrices(productsRequestPromotion);
        }
      }
    } catch (error) { }

    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      products:
        products?.map?.((i) => ({
          ...i,
          price: {
            ...i.price,
            discount: promotions.find((e) => e.itemCode === i.sku && e.unitCode === i.price?.measureUnitCode) || null,
          },
          restrictInfo:
            productRestrictList?.find((prod) => prod.itemCode === i.sku && prod.unitCode === i.price.measureUnitCode) ||
            null,
        })) || [],
      webTitleBackground: this.getImage(section.webTitleBackground?.data?.attributes),
      mobileTitleBackground: this.getImage(section.mobileTitleBackground?.data?.attributes),
    };
  }

  private async flashSaleProductSectionWrapper(
    section: NhapThuocResponse.CMS.SectionFlashSale,
  ): Promise<FlashSaleProductSection> {
    let products: NhapThuocResponse.SearchService.ListProduct[] = [],
      promotions: NhapThuocResponse.Promotions.DiscountPromotion[] = [];
    let productRestrictList: NhapThuocResponse.Product.ProductRestrictInfo[];

    const productsRequest: string[] = section?.products?.map((i) => i.sku) || [];

    try {
      if (productsRequest.length > 0) {
        products = await getListProduct(productsRequest);

        const productsRequestPromotion =
          products.reduce?.<NhapThuocPayload.Promotions.GetPromotionPrices[]>((prev, next) => {
            if (next.price?.measureUnitCode) {
              prev.push({
                itemCode: next.sku,
                unitCode: next.price.measureUnitCode,
                price: next.price.price,
              });
            }
            return prev;
          }, []) || [];

        productRestrictList = await this.getRestrictInfoProduct(products);

        if (productsRequestPromotion.length > 0) {
          promotions = await getPromotionPrices(productsRequestPromotion);
        }
      }
    } catch (error) { }

    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      products:
        products?.map?.((i) => ({
          ...i,
          price: {
            ...i.price,
            discount: promotions.find((e) => e.itemCode === i.sku && e.unitCode === i.price?.measureUnitCode) || null,
          },
          restrictInfo:
            productRestrictList?.find((prod) => prod.itemCode === i.sku && prod.unitCode === i.price.measureUnitCode) ||
            null,
        })) || [],
      webTitleBackground: this.getImage(section.webTitleBackground?.data?.attributes),
      mobileTitleBackground: this.getImage(section.mobileTitleBackground?.data?.attributes),
      backgroundColor: section.background,
      endDate: section.endDate,
    };
  }

  private programSectionWrapper(section: NhapThuocResponse.CMS.SectionProgram): ProgramSection {
    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      description: section.description,
      quickAccess: section.quickAccess.map((i) => ({
        title: i.title,
        redirectUrl: i.redirectUrl,
        icon: this.getImage(i.icon.data?.attributes),
      })),
    };
  }

  private async featuredCategorySectionWrapper(
    section: NhapThuocResponse.CMS.SectionFeaturedCategory,
  ): Promise<FeaturedCategorySection> {
    let categories: NhapThuocResponse.SearchService.ListCategory[] = [];
    try {
      const payload = section.categories?.map?.((i) => i.fullPathSlug) || [];
      if (payload.length > 0) {
        categories = await getListCategory(payload);
      }
    } catch (error) { }
    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      items: section.categories.map((i) => ({
        name: i.name || '',
        fullPathSlug: i.fullPathSlug || '',
        desktopImage: this.getImage(i.desktopImage),
        mobileImage: this.getImage(i.mobileImage),
        totalProduct: categories?.find?.((e) => e.id === i.id)?.countProduct || 0,
      })),
      icon: this.getImage(section.icon.data?.attributes),
    };
  }

  private async filteredProductSectionWrapper(
    section: NhapThuocResponse.CMS.SectionFilteredProduct,
  ): Promise<FilteredProductSection> {
    let products: NhapThuocResponse.SearchService.ProductBasic[] = [];
    let responseProducts: {
      id: number;
      items: NhapThuocResponse.SearchService.ProductBasic[];
    }[] = [];
    let promotions: NhapThuocResponse.Promotions.DiscountPromotion[] = [];
    let productRestrictList: NhapThuocResponse.Product.ProductRestrictInfo[];

    try {
      const request = section.filters.map(
        (i) =>
          new Promise<{
            id: number;
            items: NhapThuocResponse.SearchService.ProductBasic[];
          }>((resolve) => {
            getFilterObject({
              Id: i.filterId,
              skipCount: 0,
              maxResultCount: 12,
            })
              .then((s) => resolve({ id: i.filterId, items: s.items }))
              .catch(() => resolve({ id: i.filterId, items: [] }));
          }),
      );
      responseProducts = await Promise.all(request);
      products = responseProducts.reduce<NhapThuocResponse.SearchService.ProductBasic[]>((prev, next) => {
        prev.push(...next.items);
        return prev;
      }, []);

      if (products.length > 0) {
        const productsRequest =
          products.reduce?.<NhapThuocPayload.Promotions.GetPromotionPrices[]>((prev, next) => {
            if (next.price?.measureUnitCode) {
              prev.push({
                itemCode: next.sku,
                unitCode: next.price.measureUnitCode,
                price: next.price.price,
              });
            }
            return prev;
          }, []) || [];

        productRestrictList = await this.getRestrictInfoProduct(products);

        if (productsRequest.length > 0) {
          promotions = await getPromotionPrices(productsRequest);
        }
      }
    } catch (error) { }
    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      filters: section.filters?.map((filter) => ({
        ...filter,
        products:
          responseProducts
            .find((re) => re.id === filter.filterId)
            ?.items.map?.((i) => ({
              ...i,
              price: {
                ...i.price,
                discount:
                  promotions.find((e) => e.itemCode === i.sku && e.unitCode === i.price?.measureUnitCode) || null,
              },
              restrictInfo:
                productRestrictList?.find(
                  (prod) => prod.itemCode === i.sku && prod.unitCode === i.price.measureUnitCode,
                ) || null,
            })) || [],
      })),
      icon: this.getImage(section.icon.data?.attributes),
    };
  }

  private healthCenterSectionWrapper(section: NhapThuocResponse.CMS.SectionHealthCenter): HealthCenterSection {
    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      filters: section.filters,
      redirectUrl: section.redirectUrl,
      icon: this.getImage(section.icon.data?.attributes),
      articles:
        section?.articles?.map((i) => ({
          name: i.name,
          category: i.category || null,
          slug: i.slug,
          image: this.getImage(i.primaryImage),
        })) || [],
    };
  }

  private cancerCenterSectionWrapper(section: NhapThuocResponse.CMS.SectionCancerCenter): CancerCenterSection {
    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      description: section.description,
      redirectUrl: section.redirectUrl,
      articles:
        section.articles?.map?.((i) => ({
          id: i.id,
          title: i.title,
          redirectUrl: i.redirectUrl,
          image: this.getImage(i.image.data?.attributes),
        })) || [],
      quickAccess: section.quickAccess.map((i) => ({
        title: i.title,
        redirectUrl: i.redirectUrl,
        icon: this.getImage(i.icon.data?.attributes),
      })),
    };
  }

  private topSearchSectionWrapper(section: NhapThuocResponse.CMS.SectionTopSearch): TopSearchSection {
    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      icon: this.getImage(section.icon.data?.attributes),
      keywords: section.keywords,
    };
  }

  private diseaseSectionWrapper(section: NhapThuocResponse.CMS.SectionDisease): DiseaseSection {
    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      redirectUrl: section.redirectUrl,
      icon: this.getImage(section.icon.data?.attributes),
      diseases: section.representativeDiseases.map((i) => ({
        id: i.id,
        title: i.title,
        items: i.items?.map((e) => ({
          id: e.id,
          name: e.name,
          category: e.category || null,
          image: this.getImage(e.image.data?.attributes),
          articles:
            e.articles?.map((article) => ({
              name: article.name,
              slug: article.slug,
            })) || [],
        })),
      })),
    };
  }

  private async recommendSectionWrapper(section: NhapThuocResponse.CMS.SectionRecommend): Promise<ProductsSection> {
    let products: NhapThuocResponse.SearchService.ListProduct[] = [],
      promotions: NhapThuocResponse.Promotions.DiscountPromotion[] = [];

    let productRestrictList: NhapThuocResponse.Product.ProductRestrictInfo[];
    const productsRequest: string[] = section?.products?.map((i) => i.sku) || [];

    try {
      if (productsRequest.length > 0) {
        products = await getListProduct(productsRequest);
        const productsRequestPromotion =
          products.reduce?.<NhapThuocPayload.Promotions.GetPromotionPrices[]>((prev, next) => {
            if (next.price?.measureUnitCode) {
              prev.push({
                itemCode: next.sku,
                unitCode: next.price.measureUnitCode,
                price: next.price.price,
              });
            }
            return prev;
          }, []) || [];

        productRestrictList = await this.getRestrictInfoProduct(products);

        if (productsRequestPromotion.length > 0) {
          promotions = await getPromotionPrices(productsRequestPromotion);
        }
      }
    } catch (error) { }

    return {
      ...this.basicSectionWrapper(section),
      title: section.title,
      icon: this.getImage(section.icon.data?.attributes),
      products:
        products?.map?.((i) => ({
          ...i,
          price: {
            ...i.price,
            discount: promotions.find((e) => e.itemCode === i.sku && e.unitCode === i.price?.measureUnitCode) || null,
          },
          restrictInfo:
            productRestrictList?.find((prod) => prod.itemCode === i.sku && prod.unitCode === i.price.measureUnitCode) ||
            null,
        })) || [],
    };
  }

  private ctaSectionWrapper(section: NhapThuocResponse.CMS.SectionCTA): CTASection {
    return {
      ...this.basicSectionWrapper(section),
      links: section.links.map((i) => ({
        redirectUrl: i.redirectUrl,
        image: {
          web: this.getImage(i.webImage?.data?.attributes),
          mobile: this.getImage(i.mobileImage?.data?.attributes),
        },
      })),
    };
  }

  private getImage(image?: NhapThuocResponse.Landings.Attributes): Image {
    if (!image) {
      return;
    }

    return {
      url: image.url || '',
      alt: image.alternativeText || '',
      name: image.name || '',
    };
  }

  private getSEOProperty(): SEOProperties | undefined {
    const seo = this.data?.seo;

    if (!seo) {
      return;
    }

    return {
      title: seo.metaTitle,
      description: seo.metaDescription,
      keywords: seo.keywords,
      image: this.getImage(seo.metaImage.data?.attributes) || null,
      social: seo.metaSocial.map((i) => ({
        name: i.socialNetwork,
        title: i.title,
        description: i.description,
        image: this.getImage(i.image.data?.attributes),
      })),
    };
  }

  private wrapSection(t: NhapThuocResponse.CMS.Section) {
    switch (t.__component) {
      case HOME_COMPONENT_SECTION.BANNER:
        return this.bannerSectionWrapper(t as NhapThuocResponse.CMS.SectionBanner);
      case HOME_COMPONENT_SECTION.CANCER_CENTER:
        return this.cancerCenterSectionWrapper(t as NhapThuocResponse.CMS.SectionCancerCenter);
      case HOME_COMPONENT_SECTION.CTA:
        return this.ctaSectionWrapper(t as NhapThuocResponse.CMS.SectionCTA);
      case HOME_COMPONENT_SECTION.DISEASE:
        return this.diseaseSectionWrapper(t as NhapThuocResponse.CMS.SectionDisease);
      case HOME_COMPONENT_SECTION.FEATURED_CATEGORY:
        return this.featuredCategorySectionWrapper(t as NhapThuocResponse.CMS.SectionFeaturedCategory);
      case HOME_COMPONENT_SECTION.FEATURED_PRODUCT:
        return this.featuredProductSectionWrapper(t as NhapThuocResponse.CMS.SectionFeaturedProduct);
      case HOME_COMPONENT_SECTION.FLASH_SALE:
        return this.flashSaleProductSectionWrapper(t as NhapThuocResponse.CMS.SectionFlashSale);
      case HOME_COMPONENT_SECTION.FILTER_PRODUCT:
        return this.filteredProductSectionWrapper(t as NhapThuocResponse.CMS.SectionFilteredProduct);
      case HOME_COMPONENT_SECTION.HEALTH_CENTER:
        return this.healthCenterSectionWrapper(t as NhapThuocResponse.CMS.SectionHealthCenter);
      case HOME_COMPONENT_SECTION.POLICY:
        return this.policySectionWrapper(t as NhapThuocResponse.CMS.SectionPoliciy);
      case HOME_COMPONENT_SECTION.RECOMMEND:
        return this.recommendSectionWrapper(t as NhapThuocResponse.CMS.SectionRecommend);
      case HOME_COMPONENT_SECTION.TOP_SEARCH:
        return this.topSearchSectionWrapper(t as NhapThuocResponse.CMS.SectionTopSearch);
      case HOME_COMPONENT_SECTION.PROGRAM:
        return this.programSectionWrapper(t as NhapThuocResponse.CMS.SectionProgram);
      default:
        break;
    }
  }

  public async wrapResponse(): Promise<HomePageProps> {
    const homeProps = {
      background: {
        web: this.getImage(this.data.webBackground.data?.attributes),
        mobile: this.getImage(this.data.mobileBackground.data?.attributes),
      },
      originalSections: this.data.sections,
      sections: (await this.getActiveSections()) || null,
      seo: this.getSEOProperty() || null,
    };

    removeUndefinedProps(homeProps);

    return homeProps;
  }

  private async getRestrictInfoProduct(products: NhapThuocResponse.SearchService.ListProduct[]) {
    if (!products) return;

    let productRestrictList: NhapThuocResponse.Product.ProductRestrictInfo[] = [];

    const productRequestRestrictInfo: NhapThuocPayload.Product.RestrictInfoRequest = {
      listDataVerified: products.map((item) => {
        return {
          itemCode: item.sku,
          unitCode: item.price.measureUnitCode,
        };
      }),
      rankId: UserRanking.BRONZE_LEVEL,
    };
    if (productRequestRestrictInfo?.listDataVerified?.length > 0) {
      try {
        productRestrictList = await getRestrictInfo(productRequestRestrictInfo);
      } catch (error) { }
    }

    return productRestrictList;
  }
}
