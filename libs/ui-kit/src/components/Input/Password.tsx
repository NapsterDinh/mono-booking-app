import type { Ref } from 'react';
import { forwardRef } from 'react';
import { StyledPassword } from './styles';
import { PasswordProps, scales } from './types';

const Password = forwardRef((props: PasswordProps, ref: Ref<any>) => {
  return (
    <StyledPassword
      ref={ref}
      {...props}
    />
  );
});

Password.displayName = 'Password';

Password.defaultProps = {
  scale: scales.MD,
};

export default Password;
