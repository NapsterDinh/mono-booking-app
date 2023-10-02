import { createOrderRefundRequest } from '@customer-web/request-providers/order';
import { useMutation } from '@tanstack/react-query';

const useCreateOrderRefundRequestMutation = () =>
  useMutation((payload: NhapThuocPayload.CancelDeposit.RequestSubmitFormForDeposit) => {
    return createOrderRefundRequest(payload);
  });

export default useCreateOrderRefundRequestMutation;
