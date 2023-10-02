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
      <g filter="url(#filter0_b_719_377691)">
        <g clipPath="url(#clip0_719_377691)">
          <rect
            width="48"
            height="48"
            rx="24"
            fill="white"
            fillOpacity="0.54"
          />
          <mask
            id="mask0_719_377691"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="48"
            height="48"
          >
            <circle
              cx="24"
              cy="24"
              r="24"
              fill="#9FBFFC"
            />
          </mask>
          <g mask="url(#mask0_719_377691)">
            <circle
              opacity="0.3"
              cx="24"
              cy="24"
              r="24"
              fill="white"
            />
            <ellipse
              cx="23.0176"
              cy="18.5307"
              rx="9.26316"
              ry="9.26316"
              fill="url(#paint0_radial_719_377691)"
            />
            <circle
              cx="23.86"
              cy="46.8816"
              r="17.6842"
              fill="url(#paint1_radial_719_377691)"
            />
            <path
              opacity="0.5"
              d="M35.521 26.3237C36.5901 26.2473 38.5755 25.0255 38.881 23.04C38.881 24.6437 40.8664 26.1709 42.241 26.3237C41.121 26.5528 38.881 28.2939 38.881 29.76C38.881 27.9273 36.4374 26.5528 35.521 26.3237Z"
              fill="#FDAD3D"
            />
            <path
              opacity="0.6"
              d="M4.80078 23.9345C5.71714 23.8691 7.41896 22.8218 7.68078 21.12C7.68078 22.4945 9.3826 23.8036 10.5608 23.9345C9.60078 24.1309 7.68078 25.6233 7.68078 26.88C7.68078 25.3091 5.58624 24.1309 4.80078 23.9345Z"
              fill="#FDAD3D"
            />
            <path
              opacity="0.34"
              d="M30.7207 7.1455C31.4843 7.09096 32.9025 6.21823 33.1207 4.80005C33.1207 5.9455 34.5389 7.03641 35.5207 7.1455C34.7207 7.30914 33.1207 8.55278 33.1207 9.60005C33.1207 8.29096 31.3752 7.30914 30.7207 7.1455Z"
              fill="#FDAD3D"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_719_377691"
          x="-16"
          y="-16"
          width="80"
          height="80"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="8"
          />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_719_377691"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_719_377691"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_719_377691"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.6842 13.7588) rotate(111.922) scale(12.4058 20.7198)"
        >
          <stop stopColor="#FEB03E" />
          <stop
            offset="1"
            stopColor="#F1822B"
          />
        </radialGradient>
        <radialGradient
          id="paint1_radial_719_377691"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.6319 33.6886) rotate(107.227) scale(18.9557 31.6593)"
        >
          <stop stopColor="#FEB03E" />
          <stop
            offset="1"
            stopColor="#E38B30"
          />
        </radialGradient>
        <clipPath id="clip0_719_377691">
          <rect
            width="48"
            height="48"
            rx="24"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
