import { deleteCustomerInvoice } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';
import { Options } from '.';

const useDeleteCustomerInvoiceMutation = (options?: Options) =>
  useMutation((payload: NhapThuocPayload.Customers.DeleteInvoice) => {
    return deleteCustomerInvoice(payload);
  }, options);

export default useDeleteCustomerInvoiceMutation;
