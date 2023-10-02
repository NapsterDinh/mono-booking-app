import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="8"
      height="10"
      viewBox="0 0 8 10"
      fill="none"
      {...props}
    >
      <g id="Group">
        <path
          id="Vector"
          d="M6.60583 3.79971C7.22071 4.41375 7.60039 5.26227 7.60039 6.19971C7.60039 8.18799 5.98939 9.79971 4.00039 9.79971C2.01235 9.79971 0.400391 8.18799 0.400391 6.19971C0.400391 5.26143 0.77995 4.41303 1.39471 3.79971L2.19487 2.99967C2.96803 2.22663 2.96803 0.972627 2.19487 0.199707C3.96199 0.199707 5.39515 1.63251 5.39515 3.39975C5.39515 4.31259 5.27491 5.19783 5.05291 6.04311C5.95975 5.70051 6.60583 4.82667 6.60583 3.79971Z"
          fill="white"
        />
      </g>
    </Svg>
  );
};

export default Icon;
