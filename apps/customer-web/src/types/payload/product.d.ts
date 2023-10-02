declare namespace NhapThuocPayload {
  declare namespace Product {
    interface Filter {
      type: string;
      category: string;
      sort: string;
      page: number;
      size: number;
    }

    interface List {
      categoryType: string;
      fromPrice: number;
      toPrice: number;
      isHotItem: boolean;
      page: string;
      size: number;
      isDisplayCode: string[];
      categorySlug: string;
      filter: any[];
      sort: any;
    }
    interface RestrictInfoRequest {
      listDataVerified: {
        itemCode: string;
        unitCode: number;
      }[];
      rankId: number;
    }
  }
}
