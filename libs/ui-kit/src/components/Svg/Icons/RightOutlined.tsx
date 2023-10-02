import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="7"
      height="12"
      viewBox="0 0 7 12"
      fill="none"
      {...props}
    >
      <path
        d="M0.232712 0.206944C0.532634 -0.0787473 1.00737 -0.0672107 1.29306 0.232712L6.29439 5.48318C6.57032 5.77285 6.57032 6.22809 6.29439 6.51776L1.29306 11.7682C1.00737 12.0681 0.532634 12.0797 0.232712 11.794C-0.0672107 11.5083 -0.0787473 11.0336 0.206944 10.7336L4.71553 6.00047L0.206944 1.26729C-0.0787473 0.967369 -0.0672107 0.492635 0.232712 0.206944Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Icon;
