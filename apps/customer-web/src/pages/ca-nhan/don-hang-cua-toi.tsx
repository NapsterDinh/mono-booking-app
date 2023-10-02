import MyOrder from '@customer-web/views/Personal/MyOrder';
import AuthProvider from '../../providers/AuthProvider';

const MyOrderPage = (props) => {
  return (
    <AuthProvider>
      <MyOrder {...props} />
    </AuthProvider>
  );
};

export default MyOrderPage;
