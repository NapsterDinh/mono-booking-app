import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.625173 2.73877H11.9819C12.3269 2.73877 12.607 3.00764 12.607 3.33894V4.33921H14.9525C16.0069 4.33921 17.0846 5.01082 17.1764 6.00607L17.5133 8.48902L19.7155 9.83434C19.8963 9.94477 20.0055 10.136 20.0055 10.3409V14.1419C20.0055 14.4732 19.7255 14.7421 19.3804 14.7421H18.7127C18.7137 14.7352 18.7148 14.7282 18.7158 14.7213L18.7188 14.7021C18.737 14.5835 18.7552 14.465 18.7552 14.342C18.7552 12.7976 17.4465 11.5412 15.8377 11.5412C14.2289 11.5412 12.9202 12.7976 12.9202 14.342C12.9202 14.465 12.9384 14.5835 12.9566 14.7021C12.9587 14.7154 12.9607 14.7288 12.9628 14.7421H12.2951L6.626 14.7421C6.62802 14.7288 6.63007 14.7154 6.63211 14.7021C6.65032 14.5835 6.66851 14.465 6.66851 14.342C6.66851 12.7976 5.35982 11.5412 3.75104 11.5412C2.14226 11.5412 0.833564 12.7976 0.833564 14.342C0.833564 14.465 0.851756 14.5835 0.869967 14.7021C0.872008 14.7154 0.87406 14.7288 0.876076 14.7421H0.625173C0.280078 14.7421 0 14.4732 0 14.1419V3.33894C0 3.00764 0.280078 2.73877 0.625173 2.73877ZM16.5237 7.96601L16.2725 6.2252C16.1028 5.5716 15.4941 5.11562 14.7921 5.11562H13.0232C12.7935 5.11562 12.607 5.2946 12.607 5.51513V7.96601H16.5237Z"
        fill="url(#paint0_radial_3333_32296)"
      />
      <path
        d="M3.75188 17.0001C2.60239 17.0001 1.66797 16.1023 1.66797 14.9996C1.66797 13.8969 2.60239 12.999 3.75188 12.999C4.90136 12.999 5.83579 13.8969 5.83579 14.9996C5.83579 16.1023 4.90136 17.0001 3.75188 17.0001Z"
        fill="#ACC0F3"
      />
      <path
        d="M15.8386 17.0001C14.6891 17.0001 13.7547 16.1023 13.7547 14.9996C13.7547 13.8969 14.6891 12.999 15.8386 12.999C16.988 12.999 17.9225 13.8969 17.9225 14.9996C17.9225 16.1023 16.988 17.0001 15.8386 17.0001Z"
        fill="#ACC0F3"
      />
      <defs>
        <radialGradient
          id="paint0_radial_3333_32296"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.0028 8.74043) rotate(-149.036) scale(11.6651 10.2928)"
        >
          <stop stopColor="#E46D04" />
          <stop
            offset="1"
            stopColor="#FBA409"
          />
        </radialGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
