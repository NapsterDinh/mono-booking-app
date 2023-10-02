import { StyleProvider, createCache } from '@ant-design/cssinjs';
import { globalConfig } from '@customer-web/configs/env';
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { doExtractStyle } from '../scripts/genAntdCss';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const cache = createCache();
    let fileName = '';
    const originalRenderPage = ctx.renderPage;
    const initialProps = await Document.getInitialProps(ctx);

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => (
            <StyleProvider cache={cache}>
              <App {...props} />
            </StyleProvider>
          ),
        });

      fileName = doExtractStyle({
        cache,
      });

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {fileName && (
              <link
                rel="stylesheet"
                href={`/${fileName}`}
              />
            )}
          </>
        ),
      };
    } catch (error) {
      return initialProps;
    }
  }

  render() {
    return (
      <Html
        data-theme="light"
        style={{
          colorScheme: 'light',
        }}
      >
        <Head>
          <meta charSet="UTF-8" />
          <meta
            httpEquiv="X-UA-Compatible"
            content="IE=edge"
          />
          <link
            rel="shortcut icon"
            href="/favicon.ico"
          />
          <meta
            name="copyright"
            content="nhapthuoc.com"
          />
          <meta
            name="author"
            content="nhapthuoc.com"
          />
          <meta
            name="robots"
            content="INDEX,FOLLOW"
          />
          {/* <meta
            property="fb:app_id"
            content={'1768713483442649'}
          /> */}
          <link
            rel="dns-prefetch"
            href={`${globalConfig.CDN_HOSTNAME}/`}
          />
          <link
            rel="manifest"
            href="manifest.json"
          />
          {globalConfig.GA_MEASUREMENT_ID && (
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${globalConfig.GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
          )}
          {globalConfig.GA_MEASUREMENT_ID && (
            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${globalConfig.GA_MEASUREMENT_ID}');
              `}
            </Script>
          )}
          <Script
            src="/OneSignalSDKWorker.js"
            strategy="worker"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
