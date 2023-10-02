import { globalConfig } from '@customer-web/configs/env';
import { useSubscribeNotificationMutation } from '@customer-web/hooks/mutations/notification';
import useNotificationListQuery from '@customer-web/hooks/queries/useNotificationListQuery';
import { useAppDispatch } from '@customer-web/state';
import { setDeviceCode } from '@customer-web/state/global/actions';
import { useDeviceCode } from '@customer-web/state/global/hooks';
import { countAllNotification } from '@customer-web/state/notification/actions';
import { useAuthenticated } from '@customer-web/state/user/hooks';
import { MAX_NOTIFICATIONS_PER_FETCH, PAGE_OPTIONS } from '@customer-web/views/Personal/MyNotification/constants';
import { useEffect } from 'react';
import OneSignal from 'react-onesignal';

const OneSignalHandler = () => {
  const { mutate: subscribe } = useSubscribeNotificationMutation({
    retry: 5,
    retryDelay: 1000,
  });
  const dispatch = useAppDispatch();
  const deviceCode = useDeviceCode();
  const authenticated = useAuthenticated();
  const payload = {
    pageSize: MAX_NOTIFICATIONS_PER_FETCH,
    pageNumber: PAGE_OPTIONS.PAGE_NUMBER,
    templateIds: [],
  };
  const { refetch } = useNotificationListQuery(payload, {
    enabled: authenticated,
  });

  const foregroundWillDisplayListener = (event) => {
    console.log(`notification will display:`, event);
    dispatch(countAllNotification());
    refetch();
  };

  useEffect(() => {
    // init OneSignal
    OneSignal.init({
      appId: globalConfig.ONE_SIGNAL_APP_ID,
      safari_web_id: '',
      allowLocalhostAsSecureOrigin: true,
      webhooks: {
        cors: false,
      },
      welcomeNotification: {
        title: 'nhapthuoc.com',
        message: 'Đăng ký thành công',
      },
    }).then(() => {
      OneSignal.Notifications.requestPermission();
      dispatch(setDeviceCode(OneSignal.User.PushSubscription.id));
    });

    OneSignal.Notifications.addEventListener('foregroundWillDisplay', foregroundWillDisplayListener);

    return () => {
      OneSignal.Notifications.removeEventListener('foregroundWillDisplay', foregroundWillDisplayListener);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!authenticated || !deviceCode) {
      return;
    }

    subscribe(deviceCode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, deviceCode]);

  return null;
};

export default OneSignalHandler;
