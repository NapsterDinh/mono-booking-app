import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M5.04812 18.3207C4.70532 17.9608 4.71916 17.3911 5.07904 17.0483L11.3791 11.0466C11.7267 10.7155 12.2729 10.7155 12.6205 11.0466L18.9206 17.0483C19.2804 17.3911 19.2943 17.9608 18.9515 18.3207C18.6087 18.6807 18.0391 18.6945 17.6792 18.3517L11.9998 12.9413L6.32044 18.3517C5.96056 18.6945 5.39092 18.6807 5.04812 18.3207ZM5.04812 12.3224C4.70532 11.9625 4.71916 11.3928 5.07904 11.05L11.3791 5.04833C11.7267 4.71722 12.2729 4.71722 12.6205 5.04833L18.9206 11.05C19.2804 11.3928 19.2943 11.9625 18.9515 12.3224C18.6087 12.6823 18.0391 12.6962 17.6792 12.3534L11.9998 6.94299L6.32044 12.3534C5.96056 12.6962 5.39092 12.6823 5.04812 12.3224Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Icon;
