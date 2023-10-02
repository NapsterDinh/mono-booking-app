import LoadingFRT from '@customer-web/components/Common/Pages/LoadingFRT';
import PageMeta from '@customer-web/components/Layout/PageMeta';
import { MasterLayoutDataService } from '@customer-web/services/master-layout-data/MasterLayoutDataService';
import GlobalStyle from '@customer-web/styles/Global';
import { interFont } from '@customer-web/styles/fonts';
import { ResetCSS } from '@tsu-org/ui-kit';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isNil from 'lodash/isNil';
import type { AppProps as BaseAppProps } from 'next/app';
import Head from 'next/head';
import type { ReactNode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import Global from '../Global';
import Providers from '../Providers';
import Layout from '../components/Layout';
import store, { persistor } from '../state';

import '@tsu-org/ui/css/reset.css';
import 'nprogress/nprogress.css';
import 'swiper/css';

dayjs.extend(localizedFormat);

interface AppProps extends BaseAppProps {
  global: InitialGlobal;
}

function Main({ Component, pageProps }: { Component: AppProps['Component']; pageProps: any }) {
  return (
    <>
      {isNil(pageProps?.layout) ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

function App({ Component, ...rest }: AppProps): ReactNode {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale = 1.0, maximum-scale=2.0, viewport-fit=cover"
        />
        <meta
          key="og:locale"
          property="og:locale"
          content="vi_VN"
        />
        <meta
          key="og:type"
          property="og:type"
          content="article"
        />
        <meta
          key="og:site_name"
          property="og:site_name"
          content="nhapthuoc.com"
        />
      </Head>
      <Providers
        store={store}
        pageProps={rest.pageProps}
        global={rest.global}
      >
        <PageMeta
          pageTitle={rest.pageProps?.pageTitle}
          pageDescription={rest.pageProps?.pageDescription}
          openGraph={rest.pageProps?.openGraph}
        />
        <ResetCSS />
        <GlobalStyle />
        <style
          jsx
          global
        >{`
          * {
            font-family: ${interFont.style.fontFamily};
          }
        `}</style>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <Global />
        <PersistGate
          loading={<LoadingFRT />}
          persistor={persistor}
        >
          <Main
            Component={Component}
            pageProps={rest.pageProps}
          />
        </PersistGate>
        <ReactQueryDevtools />
      </Providers>
    </>
  );
}

App.getInitialProps = async () => {
  let global: {
    menu?: Menu[];
    header?: Header;
    footer?: Footer;
    blacklist?: string[];
  };

  // handle get data for layout
  try {
    const masterLayoutDataService = new MasterLayoutDataService();
    global = await masterLayoutDataService.getMasterLayoutCachedData();

    console.log('success fetch master layout data');
  } catch (error) {
    console.error('🚀 ~ file: _app.tsx:127 ~ App.getInitialProps= ~ error:', error);
  }

  return {
    global,
  };
};

export default App;
