import * as promisingService from '@customer-web/request-providers/promising';
import { useCartState, useDeliveryAddress, useSelectedCartItems } from '@customer-web/state/cart/hooks';
import { useDeepCompareEffect } from 'ahooks';
import { useMemo, useState } from 'react';
import { QueryOptions } from './queries/useQuery';

const useDeliveryServices = (options?: QueryOptions) => {
  const deliveryAddress = useDeliveryAddress();
  const cartInfo = useCartState();
  const cartItems = useSelectedCartItems();
  const products = useMemo(() => {
    return cartItems.map((item) => ({
      id: item.productInfo?.itemCode,
      name: item.productInfo?.name,
      unit: item.unitCode,
      quantity: item.quantity,
      price: item.detailCalculatorPriceInfo?.price,
      whsCodeEndWith: item.whsCode,
      isCheckInventory: true,
      isScarceGood: true,
      isColdPreserve: item.productInfo?.isColdStorage ?? false,
    }));
  }, [cartItems]);
  const [deliveryServices, setDeliveryServices] = useState<
    {
      serviceCode?: number;
      description?: string;
      serviceName?: string;
      estimatedDeliveryDate?: string;
      isEnable?: boolean;
    }[]
  >();

  const getDeliveryServices = async (
    deliveryAddress?: NhapThuocResponse.Customers.Address,
    products?: {
      id: string;
      name: string;
      unit: number;
      quantity: number;
      price: number;
      whsCodeEndWith: string;
      isCheckInventory: boolean;
      isScarceGood: boolean;
      isColdPreserve: boolean;
    }[],
  ) => {
    if (!deliveryAddress || !products?.length) {
      return;
    }

    const payload = {
      receiverName: deliveryAddress?.name,
      receiverPhone: deliveryAddress?.mobilePhone,
      receiverFullAddress: `${deliveryAddress?.address}, ${deliveryAddress?.wardName}, ${deliveryAddress?.districtName}, ${deliveryAddress?.provinceName}`,
      districtCode: deliveryAddress?.districtCode,
      cityCode: deliveryAddress?.provinceCode,
      wardCode: deliveryAddress?.wardCode,
      orderDoctotal: cartInfo?.information?.calculatorPriceInfo?.totalBill,
      product: products,
    };

    try {
      let services = (await promisingService.getDeliveryServices(payload)).services || [];
      services = services.slice().filter((service) => service.isEnable);
      services.reverse();

      setDeliveryServices(services);
    } catch (error) {
      setDeliveryServices([]);
    }
  };

  useDeepCompareEffect(() => {
    getDeliveryServices(deliveryAddress, products);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deliveryAddress, products]);

  return deliveryServices;
};

export default useDeliveryServices;
