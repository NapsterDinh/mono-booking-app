declare namespace NhapThuocPayload {
  declare namespace Promisings {
    interface Product {
      id: string;
      name: string;
      unit: number;
      quantity: number;
      price: number;
    }
    interface PickUpShop {
      product: Product[];
      districtCode: string;
      cityCode: string;
      orderDoctotal: number;
      shopCodeException: string[];
    }
    interface HomeDelivery extends PickUpShop {
      receiverName: string;
      receiverPhone: string;
      receiverFullAddress: string;
      wardCode: string;
    }

    interface UpdatePromise {
      planningId: string;
      fromDeliveryTime: string;
      toDeliveryTime: string;
    }

    interface GetDeliveryServices {
      receiverName?: string;
      receiverPhone?: string;
      receiverFullAddress?: string;
      product?: {
        id?: string;
        name?: string;
        unit?: number;
        quantity?: number;
        price?: number;
        whsCodeEndWith?: string;
        isCheckInventory?: boolean;
        isScarceGood?: boolean;
        isColdPreserve?: boolean;
      }[];
      districtCode?: string;
      cityCode?: string;
      wardCode?: string;
      orderDoctotal?: number;
    }
  }
}
