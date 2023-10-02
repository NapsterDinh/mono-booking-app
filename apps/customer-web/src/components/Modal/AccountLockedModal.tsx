import styled from '@emotion/styled';
import { Box, ColumnCenter, Image, Modal, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { LockBrandIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import Link from 'next/link';
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

const AccountLockedModal: FC<
  ModalProps & {
    onCancel?: () => void;
  }
> = (props) => {
  const handleCancel = () => {
    props.onCancel && props.onCancel();
  };

  return (
    <StyledModal
      width={450}
      centered
      footer={null}
      {...props}
      onCancel={handleCancel}
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
          Tài khoản bị khóa
        </Text>

        <ColumnCenter gap="6">
          <Text textAlign="center">
            Tài khoản của bạn đang tạm khóa, vui lòng liên hệ tổng đài{' '}
            <Link href="tel:18006001">
              <Text
                color="textLink"
                as="span"
              >
                1800 6001
              </Text>
            </Link>{' '}
            (Nhánh 2) để mở khóa, xin cảm ơn.
          </Text>

          <LockBrandIcon />

          <Link href="/">
            <Text color="textLink">Về trang chủ</Text>
          </Link>
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

export default AccountLockedModal;
