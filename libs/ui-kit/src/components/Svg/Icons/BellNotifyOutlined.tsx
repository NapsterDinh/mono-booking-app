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
        d="M12 3C8.27209 3 5.25001 6.02208 5.25001 9.75V13.3521L3.80355 16.9717C3.71122 17.2027 3.73949 17.4646 3.87902 17.6706C4.01855 17.8766 4.25118 18 4.5 18H9C9 19.6625 10.3375 21 12 21C13.6625 21 15 19.6625 15 18H19.5C19.7488 18 19.9815 17.8766 20.121 17.6706C20.2605 17.4646 20.2888 17.2027 20.1965 16.9717L18.75 13.3521V9.75C18.75 6.02208 15.7279 3 12 3ZM13.5 18C13.5 18.8341 12.8341 19.5 12 19.5C11.1659 19.5 10.5 18.8341 10.5 18H13.5ZM6.75001 9.75C6.75001 6.85051 9.10052 4.5 12 4.5C14.8995 4.5 17.25 6.85051 17.25 9.75V13.4964C17.25 13.5917 17.2682 13.6862 17.3036 13.7747L18.3926 16.5H5.60739L6.69646 13.7747C6.73184 13.6862 6.75001 13.5917 6.75001 13.4964V9.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

export default Icon;