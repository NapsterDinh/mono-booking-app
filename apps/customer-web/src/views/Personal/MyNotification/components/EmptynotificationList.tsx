import { Column, Image, Text } from '@tsu-org/ui-kit';

const EmptyNotificationList = () => {
  return (
    <Column
      display="flex"
      alignItems="center"
      justifyContent="center"
      paddingY="7rem"
    >
      <Image
        src="/images/cart-empty.png"
        alt="empty cart"
      />
      <Text
        color="textSecondary"
        mt="4"
      >
        Bạn chưa có thông báo nào.
      </Text>
    </Column>
  );
};

export default EmptyNotificationList;
