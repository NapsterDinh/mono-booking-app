import { useCreateOrderReturnRequestMutation } from '@customer-web/hooks/mutations';
import { notification } from 'antd';
import dayjs from 'dayjs';

const useCreateOrderReturn = ({ detail }: { detail: Components.OrderDetail.Data }) => {
  const { mutateAsync: createOrderReturnRequest, isLoading } = useCreateOrderReturnRequestMutation();

  const submit = async (values: any, onSuccess?: () => void) => {
    const now = dayjs().toISOString();

    const payload = {
      orderCode: detail.orderCode,
      orderReturnId: detail.orderReturnId || '',
      paymentRequestCode: detail?.paymentRequestCode || '',
      orderReturnCode: detail?.orderReturnCode || '',
      customerId: detail.customerId || '',
      shopCode: detail.shopCode || '',
      transactionTime: now,
      transfers: {
        ...values.transfers,
        dateTranfer: now,
        content: '',
        amount: detail.orderPrice.totalPaid ?? 0,
        createdBy: detail.modifiedBy || '',
        createdByName: detail.modifiedByName || '',
      },
    };

    try {
      await createOrderReturnRequest(payload);

      onSuccess && onSuccess();

      notification.success({
        message: 'Tạo yêu cầu trả hàng thành công',
      });
    } catch (error) {
      notification.error({
        message: 'Thông tin tài khoản của bạn đã được gửi trước đó',
      });
    }
  };

  return {
    submit,
    isCreating: isLoading,
  };
};

export default useCreateOrderReturn;
