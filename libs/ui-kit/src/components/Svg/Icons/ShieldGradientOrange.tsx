import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_721_804)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.9273 5.69823C28.9273 6.50886 28.9273 7.31949 28.9659 8.16872C29.1203 16.3137 29.3133 27.3923 15.8028 32.0631L15.4167 32.1403L15.0307 32.0631C1.50123 27.3991 1.71254 16.3073 1.86692 8.20402L1.86759 8.16872C1.9062 7.31949 1.9062 6.50886 1.9062 5.69823C1.9062 5.042 2.40802 4.54018 3.06424 4.54018C7.88944 4.54018 11.5566 3.15052 14.6061 0.178204C15.0693 -0.246413 15.7641 -0.246413 16.2274 0.178204C19.2769 3.15052 22.944 4.54018 27.7692 4.54018C28.4255 4.54018 28.9273 5.042 28.9273 5.69823Z"
          fill="url(#paint0_radial_721_804)"
        />
        <path
          d="M21.4253 10.1981C20.6527 9.4255 19.6255 9 18.5329 9C17.4403 9 16.413 9.4255 15.6404 10.1981L12.8606 12.9779L18.6455 18.7628L21.4253 15.983C23.0202 14.3881 23.0202 11.793 21.4253 10.1981Z"
          fill="url(#paint1_linear_721_804)"
        />
        <path
          d="M9.32787 22.2899C10.1005 23.0625 11.1277 23.488 12.2203 23.488C13.3129 23.488 14.3402 23.0625 15.1128 22.2899L17.8926 19.5101L12.1077 13.7252L9.32787 16.5051C7.73298 18.1 7.73298 20.695 9.32787 22.2899Z"
          fill="url(#paint2_linear_721_804)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_721_804"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.9813 15.7233) rotate(123.274) scale(22.3573 25.9033)"
        >
          <stop stopColor="#FB8A06" />
          <stop
            offset="1"
            stopColor="#FEB03E"
          />
        </radialGradient>
        <linearGradient
          id="paint1_linear_721_804"
          x1="4.48604"
          y1="27.1984"
          x2="31.1999"
          y2="-3.25887"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="white"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_721_804"
          x1="26.2671"
          y1="5.28959"
          x2="-0.446736"
          y2="35.7469"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="white"
          />
        </linearGradient>
        <clipPath id="clip0_721_804">
          <rect
            width="32"
            height="32"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
