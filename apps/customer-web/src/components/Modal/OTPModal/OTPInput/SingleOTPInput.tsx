import styled from '@emotion/styled';
import { usePrevious } from 'ahooks';

import { memo, useLayoutEffect, useRef } from 'react';

interface SingleOTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
  hasError?: boolean;
}

const Input = styled.input<SingleOTPInputProps>`
  border: 1px solid;
  border-radius: 8px;

  border-color: #c1c8d1;
  background: white;

  font-size: 20px;
  font-weight: 600;

  width: 100%;

  text-align: center;
  aspect-ratio: 1/1;

  &:not(:last-child) {
    margin-right: 8px;
  }
  &:focus {
    border-color: #0355a1;
    background-color: white;
    transition: border-color 0.3s ease-in-out;
    outline: 0;
  }

  ${({ hasError }) =>
    hasError &&
    `
      background: #fef3f2;
      border-color: red;
     
    `}
`;

const SingleOTPInput = (props: SingleOTPInputProps) => {
  const { focus, autoFocus, ...rest } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);

  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);

  return (
    <Input
      ref={inputRef}
      {...rest}
    />
  );
};

export default memo(SingleOTPInput);
