import type { Ref } from 'react';
import { forwardRef } from 'react';
import { DismissCircleIcon } from '../Svg/Icons';
import { StyledInput } from './styles';
import { InputProps, scales } from './types';

const Input = forwardRef((props: InputProps, ref: Ref<any>) => {
  return (
    <StyledInput
      ref={ref}
      {...props}
      allowClear={
        props.allowClear && {
          clearIcon: (
            <DismissCircleIcon
              color="textTertiary"
              width="20"
              height="20"
            />
          ),
        }
      }
    />
  );
});

Input.displayName = 'Input';

Input.defaultProps = {
  scale: scales.MD,
};

export default Input;
