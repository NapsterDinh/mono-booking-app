import { useCountAllNotification } from '@customer-web/state/notification/hooks';
import { Box, BoxProps } from '@tsu-org/ui-kit';
import { BellNotifyIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Badge } from 'antd';
import { FC } from 'react';

const NotificationBell: FC<BoxProps> = (props) => {
  const countNotification = useCountAllNotification();

  return (
    <Box {...props}>
      <Badge
        dot={countNotification.unRead > 0}
        key="show-noti"
        rootClassName="badge-notification"
        color="orange"
        offset={[-6, 8]}
      >
        <BellNotifyIcon color="link" />
      </Badge>
    </Box>
  );
};
export default NotificationBell;
