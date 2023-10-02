import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      {...props}
    >
      <rect
        width="48"
        height="48"
        rx="24"
        fill="url(#paint0_linear_672_274133)"
      />
      <path
        d="M16.125 14.0782H31.8723C32.3555 14.0782 32.7473 13.6865 32.7473 13.2032C32.7473 12.7603 32.4181 12.3942 31.991 12.3362L31.8723 12.3282H16.125C15.6418 12.3282 15.25 12.72 15.25 13.2032C15.25 13.6462 15.5792 14.0123 16.0063 14.0703L16.125 14.0782ZM23.8639 35.6589L24 35.6667C24.5983 35.6667 25.0914 35.2163 25.1588 34.6361L25.1667 34.5V19.8117L29.0097 23.6533C29.4303 24.0738 30.0921 24.1061 30.5498 23.7502L30.6597 23.6531C31.0802 23.2325 31.1125 22.5707 30.7565 22.1131L30.6595 22.0032L24.8289 16.1738C24.4085 15.7535 23.7472 15.721 23.2895 16.0764L23.1796 16.1733L17.3423 22.0027C16.8863 22.458 16.8858 23.1967 17.3411 23.6526C17.7614 24.0735 18.4232 24.1063 18.8811 23.7507L18.9911 23.6538L22.8333 19.8175V34.5C22.8333 35.0984 23.2837 35.5915 23.8639 35.6589Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_672_274133"
          x1="48"
          y1="48"
          x2="0"
          y2="0"
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
