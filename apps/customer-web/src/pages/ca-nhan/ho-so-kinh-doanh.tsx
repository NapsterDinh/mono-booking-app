import BusinessProfile from '@customer-web/views/Personal/BusinessProfile';
import AuthProvider from '../../providers/AuthProvider';

const BusinessProfilePage = (props) => {
  return (
    <AuthProvider>
      <BusinessProfile {...props} />
    </AuthProvider>
  );
};

export default BusinessProfilePage;
