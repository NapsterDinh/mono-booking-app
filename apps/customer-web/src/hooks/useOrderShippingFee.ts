import { DeliveryMethod } from '@customer-web/enums/DeliveryMethod';
import { useEstimatedPrice, useHasColdProduct } from '@customer-web/state/cart/hooks';

// rules: https://confluence.fptshop.com.vn/pages/viewpage.action?pageId=125537450
// TODO: using server info when have api
const useOrderShippingFee = (deliveryMethod?: number) => {
  const hasColdProduct = useHasColdProduct();
  const estimatedPrice = useEstimatedPrice();

  if (!deliveryMethod) {
    return 0;
  }

  if (hasColdProduct) {
    if (deliveryMethod === DeliveryMethod.EXPRESS && estimatedPrice <= 10_000_000) {
      return 30000;
    }

    return 0;
  }

  if (deliveryMethod === DeliveryMethod.EXPRESS && estimatedPrice <= 10_000_000) {
    return 30000;
  }

  if (deliveryMethod === DeliveryMethod.STANDARD && estimatedPrice < 1_500_000) {
    return 20000;
  }

  return 0;
};

export default useOrderShippingFee;
