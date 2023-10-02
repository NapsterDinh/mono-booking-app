import { OMSCode } from '@customer-web/enums/ErrorCode';
import { useCancelOrderMutation } from '@customer-web/hooks/mutations';
import { Box, Button, ColumnCenter, Modal, ModalProps, Row, Text } from '@tsu-org/ui-kit';
import { TrashOrangeIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { notification } from 'antd';
import { FC } from 'react';

const ConfirmCancelOrderModal: FC<
  ModalProps & {
    orderId?: string;
    orderCode?: string;
    onCancel?: () => void;
    onOk?: () => void;
  }
> = ({ orderId, orderCode, ...props }) => {
  const { mutateAsync: cancelOrder, isLoading } = useCancelOrderMutation({
    onSuccess: () => {
      notification.success({
        message: 'Huỷ đơn hàng thành công',
      });

      props.onOk && props.onOk();
    },
    onError: (error) => {
      if (error?.errorCode === OMSCode.ORDER_CANCELLED_OR_FINISHED) {
        notification.error({
          message: 'Đơn hàng đã hủy hoặc hoàn tất',
        });
      } else if (error?.message) {
        notification.error({
          message: error?.message,
        });
      } else {
        notification.error({
          message: 'Huỷ đơn hàng thất bại',
        });
      }
    },
  });

  const handleCancelOrder = async () => {
    if (!orderId || !orderCode) {
      return;
    }

    cancelOrder({
      orderId,
      orderCode,
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
          Huỷ đơn hàng
        </Text>
        <Text
          color="textSecondary"
          small
          mb="1rem"
        >
          Bạn chắc chắn muốn huỷ đơn hàng?
        </Text>

        <Row gap="0p75rem">
          <Button
            width="50%"
            loading={isLoading}
            onClick={handleCancelOrder}
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

export default ConfirmCancelOrderModal;
