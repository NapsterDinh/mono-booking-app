import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M5.25001 9.75C5.25001 6.02208 8.27209 3 12 3C15.7279 3 18.75 6.02208 18.75 9.75V12.6056L20.1964 16.2215C20.2888 16.4525 20.2606 16.7144 20.1211 16.9205C19.9815 17.1266 19.7489 17.25 19.5 17.25H4.5C4.25114 17.25 4.01848 17.1266 3.87895 16.9205C3.73943 16.7144 3.71122 16.4525 3.80365 16.2215L5.25001 12.6056V9.75ZM9.09368 18.75C9.42491 20.047 10.5966 21 12 21C13.4034 21 14.5751 20.047 14.9063 18.75H9.09368Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Icon;
