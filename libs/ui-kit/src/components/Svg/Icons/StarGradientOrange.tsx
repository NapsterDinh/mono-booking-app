import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M7.1939 2.10167C7.52403 1.43275 8.47789 1.43274 8.80802 2.10167L10.3291 5.18372L13.7304 5.67795C14.4685 5.78522 14.7633 6.69239 14.2291 7.21307L11.768 9.61212L12.349 12.9996C12.4751 13.7348 11.7034 14.2955 11.0431 13.9484L8.00096 12.349L4.95879 13.9484C4.29853 14.2955 3.52684 13.7348 3.65294 12.9996L4.23394 9.61212L1.77277 7.21307C1.23861 6.69239 1.53336 5.78522 2.27156 5.67795L5.67281 5.18372L7.1939 2.10167Z"
        fill="url(#paint0_linear_943_19905)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_943_19905"
          x1="14.5019"
          y1="14.0538"
          x2="2.05968"
          y2="1.06389"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F79009" />
          <stop
            offset="1"
            stopColor="#FDB022"
          />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
