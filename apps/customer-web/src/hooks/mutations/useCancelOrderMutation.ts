import { cancelOrder } from '@customer-web/request-providers/order';
import { useMutation } from '@tanstack/react-query';
import { Options } from '.';

const useCancelOrderMutation = (options?: Options) =>
  useMutation((payload: { orderId: string; orderCode: string }) => {
    return cancelOrder({
      orderID: payload.orderId,
      orderCode: payload.orderCode,
    });
  }, options);

export default useCancelOrderMutation;
