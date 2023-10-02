import { getPaymentStatusByPaymentCode } from '@customer-web/request-providers/payment';
import { PaymentStatusByPaymentCodeResponse } from '../../types/api/response/payment';
import useQuery from './useQuery';

type Options = Parameters<typeof useQuery<PaymentStatusByPaymentCodeResponse>>[2];

const usePaymentStatusByPaymentCodeQuery = (paymentCode?: string, options?: Options) => {
  const queryFn = () => getPaymentStatusByPaymentCode(paymentCode);

  return useQuery(['payment-status-by-payment-code'], queryFn, {
    enabled: !!paymentCode,
    ...options,
  });
};

export default usePaymentStatusByPaymentCodeQuery;
