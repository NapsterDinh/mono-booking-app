import MyNotification from '@customer-web/views/Personal/MyNotification';
import AuthProvider from '../../providers/AuthProvider';

const NotificationPage = (props) => {
  return (
    <>
      <AuthProvider>
        <MyNotification {...props} />
      </AuthProvider>
    </>
  );
};

export default NotificationPage;
