import styled from '@emotion/styled';
import { Box, Button, Image, Link, Modal, ModalProps, Row, Text } from '@tsu-org/ui-kit';
import { FC } from 'react';

const StyledModal = styled(Modal)`
  &.ant-modal {
    .ant-modal-content {
      padding: 0;
    }
  }
`;

type WarningChangeBusinessTypeModalProps = ModalProps & {
  onSubmitForm: () => void;
};

const WarningChangeBusinessTypeModal: FC<WarningChangeBusinessTypeModalProps> = (props) => {
  const { onCancel, onSubmitForm } = props;

  return (
    <StyledModal
      width={480}
      centered
      footer={null}
      {...props}
    >
      <Box
        px="2.469rem"
        position="relative"
        pb="7rem"
        zIndex="1"
      >
        <Text
          fontSize="20px"
          mb="0.5rem"
          textAlign="center"
          bold
          pt="2.25rem"
        >
          Lưu ý
        </Text>
        <Text
          color="textSecondary"
          small
          textAlign="center"
          mb="1.5rem"
        >
          Khi chuyển đổi hình thức kinh doanh, hồ sơ không còn liên quan tới hình thức kinh doanh mới sẽ bị xóa, đồng
          thời bạn không thể mua hàng trong khi chờ hệ thống duyệt lại hồ sơ (Liên hệ{' '}
          <Link
            display="inline-block"
            small
            href="tel:18006001"
          >
            1800 6001
          </Link>{' '}
          để được duyệt hồ sơ nhanh). <br />
          Bạn có chắc chắn muốn thay đổi?
        </Text>

        <Image
          height="9.625rem"
          width="100%"
          alt=""
          src="/images/file-not-saved.svg"
        />
        <Row
          gap="3"
          my="1p5rem"
        >
          <Button
            scale="xl"
            width="50%"
            type="secondary"
            onClick={onCancel}
          >
            Đóng
          </Button>
          <Button
            scale="xl"
            width="50%"
            type="primary"
            onClick={onSubmitForm}
          >
            Xác nhận
          </Button>
        </Row>

        <Box
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
        >
          <Image
            width={'100%'}
            alt=""
            src="/images/auth-modal-footer-background.png"
          />
        </Box>
      </Box>
    </StyledModal>
  );
};

export default WarningChangeBusinessTypeModal;
