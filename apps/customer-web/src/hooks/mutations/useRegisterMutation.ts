import { register } from '@customer-web/request-providers/estore';
import { useMutation } from '@tanstack/react-query';

const useRegisterMutation = () =>
  useMutation((payload: NhapThuocPayload.Customers.CreateCustomer) => {
    return register(payload);
  });

export default useRegisterMutation;
