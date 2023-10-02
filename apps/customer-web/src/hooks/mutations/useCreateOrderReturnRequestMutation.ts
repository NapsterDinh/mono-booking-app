import { submitReturn } from '@customer-web/request-providers/order';
import { useMutation } from '@tanstack/react-query';

const useCreateOrderReturnRequestMutation = () =>
  useMutation((payload: NhapThuocPayload.Return.RequestSubmitFormForReturn) => {
    return submitReturn(payload);
  });

export default useCreateOrderReturnRequestMutation;
