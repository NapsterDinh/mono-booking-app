import Container from '@customer-web/components/Container';
import { Box, Column } from '@tsu-org/ui-kit';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Column
      minHeight="100svh"
      justifyContent="center"
    >
      <Container>
        <Box
          backgroundImage={{
            lg: 'url(/images/for-you-background.svg)',
          }}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          width="100%"
          aspectRatio="1216/388"
        >
          {children}
        </Box>
      </Container>
    </Column>
  );
};

export default Layout;
