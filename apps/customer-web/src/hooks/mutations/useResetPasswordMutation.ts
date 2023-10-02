import { resetPassword } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';
import { ResetPasswordPayload } from '../../types/api/payload/customer';

const useResetPasswordMutation = () =>
  useMutation((payload: ResetPasswordPayload) => {
    return resetPassword(payload);
  });

export default useResetPasswordMutation;
