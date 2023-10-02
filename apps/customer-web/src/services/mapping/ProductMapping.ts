export class ProductMapping {
  static mappingLandingProducts(landingProductItems?: NhapThuocResponse.Landings.ProductItem[]) {
    const productItemModal: NhapThuocResponse.Product.ProductDetailItem[] = [];

    if (landingProductItems == null || landingProductItems?.length <= 0) {
      return [];
    }

    landingProductItems = landingProductItems.filter(
      (landingProductItem) => landingProductItem?.webName != null && landingProductItem?.webName?.length > 0,
    );

    landingProductItems.map((landingProductItem) => {
      const fullPathSlug: string =
        landingProductItem.fullPathSlug != null && landingProductItem.fullPathSlug.charAt(0) !== '/'
          ? `/${landingProductItem.fullPathSlug}`
          : landingProductItem.fullPathSlug;

      productItemModal.push({
        sku: landingProductItem.sku,
        price: landingProductItem?.price ?? 0,
        priceLabel: landingProductItem.priceLabel,
        sale: landingProductItem?.discount?.finalPrice ?? 0,
        saleLabel: '',
        specifications: '',
        url: fullPathSlug,
        name: landingProductItem.webName,
        shortName: landingProductItem.shortName,
        unitDefault: landingProductItem.measureUnitMigrationId ?? 0,
        unitDefaultLabel: landingProductItem.measureUnit,
        units: [],
        isHotItem: false,
        primaryImage: landingProductItem.mainImage,
        ecomCategory: [],
        brand: landingProductItem.brand,
        producer: landingProductItem.producer,
        brandCountry: landingProductItem.brandCountry,
        drugUse: landingProductItem.drugUse,
        ingredients: landingProductItem.ingredients,
        ranking: landingProductItem.ranking ?? 0,
        isDisplayCode: parseInt(landingProductItem.isDisplayCode),
        inventory: landingProductItem.inventoryQty ?? 0,
        isShowPrice: landingProductItem.isShowPrice ?? false,
        isOrder: false,
        isShowBtn: landingProductItem.isShowBtn ?? 0,
        isPointBlock: landingProductItem.isPointBlock ?? false,
        discountIcon: landingProductItem.discountIcon || '',
      });
    });

    return productItemModal;
  }
}
