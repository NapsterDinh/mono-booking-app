import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      {...props}
    >
      <path
        d="M8 0V5.625C8 6.66053 8.83947 7.5 9.875 7.5H16V18C16 18.8284 15.3284 19.5 14.5 19.5H1.5C0.671573 19.5 0 18.8284 0 18V1.5C0 0.671573 0.671573 0 1.5 0H8ZM9.25 0.232143V5.625C9.25 5.97018 9.52982 6.25 9.875 6.25H15.7308L9.25 0.232143Z"
        fill="url(#paint0_radial_5463_170886)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_5463_170886"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(8 9.75) rotate(-129.369) scale(12.612 12.3692)"
        >
          <stop stopColor="#E46D04" />
          <stop
            offset="1"
            stopColor="#FBA409"
          />
        </radialGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
