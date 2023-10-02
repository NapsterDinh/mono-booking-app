import { useUnsubscribeNotificationMutation } from '@customer-web/hooks/mutations/notification';
import { useAppDispatch } from '@customer-web/state';
import { useDeviceCode } from '@customer-web/state/global/hooks';
import { logout } from '@customer-web/state/user/actions';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const LoadingFRT = dynamic(() => import('@customer-web/components/Common/Pages/LoadingFRT'), {
  ssr: false,
});

export async function getServerSideProps() {
  return {
    props: {
      layout: false,
    },
  };
}

const LogoutPage = () => {
  const dispatch = useAppDispatch();
  const { mutateAsync: unsubscribe } = useUnsubscribeNotificationMutation();
  const deviceCode = useDeviceCode();

  const handleLogout = async () => {
    if (deviceCode) {
      try {
        await unsubscribe(deviceCode);
      } catch (error) {}
    }

    dispatch(logout());

    window.location.href = '/';
  };

  useEffect(() => {
    handleLogout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <LoadingFRT />;
};

export default LogoutPage;
