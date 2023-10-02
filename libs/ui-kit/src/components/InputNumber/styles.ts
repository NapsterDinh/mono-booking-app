import styled from '@emotion/styled';
import { InputNumber } from 'antd';
import type { InputNumberProps } from './types';

export const StyledInputNumber = styled(InputNumber)<InputNumberProps>`
  &.ant-input-number {
    border: none;
    border-left: 1px solid #c1c8d1;
    border-right: 1px solid #c1c8d1;
    border-radius: 0;
    height: 100%;
    width: 100%;

    input {
      text-align: center;
    }
  }
`;
