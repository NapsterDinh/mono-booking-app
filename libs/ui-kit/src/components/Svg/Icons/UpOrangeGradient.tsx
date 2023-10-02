import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="13"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      {...props}
    >
      <path
        d="M0.96085 6.76728C0.675159 6.46736 0.686696 5.99263 0.986618 5.70693L6.23708 0.7056C6.52675 0.429676 6.982 0.429676 7.27166 0.7056L12.5221 5.70693C12.8221 5.99263 12.8336 6.46736 12.5479 6.76728C12.2622 7.0672 11.7875 7.07874 11.4875 6.79305L6.75437 2.28446L2.0212 6.79305C1.72128 7.07874 1.24654 7.0672 0.96085 6.76728Z"
        fill="url(#paint0_linear_652_9465)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_652_9465"
          x1="12.7548"
          y1="6.99999"
          x2="7.30905"
          y2="-3.0525"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D35900" />
          <stop
            offset="1"
            stopColor="#FF9900"
          />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
