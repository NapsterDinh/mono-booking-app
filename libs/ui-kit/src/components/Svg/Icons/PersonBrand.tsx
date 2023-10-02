import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        fill="#ACC0F3"
      />
      <path
        d="M12.0002 14.5C6.99016 14.5 2.91016 17.86 2.91016 22C2.91016 22.28 3.13016 22.5 3.41016 22.5H20.5902C20.8702 22.5 21.0902 22.28 21.0902 22C21.0902 17.86 17.0102 14.5 12.0002 14.5Z"
        fill="url(#paint0_radial_1805_21555)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1805_21555"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12.0002 18.5) rotate(-156.248) scale(9.93117 7.3224)"
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
