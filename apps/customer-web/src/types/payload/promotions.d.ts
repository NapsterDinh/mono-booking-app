declare namespace NhapThuocPayload {
  declare namespace Promotions {
    interface GetPromotionPrices {
      itemCode?: string;
      unitCode: number;
      price?: number;
    }

    interface Suggest {
      itemCode?: string;
      unitCode?: number;
      price?: number;
      categoryCode?: string;
      shopCode?: string;
    }
  }
}
