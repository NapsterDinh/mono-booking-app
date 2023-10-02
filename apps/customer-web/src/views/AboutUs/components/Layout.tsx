import styled from '@emotion/styled';
import Container from '@customer-web/components/Container';
import useMasterLayout from '@customer-web/hooks/useMasterLayout';
import { Box, Row } from '@tsu-org/ui-kit';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

const Aside = styled.aside`
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 12px;
  background-color: white;
  flex-shrink: 0;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    position: sticky;
    top: 16px;
    width: 289px;
  }

  nav {
    ul {
      li {
        a {
          display: block;
          font-size: 16px;
          padding: 0.5rem 1rem;
        }

        &.active,
        &:hover {
          background-color: ${({ theme }) => theme.colors.backgroundGrey2};

          a {
            color: ${({ theme }) => theme.colors.textLink};
          }
        }
      }
    }
  }
`;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { footer } = useMasterLayout();
  const aboutUs = footer?.items?.find((item) => item?.title?.toUpperCase() === 'VỀ CHÚNG TÔI');
  const router = useRouter();

  return (
    <Container p="3">
      <Row
        alignItems="flex-start"
        gap="1p25rem"
        position="relative"
        flexDirection={{
          xs: 'column',
          lg: 'row',
        }}
      >
        <Aside>
          <nav>
            <Box
              as="ul"
              listStyleType="none"
            >
              {aboutUs?.items?.map((item, index) => {
                let pathname = '/';
                let isExternal = false;
                let href = '/';

                try {
                  const url = new URL(item?.redirectUrl);
                  pathname = url.pathname;
                  href = url.href;
                  isExternal = !url.origin.includes('nhapthuoc.com');
                } catch (error) {}

                return (
                  <li
                    className={clsx({
                      active: !isExternal && router.pathname.includes(pathname),
                    })}
                    key={index}
                  >
                    <Link
                      href={isExternal ? href : pathname}
                      target={isExternal ? '_blank' : undefined}
                    >
                      {item?.text}
                    </Link>
                  </li>
                );
              })}
            </Box>
          </nav>
        </Aside>

        <div>{children}</div>
      </Row>
    </Container>
  );
};

export default Layout;
