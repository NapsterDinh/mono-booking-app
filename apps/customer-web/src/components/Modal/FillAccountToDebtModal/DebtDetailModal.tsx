import styled from '@emotion/styled';
import { Box, Column, Image, Input, Modal, ModalProps, Row, Text } from '@tsu-org/ui-kit';
import { Form } from 'antd';
import { RefundInfoAccountInfo } from 'apps/nhapthuoc-estore/src/types/api/response/customer';
import { FC } from 'react';
import BankAccountStatusText from './BankAccountStatusText';
import FloatInput from './FloatInput/FloatInput';
import Link from 'next/link';

interface FillAccountToDebtModalProps {
  bankAccountInfo: RefundInfoAccountInfo;
  loading: boolean;
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
    margin-bottom: 12px;

    .ant-form-item-control-input {
      min-height: auto;
    }
  }
`;

const StyledFormItemBank = styled(Form.Item)`
  &.ant-form-item {
    margin-bottom: 12px;
    .ant-form-item-control-input {
      min-height: auto;
    }
  }
  input[type='text'] {
    margin-top: 0;
  }
`;
const DebtDetailModal: FC<ModalProps & FillAccountToDebtModalProps> = (props) => {
  const { bankAccountInfo } = props;
  const [form] = Form.useForm();

  return (
    <StyledModal
      width={450}
      centered
      footer={null}
      {...props}
    >
      <Column
        px="3"
        position="relative"
        pb="3rem"
        zIndex="1"
      >
        <Box>
          <Text
            fontSize="20px"
            mb="0.5rem"
            textAlign="center"
            bold
          >
            Thông tin tài khoản vay thấu chi
          </Text>

          <BankAccountStatusText status={bankAccountInfo?.returnStatus} />
        </Box>

        <Form
          form={form}
          initialValues={{
            bankName: bankAccountInfo?.returnBankName,
            fullName: bankAccountInfo?.returnCustomerName,
            accountNumber: bankAccountInfo?.returnBankAccount,
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

            <StyledFormItem name="fullName">
              <FloatInput
                name="fullName"
                label="Họ và tên tài khoản vay"
                disabled
              />
            </StyledFormItem>

            <StyledFormItem name="accountNumber">
              <FloatInput
                name="accountNumber"
                label="Số tài khoản vay"
                disabled
              />
            </StyledFormItem>

            <Text
              textAlign="center"
              fontSize="16px"
              fontWeight={400}
              color="textSecondary"
              mt="4"
            >
              Quý khách không thể thay đổi thông tin này, vui lòng liên hệ tổng đài
              <Row justifyContent="center">
                <Link href="tel:18006001">
                  <Text
                    as="span"
                    color="textLink"
                  >
                    1800 6001 (Nhánh 2)
                  </Text>
                </Link>
                <Text
                  ml="1"
                  fontSize="16px"
                  fontWeight={400}
                  color="textSecondary"
                >
                  {' '}
                  để được hỗ trợ
                </Text>
              </Row>
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

export default DebtDetailModal;
