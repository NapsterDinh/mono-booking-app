import styled from '@emotion/styled';
import { AtomBox } from '@tsu-org/ui';
import { Box, ColumnCenter, Image, Modal, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { CheckCircleBrandIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
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

const SuccessModal: FC<ModalProps> = (props) => {
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
          Khôi phục mật khẩu thành công
        </Text>
        <Text
          color="textSecondary"
          small
          mb="3rem"
          textAlign="center"
        >
          Mật khẩu đã khôi phục thành công, vui lòng về lại trang chủ
        </Text>

        <ColumnCenter>
          <AtomBox mb="5">
            <CheckCircleBrandIcon />
          </AtomBox>

          <NextLink href="/">
            <Text
              color="textLink"
              small
            >
              Về trang chủ
            </Text>
          </NextLink>
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

export default SuccessModal;
