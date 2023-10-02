import { FC, PropsWithChildren } from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: FC<PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      {...props}
    >
      <path
        d="M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29973 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.4967 5.27711 12.8108 3.62573 11.5925 2.40746C10.3743 1.18918 8.72289 0.503304 7 0.5ZM10.0938 5.8625L6.43125 9.3625C6.33657 9.45157 6.21125 9.5008 6.08125 9.5C6.01771 9.50091 5.95463 9.48923 5.89563 9.46563C5.83663 9.44203 5.78289 9.40698 5.7375 9.3625L3.90625 7.6125C3.85546 7.56819 3.81415 7.51406 3.78481 7.45337C3.75547 7.39269 3.73871 7.3267 3.73552 7.25937C3.73233 7.19204 3.7428 7.12476 3.76628 7.06157C3.78975 6.99839 3.82577 6.9406 3.87215 6.89169C3.91853 6.84278 3.97432 6.80375 4.03617 6.77695C4.09802 6.75015 4.16465 6.73614 4.23206 6.73574C4.29946 6.73535 4.36625 6.7486 4.42841 6.77467C4.49056 6.80075 4.54681 6.83913 4.59375 6.8875L6.08125 8.30625L9.40625 5.1375C9.50347 5.05268 9.62972 5.00872 9.75859 5.01482C9.88747 5.02092 10.009 5.0766 10.0978 5.17022C10.1866 5.26384 10.2357 5.38815 10.235 5.51717C10.2342 5.64618 10.1836 5.76992 10.0938 5.8625Z"
        fill="url(#paint0_linear_3585_1695)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3585_1695"
          x1="13.5"
          y1="13.5"
          x2="0.5"
          y2="0.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F79009" />
          <stop
            offset="1"
            stopColor="#FDB022"
          />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
