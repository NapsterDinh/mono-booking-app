import styled from '@emotion/styled';
import { ModalType } from '@customer-web/enums/index';
import { useModal } from '@customer-web/state/global/hooks';
import { Box, Button, ColumnCenter, Image, Link, Modal, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { CheckCircleBrandIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
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

const SuccessSendResetPasswordRequestModal: FC<ModalProps> = (props) => {
  const { openModal } = useModal();

  const handleLoginButtonClicked = () => {
    openModal(ModalType.LOGIN);
  };

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
        pb="7rem"
        zIndex="1"
      >
        <Text
          fontSize="20px"
          mb="0.5rem"
          textAlign="center"
          bold
        >
          Đã gửi yêu cầu khôi phục mật khẩu
        </Text>
        <Text
          color="textSecondary"
          small
          mb="3rem"
          textAlign="center"
        >
          nhapthuoc.com đã nhận được yêu cầu đặt lại mật khẩu của bạn và sẽ gửi hướng dẫn qua Zalo. Nếu trong 30 phút
          chưa nhận được hướng dẫn, vui lòng liên hệ số hotline{' '}
          <Link
            display="inline-block"
            small
            href="tel:18006001"
          >
            1800 6001 (Nhánh 2)
          </Link>
        </Text>

        <ColumnCenter>
          <CheckCircleBrandIcon />

          <Button
            mt="2rem"
            type="link"
            onClick={handleLoginButtonClicked}
          >
            Đăng nhập
          </Button>
        </ColumnCenter>

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

export default SuccessSendResetPasswordRequestModal;
