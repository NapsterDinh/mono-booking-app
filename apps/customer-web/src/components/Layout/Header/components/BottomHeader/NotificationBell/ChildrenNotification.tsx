import { Box, Flex, Text } from '@tsu-org/ui-kit';
import { Badge, Skeleton } from 'antd';
import { NotificationItem } from 'apps/nhapthuoc-estore/src/types/models/notification';
import dayjs from 'dayjs';

interface ChildrenNotificationProps {
  notification: NotificationItem;
}

const ChildrenNotification = ({ notification }: ChildrenNotificationProps) => {
  if (!notification?.id) {
    return (
      <Box>
        <Flex>
          <Skeleton paragraph={{ rows: 0 }} />
        </Flex>
        <Skeleton paragraph={{ rows: 0 }} />
      </Box>
    );
  }

  return (
    <Box ml="1rem">
      <Flex>
        <Badge
          dot={!notification?.isRead}
          key="show-noti"
          rootClassName="badge-notification"
          color="orange"
          offset={[8, 12]}
        >
          <Text
            fontSize="16px"
            bold
            color={notification?.isRead ? 'textTertiary' : undefined}
          >
            {notification?.title}
          </Text>
        </Badge>
      </Flex>

      <Text
        fontWeight={500}
        color={'textTertiary'}
      >
        {dayjs(notification?.sendDate)
          .endOf('day')
          .isSame(dayjs().endOf('day'))
          ? `${dayjs(notification?.sendDate).format('HH:mm')}, Hôm nay`
          : dayjs(notification?.sendDate).format('HH:mm, DD/MM/YYYY')}
      </Text>

      <Text
        fontSize="14px"
        fontWeight={400}
        color={notification?.isRead ? undefined : 'textTertiary'}
      >
        {notification?.content}
      </Text>
    </Box>
  );
};

export default ChildrenNotification;
