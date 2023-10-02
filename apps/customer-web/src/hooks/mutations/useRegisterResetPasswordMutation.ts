import { registerResetPassword } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';

const useRegisterResetPasswordMutation = () =>
  useMutation((phoneNumber: string) => {
    return registerResetPassword(phoneNumber);
  });

export default useRegisterResetPasswordMutation;
