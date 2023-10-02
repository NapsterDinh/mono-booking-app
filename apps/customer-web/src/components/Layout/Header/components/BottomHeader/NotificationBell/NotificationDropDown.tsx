import GenerateTypeNotification from '@customer-web/views/Personal/MyNotification/components/GenerateTypeNotification';
import { Box, Row } from '@tsu-org/ui-kit';
import { NotificationItem } from 'apps/nhapthuoc-estore/src/types/models/notification';
import { memo } from 'react';
import ChildrenNotification from './ChildrenNotification';
import { useRouter } from 'next/router';
import { useReadNotification } from '@customer-web/state/notification/hooks';

interface NotificationDropDownProps {
  noti: NotificationItem;
  handleTurnOffNotification: () => void;
}

const NotificationDropDown = ({ noti, handleTurnOffNotification }: NotificationDropDownProps) => {
  const router = useRouter();
  const { handleReadNotification } = useReadNotification();

  const getStatusType = (noti: NotificationItem) => {
    try {
      const { type } = JSON.parse(noti.extraProperties?.payload);
      return type;
    } catch (error) {
      return null;
    }
  };

  const onNavigateReadNoti = () => {
    if (!noti.isRead) {
      handleReadNotification({ id: noti?.id, tabCode: '' });
    }

    handleTurnOffNotification();
    router.push(noti.link);
  };

  return (
    <Box onClick={onNavigateReadNoti}>
      <Row
        bg="white"
        borderBottom="1"
        borderBottomColor="cardBorder"
        padding="3"
        cursor="pointer"
      >
        <GenerateTypeNotification
          status={getStatusType(noti)}
          type={noti?.templateType}
          isReadable={noti?.isRead}
        />
        <ChildrenNotification notification={noti} />
      </Row>
    </Box>
  );
};

export default memo(NotificationDropDown);
