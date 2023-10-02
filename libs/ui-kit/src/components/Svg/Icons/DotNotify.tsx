import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      {...props}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
    >
      <circle
        cx="4"
        cy="4"
        r="4"
        fill="url(#paint0_radial_5269_87790)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_5269_87790"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(4 4) rotate(-135) scale(5.65685)"
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
