import { update } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';
import { Options } from '.';

const useUpdateCustomerMutation = (id?: string, options?: Options) =>
  useMutation((payload: NhapThuocPayload.Customers.Update) => {
    return update(id, payload);
  }, options);

export default useUpdateCustomerMutation;
