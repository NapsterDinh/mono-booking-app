import { changePassword } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';
import { ChangePasswordPayload } from '../../types/api/payload/customer';

const useChangePasswordMutation = () =>
  useMutation((payload: ChangePasswordPayload) => {
    return changePassword(payload);
  });

export default useChangePasswordMutation;
