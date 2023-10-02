import { updateCustomerInvoice } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';

const useUpdateCustomerInvoiceMutation = (customerId?: string) =>
  useMutation((payload: NhapThuocPayload.Customers.UpdateInvoice) => {
    return updateCustomerInvoice(customerId!, payload);
  });

export default useUpdateCustomerInvoiceMutation;
