import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="20"
      height="27"
      viewBox="0 0 20 27"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0183 0C14.0183 0 12.7049 0.828187 12.7298 2.36534C12.7399 2.98811 12.9863 3.51724 13.2373 4.05635C13.3135 4.22007 13.3902 4.38471 13.4608 4.55317C13.7315 5.19914 13.7853 6.18177 13.7853 6.18177C13.7853 6.18177 14.6851 5.40947 14.7813 3.69644C14.8112 3.16279 14.5931 2.54016 14.4091 2.01475L14.409 2.01473C14.3613 1.8783 14.3158 1.74843 14.2775 1.62837C13.9902 0.726578 14.0183 0 14.0183 0ZM15.6473 9.144C15.6512 9.52949 15.6358 9.93319 15.5871 10.3192C15.4016 11.7891 14.718 12.6914 14.718 12.6914C14.718 12.6914 15.2172 10.3834 14.5539 8.83594C14.1812 7.96639 13.651 7.32444 13.1424 6.70849C12.6091 6.06282 12.0995 5.44572 11.8196 4.625C11.19 2.7793 12.1334 0.632812 12.1334 0.632812C12.1334 0.632812 9.03049 1.83178 6.7883 4.92578C4.73127 7.76431 5.45945 11.2649 5.81286 12.4991C5.62904 12.0439 5.23517 11.3239 4.43674 10.6953C3.15159 9.68359 3.67221 8.1145 3.67221 8.1145C3.67221 8.1145 0.198242 12.0079 0.198242 16.6746C0.198242 17.9415 0.561039 19.2192 1.08954 20.4085C2.51262 23.6103 5.56683 25.745 9.00699 26.101C9.34453 26.136 9.68581 26.1538 10.0296 26.1538C11.3574 26.1538 12.643 25.8888 13.8221 25.4007C13.9401 25.3519 14.0569 25.3008 14.1726 25.2476C16.6025 24.1299 18.5339 22.0469 19.3693 19.387C19.6386 18.5296 19.8025 17.6195 19.8025 16.6745C19.8025 11.3881 15.4744 7.12247 15.4744 7.12247L15.4745 7.12295L15.4741 7.12256C15.4741 7.12256 15.636 8.06111 15.6468 9.14315L15.6473 9.144ZM3.72122 4.85132C3.37198 6.35195 4.48367 7.44077 4.48367 7.44077C4.48367 7.44077 4.53179 6.34177 5.00397 5.51927C5.1049 5.34337 5.2538 5.15471 5.4165 4.94857C5.74535 4.53191 6.13055 4.04387 6.28978 3.44552C6.66012 2.05406 6.0719 1.33557 6.0719 1.33557C6.0719 1.33557 5.81859 2.38721 5.26843 2.9692C5.12479 3.12116 4.96109 3.2694 4.79471 3.42007C4.33585 3.83559 3.85655 4.26961 3.72122 4.85132Z"
        fill="url(#paint0_linear_672_274148)"
      />
      <path
        d="M14 18.3196C14 16.3056 12.5799 15.0065 11.6956 14.1732C10.121 12.6889 10.4005 11 10.4005 11C10.4005 11 7.31437 13.4685 6.82947 15.516C6.36586 17.4743 7.53212 18.5629 7.53212 18.5629C7.53212 18.5629 6.98868 18.3678 6.65075 18.018C6.22031 17.5727 6.06563 17.0331 6.06563 17.0331C6.06563 17.0331 5.88575 17.438 6.12159 18.8233C6.28923 19.808 6.83914 20.5449 7.4844 21.0872C9.05272 22.4052 11.4985 22.2777 12.92 20.8226C13.529 20.1992 14 19.3757 14 18.3196Z"
        fill="#FFE9C4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_672_274148"
          x1="19.8025"
          y1="26.1538"
          x2="-5.30117"
          y2="7.3367"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E46D04" />
          <stop
            offset="1"
            stopColor="#FBA409"
          />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;