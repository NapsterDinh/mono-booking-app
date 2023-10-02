import { Button, ColumnCenter, Text } from '@tsu-org/ui-kit';
import { FC } from 'react';
import LocationIcon from './LocationIcon';

const Empty: FC<{
  onAddNewAddress?: () => void;
}> = ({ onAddNewAddress }) => {
  return (
    <ColumnCenter>
      <LocationIcon />
      <Text
        color="textSecondary"
        bold
        mb="0.25rem"
      >
        Bạn chưa lưu địa chỉ nào
      </Text>
      <Text
        color="textTertiary"
        small
        textAlign="center"
        mb="1.5rem"
      >
        Cập nhật địa chỉ ngay để có trải nghiệm <br />
        mua hàng nhanh nhất.
      </Text>
      <Button
        type="secondary"
        width="280px"
        scale="xl"
        onClick={onAddNewAddress}
      >
        Thêm địa chỉ mới
      </Button>
    </ColumnCenter>
  );
};

export default Empty;
