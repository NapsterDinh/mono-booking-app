import styled from '@emotion/styled';
import { Divider } from 'antd';
import { border, layout, space } from 'styled-system';
import type { DividerProps } from './types';

export const StyledDivider = styled(Divider, {
  shouldForwardProp(propName) {
    return !border.propNames?.includes(propName);
  },
})<DividerProps>`
  &.ant-divider {
    border-color: ${({ theme }) => theme.colors.divider};

    ${border}
    ${space}
    ${layout}
  }
`;
