declare namespace NhapThuocResponse {
  declare namespace CartCenter {
    interface Get {
      status: number;
      data: Data;
    }

    interface Data {
      items: Item[];
    }

    interface Item {
      sku: string;
      quantity: number;
      unit: number;
      promotions: any[];
      isFriendSell: boolean;
    }

    interface AddToCart {
      status: number;
      data: {
        code: number;
        message: string;
        anonymousId?: string | undefined;
      };
    }
  }
}
