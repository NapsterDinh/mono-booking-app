import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      {...props}
    >
      <rect
        y="0.0957031"
        width="16"
        height="16"
        rx="8"
        fill="url(#paint0_linear_545_149414)"
      />
      <path
        d="M8.00138 13.0957C7.81951 13.0957 7.64173 13.0433 7.49051 12.9451C7.33929 12.8469 7.22143 12.7074 7.15183 12.5441C7.08224 12.3808 7.06403 12.2011 7.09951 12.0278C7.13499 11.8544 7.22257 11.6952 7.35117 11.5702C7.47977 11.4452 7.64361 11.3601 7.82199 11.3257C8.00036 11.2912 8.18525 11.3089 8.35327 11.3765C8.5213 11.4441 8.66491 11.5587 8.76595 11.7056C8.86699 11.8526 8.92092 12.0254 8.92092 12.2021C8.92092 12.4391 8.82404 12.6664 8.65159 12.834C8.47915 13.0016 8.24526 13.0957 8.00138 13.0957ZM9 4.10826L8.73609 9.55926C8.73609 9.74886 8.65859 9.93069 8.52063 10.0648C8.38267 10.1988 8.19556 10.2741 8.00046 10.2741C7.80536 10.2741 7.61825 10.1988 7.48029 10.0648C7.34233 9.93069 7.26483 9.74886 7.26483 9.55926L7.00092 4.11094V4.10871C6.99514 3.97776 7.01668 3.84703 7.06426 3.72439C7.11184 3.60175 7.18446 3.48974 7.27776 3.39509C7.37106 3.30045 7.48311 3.22513 7.60715 3.17368C7.73119 3.12223 7.86467 3.0957 7.99954 3.0957C8.13441 3.0957 8.26788 3.12223 8.39193 3.17368C8.51597 3.22513 8.62802 3.30045 8.72132 3.39509C8.81462 3.48974 8.88724 3.60175 8.93482 3.72439C8.9824 3.84703 9.00394 3.97776 8.99816 4.10871L9 4.10826Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_545_149414"
          x1="16"
          y1="16.0957"
          x2="0"
          y2="0.0957031"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D92D20" />
          <stop
            offset="1"
            stopColor="#F04438"
          />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;