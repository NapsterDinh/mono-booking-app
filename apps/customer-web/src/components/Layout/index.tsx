import Footer from '@customer-web/components/Layout/Footer';
import useMasterLayout from '@customer-web/hooks/useMasterLayout';
import { usePollSessionId } from '@customer-web/state/cache/hooks';
import { usePollCartInfo } from '@customer-web/state/cart/hooks';
import { useModal } from '@customer-web/state/global/hooks';
import { usePollRecentlyWatched } from '@customer-web/state/product/hooks';
import { usePollUserInfo } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Column } from '@tsu-org/ui-kit';
import dynamic from 'next/dynamic';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { ReactNode, useEffect } from 'react';
import Container from '../Container';
import Header from './Header';
import Menu from './Menu';

const ScrollToTopButton = dynamic(() => import('./ScrollToTopButton'), {
  ssr: false,
});
const UserHooks = dynamic(() => import('./UserHooks'), {
  ssr: false,
});

function GlobalHooks() {
  usePollSessionId();
  usePollRecentlyWatched();
  usePollUserInfo();
  usePollCartInfo();

  return null;
}

NProgress.configure({ showSpinner: false });

const Layout = ({ className, children }: { className?: string; children: ReactNode }) => {
  const { menu, header, footer } = useMasterLayout();
  const { closeModal } = useModal();

  useEffect(() => {
    const start = () => {
      NProgress.start();
      closeModal();
    };
    const end = () => {
      NProgress.done();
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalHooks />
      <UserHooks />

      <Column
        className={className}
        as="section"
        minHeight="100svh"
      >
        <Header header={header} />
        <Menu categories={menu} />
        <AtomBox
          bgc="backgroundLightOrange"
          as="main"
          flexGrow={1}
          display="flex"
          flexDirection="column"
        >
          <Container
            display="flex"
            flexDirection="column"
            flexGrow="1"
          >
            {children}
          </Container>
        </AtomBox>

        <Footer footer={footer} />

        <ScrollToTopButton />

        <div id="overlay-menu"></div>
      </Column>
    </>
  );
};

export default Layout;
