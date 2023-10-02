import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="32"
      height="28"
      viewBox="0 0 32 28"
      fill="none"
      {...props}
    >
      <path
        d="M22.7122 11.2165H21.3102C21.0001 11.2165 20.7494 10.9658 20.7494 10.6557V8.38043L14.4238 12.899L20.7494 17.4175V15.1423C20.7494 14.8322 21.0001 14.5815 21.3102 14.5815H21.5906C25.7654 14.5815 29.1617 17.9778 29.1617 22.1526C29.1617 24.2383 28.3143 26.1294 26.9453 27.5C29.6042 26.0116 31.405 23.1671 31.405 19.9093C31.405 15.1159 27.5056 11.2165 22.7122 11.2165Z"
        fill="url(#paint0_radial_721_835)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3078 3.62744C11.9681 3.96712 11.7773 4.42782 11.7773 4.90821V6.72989C11.7773 7.34936 12.2795 7.85154 12.899 7.85154C13.5184 7.85154 14.0206 7.34936 14.0206 6.72989V4.85801C14.0206 4.40703 14.186 3.97173 14.4855 3.63457L17.7142 0H15.9353L12.3078 3.62744ZM25.7979 17.2678C24.734 16.3503 23.3684 15.7737 21.8721 15.7092V18.5072C21.8721 18.7175 21.7549 18.9099 21.5682 19.0063C21.3803 19.1011 21.156 19.086 20.9855 18.9637L13.1339 13.3555C12.9864 13.25 12.899 13.0801 12.899 12.899C12.899 12.7178 12.9864 12.5479 13.1339 12.443L20.9855 6.83476C21.156 6.71194 21.3803 6.69568 21.5682 6.79214C21.7549 6.88804 21.8721 7.0804 21.8721 7.29071V10.0948H22.7134C23.7918 10.0948 24.8266 10.276 25.7979 10.599V4.48659H16.1422C15.59 4.48659 15.1422 4.93431 15.1422 5.48659V8.41236C15.1422 8.7225 14.8916 8.97318 14.5814 8.97318H11.2165C10.9063 8.97318 10.6557 8.7225 10.6557 8.41236V5.48659C10.6557 4.93431 10.2079 4.48659 9.65566 4.48659H0V22.6763C0 23.7808 0.895431 24.6763 2 24.6763H23.7979C24.9025 24.6763 25.7979 23.7808 25.7979 22.6763V17.2678ZM8.97318 21.8721C8.97318 22.1819 8.72209 22.433 8.41236 22.433H2.80412C2.49439 22.433 2.2433 22.1819 2.2433 21.8721C2.2433 21.5624 2.49439 21.3113 2.80412 21.3113H8.41236C8.72209 21.3113 8.97318 21.5624 8.97318 21.8721ZM8.97318 19.6288C8.97318 19.9386 8.72209 20.1897 8.41236 20.1897H2.80412C2.49439 20.1897 2.2433 19.9386 2.2433 19.6288C2.2433 19.3191 2.49439 19.068 2.80412 19.068H8.41236C8.72209 19.068 8.97318 19.3191 8.97318 19.6288ZM2.69393 1.46447C3.63162 0.526784 4.90339 0 6.22947 0H14.3497L10.9848 3.36494H0.793457L2.69393 1.46447ZM15.9353 3.36494H26.1266L29.4915 0H19.3002L15.9353 3.36494ZM30.2839 0.792999V12.0577L26.9189 10.3752V4.15794L30.2839 0.792999Z"
        fill="url(#paint1_radial_721_835)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_721_835"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(22.9144 17.9402) rotate(90) scale(9.5598 8.4906)"
        >
          <stop stopColor="#FB8C09" />
          <stop
            offset="1"
            stopColor="#FFBE60"
          />
        </radialGradient>
        <radialGradient
          id="paint1_radial_721_835"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(15.1419 12.3381) rotate(90) scale(12.3381 15.1419)"
        >
          <stop stopColor="#FB8C09" />
          <stop
            offset="1"
            stopColor="#FFBE60"
          />
        </radialGradient>
      </defs>
    </Svg>
  );
};

export default Icon;