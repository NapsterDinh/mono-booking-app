import styled from '@emotion/styled';
import { Box, Button, Image, Modal, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
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

const ConfirmModal: FC<ModalProps> = (props) => {
  return (
    <StyledModal
      width={450}
      centered
      footer={null}
      closable={false}
      {...props}
    >
      <Box
        px="3.375rem"
        position="relative"
        pb="7rem"
        zIndex="1"
      >
        <Text
          fontSize="20px"
          mb="0.5rem"
          textAlign="center"
          bold
        >
          Khôi phục mật khẩu ?
        </Text>
        <Text
          color="textSecondary"
          small
          mb="3rem"
          textAlign="center"
        >
          Vui lòng bấm xác nhận để đổi mật khẩu
        </Text>

        <Button
          width="100%"
          scale="xl"
          onClick={props.onOk}
        >
          Xác nhận
        </Button>

        <Box
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
        >
          <Image
            alt=""
            src="/images/auth-modal-footer-background.png"
          />
        </Box>
      </Box>
    </StyledModal>
  );
};

export default ConfirmModal;
