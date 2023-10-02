import { Box } from '@tsu-org/ui-kit';
import type { FC } from 'react';
import BottomFooter from './components/BottomFooter';
import TopFooter from './components/TopFooter';
import type { FooterProps } from './types';

const Footer: FC<FooterProps> = ({ footer }) => {
  if (!footer) {
    return null;
  }

  return (
    <Box as="footer">
      <TopFooter footer={footer} />
      <BottomFooter footer={footer} />
    </Box>
  );
};

export default Footer;
