import { createCustomerAddress } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';
import { Options } from '.';

const useCreateCustomerAddressMutation = (options?: Options) =>
  useMutation((payload: NhapThuocPayload.Customers.UpdateAddress) => {
    return createCustomerAddress(payload);
  }, options);

export default useCreateCustomerAddressMutation;
