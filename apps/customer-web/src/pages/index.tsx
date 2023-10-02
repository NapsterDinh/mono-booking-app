import { META_DESCRIPTION_DEFAULT, META_TITLE } from '@customer-web/helpers/Constant';
import type { BannerSection, HomePageProps } from '@customer-web/services/page-providers/HomeProviderService';
import { HomeProviderService } from '@customer-web/services/page-providers/HomeProviderService';
import { getHomePage } from '@customer-web/services/request/providers/cms';
import Home from '@customer-web/views/Home';
import Banner from '@customer-web/views/Home/components/Banner';
import Policies from '@customer-web/views/Home/components/Policies';
import { AtomBox } from '@tsu-org/ui';
import { Box } from '@tsu-org/ui-kit';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useMemo } from 'react';

const Page404 = dynamic(() => import('@customer-web/components/Common/Pages/Page404'), { ssr: false });

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = (await getHomePage()) || { data: null };

  if (!data) {
    return {
      notFound: true,
    };
  }

  const homeService = new HomeProviderService(data);
  const homeWrapper = await homeService.wrapResponse();
  return {
    props: { home: homeWrapper },
  };
};

const HomePage = ({ home }: { home: HomePageProps }) => {
  const bannerSection = useMemo(
    () => home?.sections.find((section) => section?.component === 'section.banner') as BannerSection | undefined,
    [home],
  );

  if (home) {
    const { seo } = home;
    const title: string = META_TITLE;
    const description: string = seo?.description || META_DESCRIPTION_DEFAULT;
    const facebookSocial = seo?.social?.find?.((i: any) => i?.socialNetwork?.toLowerCase() === 'facebook') || null;

    return (
      <>
        <Head>
          <title key={'title'}>{title || 'nhapthuoc.com'}</title>
          <meta
            name="description"
            content={description}
          />
          {facebookSocial && (
            <>
              <meta
                key="og:title"
                property="og:title"
                content={facebookSocial.title}
              />
              <meta
                key="og:description"
                property="og:description"
                content={facebookSocial.description}
              />
              <meta
                key="og:image"
                property="og:image"
                content={facebookSocial.image?.url}
              />
            </>
          )}
        </Head>
        <AtomBox
          pt={{
            xs: '0',
            lg: '1p25rem',
          }}
        >
          <Box>
            {bannerSection && (
              <Banner
                mb="0p75rem"
                banner={bannerSection}
              />
            )}

            <Policies
              mb={{
                xs: '0',
                lg: '8',
              }}
            />
          </Box>
          <Home home={home} />
        </AtomBox>
      </>
    );
  }

  return <Page404 />;
};

export default HomePage;
