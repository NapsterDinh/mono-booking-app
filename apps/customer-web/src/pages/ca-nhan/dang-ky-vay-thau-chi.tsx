import OverdraftLoanRegister from '@customer-web/views/Personal/OverdraftLoanRegister';
import AuthProvider from '../../providers/AuthProvider';
import TpBankProvider from '../../providers/TpBankProvider';

const OverdraftLoanRegisterPage = (props) => {
  return (
    <AuthProvider>
      <TpBankProvider>
        <OverdraftLoanRegister {...props} />
      </TpBankProvider>
    </AuthProvider>
  );
};

export default OverdraftLoanRegisterPage;
