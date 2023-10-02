import { useEstimatedPrice } from '@customer-web/state/cart/hooks';
import useOrderShippingFee from './useOrderShippingFee';

const useOrderEstimatedPrice = (deliveryMethod?: number) => {
  const orderShippingFee = useOrderShippingFee(deliveryMethod);
  const estimatedPrice = useEstimatedPrice();

  return estimatedPrice + orderShippingFee;
};

export default useOrderEstimatedPrice;
