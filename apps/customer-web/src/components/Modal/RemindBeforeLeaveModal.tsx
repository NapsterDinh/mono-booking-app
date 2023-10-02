import styled from '@emotion/styled';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Image, Modal, ModalProps, Text } from '@tsu-org/ui-kit';

import { FC } from 'react';

interface RemindSubmitProps {
  onBack?: () => void;
}

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

const RemindBeforeLeaveModal: FC<ModalProps & RemindSubmitProps> = (props) => {
  return (
    <StyledModal
      width={450}
      centered
      footer={null}
      {...props}
    >
      <Box
        px="3.375rem"
        position="relative"
        pb="10rem"
        zIndex="1"
      >
        <Text
          fontSize="20px"
          mb="0.5rem"
          textAlign="center"
          fontWeight={700}
          mt="16px"
        >
          Hồ sơ chưa lưu
        </Text>

        <Text
          fontSize="14px"
          fontWeight={400}
          textAlign="center"
        >
          Hồ sơ của Quý khách sẽ không được lưu và gửi cho TPBank nếu Quý khách thoát khỏi trang này
        </Text>
        <AtomBox py="6">
          <Image
            alt="footer-bgc"
            src="/images/file-not-saved.svg"
          />
        </AtomBox>

        <AtomBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="2"
        >
          <Button
            type="secondary"
            scale="lg"
            width="40%"
            onClick={props.onBack}
          >
            Quay lại
          </Button>
          <Button
            type="primary"
            scale="lg"
            width="40%"
            onClick={props.onCancel}
          >
            Ở lại trang
          </Button>
        </AtomBox>

        <Box
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
        >
          <Image
            alt="footer-bgc"
            src="/images/auth-modal-footer-background.png"
          />
        </Box>
      </Box>
    </StyledModal>
  );
};

export default RemindBeforeLeaveModal;
