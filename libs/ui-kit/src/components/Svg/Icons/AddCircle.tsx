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
        fill={'currentColor'}
      />
      <path
        d="M14 2C20.6274 2 26 7.37258 26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2ZM14 8C13.6203 8 13.3065 8.28215 13.2568 8.64823L13.25 8.75V13.25H8.75C8.33579 13.25 8 13.5858 8 14C8 14.3797 8.28215 14.6935 8.64823 14.7432L8.75 14.75H13.25V19.25C13.25 19.6642 13.5858 20 14 20C14.3797 20 14.6935 19.7178 14.7432 19.3518L14.75 19.25V14.75H19.25C19.6642 14.75 20 14.4142 20 14C20 13.6203 19.7178 13.3065 19.3518 13.2568L19.25 13.25H14.75V8.75C14.75 8.33579 14.4142 8 14 8Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
