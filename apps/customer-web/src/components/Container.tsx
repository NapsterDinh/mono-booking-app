import { breakpoints } from '@tsu-org/ui';
import { Box, BoxProps } from '@tsu-org/ui-kit';
import { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren & BoxProps> = ({ children, ...rest }) => {
  return (
    <Box
      width={{
        xl: `${breakpoints.xl}px`,
        _: undefined,
      }}
      mx={{
        xl: 'auto',
      }}
      px={{
        lg: '1rem',
        xl: '0',
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Container;
