declare namespace NhapThuocResponse {
  declare namespace Product {
    interface Products {
      status: number;
      total: number;
      data: ProductDetailItem[];
    }

    interface Unit {
      unitId: number;
      unitName: string;
      isDefault: boolean;
      level: number;
      price: number;
    }

    interface ProductDetailItem {
      sku: string;
      price: number;
      priceLabel: string;
      sale: number;
      saleLabel: string;
      specifications: string;
      url: string;
      name: string;
      shortName: string;
      unitDefault: number;
      unitDefaultLabel: string;
      units: Unit[];
      isHotItem: boolean;
      primaryImage: string;
      ecomCategory: ecomCategories[];
      brand: string;
      country?: any;
      producer: string;
      brandCountry: string;
      drugForm?: any;
      drugUse: string;
      ingredients: string[];
      otc?: any;
      ranking: number;
      isDisplayCode: number;
      inventory: number;
      isShowPrice: boolean;
      isOrder: boolean;
      isShowBtn: number;
      isPointBlock: boolean;
      discount?: NhapThuocResponse.Promotions.DiscountPromotion;
      // LabelIcon of CMS
      discountIcon?: string | null;
      restrictInfo?: NhapThuocResponseNh.Product.ProductRestrictInfo;
    }

    interface ecomCategories {
      name: string;
      slug: string;
      level: number;
      url: string;
    }

    interface FilterData {
      slugCate: string;
      totalCount: number;
      items: ProductDetailItem[];
    }

    interface ProductList {
      status: number;
      data: ProductListData;
    }

    interface ProductListData {
      total: number;
      items: ProductRaw[];
      filter: ProductListDataFilter[];
      priceList: ProductListDataPriceList[];
    }

    interface ProductListDataFilter {
      name: string;
      key: string;
      items: ProductListDataFilterItem[];
    }

    interface ProductListDataFilterItem {
      slug: string;
      key: string;
      count: number;
    }

    interface ProductListDataPriceList {
      title: string;
      fromPrice: number;
      toPrice: number;
    }

    interface ProductRaw {
      itemCode: string;
      url: string;
      primaryImage: string;
      name: string;
      priceLabel: string;
      unitDefaultLabel: string;
      specifications: string;

      inventoryQty: number;
      saleQty: number;
      productPrices: {
        migrationId: number;
        measureId: number;
        measureUnit: string;
        productCode: string;
        currencyCode: string;
        costPrice: number;
        bookName: string;
        currencySymbol: string;
        shopCode: string;
        priceBookId: string;
      }[];
      packageDetails: {
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
      }[];
      ingredientDetails: {
        name: string;
        value: string;
        measureUnit: string;
        isPrimary: boolean;
      }[];
      isExpried: boolean;
      id: number;
      isPrivateLabel: boolean;
      lastModifierId?: any;
      deleterId?: any;
      isHotItem: boolean;
      productType: string;
      lastModificationTime: Date;
      productTypeId: number;
      name: string;
      isPublished: boolean;
      price: number;
      isDeleted: boolean;
      sku: string;
      ecomCategories: string[];
      countRareItem: number;
      ingredients: string[];
      creationTime: Date;
      code: string;
      isActive: boolean;
      categories: any[];
      deletionTime?: any;
      tags: string[];
      shortName: string;
      description?: any;
      isRarelyItem: boolean;
      webName: string;
      creatorId?: any;
      drugUse: string;
      ranking: number;
      scoring: number;
      drugForm: string;
      mainImage: string;
      slug: string;
      fullPathSlug: string;
      isDisplayCode: string;
      isDisplayName: string;
      age: any[];
      ecomType: string;
      ecomMainCategory?: any;
      ecomMainCategorySlug?: any;
      packageType: string;
      measureUnit: string;
      measureUnitMigrationId: number;
      measureUnitId: number;
      medicineType: number;
      barcode: any[];
      expireBarcode: string[];
      warehouseBarcode: string[];
      country: string;
      brandCountry: string;
      producer: string;
      brand: string;
      webNameWithoutSymbol: string;
      drugAttribute: string;
      drugDescription: string;
      categoryDetails: {
        level: number;
        name: string;
        slug: string;
        id: number;
        type: number;
        fullPathSlug: string;
      }[];
      groupCategorySlug: string[];
      categorySlug: string[];
      ingredientWebContent: string;
      inVATCode: string;
      inVATRate: number;
      outVATCode: string;
      outVATRate: number;
      isColdPreserve?: any;
      productKindId: number;
      isPointBlock: boolean;
      isMedicineDose: boolean;
      isSearchCombo: boolean;
      listCombo: any[];
      isSearchSO: boolean;
      listSO: any[];
      isSpecialControl: boolean;
      drugAttributeShop?: any;
      isHiddenWeb: boolean;
    }

    interface ProductRestrictInfo {
      businessTypeRestrictList: number[];
      itemCode: string;
      quantity: number;
      unitCode: number;
      isRestrictSale: boolean;
      rankId: number;
    }
  }
}
