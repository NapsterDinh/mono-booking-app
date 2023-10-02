declare namespace NhapThuocResponse {
  declare namespace SearchService {
    interface ProductBasic {
      sku?: string;
      webName?: string;
      name?: string;
      image?: string;
      slug?: string;
      productRanking?: number;
      displayCode?: number;
      price?: Price;
      specification?: string;
      inventory?: number;
      category?: ProductCategory[];
      notBuy?: boolean;
      restrictInfo?: NhapThuocResponse.Product.ProductRestrictInfo;
    }
    interface CategoryBasic {
      id: number;
      name: string;
      fullPathSlug: string;
      countProduct: number;
    }
    interface ProductCategory {
      id: number;
      name: string;
      parentName: string | null;
      level: number;
      slug: string;
    }
    interface BestSellersResponse {
      totalCount: number;
      items: BestSeller[];
    }
    interface BestSeller extends ProductBasic {}
    interface ListProduct extends ProductBasic {}
    interface ProductByCategorySlug extends ProductSearchDetail {
      category?: ProductCategory[];
    }
    interface SearchDetail {
      totalCount: number;
      products: ProductSearchDetail[];
      aggregation?: any;
      aggregations: Aggregation[] | null;
    }
    interface ListProductByCategorySlug extends SearchDetail {}
    interface ListCategory extends CategoryBasic {}
    interface ProductSearchDetail extends ProductBasic {
      ingredients?: string;
      dosageForm?: any;
      displayCode?: number;
      isActive?: boolean;
      isPublish?: boolean;
      searchScoring?: string;
      brand?: string;
      description?: string;
      shortDescription?: string;
      manufactor?: string;
      producer?: string;
      registNum?: string;
      primaryImage?: string;
      secondaryImages?: string[];
      categories?: { name?: string; slug?: string; level?: number }[];
      ingredient?: {
        id: number;
        ingredientId: number;
        isPrimary: boolean;
        name: string;
        shortDescription?: string;
      }[];
      pimIngredients?: {
        id: number;
        ingredientId: number;
        isPrimary: boolean;
        name: string;
        shortDescription?: string;
      }[];
      prescription?: boolean;
      headingText?: string;
      adverseEffect?: string;
      dosage?: string;
      warning?: string[];
      warrantyPeriod?: string;
      webIngredient?: string;
      usage?: string;
      careful?: string;
      preservation?: string;
      restrictInfo?: NhapThuocResponse.Product.ProductRestrictInfo;
    }
    interface PriceSystem {
      priceFrom: number;
      priceTo: number;
    }
    interface Aggregation {
      code: string;
      values: string[];
    }
    interface FilterObject extends ProductBasic {
      totalCount: number;
      items: ProductBasic[];
    }

    interface Price {
      isSellDefault?: boolean;
      inventory?: number;
      measureUnitCode?: number;
      measureUnitName?: string;
      price?: number;
      discount?: NhapThuocResponse.Promotions.DiscountPromotion | null;
      currencySymbol?: string;
    }

    interface SearchSuggest {
      keywords?: SearchSuggestKeyword[];
      categories?: {
        id: number;
        isActive: boolean;
        level: number;
        name: string;
        parentName?: string;
        searchScoring?: number;
        slug: string;
      }[];
      products?: SearchSuggestProduct[];
    }

    interface SearchSuggestKeyword {
      keyword: string;
    }

    interface SearchSuggestProduct extends ProductBasic {}

    interface Posts {
      totalCount: number;
      items: PostItem[];
    }

    interface PostItemCategory {
      name: string;
      nameEng: string;
      slug: string;
    }
    interface PostItem {
      id: number;
      name: string;
      shortDescription: string;
      image?: any;
      slug: string;
      category: PostItemCategory;
      type: string;
      isPublish: boolean;
      isActive: boolean;
      createdDate?: string;
    }
  }
}
