import { createTpBankPaymentLink } from '@customer-web/request-providers/payment';
import { useMutation } from '@tanstack/react-query';
import { CreateTpBankPaymentLinkResponse } from '../../types/api/response/payment';

type Options = Parameters<typeof useMutation<CreateTpBankPaymentLinkResponse, any, any>>[2];

const useCreateTpBankPaymentLinkMutation = (options?: Options) =>
  useMutation((orderCode?: string) => {
    return createTpBankPaymentLink(orderCode);
  }, options);

export default useCreateTpBankPaymentLinkMutation;
