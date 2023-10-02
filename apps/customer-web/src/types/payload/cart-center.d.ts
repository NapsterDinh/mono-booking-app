/**
 * For Cart Center only
 */

declare namespace NhapThuocPayload {
  declare namespace CartCenter {
    interface Get {
      customerId: string;
      anonymousId: string;
    }

    interface Item {
      sku: string;
      unit: number;
      quantity: number;
      isFriendSell: boolean;
      promotions: string[];
    }

    interface AddProduct {
      customerId: string;
      anonymousId: string;
      items: Item[];
    }

    type RemoveProduct = AddProduct;
  }
}
