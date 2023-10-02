import RecentlyWatchedProducts from '@customer-web/components/RecentlyWatchedProducts';
import { AtomBox } from '@tsu-org/ui';
import { Box, Breadcrumb } from '@tsu-org/ui-kit';
import Link from 'next/link';
import type { FC } from 'react';

interface EmptyProps {
  onNext?: () => void;
}

const Empty: FC<EmptyProps> = () => {
  return (
    <Box p="1rem 0rem">
      <AtomBox mb="3">
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Trang chủ</Link>,
            },
            {
              title: 'Giỏ hàng',
            },
          ]}
        />
      </AtomBox>
      <RecentlyWatchedProducts />
    </Box>
  );
};

export default Empty;
