declare namespace NhapThuocResponse {
  declare namespace SearchSuggest {
    interface Keyword {
      name: string;
      url: string;
    }

    interface Category {
      name: string;
      fullSlug: string;
      rootCategory: string;
    }

    interface Product {
      code: string;
      name: string;
      url: string;
      price: number;
      priceLabel: string;
      category: string;
      urlCate: string;
      unit: string;
      unitCode: number;
      image: string;
      isDisplayCode: number;
      isShowPrice: boolean;
      discount?: NhapThuocResponse.Promotions.DiscountPromotion;
    }

    interface History {
      title: string;
    }

    interface Data {
      keywords: Keyword[];
      categories: Category[];
      products: Product[];
    }
  }
}
