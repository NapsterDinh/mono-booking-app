import { useTheme } from '@emotion/react';
import { UserStatus } from '@customer-web/enums/User';
import {
  getErrorNotificationSetting,
  getInfoNotificationSetting,
  // getSuccessNotificationSetting,
  getWarningNotificationSetting,
} from '@customer-web/helpers/Notification';
import { useAuthenticated, useUserState } from '@customer-web/state/user/hooks';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Text } from '@tsu-org/ui-kit';
import { App } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const displayNotiPaths = ['/', '/ca-nhan/thong-tin-ca-nhan', '/gio-hang'];

const useCheckUserStatus = () => {
  const { notification } = App.useApp();
  const user = useUserState();
  const authenticated = useAuthenticated();
  const router = useRouter();
  const theme = useTheme();
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    if (notified || !authenticated || user.loading || !router.isReady) {
      return;
    }

    if (user?.profile?.status && displayNotiPaths.includes(router.pathname)) {
      setNotified(true);

      switch (user.profile.status) {
        case UserStatus.OPEN: {
          return notification.info({
            ...getInfoNotificationSetting(),
            duration: null,
            message: <Text bold>Tài khoản chưa được kích hoạt</Text>,
            description: (
              <Text small>
                Để có thể đặt hàng tại nhapthuoc.com.
                <br /> Quý khách vui lòng tiến hành
                <br />
                <Link href="/ca-nhan/ho-so-kinh-doanh">
                  <Text
                    color={theme.colors.textLink}
                    bold
                    small
                    as="span"
                  >
                    Kích hoạt tài khoản tại đây.
                  </Text>
                </Link>
              </Text>
            ),
          });
        }
        case UserStatus.PENDING: {
          return notification.warning({
            ...getWarningNotificationSetting(),
            duration: null,
            message: <Text bold>Tài khoản đang chờ duyệt</Text>,
            description: (
              <Text small>
                Tài khoản của quý khách đang chờ{' '}
                <br
                  className={sprinkles({
                    display: {
                      xs: 'none',
                      sm: 'unset',
                    },
                  })}
                />
                duyệt bởi nhân viên nhapthuoc.com trong{' '}
                <br
                  className={sprinkles({
                    display: {
                      xs: 'none',
                      sm: 'unset',
                    },
                  })}
                />
                vòng 24h kể từ lúc kích hoạt.
              </Text>
            ),
          });
        }
        // case UserStatus.APPROVED: {
        //   return notification.success({
        //     ...getSuccessNotificationSetting(),
        //     duration: null,
        //     message: <Text bold>Tài khoản đã được kích hoạt</Text>,
        //     description: <Text small>Quý khách có thể mua hàng tại nhapthuoc.com.</Text>,
        //   });
        // }
        case UserStatus.REJECTED: {
          return notification.error({
            ...getErrorNotificationSetting(),
            duration: null,
            message: <Text bold>Kích hoạt tài khoản thất bại</Text>,
            description: (
              <Text small>
                Có vấn đề về thông tin và giấy tờ <br />
                được cung cấp. Vui lòng bổ sung các <br />
                giấy tờ cần thiết để kích hoạt lại tài <br />
                khoản.{' '}
                <Link href="/ca-nhan/ho-so-kinh-doanh">
                  <Text
                    color={theme.colors.textLink}
                    bold
                    small
                    as="span"
                  >
                    Cập nhật hồ sơ tại đây.
                  </Text>
                </Link>
              </Text>
            ),
          });
        }
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, router.isReady, router.pathname, user?.loading, user?.profile?.status]);
};

export default useCheckUserStatus;
