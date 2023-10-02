import { breakpoints } from '@tsu-org/ui';
import type { Store } from '@reduxjs/toolkit';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { configResponsive } from 'ahooks';
import 'dayjs/locale/vi';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useState } from 'react';
import { Provider } from 'react-redux';
import AntdProvider from './components/Providers/AntdProvider';
import ui-kitProvider from './components/Providers/ui-kitProvider';
import AppProvider from './components/Providers/AppProvider';

configResponsive(breakpoints);

const Providers: React.FC<
  React.PropsWithChildren<{
    store: Store;
    children: React.ReactNode;
    pageProps: any;
    global: {
      menu: Menu[];
      header: Header;
      footer: Footer;
    };
  }>
> = ({ global, children, pageProps, store }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps?.dehydratedState}>
          <NextThemeProvider defaultTheme="light">
            <AppProvider masterLayoutData={global}>
              <ui-kitProvider>
                <AntdProvider>{children}</AntdProvider>
              </ui-kitProvider>
            </AppProvider>
          </NextThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;
