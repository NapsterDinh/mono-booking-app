declare namespace NhapThuocResponse {
  declare namespace Promisings {
    interface Custom<T> {
      data: T;
    }
    interface PickUpShop {
      shop: Shop;
      pickupOption: PickupOption;
      productInventories: ProductInventories[];
    }
    interface PickupOption {
      fromTime: string;
      toTime: string;
      pickupType: number;
      pickupTypeName: string;
      availableChangeTime: AvailableChangeTime;
    }
    interface Shop {
      shopCode: string;
      shopName: string;
      address: string;
      cityCode: string;
      districtCode: string;
      wardCode: string;
      timeOpen: string;
      timeClose: string;
      location: {
        latitude: number;
        longitude: number;
      };
      distance: number;
      duration: number;
      flagInventory: true;
      flagShopHub: true;
      priority: number;
      workingStatus: 1 | 2;
      workingStatusName: string;
    }
    interface HomeDelivery {
      receiver: Receiver;
      shopSender: ShopSender;
      productInventories: ProductInventories[];
      providers: Provider[];
    }

    interface Receiver {
      address: string;
      cityCode: string;
      districtCode: string;
      fullName: string;
      location: { latitude: number; longitude: number };
      phone: string;
      wardCode: string;
    }

    interface ShopSender {
      flagInventory: boolean;
      flagShopHub: boolean;
      shopCode: string;
      shopName: string;
      address: string;
      cityCode: string;
      districtCode: string;
      wardCode: string;
      timeOpen: string;
      timeClose: string;
      location: { latitude: number; longitude: number };
    }
    interface ProductInventories {
      id: string;
      name: string;
      price: number;
      quantity: number;
      unit: number;
      whsCode: string;
      whsName: string;
      quantity_available: number;
    }

    interface AvailableChangeTime {
      from: string;
      to: string;
    }

    interface Provider {
      carrierCode: number;
      carrierName: string;
      code: string;
      distance: number;
      duration: number;
      feeCarier: number;
      feeFrt: number;
      flagInventory: boolean;
      flagShopHub: boolean;
      fromDeliveryTime: Date;
      planningId: string;
      priority: number;
      toDeliveryTime: string;
      availableChangeTime: AvailableChangeTime;
    }

    interface GetDeliveryServices {
      services: {
        serviceCode?: number;
        description?: string;
        serviceName?: string;
        estimatedDeliveryDate?: string;
        isEnable?: boolean;
      }[];
    }
  }
}
