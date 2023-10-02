import styled from '@emotion/styled';
import { Modal, ModalProps, Text } from '@tsu-org/ui-kit';
import { FC } from 'react';

const StyledModal = styled(Modal)`
  &.ant-modal {
    .ant-modal-content {
      padding: 0;

      .ant-modal-body {
        padding-top: 2.25rem;
      }
    }
  }
`;

const ConfirmBeforePayByCreditModal: FC<
  ModalProps & {
    onCancel?: () => void;
  }
> = (props) => {
  const { onCancel } = props;
  return (
    <StyledModal
      width={450}
      centered
      footer={null}
      {...props}
      onCancel={onCancel}
    >
      <Text>Lưu ý khi thanh toán bằng phương thức vay thấu chi online qua TPBank</Text>
    </StyledModal>
  );
};

export default ConfirmBeforePayByCreditModal;
