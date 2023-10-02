import { AtomBox } from '@tsu-org/ui';
import parse from 'html-react-parser';
import { FC } from 'react';

const BottomFooter: FC<{ footer?: Footer }> = ({ footer }) => {
  if (!footer?.copyRight) {
    return null;
  }

  return (
    <AtomBox
      bg="backgroundGrey2"
      px="0p875rem"
      py="4"
    >
      {parse(footer?.copyRight)}
    </AtomBox>
  );
};

export default BottomFooter;
