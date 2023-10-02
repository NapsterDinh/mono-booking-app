import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_5249_3372)">
        <path
          d="M7.75034 19.7078C7.19465 19.6249 6.74341 19.9638 6.74341 20.4639C6.74341 20.9639 7.19465 21.4375 7.75034 21.5217C8.30737 21.6058 8.75861 21.2669 8.75861 20.7656C8.75861 20.2643 8.30737 19.7907 7.75034 19.7078Z"
          fill="url(#paint0_linear_5249_3372)"
        />
        <path
          d="M6.53986 15.0856L9.08129 15.4522V7.62924L6.53986 7.27344V15.0856Z"
          fill="url(#paint1_linear_5249_3372)"
        />
        <path
          d="M21.1819 2.83742L18.6096 3.71612V2.55254C18.6096 2.1811 18.2053 1.91545 17.8089 2.02484L5.36957 5.46871C5.14997 5.52761 5.00402 5.70912 5.00402 5.91226L5 23.723C5 23.9694 5.19817 24.1822 5.46999 24.2231L10.427 24.9828C10.6707 25.02 10.9251 24.9924 11.1514 24.901L21.3211 20.8814C21.7349 20.7191 22 20.3537 22 19.9474V3.34348C22 2.96243 21.5782 2.69919 21.1819 2.83742ZM9.75882 23.9298L6.04442 23.3612V6.66234L7.49992 6.86549L9.75882 7.17441V23.9298ZM17.5224 3.92167L10.4832 6.32817L7.65926 5.93751L7.59633 5.92789L17.5224 3.13072V3.92167Z"
          fill="url(#paint2_linear_5249_3372)"
        />
      </g>
      <rect
        x="14"
        y="13"
        width="15"
        height="15"
        rx="7.5"
        fill="white"
      />
      <path
        d="M21.505 14.668C24.7276 14.668 27.34 17.2804 27.34 20.503C27.34 23.7256 24.7276 26.338 21.505 26.338C18.2824 26.338 15.67 23.7256 15.67 20.503C15.67 17.2804 18.2824 14.668 21.505 14.668ZM23.567 18.7174L20.7751 21.5167L19.4176 20.1591C19.2277 19.9692 18.9198 19.9692 18.7299 20.1591C18.54 20.349 18.54 20.6569 18.7299 20.8468L20.4318 22.5487C20.6218 22.7387 20.9301 22.7385 21.1199 22.5482L24.2555 19.4042C24.4452 19.214 24.4448 18.9062 24.2546 18.7165C24.0645 18.5269 23.7566 18.5273 23.567 18.7174Z"
        fill="url(#paint3_linear_5249_3372)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5249_3372"
          x1="8.75861"
          y1="21.5345"
          x2="6.92707"
          y2="19.5277"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#039836" />
          <stop
            offset="1"
            stopColor="#12B75E"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5249_3372"
          x1="9.08129"
          y1="15.4522"
          x2="4.446"
          y2="14.0118"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#039836" />
          <stop
            offset="1"
            stopColor="#12B75E"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_5249_3372"
          x1="22"
          y1="24.9988"
          x2="0.0130109"
          y2="8.74676"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#039836" />
          <stop
            offset="1"
            stopColor="#12B75E"
          />
        </linearGradient>
        <linearGradient
          id="paint3_linear_5249_3372"
          x1="27.34"
          y1="26.338"
          x2="15.67"
          y2="14.668"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#039836" />
          <stop
            offset="1"
            stopColor="#12B75E"
          />
        </linearGradient>
        <clipPath id="clip0_5249_3372">
          <rect
            width="17"
            height="23"
            fill="white"
            transform="translate(5 2)"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
