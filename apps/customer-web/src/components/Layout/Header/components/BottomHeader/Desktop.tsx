import CartBadge from '@customer-web/components/CartBadge';
import Container from '@customer-web/components/Container';
import { ModalType } from '@customer-web/enums/index';
import useMasterLayout from '@customer-web/hooks/useMasterLayout';
import useTopSearchKeywords from '@customer-web/hooks/useTopSearchKeywords';
import { useModal } from '@customer-web/state/global/hooks';
import { useAuthenticated } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Button, Dropdown, Flex, LinkExternal, Row, RowFixed, Text } from '@tsu-org/ui-kit';
import { LogoIcon, PersonFilledIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import map from 'lodash/map';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, type FC } from 'react';
import Search from '../Search';
import NotificationBell from './NotificationBell/NotificationBell';
import NotificationHeader from './NotificationBell/NotificationHeader';
import type { BottomHeaderProps } from './types';

const UserMenu = dynamic(() => import('./UserMenu'), {
  ssr: false,
});

const Desktop: FC<BottomHeaderProps> = () => {
  const { openModal } = useModal();
  const authenticated = useAuthenticated();
  const keywords = useTopSearchKeywords();
  const { header } = useMasterLayout();
  const router = useRouter();

  const [openNotification, setOpenNotification] = useState(false);

  const handleOpenNotification = () => {
    setOpenNotification(!openNotification);
  };

  const handleSeeAllNotification = () => {
    setOpenNotification(false);
    router.push('/ca-nhan/thong-bao');
  };

  return (
    <AtomBox
      className={sprinkles({
        display: {
          lg: 'block',
          xs: 'none',
        },
      })}
    >
      <Flex
        background="url(/images/header-background.png) no-repeat"
        backgroundSize="cover"
        flexDirection="column"
        py="1rem"
      >
        <Container>
          <Flex
            gap="2"
            flexDirection="column"
          >
            <Row
              gap="3"
              flexShrink={0}
            >
              <Link
                aria-label="header-logo-desktop"
                href="/"
              >
                {header?.logo?.url ? (
                  <Image
                    alt=""
                    src={header?.logo?.url}
                    width={197}
                    height={42}
                  />
                ) : (
                  <LogoIcon />
                )}
              </Link>

              <Search />

              <AtomBox flexShrink={0}>
                {!authenticated && (
                  <Button
                    display="flex"
                    gap="0.5rem"
                    icon={
                      <PersonFilledIcon
                        color="textLink"
                        width="16px"
                        height="16px"
                      />
                    }
                    type="link"
                    onClick={openModal.bind(this, ModalType.LOGIN, undefined)}
                  >
                    <Text
                      color="textLink"
                      fontWeight="500"
                    >
                      Đăng nhập
                    </Text>
                  </Button>
                )}

                <UserMenu />
              </AtomBox>

              {authenticated && (
                <Dropdown
                  trigger={['click']}
                  arrow={{ pointAtCenter: true }}
                  open={openNotification}
                  onOpenChange={handleOpenNotification}
                  dropdownRender={() => (
                    <NotificationHeader
                      onNavigate={handleSeeAllNotification}
                      handleTurnOffNotification={handleOpenNotification}
                    />
                  )}
                  placement="bottomRight"
                  rootClassName="global-dropdown-arrow"
                >
                  <NotificationBell
                    cursor="pointer"
                    display="flex"
                    flexGrow={0}
                  />
                </Dropdown>
              )}

              <AtomBox flexShrink={0}>
                <Link href="/gio-hang">
                  <Button
                    scale="xl"
                    p="0.5rem 1rem"
                  >
                    <CartBadge />
                    <Text
                      color="white"
                      fontWeight="500"
                    >
                      Giỏ hàng
                    </Text>
                  </Button>
                </Link>
              </AtomBox>
            </Row>

            {keywords && keywords.length ? (
              <Row
                gap="0p75rem"
                justifyContent="center"
              >
                <AtomBox flexShrink={0}>
                  <Text
                    small
                    color="textSecondary"
                    bold
                  >
                    Tra cứu hàng đầu:
                  </Text>
                </AtomBox>
                <RowFixed
                  as="nav"
                  gap="3"
                >
                  {map(keywords, (keyword) => (
                    <LinkExternal
                      key={keyword.id}
                      href={keyword.url || '/'}
                    >
                      <Text
                        small
                        color="textSecondary"
                        ellipsis
                      >
                        {keyword.keyword}
                      </Text>
                    </LinkExternal>
                  ))}
                </RowFixed>
              </Row>
            ) : null}
          </Flex>
        </Container>
      </Flex>
    </AtomBox>
  );
};

export default Desktop;
