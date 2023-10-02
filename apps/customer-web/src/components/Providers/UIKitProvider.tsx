import { ui-kitProvider as Baseui-kitProvider, dark, light } from '@tsu-org/ui-kit';
import 'dayjs/locale/vi';
import { useTheme as useNextTheme } from 'next-themes';
import type { PropsWithChildren } from 'react';

const ui-kitProvider: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  const { resolvedTheme } = useNextTheme();

  return (
    <Baseui-kitProvider
      theme={resolvedTheme === 'dark' ? dark : light}
      {...props}
    >
      {children}
    </Baseui-kitProvider>
  );
};

export default ui-kitProvider;
