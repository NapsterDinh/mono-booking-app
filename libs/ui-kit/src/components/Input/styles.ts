import styled from '@emotion/styled';
import { Input } from 'antd';
import { variant } from 'styled-system';
import { scaleVariants } from './theme';
import type { InputProps, PasswordProps, TextAreaProps } from './types';

export const StyledInput = styled(Input)<InputProps>`
  &.ant-input {
    font-size: 1rem;
  }

  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}
`;

export const StyledPassword = styled(Input.Password)<PasswordProps>`
  &.ant-input-password {
    font-size: 1rem;
  }

  ${variant({
    prop: 'scale',
    variants: scaleVariants,
  })}
`;

export const StyledTextArea = styled(Input.TextArea)<TextAreaProps>`
  &.ant-input {
    font-size: 1rem;
  }
`;
