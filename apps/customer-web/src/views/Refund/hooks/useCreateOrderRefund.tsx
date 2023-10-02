import { useCreateOrderRefundRequestMutation } from '@customer-web/hooks/mutations';
import { notification } from 'antd';
import dayjs from 'dayjs';

const useCreateOrderRefund = ({ order }: { order: NhapThuocResponse.CancelDeposit.DepositDetail }) => {
  const { mutateAsync: createOrderRefundRequest, isLoading } = useCreateOrderRefundRequestMutation();
  const submit = async (values: any) => {
    const now = dayjs().toISOString();

    const payload = {
      orderCode: order?.orderCode || '',
      paymentRequestId: order?.paymentRequestTransferInfo?.id || '',
      paymentRequestCode: order?.paymentRequestTransferInfo?.paymentRequestCode || '',
      customerId: order?.orderInfo?.custCode || '',
      shopCode: order?.orderInfo.shopCode || '',
      transactionTime: now,
      transfers: {
        ...values.transfers,
        dateTranfer: now,
        content: '',
        amount: order?.paymentRequestTransferInfo?.totalPayment ?? 0,
        createdBy: order?.orderInfo?.modifiedBy || '',
        createdByName: order?.orderInfo?.modifiedByName || '',
      },
      otp: values?.otp,
      phoneNumber: values?.customerPhone,
    };

    await createOrderRefundRequest(payload);

    notification.success({
      message: 'Tạo yêu cầu hoàn tiền thành công',
    });
  };

  return {
    submit,
    isCreating: isLoading,
  };
};

export default useCreateOrderRefund;
