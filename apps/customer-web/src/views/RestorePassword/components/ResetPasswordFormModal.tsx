import styled from '@emotion/styled';
import { ModalType } from '@customer-web/enums/index';
import { getErrorElement } from '@customer-web/helpers/Form';
import { useResetPasswordMutation } from '@customer-web/hooks/mutations';
import { useModal } from '@customer-web/state/global/hooks';
import { VIETNAMESE_PHONE_NUMBER_REGEX } from '@tsu-org/constants';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Image, Input, Modal, PasswordInput, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { Form } from 'antd';
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

const ResetPasswordFormModal: FC<
  ModalProps & {
    onCancel?: () => void;
  }
> = (props) => {
  const [form] = Form.useForm();
  const { mutateAsync: resetPassword, isLoading } = useResetPasswordMutation();
  const router = useRouter();
  const { openModal } = useModal();

  const handleLogin = async (values: any) => {
    try {
      await resetPassword({
        ...values,
        key: router.query.key,
      });

      openModal(ModalType.SUCCESS_RESET_PASSWORD);
    } catch (error) {
      openModal(ModalType.FAILED_RESET_PASSWORD);
    }
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
          Đặt lại mật khẩu
        </Text>
        <Text
          color="textSecondary"
          small
          mb="1.5rem"
          textAlign="center"
        >
          Đường link có hiệu lực trong 30 phút
        </Text>

        <Form
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

          <Form.Item
            name="newPassword"
            rules={[
              { required: true, message: getErrorElement('Vui lòng nhập mật khẩu') },
              { min: 6, message: getErrorElement('Mật khẩu tối thiểu 6 ký tự.') },
              { max: 16, message: getErrorElement('Mật khẩu tối đa 16 ký tự.') },
            ]}
          >
            <PasswordInput
              placeholder="Nhập mật khẩu"
              scale="md"
            />
          </Form.Item>

          <Form.Item
            name="confirm-password"
            dependencies={['newPassword']}
            rules={[
              { required: true, message: getErrorElement('Vui lòng nhập lại mật khẩu') },
              ({ getFieldValue }) => ({
                message: getErrorElement('Mật khẩu không trùng khớp'),
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('Mật khẩu không trùng khớp'));
                },
              }),
            ]}
          >
            <PasswordInput
              placeholder="Nhập lại mật khẩu"
              scale="md"
            />
          </Form.Item>

          <AtomBox>
            <Button
              scale="xl"
              width="100%"
              loading={isLoading}
              htmlType="submit"
            >
              Đổi mật khẩu
            </Button>
          </AtomBox>
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

export default ResetPasswordFormModal;
