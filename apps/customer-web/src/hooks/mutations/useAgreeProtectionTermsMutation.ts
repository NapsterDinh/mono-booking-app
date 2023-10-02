import { agreeProtectionTerms } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';

const useAgreeProtectionTerms = () =>
  useMutation(() => {
    return agreeProtectionTerms();
  });

export default useAgreeProtectionTerms;
