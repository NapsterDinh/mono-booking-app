import { Box, Flex } from '@tsu-org/ui-kit';
import { FC, PropsWithChildren } from 'react';
import Aside from './Aside';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex
      py="1rem"
      gap="1rem"
      flexDirection={{
        _: 'column',
        lg: 'row',
      }}
    >
      <Aside />

      <Box flexGrow={1}>{children}</Box>
    </Flex>
  );
};

export default Layout;
