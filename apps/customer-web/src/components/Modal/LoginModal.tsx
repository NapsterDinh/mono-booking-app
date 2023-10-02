import styled from '@emotion/styled';
import { AuthCode } from '@customer-web/enums/ErrorCode';
import { ModalType } from '@customer-web/enums/index';
import { getErrorElement } from '@customer-web/helpers/Form';
import { setAccessToken, setRefreshToken } from '@customer-web/helpers/LocalStorage';
import { useLoginMutation } from '@customer-web/hooks/mutations';
import { useAppDispatch } from '@customer-web/state';
import { setNeedMergeCart } from '@customer-web/state/cache/actions';
import { useModal } from '@customer-web/state/global/hooks';
import { VIETNAMESE_PHONE_NUMBER_REGEX } from '@tsu-org/constants';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, ColumnCenter, Image, Input, Modal, PasswordInput, Row, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { Form } from 'antd';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

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

const LoginModal: FC<
  ModalProps & {
    onCancel?: () => void;
  }
> = (props) => {
  const [form] = Form.useForm();
  const { mutateAsync: login, isLoading } = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { openModal } = useModal();
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegisterButtonClicked = () => {
    openModal(ModalType.REGISTER);
  };

  const handleForgotPasswordButtonClicked = () => {
    openModal(ModalType.FORGOT_PASSWORD);
  };

  const handleLogin = async (values: any) => {
    try {
      const response = await login({
        ...values,
        username: values.phone,
      });

      setAccessToken(response.ssoData.access_token);
      setRefreshToken(response.ssoData.refresh_token);
      dispatch(setNeedMergeCart(true));

      router.reload();
    } catch (error) {
      if (error?.errors?.error_description) {
        if (
          error.errors.error === AuthCode.ACCOUNT_LOCKED ||
          error.errors.error === AuthCode.ACCOUNT_TEMPORARY_SUSPENDED
        ) {
          openModal(ModalType.ACCOUNT_LOCKED);
        } else {
          setErrorMessage(error.errors.error_description);
        }
      } else {
        setErrorMessage('Số điện thoại hoặc mật khẩu không chính xác');
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
      setErrorMessage('');
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
          Đăng nhập
        </Text>
        <Text
          color="textSecondary"
          small
          mb="1.5rem"
          textAlign="center"
        >
          Vui lòng đăng nhập để hưởng những <br />
          đặc quyền dành cho thành viên.
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
              onChange={setErrorMessage.bind(this, '')}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: getErrorElement('Vui lòng nhập Mật khẩu') }]}
          >
            <PasswordInput
              placeholder="Nhập mật khẩu"
              scale="md"
              onChange={setErrorMessage.bind(this, '')}
            />
          </Form.Item>

          {!!errorMessage && (
            <AtomBox
              color="colorError"
              mb="3"
            >
              {getErrorElement(errorMessage)}
            </AtomBox>
          )}

          <AtomBox mb="1p875rem">
            <Button
              scale="lg"
              width="100%"
              loading={isLoading}
              htmlType="submit"
            >
              Đăng nhập
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

          <Row
            justifyContent="center"
            gap="1"
            flexDirection={{
              md: 'row',
              xs: 'column',
            }}
          >
            <Text
              color="textSecondary"
              small
            >
              Chưa có tài khoản?
            </Text>
            <Button
              type="link"
              onClick={isLoading ? undefined : handleRegisterButtonClicked}
            >
              <Text
                color="textLink"
                small
                fontWeight="500"
              >
                Đăng ký tại đây
              </Text>
            </Button>
          </Row>
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

export default LoginModal;
