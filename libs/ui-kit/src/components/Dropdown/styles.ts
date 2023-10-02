import { css } from '@emotion/css';
import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { Dropdown } from 'antd';
import type { DropdownProps } from './types';

export const StyledDropdown = styled(Dropdown)<DropdownProps>``;

export const getOverlay = (theme: Theme) => css`
  &.ant-dropdown {
    .ant-dropdown-menu {
      padding: 0;
    }

    .ant-dropdown-menu-item {
      border-left: 2px solid transparent;
      border-radius: 0;
      padding: 12px 16px;

      .ant-dropdown-menu-item-icon {
        height: 18px;
        width: 18px;
      }

      &-active {
        background-color: #edf0f3;
        border-left: 2px solid ${theme.colors.textLink};
        color: ${theme.colors.textLink};

        .ant-dropdown-menu-item-icon {
          color: ${theme.colors.textLink};
        }
      }

      &:first-child {
        border-top-left-radius: 8px;
      }

      &:last-child {
        border-bottom-left-radius: 8px;
      }
    }
  }
`;
