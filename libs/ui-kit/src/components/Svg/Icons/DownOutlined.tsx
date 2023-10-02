import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      {...props}
    >
      <path
        d="M11.793 0.732712C12.0787 1.03263 12.0672 1.50737 11.7672 1.79306L6.51678 6.79439C6.22711 7.07032 5.77187 7.07032 5.4822 6.79439L0.231735 1.79306C-0.0681872 1.50737 -0.0797238 1.03263 0.205968 0.732712C0.491659 0.432789 0.966392 0.421253 1.26631 0.706944L5.99949 5.21553L10.7327 0.706944C11.0326 0.421253 11.5073 0.43279 11.793 0.732712Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Icon;
