import styled from '@emotion/styled';
import { ModalType } from '@customer-web/enums/index';
import { useRegisterResetPasswordMutation } from '@customer-web/hooks/mutations';
import { useModal } from '@customer-web/state/global/hooks';
import { Box, Image, Modal, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { Form, notification } from 'antd';
import { FC, useEffect } from 'react';

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

const ForgotPasswordModal: FC<
  ModalProps & {
    onCancel?: () => void;
  }
> = (props) => {
  const [form] = Form.useForm();
  const { mutateAsync: registerResetPassword, isLoading } = useRegisterResetPasswordMutation();
  const { openModal } = useModal();

  const handleLoginButtonClicked = () => {
    openModal(ModalType.LOGIN);
  };

  const handleLogin = async (values: any) => {
    try {
      await registerResetPassword(values.phone);

      openModal(ModalType.SUCCESS_SEND_RESET_PASSWORD_REQUEST);
    } catch (error) {
      if (error?.message) {
        notification.error({
          message: error?.message,
        });
      } else {
        notification.error({
          message: 'Yêu cầu khôi phục mật khẩu không thành công',
        });
      }
    }
  };

  const handleCancel = () => {
    if (isLoading) {
      return;
    }

    props.onCancel && props.onCancel();
  };

  useEffect(() => {
    if (!props.open) {
      form.resetFields();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.open]);

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
        pb="3rem"
        zIndex="1"
      >
        <Text
          fontSize="20px"
          mb="0.5rem"
          textAlign="center"
          bold
        >
          Quên mật khẩu
        </Text>
        <Text
          color="textSecondary"
          small
          mb="1.5rem"
          textAlign="center"
        >
          Vui lòng liên hệ hotline nhapthuoc.com 1800 6001 để được khôi phục mật khẩu
        </Text>

        {/* <Form
          form={form}
          onFinish={handleLogin}
        >
          <Form.Item
            name="phone"
            rules={[
              { required: true, message: getErrorElement('Vui lòng nhập số điện thoại') },
              {
                pattern: VIETNAMESE_PHONE_NUMBER_REGEX,
                message: getErrorElement('Số điện thoại không đúng định dạng.'),
              },
            ]}
          >
            <Input
              placeholder="Nhập số điện thoại"
              size="large"
              allowClear
            />
          </Form.Item>

          <AtomBox mb="1p875rem">
            <Button
              scale="lg"
              width="100%"
              loading={isLoading}
              htmlType="submit"
            >
              Xác nhận
            </Button>
          </AtomBox>

          <Row
            justifyContent="center"
            gap="1"
          >
            <Text
              color="textSecondary"
              small
            >
              Đã có tài khoản?
            </Text>
            <Button
              type="link"
              onClick={isLoading ? undefined : handleLoginButtonClicked}
            >
              <Text
                color="textLink"
                small
                fontWeight="500"
              >
                Đăng nhập tại đây
              </Text>
            </Button>
          </Row>
        </Form> */}

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

export default ForgotPasswordModal;
