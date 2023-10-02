import { BankAccountInfoStatus } from '@customer-web/enums/TpBankOverdraftLoan';
import { Row, Text } from '@tsu-org/ui-kit';
import { FC } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';

const TXT_STATUS_CLR = {
  [BankAccountInfoStatus.SUBMITED_INFO_PENDING]: '#4A4F63',
  [BankAccountInfoStatus.APPROVED_BANK_ACCOUNT]: '#039855',
  [BankAccountInfoStatus.REJECT_BANK_ACCOUNT]: '#F04438',
  [BankAccountInfoStatus.BOOKED_ORDER_SUCCESS]: '#039855',
};

const ICON_STATUS_CLR = {
  [BankAccountInfoStatus.SUBMITED_INFO_PENDING]: '#657384',
  [BankAccountInfoStatus.APPROVED_BANK_ACCOUNT]: '#039836',
  [BankAccountInfoStatus.REJECT_BANK_ACCOUNT]: '#D92D20',
  [BankAccountInfoStatus.BOOKED_ORDER_SUCCESS]: '#039836',
};

const BANK_INFO_STATUS_TYPE = {
  [BankAccountInfoStatus.SUBMITED_INFO_PENDING]: 'Chưa liên kết với nhapthuoc.com (DQH VN)',
  [BankAccountInfoStatus.APPROVED_BANK_ACCOUNT]: 'Đã liên kết với nhapthuoc.com (DQH VN)',
  [BankAccountInfoStatus.REJECT_BANK_ACCOUNT]: 'Có lỗi khi liên kết với nhapthuoc.com (DQH VN)',
  [BankAccountInfoStatus.BOOKED_ORDER_SUCCESS]: 'Đã xác thực',
};

interface BankAccountStatusTextProps {
  status: number;
  justifyContent?: 'center' | 'flex-start';
  mt?: '0' | '1' | '2';
  mb?: '0' | '1' | '2' | '3';
}

const BankAccountStatusText: FC<BankAccountStatusTextProps> = (props) => {
  const { status, justifyContent, mt, mb } = props;

  if (!status) return;

  return (
    <Row
      justifyContent={justifyContent}
      mt={mt}
      mb={mb}
    >
      <CheckCircleFilled style={{ color: ICON_STATUS_CLR[status] }} />
      <Text
        ml="1"
        fontSize="14px"
        fontWeight={400}
        color={TXT_STATUS_CLR[status]}
      >
        {BANK_INFO_STATUS_TYPE[status]}
      </Text>
    </Row>
  );
};

BankAccountStatusText.defaultProps = {
  justifyContent: 'center',
  mt: '2',
  mb: '3',
};

export default BankAccountStatusText;
