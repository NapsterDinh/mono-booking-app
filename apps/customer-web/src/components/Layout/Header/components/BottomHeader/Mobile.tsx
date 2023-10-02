import CartBadge from '@customer-web/components/CartBadge';
import { useAppDispatch } from '@customer-web/state';
import { setFocusedSearchInput } from '@customer-web/state/global/actions';
import { useFocusedSearchInput } from '@customer-web/state/global/hooks';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Flex, Row, RowBetween, RowFixed } from '@tsu-org/ui-kit';
import { ChevronLeftIcon, HamburgerIcon, LogoWhiteIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useToggle } from 'ahooks';
import { Affix } from 'antd';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { FC } from 'react';
import Search from '../Search';
import type { BottomHeaderProps } from './types';

const Drawer = dynamic(() => import('@customer-web/components/Layout/Drawer'), {
  ssr: false,
});
const SearchInput = dynamic(() => import('../Search/components/SearchInput'));

const Mobile: FC<BottomHeaderProps> = () => {
  const [open, { setLeft, setRight }] = useToggle();
  const focusedSearchInput = useFocusedSearchInput();
  const dispatch = useAppDispatch();

  const handlePrevButtonClicked = () => {
    dispatch(setFocusedSearchInput(false));
  };

  return (
    <Affix
      className={sprinkles({
        display: {
          lg: 'none',
          xs: 'block',
        },
      })}
      offsetTop={0}
    >
      <Box
        background="linear-gradient(360deg, #D15800 0%, #FC9700 100%)"
        display="flex"
        px="1rem"
        py="0.5rem"
      >
        {focusedSearchInput ? (
          <Row
            flexGrow={1}
            gap="3"
          >
            <Button
              icon={
                <ChevronLeftIcon
                  color="white"
                  width="9"
                  height="16"
                />
              }
              type="link"
              onClick={handlePrevButtonClicked}
            />

            <SearchInput device="mobile" />
          </Row>
        ) : (
          <>
            <RowBetween>
              <RowFixed gap="2">
                <Button
                  aria-label="header-hamburger-btn"
                  type="link"
                  onClick={setRight}
                >
                  <HamburgerIcon color="white" />
                </Button>
                <Link
                  aria-label="header-logo-mobile"
                  href="/"
                >
                  <LogoWhiteIcon />
                </Link>
              </RowFixed>

              <Flex gap="1rem">
                <Search />
                <Box
                  alignItems="center"
                  background="linear-gradient(27.41deg, #E87D3D 6.13%, #FFC27A 90.73%)"
                  borderRadius="100%"
                  display="flex"
                  justifyContent="center"
                  width="2p5rem"
                  height="2p5rem"
                >
                  <Link
                    aria-label="cart-link"
                    href="/gio-hang"
                  >
                    <Button
                      aria-label="cart-btn"
                      type="link"
                    >
                      <CartBadge
                        width="24"
                        height="24"
                      />
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </RowBetween>
          </>
        )}

        <Drawer
          open={open}
          onClose={setLeft}
        />
      </Box>
    </Affix>
  );
};

export default Mobile;
