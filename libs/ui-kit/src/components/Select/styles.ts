import styled from '@emotion/styled';
import { Select } from 'antd';
import { variant } from 'styled-system';
import { scaleVariants } from './theme';
import type { SelectProps } from './types';

export const StyledSelect = styled(Select)<SelectProps>`
  &.ant-select {
    .ant-select-selection-placeholder {
      font-size: 1rem;
    }

    ${variant({
      prop: 'scale',
      variants: scaleVariants,
    })}
  }
`;
