declare namespace NhapThuocResponse {
  declare namespace Carts {
    interface CartInfo {
      calculatorPriceInfo?: CalculatorPriceInfo;
      cartPromotions: CartPromotion[];
      listCart: ListCart[];
      listCartCustomer: ListCart[];
      loyalty?: Loyalty;
      vouchers: DetailtVoucherCart[];
      policy: PolicyCartInfo;
    }

    interface Loyalty {
      totalPoint: number;
    }

    interface ListCart {
      canBuy: boolean;
      creationTime: string;
      detailCalculatorPriceInfo: DetailCalculatorPriceInfo;
      id?: string;
      isSelected?: boolean;
      itemCart: string;
      itemType: number;
      listSuggestPromotion: ListSuggestPromotion[];
      productInfo: ProductInfo;
      quantity: number;
      unitCode: number;
      unitName: string;
      whsCode: string;
      policy: Policy;
    }

    interface ProductInfo {
      sku?: string;
      fullPathSlug: string;
      itemCode: string;
      mainImage: string;
      name: string;
      webName: string;
      unitCode: number;
      unitName: string;
      packageDetails: PackageDetail[];
      isColdStorage?: boolean;
      isSpecialControl?: boolean;
    }

    interface PackageDetail {
      isActive: boolean;
      isDefault: boolean;
      level: number;
      name: string;
      point: number;
      pointId: number;
      price: number;
      ratio: number;
      unitCode: number;
      unitName: string;
    }

    interface DetailCalculatorPriceInfo {
      discount: number;
      discountPromotion: number;
      isExpiredDate: boolean;
      isHot: boolean;
      isPromotion: boolean;
      itemCode: string;
      itemName: string;
      price: number;
      priceAfterDiscount: number;
      priceDiscountPromotion: number;
      quantity: number;
      total: number;
      totalBill: number;
      unitCode: number;
      unitName: string;
      whsCode: string;
      whsName: string;
    }

    interface ListSuggestPromotion {
      giftProduct?: GiftProduct[];
      image: string;
      isMatching: boolean;
      promotionCode: string;
      promotionName: string;
      promotionExcluded: string[];
      promotionTypeCode: string;
      returnCode: string;
      returnMessage: string;
      statusCode?: string;
    }

    interface GiftProduct {
      fullPathSlug: string;
      itemCode: string;
      mainImage: string;
      quantity: number;
      unitCode: number;
      unitName: string;
      webName: string;
    }

    interface CalculatorPriceInfo {
      // minDeposit: number
      // pointFriendSell: number
      shipmentFee: number;
      sumDiscount: number;
      total: number;
      totalBill: number;
      totalDiscount: number;
      totalTax: number;
      totalVoucherPrice: number;
      principalAmount: number;
      principalAmountAfterPromotion: number;
      estimatedPrice: number;
    }

    interface Session {
      sessionId: string;
      sessionName: string;
    }

    interface CartPromotion {
      giftProduct?: GiftProduct;
      isMatching: boolean;
      promotionCode: string;
      promotionExcluded: any[];
      promotionName: string;
      returnCode: string;
      returnMessage: string;
      statusCode: string;
      promotionTypeCode: string;
      urlImage: string;
      urlPage: string;
    }

    interface DetailtVoucherCart {
      seriesCode: string;
      status: number;
      statusName: string;
      fromDate: string;
      toDate: string;
      voucherType: number;
      voucherTypeName: string;
      voucherName: string;
      price: number;
      discountPercent: number;
      maxDiscountAmount: number;
      discountType: number;
      supplier: number;
    }

    interface Submit {
      mocaResponse: any | null;
      orderCode: string;
      paymentLink: string;
      paymentRequestCode: string;
      zaloResponse: any | null;
    }

    interface Policy {
      // isConflict: boolean
      isDisable: boolean;
      // quantityMax: number
      message: string;
      type: number;
      quantityMax: number;
    }

    interface PolicyCartInfo {
      friendSell: InforPolicyFriendSell;
      cart: InforPolicyCart;
      shopException: any[];
    }

    interface InforPolicyFriendSell {
      isUse: boolean;
      message: string;
      productsException: any[];
    }

    interface InforPolicyCart {
      type: number;
      message: string;
    }
  }
}
