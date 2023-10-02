import { AtomBox } from '@tsu-org/ui';
import type { FC } from 'react';
import { useRef } from 'react';
import BottomHeader from './components/BottomHeader';
import TopHeader from './components/TopHeader';
import type { HeaderProps } from './types';

const Header: FC<HeaderProps> = () => {
  const ref = useRef(null);

  return (
    <AtomBox
      as="header"
      position="relative"
      zIndex="10"
      ref={ref}
    >
      <TopHeader />
      <BottomHeader />
    </AtomBox>
  );
};

export default Header;
