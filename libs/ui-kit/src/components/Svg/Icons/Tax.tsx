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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM1.28681 6.52646V5.60361H5.26055V6.52646H3.83496V10.3051H2.71469V6.52646H1.28681ZM6.24538 10.3051H5.0241L6.61038 5.60361H8.1232L9.70948 10.3051H8.48821L8.17828 9.31795H6.55466L6.24538 10.3051ZM7.38401 6.78816L7.90728 8.45479H6.8251L7.34728 6.78816H7.38401ZM12.2243 7.08889L11.3658 5.60361H10.0848L11.5058 7.95434L10.0481 10.3051H11.3428L12.2243 8.80373H12.2611L13.1426 10.3051H14.4465L12.9819 7.95434L14.4006 5.60361H13.1288L12.2611 7.08889H12.2243Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Icon;
