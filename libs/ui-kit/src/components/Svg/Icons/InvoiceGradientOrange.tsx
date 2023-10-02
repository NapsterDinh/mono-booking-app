import React from 'react';
import Svg from '../Svg';
import type { SvgProps } from '../types';

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      {...props}
    >
      <path
        d="M25.9365 1.33356H7.26986C6.95036 1.33724 6.64281 1.45553 6.40319 1.66689C7.35404 2.00143 8.19062 2.59857 8.81598 3.38911C9.44133 4.17966 9.82986 5.13123 9.93652 6.13356C9.95691 6.31075 9.95691 6.4897 9.93652 6.66689V29.3336C9.93589 29.5886 10.0084 29.8384 10.1455 30.0535C10.2825 30.2685 10.4784 30.4398 10.7099 30.5469C10.9418 30.6537 11.1996 30.6916 11.4525 30.6562C11.7054 30.6207 11.9428 30.5134 12.1365 30.3469L15.9365 27.0936L19.7365 30.3469C19.978 30.5535 20.2854 30.667 20.6032 30.667C20.921 30.667 21.2283 30.5535 21.4699 30.3469L25.2699 27.0936L29.0699 30.3469C29.3114 30.5534 29.6187 30.6669 29.9365 30.6669C30.1294 30.6655 30.32 30.6247 30.4965 30.5469C30.728 30.4398 30.9238 30.2685 31.0609 30.0535C31.198 29.8384 31.2705 29.5886 31.2699 29.3336V6.66689C31.2699 5.2524 30.708 3.89585 29.7078 2.89565C28.7076 1.89546 27.351 1.33356 25.9365 1.33356ZM24.6032 20.0002H16.6032C16.2496 20.0002 15.9104 19.8597 15.6604 19.6097C15.4103 19.3596 15.2699 19.0205 15.2699 18.6669C15.2699 18.3133 15.4103 17.9741 15.6604 17.7241C15.9104 17.474 16.2496 17.3336 16.6032 17.3336H24.6032C24.9568 17.3336 25.2959 17.474 25.546 17.7241C25.796 17.9741 25.9365 18.3133 25.9365 18.6669C25.9365 19.0205 25.796 19.3596 25.546 19.6097C25.2959 19.8597 24.9568 20.0002 24.6032 20.0002ZM24.6032 14.6669H16.6032C16.2496 14.6669 15.9104 14.5264 15.6604 14.2764C15.4103 14.0263 15.2699 13.6872 15.2699 13.3336C15.2699 12.9799 15.4103 12.6408 15.6604 12.3907C15.9104 12.1407 16.2496 12.0002 16.6032 12.0002H24.6032C24.9568 12.0002 25.2959 12.1407 25.546 12.3907C25.796 12.6408 25.9365 12.9799 25.9365 13.3336C25.9365 13.6872 25.796 14.0263 25.546 14.2764C25.2959 14.5264 24.9568 14.6669 24.6032 14.6669ZM24.6032 9.33356H16.6032C16.2496 9.33356 15.9104 9.19308 15.6604 8.94303C15.4103 8.69298 15.2699 8.35385 15.2699 8.00022C15.2699 7.6466 15.4103 7.30746 15.6604 7.05741C15.9104 6.80737 16.2496 6.66689 16.6032 6.66689H24.6032C24.9568 6.66689 25.2959 6.80737 25.546 7.05741C25.796 7.30746 25.9365 7.6466 25.9365 8.00022C25.9365 8.35385 25.796 8.69298 25.546 8.94303C25.2959 9.19308 24.9568 9.33356 24.6032 9.33356ZM7.26986 6.66689V17.3336H3.26986C2.91623 17.3336 2.5771 17.1931 2.32705 16.943C2.077 16.693 1.93652 16.3538 1.93652 16.0002V6.66689C1.93652 6.48022 1.93652 6.30689 1.93652 6.13356C2.00725 5.42631 2.35603 4.77613 2.90613 4.32604C3.45624 3.87596 4.16261 3.66283 4.86986 3.73356C5.5771 3.80428 6.22728 4.15306 6.67737 4.70317C7.12746 5.25327 7.34058 5.95965 7.26986 6.66689Z"
        fill="url(#paint0_radial_721_828)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_721_828"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(28.0106 15.7499) rotate(127.942) scale(21.5395 26.3816)"
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