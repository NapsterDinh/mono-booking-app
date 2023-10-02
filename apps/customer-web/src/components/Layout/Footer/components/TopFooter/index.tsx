import type { FC } from 'react';
import type { TopFooterProps } from '../../types';
import Desktop from './Desktop';
import Mobile from './Mobile';

const TopFooter: FC<TopFooterProps> = (props) => {
  return (
    <>
      <Desktop {...props} />
      <Mobile {...props} />
    </>
  );
};

export default TopFooter;
