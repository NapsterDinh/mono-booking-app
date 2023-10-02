import LinkToTpBank from '@customer-web/views/Personal/LinkToTpBank';
import AuthProvider from '../../providers/AuthProvider';

const TpBankOverdraftLoanPage = (props) => {
  return (
    <AuthProvider>
      <LinkToTpBank {...props} />
    </AuthProvider>
  );
};

export default TpBankOverdraftLoanPage;
