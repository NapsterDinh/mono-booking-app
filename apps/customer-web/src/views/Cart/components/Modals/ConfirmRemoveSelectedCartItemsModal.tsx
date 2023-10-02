import { useCartActions } from '@customer-web/state/cart/hooks';
import { useModal } from '@customer-web/state/global/hooks';
import { Button, Column, Row, Text } from '@tsu-org/ui-kit';
import { TrashOrangeIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import type { ModalProps } from 'antd';
import { Modal } from 'antd';
import type { FC } from 'react';

interface ConfirmRemoveSelectedCartItemsModalProps extends ModalProps {
  onOk?: () => void;
}

const ConfirmRemoveSelectedCartItemsModal: FC<ConfirmRemoveSelectedCartItemsModalProps> = ({ ...props }) => {
  const {
    modalProps,
    closeModal,
  }: {
    modalProps: {
      cartItem?: NhapThuocResponse.Carts.ListCart;
      selectedCartItems: NhapThuocResponse.Carts.ListCart[];
    };
    closeModal: () => void;
  } = useModal();
  const { removeItem, removeItems } = useCartActions();

  const handleConfirmDelete = () => {
    closeModal();

    if (modalProps?.cartItem) {
      removeItem(modalProps?.cartItem);
    } else {
      removeItems(modalProps?.selectedCartItems);
    }
  };

  return (
    <Modal
      centered
      {...props}
      footer={
        <Row gap="3">
          <Button
            type="secondary"
            scale="xl"
            width="100%"
            onClick={props.onCancel}
          >
            Trở lại
          </Button>

          <Button
            scale="xl"
            width="100%"
            onClick={handleConfirmDelete}
          >
            Xoá
          </Button>
        </Row>
      }
    >
      <Column
        alignItems="center"
        mb="6"
      >
        <TrashOrangeIcon mb="1rem" />

        <Text
          bold
          mb="0.25rem"
        >
          Xoá sản phẩm
        </Text>
        {modalProps?.cartItem?.id ? (
          <Text color="textSecondary">
            Bạn chắc chắn muốn xóa sản phẩm{' '}
            <b>{modalProps?.cartItem.productInfo?.webName || modalProps?.cartItem.productInfo?.name} </b>
            trong giỏ hàng?
          </Text>
        ) : (
          <Text color="textSecondary">Bạn chắc chắn muốn xóa sản phẩm đã chọn trong giỏ hàng?</Text>
        )}
      </Column>
    </Modal>
  );
};

export default ConfirmRemoveSelectedCartItemsModal;
