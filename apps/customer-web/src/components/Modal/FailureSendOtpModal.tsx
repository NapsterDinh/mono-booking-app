import styled from '@emotion/styled';
import { useGetErrorSendOTP } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Image, Modal, ModalProps, Text } from '@tsu-org/ui-kit';
import NextLink from 'next/link';
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

const FailureSendOtpModal: FC<ModalProps> = (props) => {
  const { closable } = props;

  const errorOTP = useGetErrorSendOTP();

  return (
    <StyledModal
      width={400}
      centered
      footer={null}
      {...props}
      closable={closable}
    >
      <Box
        px="1.75rem"
        position="relative"
        pb="3rem"
        zIndex="1"
      >
        <Text
          fontSize="20px"
          mb="0.5rem"
          textAlign="center"
          bold
        >
          {errorOTP.headerMessage}
        </Text>
        <Text
          fontSize="14px"
          fontWeight={400}
          textAlign="center"
        >
          {errorOTP.message}
        </Text>
        <AtomBox
          mt="3"
          mb="5"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            alt="fail-otp-bg"
            src="/images/fail-otp.svg"
          />
          <NextLink href="/">
            <Button
              type="link"
              mt="2"
            >
              Về trang chủ
            </Button>
          </NextLink>
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

export default FailureSendOtpModal;
