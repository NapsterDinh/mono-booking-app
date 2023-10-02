import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <rect
        width="16"
        height="16"
        rx="8"
        fill="currentColor"
      />
      <path
        d="M8.00138 13C7.81951 13 7.64173 12.9476 7.49051 12.8494C7.33929 12.7512 7.22143 12.6116 7.15183 12.4484C7.08224 12.2851 7.06403 12.1054 7.09951 11.9321C7.13499 11.7587 7.22257 11.5995 7.35117 11.4745C7.47977 11.3495 7.64361 11.2644 7.82199 11.23C8.00036 11.1955 8.18525 11.2132 8.35327 11.2808C8.5213 11.3484 8.66491 11.463 8.76595 11.6099C8.86699 11.7569 8.92092 11.9297 8.92092 12.1064C8.92092 12.3434 8.82404 12.5707 8.65159 12.7383C8.47915 12.9059 8.24526 13 8.00138 13ZM9 4.01256L8.73609 9.46356C8.73609 9.65315 8.65859 9.83499 8.52063 9.96905C8.38267 10.1031 8.19556 10.1784 8.00046 10.1784C7.80536 10.1784 7.61825 10.1031 7.48029 9.96905C7.34233 9.83499 7.26483 9.65315 7.26483 9.46356L7.00092 4.01524V4.01301C6.99514 3.88206 7.01668 3.75133 7.06426 3.62869C7.11184 3.50605 7.18446 3.39404 7.27776 3.29939C7.37106 3.20475 7.48311 3.12943 7.60715 3.07798C7.73119 3.02653 7.86467 3 7.99954 3C8.13441 3 8.26788 3.02653 8.39193 3.07798C8.51597 3.12943 8.62802 3.20475 8.72132 3.29939C8.81462 3.39404 8.88724 3.50605 8.93482 3.62869C8.9824 3.75133 9.00394 3.88206 8.99816 4.01301L9 4.01256Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;