import styled from '@emotion/styled';
import { ModalType } from '@customer-web/enums/index';
import { getErrorElement } from '@customer-web/helpers/Form';
import { useChangePasswordMutation } from '@customer-web/hooks/mutations';
import { useModal } from '@customer-web/state/global/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, ColumnCenter, Image, Modal, PasswordInput, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { Form, notification } from 'antd';
import { useRouter } from 'next/router';
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

const ChangePasswordModal: FC<
  ModalProps & {
    onCancel?: () => void;
  }
> = (props) => {
  const [form] = Form.useForm();
  const { mutateAsync: changePassword, isLoading } = useChangePasswordMutation();
  const { openModal } = useModal();
  const router = useRouter();

  const handleForgotPasswordButtonClicked = () => {
    openModal(ModalType.FORGOT_PASSWORD);
  };

  const handleChangePassword = async (values: any) => {
    try {
      await changePassword(values);

      router.push('/dang-xuat');
    } catch (error) {
      if (error?.message) {
        notification.error({
          message: error?.message,
        });
      } else {
        notification.error({
          message: 'Thay đổi mật khẩu không thành công',
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
        pb="7rem"
        zIndex="1"
      >
        <Text
          fontSize="20px"
          mb="0.5rem"
          textAlign="center"
          bold
        >
          Tạo mật khẩu mới
        </Text>
        <Text
          color="textSecondary"
          small
          mb="1.5rem"
          textAlign="center"
        >
          Bạn cần tạo mật khẩu từ 6 đến 16 ký tự để bảo vệ tài khoản tốt hơn.
        </Text>

        <Form
          form={form}
          onFinish={handleChangePassword}
        >
          <Form.Item
            name="currentPassword"
            rules={[{ required: true, message: getErrorElement('Vui lòng nhập mật khẩu cũ') }]}
          >
            <PasswordInput
              placeholder="Nhập mật khẩu cũ"
              scale="md"
            />
          </Form.Item>

          <Form.Item
            name="newPassword"
            rules={[
              { required: true, message: getErrorElement('Vui lòng nhập mật khẩu mới') },
              { min: 6, message: getErrorElement('Mật khẩu tối thiểu 6 ký tự.') },
              { max: 16, message: getErrorElement('Mật khẩu tối đa 16 ký tự.') },
            ]}
          >
            <PasswordInput
              placeholder="Nhập mật khẩu mới"
              scale="md"
            />
          </Form.Item>

          <Form.Item
            name="confirmNewPassword"
            rules={[
              { required: true, message: getErrorElement('Vui lòng nhập lại mật khẩu mới') },
              ({ getFieldValue }) => ({
                message: getErrorElement('Mật khẩu mới không trùng khớp'),
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('Mật khẩu mới không trùng khớp'));
                },
              }),
            ]}
            dependencies={['newPassword']}
          >
            <PasswordInput
              placeholder="Nhập lại mật khẩu mới"
              scale="md"
            />
          </Form.Item>

          <AtomBox mb="1p875rem">
            <Button
              scale="xl"
              width="100%"
              loading={isLoading}
              htmlType="submit"
            >
              Xác nhận
            </Button>
          </AtomBox>

          <ColumnCenter>
            {isLoading ? (
              <Text
                color="textLink"
                small
                fontWeight="500"
                mb="0.5rem"
              >
                Quên mật khẩu?
              </Text>
            ) : (
              <Button
                type="link"
                onClick={handleForgotPasswordButtonClicked}
              >
                <Text
                  color="textLink"
                  small
                  fontWeight="500"
                  mb="0.5rem"
                >
                  Quên mật khẩu?
                </Text>
              </Button>
            )}
          </ColumnCenter>
        </Form>

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

export default ChangePasswordModal;
