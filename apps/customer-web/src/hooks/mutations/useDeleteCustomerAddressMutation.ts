import { deleteCustomerAddress } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';
import { Options } from '.';

const useDeleteCustomerAddressMutation = (options?: Options) =>
  useMutation((payload: NhapThuocPayload.Customers.DeleteAddress) => {
    return deleteCustomerAddress(payload);
  }, options);

export default useDeleteCustomerAddressMutation;
