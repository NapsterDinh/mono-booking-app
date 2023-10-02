declare namespace NhapThuocResponse {
  declare namespace Promotions {
    interface Data {
      itemCode: string;
      promotions: PromotionGroups;
      discount: number;
    }

    interface DiscountPromotion {
      discountPrice: string | number;
      finalPrice: string | number;
      itemCode: string;
      unitCode: string | number;
      price: string | number;
    }

    interface Promotion {
      code?: string;
      excludecode?: string[];
      fromDate?: string;
      imageUrl?: string;
      isShowOnline?: boolean;
      name?: string;
      priority?: number;
      promotionType?: string;
      toDate?: string;
      urlPage?: string;
      webName?: string;
    }

    interface SuggestPromotion {
      displayArea?: number;
      displayAreaName?: string;
      promotions?: Promotion[];
    }

    interface Zone {
      promotionCode: number;
      promotionName: string;
      promotionDescription: string;
      discount: number;
      finalPrice: number;
      isCountDown: boolean;
      expireDate: Date;
      quantityQuota: number;
      quantityRequired: number;
      groupCode: number;
      isDefault: number;
      link: string;
      imagePromotion?: string;
    }

    interface ZoneOne {
      groupCode: number;
      quantityRequired: number;
      isCountDown: boolean;
      isDefault: boolean;
      discount: number;
      finalPrice: number;
      data: Zone;
    }

    interface ZoneFive {
      type: number;
      nameWeb: string;
      data: Zone;
    }

    interface PromotionGroups {
      section1: ZoneOne;
      section2: Zone;
      section3: Zone;
      section4: Zone;
      section5: ZoneFive[];
      section6: Zone;
    }
  }
}
