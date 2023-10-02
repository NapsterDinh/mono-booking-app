declare namespace NhapThuocPayload {
  declare namespace SearchService {
    interface Basic {
      skipCount?: number;
      maxResultCount?: number;
    }
    interface BestSeller extends Basic {}
    interface FilterObject extends Basic {
      Id: number;
    }

    interface SearchDetail extends Basic {
      keyword?: string;
      sortType: 4 | 2 | 1; // 4 -> Ranking | 2 -> High price to low price | 1 Low price to high price
      [key: string]: any;
      // Hardcoding  [objectUse & category]
      // objectUse?: string[]
      // category?: string[]
      codes?: string[];
      isCorrect?: boolean;
    }

    interface Post extends Basic {
      keyword: string;
    }

    interface ListProductByCategorySlug extends Basic {
      sortType?: 0 | 1 | 2 | 3 | 4;
      category?: string[];
      codes?: string[];
      [key: string]: any;
    }

    interface KeyParams {
      loai?: string;
      'loai-san-pham'?: string;
      'doi-tuong'?: string;
    }

    interface SearchSuggest {
      keyword?: string;
      KeywordSuggestSize?: number;
      CatEcomSuggestSize?: number;
      ProductSuggestSize?: number;
    }

    interface SearchSuggestKeyword {
      keyword: string;
    }
  }
}
