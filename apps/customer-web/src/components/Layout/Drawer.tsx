import styled from '@emotion/styled';
import { ModalType } from '@customer-web/enums/index';
import useMasterLayout from '@customer-web/hooks/useMasterLayout';
import { useModal } from '@customer-web/state/global/hooks';
import { useAuthenticated } from '@customer-web/state/user/hooks';
import { Box, Button, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { CloseIcon, LogoMobileIcon, PhoneFilledIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Drawer as AntdDrawer, Collapse } from 'antd';
import Link from 'next/link';
import type { FC } from 'react';
import UserMenu from './UserMenu';

interface DrawerProps {
  open?: boolean;
  onClose?: () => void;
}

const StyledDrawer = styled(AntdDrawer)`
  &.ant-drawer-content {
    .ant-drawer-header {
      border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
      padding: 1rem;
    }
    .ant-drawer-body {
      padding: 0 0 1rem 0;
    }
    .ant-drawer-close {
      display: none;
    }
    .ant-drawer-footer {
      padding: 1rem;
    }
  }
`;

const StyledCollapse = styled(Collapse)`
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0;

  .ant-collapse-item {
    border-bottom: none;

    .ant-collapse-content {
      border-top: none;
    }

    .ant-collapse-content-box {
      background-color: #edf0f3;
      border-radius: 0.5rem;
      margin: 0 1rem;
      padding: 0;
    }

    &:hover {
      .ant-collapse-header-text {
        & > * {
          color: ${({ theme }) => theme.colors.textFocus};
        }
      }
    }
  }
`;

const { Panel } = Collapse;

const Drawer: FC<DrawerProps> = ({ open, onClose }) => {
  const { menu } = useMasterLayout();
  const { openModal } = useModal();
  const authenticated = useAuthenticated();

  return (
    <StyledDrawer
      title={
        <RowBetween>
          <Link href="/">
            <LogoMobileIcon />
          </Link>

          <Button
            type="link"
            height="auto"
            onClick={onClose}
          >
            <CloseIcon color="textPrimary" />
          </Button>
        </RowBetween>
      }
      closeIcon={false}
      placement="left"
      width={303}
      onClose={onClose}
      open={open}
      footer={
        <Box
          backgroundColor="#FBE9CF"
          borderRadius="50px"
          display="flex"
          gap="0.5rem"
          padding="0.5rem 0.75rem"
        >
          <PhoneFilledIcon color="textFocus" />
          <Link href="tel:18006001">
            <Text
              color="textFocus"
              small
              fontWeight="500"
            >
              Tư vấn: 1800 6001 (Miễn phí)
            </Text>
          </Link>
        </Box>
      }
    >
      {!authenticated && (
        <Box
          background="url(/images/login-overlay-background-mobile.png)"
          backgroundSize="cover"
          p="1rem"
        >
          <Text
            color="white"
            small
            fontWeight="500"
            mb="0.75rem"
          >
            Đăng nhập để hưởng những đặc quyền dành riêng cho thành viên.
          </Text>

          <RowFixed gap="2">
            <Button
              width="90px"
              type="secondary"
              onClick={openModal.bind(this, ModalType.LOGIN, undefined)}
            >
              Đăng nhập
            </Button>
            <Button
              width="90px"
              type="tertiary"
              onClick={openModal.bind(this, ModalType.REGISTER, undefined)}
            >
              Đăng ký
            </Button>
          </RowFixed>
        </Box>
      )}

      <UserMenu />

      <StyledCollapse expandIconPosition="end">
        {menu?.map((category) => (
          <Panel
            key={category.name}
            header={
              <Link href={category.fullPathSlug}>
                <Text
                  display="inline-block"
                  bold
                  color="textPrimary"
                >
                  {category.name}
                </Text>
              </Link>
            }
          >
            {category.children?.map((subCategory) => (
              <Box
                padding="0.75rem 1rem"
                key={subCategory.name}
              >
                <Link href={subCategory.fullPathSlug}>
                  <Text
                    color="textPrimary"
                    fontWeight="500"
                    small
                  >
                    {subCategory.name}
                  </Text>
                </Link>
              </Box>
            ))}
          </Panel>
        ))}
      </StyledCollapse>
    </StyledDrawer>
  );
};

export default Drawer;
