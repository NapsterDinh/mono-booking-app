import { useSubmitedForm } from '@customer-web/state/user/hooks';
import FailedStep from './components/FailedStep';
import LoanFormRegister from './components/LoanFormRegister';
import SuccessfulStep from './components/SuccessfulStep';
import { COMPONENT_TYPE_CREDIT_FORM } from './constants';

const OverdraftLoanRegister = () => {
  const submitedForm = useSubmitedForm();

  const renderPage = () => {
    switch (submitedForm?.componentType) {
      case COMPONENT_TYPE_CREDIT_FORM.SUCCESS_COMPONENT:
        return <SuccessfulStep />;
      case COMPONENT_TYPE_CREDIT_FORM.FAILURE_COMPONENT:
        return <FailedStep />;

      default:
        return <LoanFormRegister />;
    }
  };
  return <>{renderPage()}</>;
};

export default OverdraftLoanRegister;
