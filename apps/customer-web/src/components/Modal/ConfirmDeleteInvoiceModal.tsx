import { useDeleteCustomerInvoiceMutation } from '@customer-web/hooks/mutations';
import { useUserId } from '@customer-web/state/user/hooks';
import { Box, Button, ColumnCenter, Modal, ModalProps, Row, Text } from '@tsu-org/ui-kit';
import { TrashOrangeIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { notification } from 'antd';
import { FC } from 'react';

const ConfirmDeleteInvoiceModal: FC<
  ModalProps & {
    invoice?: NhapThuocResponse.Customers.Invoice;
    onOk?: () => void;
    onCancel?: () => void;
  }
> = ({ invoice, ...props }) => {
  const userId = useUserId();
  const { mutateAsync: deleteInvoice, isLoading } = useDeleteCustomerInvoiceMutation({
    onSuccess: () => {
      notification.success({
        message: 'Xoá hoá đơn điện tử thành công',
      });

      props.onOk && props.onOk();
    },
    onError: (error) => {
      if (error?.message) {
        notification.error({
          message: error?.message,
        });
      } else {
        notification.error({
          message: 'Xoá hoá đơn điện tử thất bại',
        });
      }
    },
  });

  const handleDeleteInvoice = async () => {
    if (!invoice?.id) {
      return;
    }

    deleteInvoice({
      customerId: userId!,
      invoiceId: invoice.id,
    });
  };

  return (
    <Modal
      width={400}
      footer={null}
      centered
      {...props}
    >
      <ColumnCenter>
        <Box mb="1rem">
          <TrashOrangeIcon />
        </Box>
        <Text
          bold
          mb="0.25rem"
        >
          Xóa hoá đơn điện tử
        </Text>
        <Text
          color="textSecondary"
          small
          mb="1rem"
        >
          Bạn chắc chắn muốn xóa hoá đơn điện tử?
        </Text>

        <Row gap="0p75rem">
          <Button
            width="50%"
            loading={isLoading}
            onClick={handleDeleteInvoice}
          >
            Xác nhận
          </Button>
          <Button
            type="secondary"
            width="50%"
            onClick={props.onCancel}
          >
            Đóng
          </Button>
        </Row>
      </ColumnCenter>
    </Modal>
  );
};

export default ConfirmDeleteInvoiceModal;
