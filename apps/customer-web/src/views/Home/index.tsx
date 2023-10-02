import { HOME_COMPONENT_SECTION } from '@customer-web/helpers/Constant';
import type {
  FeaturedProductSection,
  FlashSaleProductSection,
  ProductsSection,
} from '@customer-web/page-providers/HomeProviderService';
import { useAuthenticated, useIsLoadingUser } from '@customer-web/state/user/hooks';
import dynamic from 'next/dynamic';
import type { FC } from 'react';
import FlashSale from './components/FlashSale';
import LoginSuggest from './components/LoginSuggest';
import type { HomeProps } from './types';

const FeaturedProduct = dynamic(() => import('./components/FeaturedProduct'), { ssr: false });
const HasProducts = dynamic(() => import('./components/HasProducts'), { ssr: false });
const ForYou = dynamic(() => import('./components/ForYou'), { ssr: false });

const Home: FC<HomeProps> = ({ home }) => {
  const authenticated = useAuthenticated();
  const isLoadingUser = useIsLoadingUser();

  return (
    <>
      {(isLoadingUser || !authenticated) && (
        <LoginSuggest display={isLoadingUser || authenticated ? 'none' : 'block'} />
      )}

      {authenticated && (
        <>
          {home?.sections?.map((section) => {
            switch (section?.component) {
              case HOME_COMPONENT_SECTION.FLASH_SALE: {
                return (
                  <FlashSale
                    key={section?.component}
                    mb={{
                      xs: '0',
                      lg: '2p25rem',
                    }}
                    section={section as FlashSaleProductSection}
                  />
                );
              }
              case HOME_COMPONENT_SECTION.FEATURED_PRODUCT: {
                return (
                  <FeaturedProduct
                    key={section?.component}
                    mb={{
                      xs: '0',
                      lg: '2p25rem',
                    }}
                    section={section as FeaturedProductSection}
                  />
                );
              }
              default: {
                if (section?.products) {
                  return (
                    <HasProducts
                      key={section?.component}
                      mb={{
                        xs: '0',
                        lg: '2p25rem',
                      }}
                      section={section as ProductsSection}
                    />
                  );
                }

                return null;
              }
            }
          })}

          <ForYou
            mb={{
              xs: '0',
              lg: '2p25rem',
            }}
          />
        </>
      )}
    </>
  );
};

export default Home;
