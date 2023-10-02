import styled from '@emotion/styled';
import { useModal } from '@customer-web/state/global/hooks';
import {
  Button,
  Column,
  ColumnCenter,
  Divider,
  Flex,
  Modal,
  ModalProps,
  Row,
  Text,
  useMatchBreakpoints,
} from '@tsu-org/ui-kit';
import { FC } from 'react';

const StyledModal = styled(Modal)`
  height: 100svh;
  padding: 0;
  max-width: 100svw;

  .ant-modal-content {
    height: 100%;
    padding: 0;
    width: 100%;

    .ant-modal-header {
      margin-bottom: 0;
      padding: 32px 16px 16px;
    }
    .ant-modal-body {
      padding: 16px;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    height: auto;

    .ant-modal-close {
      top: 22px;
    }
    .ant-modal-content {
      .ant-modal-header {
        border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
        padding: 16px;
      }
    }
  }
`;

const attentions = [
  `Trong trường hợp có sự thay đổi về đơn hàng, nhapthuoc.com sẽ liên hệ quý khách,
    số tiền chênh lệch sẽ được hoàn trả.`,
  'Quý khách vui lòng tự kiểm tra dư nợ trong tài khoản TPBank.',
  'Lãi suất vay và thông tin lãi vay theo chính sách của ngân hàng TPBank.',
  'Vui lòng nhấn "Xác nhận thanh toán" để tiếp tục giao dịch.',
];

const ConfirmTpBankOverdraftLoanPaymentMethodModal: FC<ModalProps> = ({ ...props }) => {
  const { isDesktop } = useMatchBreakpoints();
  const { closeModal } = useModal();

  const handleCancel = (event: Parameters<ModalProps['onCancel']>[0]) => {
    props.onCancel?.(event);
    closeModal();
  };

  return (
    <StyledModal
      width={isDesktop ? 667 : '100svw'}
      footer={null}
      centered
      title={
        <Text
          textAlign="center"
          fontSize="24px"
          bold
        >
          Vay thấu chi online qua TPBank
        </Text>
      }
      {...props}
      onCancel={handleCancel}
    >
      <Column>
        <Text
          fontWeight="500"
          mb="1rem"
          textAlign="center"
        >
          Lưu ý khi thanh toán bằng phương thức vay thấu chi online qua TPBank
        </Text>

        <Column gap="0p75rem">
          {attentions.map((attention, index) => (
            <Row
              alignItems="flex-start"
              gap="2"
              key={index}
            >
              <Flex
                width="20px"
                height="20px"
                borderRadius="circle"
                backgroundColor="backgroundGrey2"
                justifyContent="center"
                alignItems="center"
                flexShrink={0}
              >
                <Text fontSize="12px">{index + 1}</Text>
              </Flex>
              <Text small>{attention}</Text>
            </Row>
          ))}
        </Column>

        <Divider my="1rem" />

        <ColumnCenter onClick={props.onOk}>
          <Button scale="xl">Xác nhận thanh toán</Button>
        </ColumnCenter>
      </Column>
    </StyledModal>
  );
};

export default ConfirmTpBankOverdraftLoanPaymentMethodModal;
