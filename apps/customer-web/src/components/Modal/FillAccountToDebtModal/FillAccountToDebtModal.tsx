import styled from '@emotion/styled';
import { ModalType } from '@customer-web/enums/index';
import { getErrorElement } from '@customer-web/helpers/Form';
import { removeVietnameseTones } from '@customer-web/helpers/String';
import { useModal } from '@customer-web/state/global/hooks';
import { TP_BANK_ACCOUNT_NUMBER_REGEX } from '@tsu-org/constants';
import { Box, Button, Column, Image, Input, Modal, ModalProps, Text } from '@tsu-org/ui-kit';
import { Form } from 'antd';
import { FormInstance } from 'antd/lib';
import { FC } from 'react';
import FloatInput from './FloatInput/FloatInput';

interface FillAccountToDebtModalProps {
  form?: FormInstance;
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

const StyledFormItem = styled(Form.Item)`
  &.ant-form-item {
    .ant-form-item-explain-error {
      margin: 0.625rem 0 0.75rem;
    }

    .ant-form-item-control-input {
      min-height: auto;
    }
  }
`;

const StyledFormItemBank = styled(Form.Item)`
  &.ant-form-item {
    .ant-form-item-explain-error {
      margin: 0.625rem 0 0.75rem;
    }

    .ant-form-item-control-input {
      min-height: auto;
    }
  }

  input[type='text'] {
    margin-top: 0;
  }
`;
const FillAccountToDebtModal: FC<ModalProps & FillAccountToDebtModalProps> = (props) => {
  const { form, onCancel } = props;
  const { openModal } = useModal();

  const handleOpenOTP = () => {
    openModal(ModalType.REQUEST_OTP);
  };

  return (
    <StyledModal
      width={450}
      centered
      footer={null}
      onCancel={onCancel}
      {...props}
    >
      <Column
        px="3"
        position="relative"
        pb="7rem"
        zIndex="1"
      >
        <Box>
          <Text
            fontSize="20px"
            mb="0.5rem"
            textAlign="center"
            bold
          >
            Điền tài khoản vay thấu chi
          </Text>

          <Text
            fontSize="16px"
            textAlign="center"
            color="textSecondary"
            mb="5"
          >
            Quý khách vui lòng nhập số tài khoản vay thấu chi đã được ngân hàng TPBank duyệt
          </Text>
        </Box>

        <Form
          form={form}
          onFinish={handleOpenOTP}
          initialValues={{
            bankName: 'Ngân hàng TPBank',
          }}
        >
          <Box
            maxHeight="500px"
            overflow="auto"
            px="2.15rem"
            mb="1rem"
            scrollBehavior="smooth"
          >
            <StyledFormItemBank name="bankName">
              <Input disabled />
            </StyledFormItemBank>

            <StyledFormItem
              name="fullName"
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập họ và tên tài khoản vay.') },
                { min: 6, message: getErrorElement('Họ và tên tài khoản vay tối thiểu 6 ký tự.') },
                { max: 200, message: getErrorElement('Họ và tên tài khoản vay tối đa 200 ký tự.') },
                {
                  validator: async (_, value: string) => {
                    if (value && (value.startsWith(' ') || value.endsWith(' '))) {
                      throw new Error();
                    }
                  },
                  message: getErrorElement('Họ và tên tài khoản vay không hợp lệ.'),
                },
              ]}
              normalize={(str) => removeVietnameseTones(str?.toUpperCase())?.replace(/^a-zA-Z0-9 ]/g, '')}
            >
              <FloatInput
                name="fullName"
                label="Họ và tên tài khoản vay"
              />
            </StyledFormItem>

            <StyledFormItem
              name="accountNumber"
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập số tài khoản vay.') },
                {
                  pattern: TP_BANK_ACCOUNT_NUMBER_REGEX,
                  message: getErrorElement('Số tài khoản vay không đúng định dạng.'),
                },
              ]}
            >
              <FloatInput
                name="accountNumber"
                label="Số tài khoản vay"
              />
            </StyledFormItem>

            <Button
              type="primary"
              scale="xl"
              width="100%"
              alignSelf="center"
              htmlType="submit"
            >
              Xác nhận
            </Button>

            <Text
              textAlign="center"
              fontSize="14px"
              fontWeight={400}
              mt="4"
              color="textSecondary"
            >
              Số tài khoản này sẽ được liên kết mua hàng khi giao dịch bằng vay thấu chi tại nhapthuoc.com và nhận tiền
              hoàn trả khi thay đổi giao dịch.
            </Text>
          </Box>
        </Form>

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
      </Column>
    </StyledModal>
  );
};

export default FillAccountToDebtModal;
