import { OrderChannel } from '@customer-web/enums/Channel';
import { getListMethod } from '@customer-web/services/request/providers/payment';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';

const usePaymentMethodsQuery = (options?: QueryOptions) => {
  const payload: NhapThuocPayload.Payments.ListMethod = {
    details: [],
    orderChannel: OrderChannel.WEB_NHAP_THUOC.toString(),
  };

  const queryFn = () => getListMethod(payload);

  return useQuery(['payment-methods'], queryFn, {
    ...options,
  });
};

export default usePaymentMethodsQuery;
