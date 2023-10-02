import PersonalInfo from '@customer-web/views/Personal/PersonalInfo';
import AuthProvider from '../../providers/AuthProvider';

const PersonalInfoPage = (props) => {
  return (
    <AuthProvider>
      <PersonalInfo {...props} />
    </AuthProvider>
  );
};

export default PersonalInfoPage;
