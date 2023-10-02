import styled from '@emotion/styled';
import { HTTP_STATUS } from '@customer-web/enums/HTTP';
import { ModalType } from '@customer-web/enums/index';
import { getErrorElement } from '@customer-web/helpers/Form';
import { formatVNPhoneNumber } from '@customer-web/helpers/String';
import { useSendOTPMutation } from '@customer-web/hooks/mutations';
import { useAppDispatch } from '@customer-web/state';
import { useModal } from '@customer-web/state/global/hooks';
import { resetStateSubmitFormCredit, setErrorOTP } from '@customer-web/state/user/actions';
import { useLoadingSubmitForm } from '@customer-web/state/user/hooks';
import { COMPONENT_TYPE_CREDIT_FORM } from '@customer-web/views/Personal/OverdraftLoanRegister/constants';
import { Box, Button, Column, Image, Link, Modal, ModalProps, Text } from '@tsu-org/ui-kit';
import { useCountDown } from 'ahooks';
import { Form } from 'antd';
import dayjs from 'dayjs';
import { FC, useEffect, useState } from 'react';
import OTPInput from './OTPInput/OTPInput';

interface OTPInputProps {
  length: number;
  autoFocus: boolean;
  disabled?: boolean;
  mobilePhone: string;
  onSubmit?: (values: any) => void;
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

const OtpFormItem = styled(Form.Item)`
  .ant-form-item-explain-error {
    margin: 12px 0;
    text-align: center;

    & > div {
      align-items: flex-start;

      svg {
        align-self: flex-start;
        margin-top: 4px;
      }
    }
  }
`;

const OTPModal: FC<ModalProps & OTPInputProps> = (props) => {
  const [targetDate, setTargetDate] = useState(dayjs().add(30, 'minutes'));
  const { autoFocus, disabled, onCancel, open, mobilePhone, onSubmit } = props;
  const loadingSubmitedForm = useLoadingSubmitForm();

  const dispatch = useAppDispatch();
  const [countdown, formattedRes] = useCountDown({
    targetDate,
  });

  const { minutes, seconds } = formattedRes;
  const [formOTP] = Form.useForm();
  const { openModal } = useModal();
  const { mutateAsync: sendOtp, isLoading } = useSendOTPMutation({
    onSuccess: () => {
      dispatch(
        setErrorOTP({
          message: '',
          headerMessage: '',
        }),
      );
    },
    onError: (error) => {
      if (error?.status < HTTP_STATUS.INTERNAL_SERVER_ERROR) {
        dispatch(
          setErrorOTP({
            message: error.message,
            headerMessage: 'Gửi lại OTP thất bại',
          }),
        );
        openModal(ModalType.FAIL_TO_REQUEST_OTP);
      } else {
        openModal(ModalType.FAIL_TO_REQUEST_OTP);
        dispatch(
          setErrorOTP({
            message: '',

            headerMessage: 'Hệ thống đang có lỗi',
          }),
        );
      }
    },
  });

  const handleResendOtp = async () => {
    await sendOtp(mobilePhone);
    setTargetDate(dayjs().add(30, 'minutes'));

    dispatch(resetStateSubmitFormCredit(COMPONENT_TYPE_CREDIT_FORM.FORM_COMPONENT));
  };

  const handleCancelOtpModal = (e) => {
    dispatch(resetStateSubmitFormCredit(COMPONENT_TYPE_CREDIT_FORM.FORM_COMPONENT));
    onCancel(e);
    formOTP.resetFields();
  };

  const handleFinish = async (values: any) => {
    if (values?.otp?.length < 6) {
      formOTP.setFields([
        {
          name: 'otp',
          // @ts-ignore
          errors: [getErrorElement('Vui lòng nhập OTP.')],
        },
      ]);

      return;
    }

    try {
      await onSubmit?.(formOTP.getFieldsValue());
    } catch (error) {
      formOTP.setFields([
        {
          name: 'otp',
          // @ts-ignore
          errors: [getErrorElement(error?.message)],
        },
      ]);
    }
  };

  useEffect(() => {
    if (open) {
      sendOtp(mobilePhone);
      setTargetDate(dayjs().add(30, 'minutes'));
    }
  }, [mobilePhone, open, sendOtp]);

  return (
    <StyledModal
      width={450}
      centered
      footer={null}
      {...props}
      onCancel={handleCancelOtpModal}
      cancelButtonProps={{
        disabled: isLoading,
      }}
    >
      <Form
        form={formOTP}
        onFinish={handleFinish}
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
            Nhập mã xác thực
          </Text>
          <Text
            color="textSecondary"
            small
            mb="1.5rem"
            textAlign="center"
          >
            Mã xác thực được gửi đến số điện thoại <strong>{formatVNPhoneNumber(mobilePhone)}</strong>
            {countdown === 0 ? (
              <span> đã hết hiệu lực</span>
            ) : (
              <span>
                {' '}
                có hiệu lực trong
                <span
                  color="textSecondary"
                  style={{ fontWeight: 500 }}
                >
                  {' '}
                  {minutes} phút {seconds} giây
                </span>
              </span>
            )}
          </Text>

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

          <OtpFormItem
            name="otp"
            rules={[
              {
                required: true,
                message: getErrorElement('Vui lòng nhập OTP.'),
              },
            ]}
          >
            <OTPInput
              length={6}
              autoFocus={autoFocus}
              disabled={disabled}
            />
          </OtpFormItem>

          <Column
            justifyContent="center"
            alignItems="center"
            mt="3"
            mb="4"
          >
            <Button
              type="primary"
              scale="lg"
              width="100%"
              padding="3"
              lineHeight="24px"
              htmlType="submit"
              disabled={loadingSubmitedForm}
              loading={loadingSubmitedForm}
            >
              Xác nhận
            </Button>
            <Button
              type="text"
              my="4"
              loading={isLoading}
            >
              <Text
                color="textLink"
                fontSize="14px"
                fontWeight={500}
                small
                onClick={handleResendOtp}
              >
                Gửi lại mã xác thực cho tôi
              </Text>
            </Button>
            <Text
              color="textSecondary"
              fontSize="14px"
              fontWeight="400"
              textAlign="center"
              small
            >
              Tôi đã đọc và đồng ý nhapthuoc.com chia sẻ dữ liệu cá nhân qua TPBank và{' '}
              <Link
                display="inline"
                href="/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan"
                external
              >
                <Text
                  as="span"
                  color="textLink"
                  small
                  fontWeight="500"
                >
                  Chính sách thu thập và xử lý dữ liệu cá nhân
                </Text>
              </Link>
            </Text>
          </Column>
        </Box>
      </Form>
    </StyledModal>
  );
};

export default OTPModal;
