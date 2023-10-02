import { TpBankOverdraftLoanStatus } from '@customer-web/enums/TpBankOverdraftLoan';
import { Tag } from '@tsu-org/ui-kit';

export const STATUS_CLR = {
  [TpBankOverdraftLoanStatus.LOAN_PROCESS]: 'functionYellow2',
  [TpBankOverdraftLoanStatus.APPROVAL_RULE]: 'tagSuccessBackground',
  [TpBankOverdraftLoanStatus.LOAN_REJECTED]: 'tagErrorBackground',
  [TpBankOverdraftLoanStatus.LOAN_DISBURSED]: 'tagSuccessBackground',
};

export const TXT_STATUS_CLR = {
  [TpBankOverdraftLoanStatus.LOAN_PROCESS]: 'textWarning',
  [TpBankOverdraftLoanStatus.APPROVAL_RULE]: 'success',
  [TpBankOverdraftLoanStatus.LOAN_REJECTED]: 'error',
  [TpBankOverdraftLoanStatus.LOAN_DISBURSED]: 'success',
};

export const STATUS_TYPE = {
  [TpBankOverdraftLoanStatus.LOAN_PROCESS]: 'Chờ duyệt',
  [TpBankOverdraftLoanStatus.APPROVAL_RULE]: 'Đã duyệt',
  [TpBankOverdraftLoanStatus.LOAN_REJECTED]: 'Từ chối',
  [TpBankOverdraftLoanStatus.LOAN_DISBURSED]: 'Đã giải ngân',
};

interface StatusTagProps {
  status: number;
}
export default function StatusTag(props: StatusTagProps) {
  const { status } = props;
  return (
    <Tag
      borderRadius="24px"
      fontSize="14px"
      fontWeight={500}
      marginRight={0}
      backgroundColor={STATUS_CLR[status]}
      color={TXT_STATUS_CLR[status]}
    >
      {STATUS_TYPE[status]}
    </Tag>
  );
}
