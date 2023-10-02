import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="91"
      height="90"
      viewBox="0 0 91 90"
      fill="none"
      {...props}
    >
      <g filter="url(#filter0_b_2517_78309)">
        <g clipPath="url(#clip0_2517_78309)">
          <rect
            x="0.5"
            width="90"
            height="90"
            rx="45"
            fill="white"
            fillOpacity="0.54"
          />
          <mask
            id="mask0_2517_78309"
            style={{
              maskType: 'alpha',
            }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="91"
            height="90"
          >
            <circle
              cx="45.5"
              cy="45"
              r="45"
              fill="#9FBFFC"
            />
          </mask>
          <g mask="url(#mask0_2517_78309)">
            <circle
              cx="45.5"
              cy="45"
              r="45"
              fill="url(#paint0_radial_2517_78309)"
            />
            <circle
              cx="43.6587"
              cy="34.7464"
              r="17.3684"
              fill="url(#paint1_radial_2517_78309)"
            />
            <ellipse
              cx="45.2369"
              cy="87.9028"
              rx="33.1579"
              ry="33.1579"
              fill="url(#paint2_radial_2517_78309)"
            />
            <path
              opacity="0.3"
              d="M67.1028 49.3568C69.1074 49.2136 72.8301 46.9227 73.4028 43.2C73.4028 46.2068 77.1256 49.0704 79.7028 49.3568C77.6028 49.7863 73.4028 53.0509 73.4028 55.7999C73.4028 52.3636 68.821 49.7863 67.1028 49.3568Z"
              fill="white"
            />
            <path
              opacity="0.3"
              d="M9.50293 44.8781C11.2211 44.7554 14.412 42.7917 14.9029 39.6008C14.9029 42.1781 18.0938 44.6326 20.3029 44.8781C18.5029 45.2463 14.9029 48.0445 14.9029 50.4008C14.9029 47.4554 10.9757 45.2463 9.50293 44.8781Z"
              fill="white"
            />
            <path
              opacity="0.1"
              d="M58.1019 13.3992C59.5337 13.2969 62.1928 11.6606 62.6019 9.00146C62.6019 11.1492 65.261 13.1946 67.1019 13.3992C65.6019 13.706 62.6019 16.0378 62.6019 18.0015C62.6019 15.5469 59.3292 13.706 58.1019 13.3992Z"
              fill="white"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_b_2517_78309"
          x="-36.4231"
          y="-36.9231"
          width="163.846"
          height="163.846"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feGaussianBlur
            in="BackgroundImageFix"
            stdDeviation="18.4615"
          />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2517_78309"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2517_78309"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_2517_78309"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.1842 69.2105) rotate(-49.7931) scale(81.1956 116.852)"
        >
          <stop stopColor="#ED8D02" />
          <stop
            offset="1"
            stopColor="#FF9E65"
          />
        </radialGradient>
        <radialGradient
          id="paint1_radial_2517_78309"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(48.6587 25.799) rotate(111.922) scale(23.2608 38.8496)"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="#FEB03E"
          />
        </radialGradient>
        <radialGradient
          id="paint2_radial_2517_78309"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(54.7824 70.8214) rotate(111.922) scale(44.407 74.1674)"
        >
          <stop stopColor="white" />
          <stop
            offset="1"
            stopColor="#FEB03E"
          />
        </radialGradient>
        <clipPath id="clip0_2517_78309">
          <rect
            x="0.5"
            width="90"
            height="90"
            rx="45"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
