import useNotificationListQuery from '@customer-web/hooks/queries/useNotificationListQuery';
import { useAuthenticated } from '@customer-web/state/user/hooks';
import EmptyNotificationList from '@customer-web/views/Personal/MyNotification/components/EmptynotificationList';
import LoadingNotificationList from '@customer-web/views/Personal/MyNotification/components/LoadingNotificationList';
import { MAX_NOTIFICATIONS_PER_FETCH, PAGE_OPTIONS } from '@customer-web/views/Personal/MyNotification/constants';
import { Box, Row, Text } from '@tsu-org/ui-kit';
import Link from 'next/link';
import { Ref, forwardRef } from 'react';
import NotificationDropDown from './NotificationDropDown';

interface NotificationHeaderProps {
  onNavigate: () => void;
  handleTurnOffNotification: () => void;
}

const NotificationHeader = forwardRef(
  ({ onNavigate, handleTurnOffNotification }: NotificationHeaderProps, ref: Ref<any>) => {
    const authenticated = useAuthenticated();
    const payload = {
      pageSize: MAX_NOTIFICATIONS_PER_FETCH,
      pageNumber: PAGE_OPTIONS.PAGE_NUMBER,
      templateIds: [],
    };
    const { data: notifications, isLoading } = useNotificationListQuery(payload, {
      enabled: authenticated,
    });

    if (isLoading) {
      return <LoadingNotificationList />;
    }

    return (
      <Box
        background="white"
        borderRadius="12px"
        mt="12px"
        border="none"
        boxShadow="0px 0px 8px -4px rgba(0, 39, 102, 0.03), 0px 0px 24px -4px rgba(0, 39, 102, 0.08)"
        width={500}
        ref={ref}
      >
        <Text
          fontSize="16px"
          bold
          px="3"
          pt="2"
        >
          Thông báo mới nhận
        </Text>
        {!notifications.items?.length ? (
          <EmptyNotificationList />
        ) : (
          <>
            {notifications?.items?.map((item) => (
              <NotificationDropDown
                noti={item}
                key={item?.id}
                handleTurnOffNotification={handleTurnOffNotification}
              />
            ))}
            <Row
              width="100%"
              alignItems="center"
              justifyContent="center"
              px="4"
              py="2"
              onClick={onNavigate}
            >
              <Link href="/ca-nhan/thong-bao">
                <Text
                  as="span"
                  small
                  color="textLink"
                >
                  Xem tất cả
                </Text>
              </Link>
            </Row>
          </>
        )}
      </Box>
    );
  },
);

NotificationHeader.displayName = 'NotificationHeader';

export default NotificationHeader;
