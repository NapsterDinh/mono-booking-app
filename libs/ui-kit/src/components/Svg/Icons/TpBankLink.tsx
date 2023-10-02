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
        d="M7.375 12.0938C7.375 11.7658 7.64083 11.5 7.96875 11.5C8.29667 11.5 8.5625 11.7658 8.5625 12.0938C8.5625 12.4217 8.29667 12.6875 7.96875 12.6875C7.64083 12.6875 7.375 12.4217 7.375 12.0938ZM7.96875 13.875C7.64083 13.875 7.375 14.1408 7.375 14.4688C7.375 14.7967 7.64083 15.0625 7.96875 15.0625C8.29667 15.0625 8.5625 14.7967 8.5625 14.4688C8.5625 14.1408 8.29667 13.875 7.96875 13.875ZM7.375 16.8438C7.375 16.5158 7.64083 16.25 7.96875 16.25C8.29667 16.25 8.5625 16.5158 8.5625 16.8438C8.5625 17.1717 8.29667 17.4375 7.96875 17.4375C7.64083 17.4375 7.375 17.1717 7.375 16.8438ZM10.3438 11.5C10.0158 11.5 9.75 11.7658 9.75 12.0938C9.75 12.4217 10.0158 12.6875 10.3438 12.6875H16.2812C16.6092 12.6875 16.875 12.4217 16.875 12.0938C16.875 11.7658 16.6092 11.5 16.2812 11.5H10.3438ZM9.75 14.4688C9.75 14.1408 10.0158 13.875 10.3438 13.875H16.2812C16.6092 13.875 16.875 14.1408 16.875 14.4688C16.875 14.7967 16.6092 15.0625 16.2812 15.0625H10.3438C10.0158 15.0625 9.75 14.7967 9.75 14.4688ZM10.3438 16.25C10.0158 16.25 9.75 16.5158 9.75 16.8438C9.75 17.1717 10.0158 17.4375 10.3438 17.4375H16.2812C16.6092 17.4375 16.875 17.1717 16.875 16.8438C16.875 16.5158 16.6092 16.25 16.2812 16.25H10.3438ZM7.375 2C6.06332 2 5 3.06332 5 4.375V18.625C5 19.9367 6.06332 21 7.375 21H16.875C18.1867 21 19.25 19.9367 19.25 18.625V8.42938C19.25 7.95696 19.0623 7.50389 18.7283 7.16985L14.0802 2.52172C13.7461 2.18767 13.293 2 12.8206 2H7.375ZM6.1875 4.375C6.1875 3.71916 6.71916 3.1875 7.375 3.1875H12.125V7.34375C12.125 8.32751 12.9225 9.125 13.9062 9.125H18.0625V18.625C18.0625 19.2808 17.5308 19.8125 16.875 19.8125H7.375C6.71916 19.8125 6.1875 19.2808 6.1875 18.625V4.375ZM17.8166 7.9375H13.9062C13.5783 7.9375 13.3125 7.67167 13.3125 7.34375V3.43344L17.8166 7.9375Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Icon;