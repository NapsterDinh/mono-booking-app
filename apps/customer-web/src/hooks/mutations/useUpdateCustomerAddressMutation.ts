import { updateCustomerAddress } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';
import { Options } from '.';

const useUpdateCustomerAddressMutation = (options?: Options) =>
  useMutation((payload: NhapThuocPayload.Customers.UpdateAddress) => {
    return updateCustomerAddress(payload);
  }, options);

export default useUpdateCustomerAddressMutation;
