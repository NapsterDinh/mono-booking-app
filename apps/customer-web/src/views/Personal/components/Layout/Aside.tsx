import styled from '@emotion/styled';
import { DEFAULT_EMPTY_PLACEHOLDER } from '@customer-web/constants';
import { useCountAllNotification } from '@customer-web/state/notification/hooks';
import { useUserState, useUserStatus } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, ColumnCenter, Image, Text, Button } from '@tsu-org/ui-kit';
import {
  BellNotifyOutlinedIcon,
  LocationOnOutlinedIcon,
  LogoutIcon,
  MedicineBoxIcon,
  NewsIcon,
  PersonCircleIcon,
} from '@tsu-org/ui-kit/components/Svg/Icons';
import { Badge } from 'antd';

import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const Nav = styled.aside`
  background-color: white;
  border-radius: 12px;

  ul {
    list-style-type: none;

    li {
      border-left: 2px solid transparent;

      a {
        align-items: center;
        color: ${({ theme }) => theme.colors.textSecondary};
        display: flex;
        font-weight: 500;
        gap: 0.5rem;
        padding: 1rem;
      }

      svg {
        width: 24px;
        height: 24px;
      }

      &.active,
      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundGrey2};
        border-color: ${({ theme }) => theme.colors.textLink};

        a {
          color: ${({ theme }) => theme.colors.textLink};
        }
        svg {
          color: ${({ theme }) => theme.colors.textLink};
        }
      }
    }
  }
`;

const Aside = () => {
  const router = useRouter();
  const user = useUserState();
  const userStatus = useUserStatus();
  const countNotification = useCountAllNotification();

  const navItems = useMemo(
    () => [
      {
        label: 'Thông tin cá nhân',
        href: '/ca-nhan/thong-tin-ca-nhan',
        icon: <PersonCircleIcon />,
      },
      {
        label: 'Thông báo',
        href: '/ca-nhan/thong-bao',
        icon: <BellNotifyOutlinedIcon />,
      },
      {
        label: 'Đơn hàng của tôi',
        href: '/ca-nhan/don-hang-cua-toi',
        icon: <MedicineBoxIcon />,
      },
      {
        label: 'Hồ sơ kinh doanh',
        href: '/ca-nhan/ho-so-kinh-doanh',
        icon: <NewsIcon />,
      },
      {
        label: 'Sổ địa chỉ nhận hàng',
        href: '/ca-nhan/so-dia-chi-nhan-hang',
        icon: <LocationOnOutlinedIcon />,
      },
      // TODO: uncomment when ready
      // userStatus === UserStatus.APPROVED && {
      //   label: 'Vay thấu chi TPBank',
      //   href: '/ca-nhan/vay-thau-chi-tp-bank',
      //   icon: <TpBankLinkIcon />,
      // },
      {
        label: 'Đăng xuất',
        href: '/dang-xuat',
        icon: <LogoutIcon />,
      },
    ],
    [userStatus],
  );

  return (
    <Box
      width={{
        _: 'auto',
        lg: '289px',
      }}
      flexShrink="0"
    >
      <AtomBox
        bgc="functionYellow2"
        mb="3"
      >
        <Box
          background="url(/images/user-profile-background.png)"
          backgroundPosition="bottom"
          backgroundRepeat="no-repeat"
          borderRadius="8px"
          py="33px"
        >
          <ColumnCenter>
            <AtomBox mb="3">
              <Image
                src="/images/default-male-avatar.png"
                alt=""
                width="60"
                height="60"
              />
            </AtomBox>

            <Text
              small
              fontWeight="500"
              mb="0.25rem"
            >
              {user?.profile?.representer || DEFAULT_EMPTY_PLACEHOLDER}
            </Text>
            <Text fontSize="12px">{user?.profile?.mobilePhone}</Text>
          </ColumnCenter>
        </Box>
      </AtomBox>

      <Nav>
        <ul>
          {navItems
            .filter((item) => !!item)
            .map((item) => (
              <li
                className={clsx({
                  active: item.href === router.pathname,
                })}
                key={item.href}
              >
                {item?.label === 'Thông báo' ? (
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                    {countNotification?.unRead > 0 && (
                      <Badge
                        style={{ fontSize: '12px', boxShadow: 'none' }}
                        count={countNotification?.unRead > 99 ? '99+' : countNotification?.unRead}
                        showZero={false}
                        color="#F79009"
                      />
                    )}
                  </Link>
                ) : (
                  <Link href={item.href}>
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
        </ul>
      </Nav>
    </Box>
  );
};

export default Aside;
