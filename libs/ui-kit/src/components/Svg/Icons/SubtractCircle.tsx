import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill={props.fill}
      {...props}
    >
      <rect
        x="7"
        y="7"
        width="14"
        height="14"
        fill="currentColor"
      />
      <path
        d="M14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2ZM8.75 13.25C8.33579 13.25 8 13.5858 8 14C8 14.3797 8.28215 14.6935 8.64823 14.7432L8.75 14.75C15.5203 14.75 12.9497 14.75 19.25 14.75C19.6642 14.75 20 14.4142 20 14C20 13.6203 19.7178 13.3065 19.3518 13.2568L19.25 13.25C12.8623 13.25 15.6283 13.25 8.75 13.25Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
