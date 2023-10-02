import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="9"
      height="16"
      viewBox="0 0 9 16"
      fill="none"
      {...props}
    >
      <path
        d="M8.70711 0.292893C9.09763 0.683418 9.09763 1.31658 8.70711 1.70711L2.41421 8L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292894 8.70711C-0.0976312 8.31658 -0.0976312 7.68342 0.292894 7.29289L7.29289 0.292893C7.68342 -0.0976311 8.31658 -0.0976311 8.70711 0.292893Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Icon;
