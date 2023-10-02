import { DEFAULT_EMPTY_PLACEHOLDER } from '@customer-web/constants';
import { ModalType } from '@customer-web/enums/index';
import { useModal } from '@customer-web/state/global/hooks';
import { useAuthenticated, useUserState, useUserStatus } from '@customer-web/state/user/hooks';
import { Box, Button, Dropdown, Text } from '@tsu-org/ui-kit';
import {
  BellNotifyOutlinedIcon,
  CircleLockIcon,
  DefaultAvatarIcon,
  LocationOnOutlinedIcon,
  LogoutIcon,
  MedicineBoxIcon,
  PersonCircleIcon,
} from '@tsu-org/ui-kit/components/Svg/Icons';
import Link from 'next/link';
import { useMemo } from 'react';

const UserMenu = () => {
  const authenticated = useAuthenticated();
  const user = useUserState();
  const userStatus = useUserStatus();

  const { openModal } = useModal();

  const items = useMemo(
    () => [
      {
        key: 'personal-info',
        label: <Link href="/ca-nhan/thong-tin-ca-nhan">Thông tin cá nhân</Link>,
        icon: <PersonCircleIcon />,
      },
      {
        key: 'my-notification',
        label: <Link href="/ca-nhan/thong-bao">Thông báo</Link>,
        icon: <BellNotifyOutlinedIcon />,
      },
      {
        key: 'my-order',
        label: <Link href="/ca-nhan/don-hang-cua-toi">Đơn hàng của tôi</Link>,
        icon: <MedicineBoxIcon />,
      },
      {
        key: 'address-book',
        label: <Link href="/ca-nhan/so-dia-chi-nhan-hang">Sổ địa chỉ nhận hàng</Link>,
        icon: <LocationOnOutlinedIcon />,
      },
      // TODO: uncomment when ready
      // userStatus === UserStatus.APPROVED && {
      //   key: 'tp-bank-overdraft-loan',
      //   label: <Link href="/ca-nhan/vay-thau-chi-tp-bank">Vay thấu chi TPBank</Link>,
      //   icon: <TpBankLinkIcon />,
      // },
      {
        key: 'change-password',
        label: (
          <Button
            type="link"
            onClick={openModal.bind(this, ModalType.CHANGE_PASSWORD, undefined)}
          >
            <Text small>Đổi mật khẩu</Text>
          </Button>
        ),
        icon: <CircleLockIcon />,
      },
      {
        key: 'logout',
        label: <Link href="/dang-xuat">Đăng xuất</Link>,
        icon: <LogoutIcon />,
      },
    ],
    [openModal, userStatus],
  );

  return authenticated ? (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
    >
      <Box
        alignItems="center"
        background="linear-gradient(90.25deg, #FFEDCC 0.22%, #EFF0E8 59.01%, #FEF0D5 77.07%, #FFEDCE 99.96%)"
        display="flex"
        gap="0.5rem"
        padding="0.75rem 1rem"
        cursor="pointer"
      >
        <DefaultAvatarIcon />
        <Text
          bold
          small
        >
          {user?.profile?.representer || DEFAULT_EMPTY_PLACEHOLDER}
        </Text>
      </Box>
    </Dropdown>
  ) : null;
};

export default UserMenu;
