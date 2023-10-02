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
        d="M19.785 16.1258L18.7087 12.3758H16.125V15.7508C16.125 16.2481 15.9275 16.725 15.5758 17.0767C15.2242 17.4283 14.7473 17.6258 14.25 17.6258H12.375C12.315 17.2508 12.6487 15.9533 11.4975 14.9221C11.7533 14.8322 11.9749 14.6654 12.1321 14.4445C12.2892 14.2236 12.3741 13.9594 12.375 13.6883C12.3742 13.4933 12.3293 13.3011 12.2437 13.1258H12.8212L13.6237 16.8758H14.25C14.5484 16.8758 14.8345 16.7573 15.0455 16.5463C15.2565 16.3354 15.375 16.0492 15.375 15.7508V14.3033L14.8312 11.7646C14.7773 11.5132 14.6388 11.2879 14.4388 11.1262C14.2389 10.9645 13.9896 10.8761 13.7325 10.8758H12.6787C12.9862 10.3096 13.4512 9.51084 13.7512 9.03084L14.3588 9.64209C14.4112 9.6939 14.4777 9.72912 14.55 9.74334L16.125 10.0583V11.6258H19.125C19.4234 11.6258 19.7095 11.5073 19.9205 11.2963C20.1315 11.0854 20.25 10.7992 20.25 10.5008V8.25084C20.25 7.95248 20.1315 7.66633 19.9205 7.45535C19.7095 7.24437 19.4234 7.12584 19.125 7.12584H16.5C16.4005 7.12584 16.3052 7.16535 16.2348 7.23568C16.1645 7.30601 16.125 7.40139 16.125 7.50084V7.72584L15.4875 7.58334C14.9252 6.97438 14.3306 6.39604 13.7062 5.85084C13.4766 5.71909 13.2195 5.6427 12.9552 5.62773C12.6909 5.61275 12.4268 5.65962 12.1838 5.76459C11.2022 6.1884 10.3178 6.80862 9.585 7.58709C8.79429 8.4702 8.19655 9.50857 7.83 10.6358C7.73141 10.9174 7.70142 11.2184 7.74251 11.5138C7.7836 11.8093 7.89458 12.0906 8.06625 12.3346L8.10375 12.3758H4.3125C4.02094 12.375 3.73745 12.4715 3.507 12.6501C3.27654 12.8287 3.11233 13.0792 3.0404 13.3617C2.96847 13.6443 2.99295 13.9427 3.10995 14.2098C3.22695 14.4768 3.42978 14.6972 3.68625 14.8358C2.91201 15.2533 2.26515 15.8725 1.81424 16.6278C1.36333 17.383 1.12517 18.2462 1.125 19.1258C1.125 19.2253 1.16451 19.3207 1.23483 19.391C1.30516 19.4613 1.40054 19.5008 1.5 19.5008H2.25C2.25 20.396 2.60558 21.2544 3.23851 21.8873C3.87145 22.5203 4.72989 22.8758 5.625 22.8758C6.52011 22.8758 7.37855 22.5203 8.01148 21.8873C8.64442 21.2544 9 20.396 9 19.5008H16.125C16.1273 20.1557 16.3201 20.7957 16.6799 21.3429C17.0396 21.8901 17.5508 22.3208 18.1511 22.5825C18.7514 22.8442 19.4148 22.9257 20.0606 22.8169C20.7063 22.7081 21.3065 22.4138 21.7879 21.9699C22.2693 21.526 22.6112 20.9516 22.7718 20.3168C22.9325 19.6819 22.905 19.0141 22.6927 18.3946C22.4804 17.7751 22.0924 17.2308 21.5761 16.8279C21.0598 16.4251 20.4375 16.1811 19.785 16.1258ZM5.625 22.1258C5.10582 22.1258 4.59831 21.9719 4.16663 21.6835C3.73495 21.395 3.3985 20.985 3.19982 20.5054C3.00114 20.0257 2.94915 19.4979 3.05044 18.9887C3.15172 18.4795 3.40173 18.0118 3.76884 17.6447C4.13596 17.2776 4.60369 17.0276 5.11289 16.9263C5.62209 16.825 6.14989 16.877 6.62954 17.0757C7.1092 17.2743 7.51917 17.6108 7.80761 18.0425C8.09605 18.4742 8.25 18.9817 8.25 19.5008C8.25 19.8456 8.1821 20.1869 8.05018 20.5054C7.91826 20.8239 7.72491 21.1132 7.48115 21.357C7.2374 21.6008 6.94802 21.7941 6.62954 21.926C6.31106 22.0579 5.96972 22.1258 5.625 22.1258ZM19.5 22.1258C18.9808 22.1258 18.4733 21.9719 18.0416 21.6835C17.6099 21.395 17.2735 20.985 17.0748 20.5054C16.8761 20.0257 16.8242 19.4979 16.9254 18.9887C17.0267 18.4795 17.2767 18.0118 17.6438 17.6447C18.011 17.2776 18.4787 17.0276 18.9879 16.9263C19.4971 16.825 20.0249 16.877 20.5045 17.0757C20.9842 17.2743 21.3942 17.6108 21.6826 18.0425C21.971 18.4742 22.125 18.9817 22.125 19.5008C22.125 19.8456 22.0571 20.1869 21.9252 20.5054C21.7933 20.8239 21.5999 21.1132 21.3562 21.357C21.1124 21.6008 20.823 21.7941 20.5045 21.926C20.1861 22.0579 19.8447 22.1258 19.5 22.1258Z"
        fill="url(#paint0_radial_1805_26109)"
      />
      <path
        d="M19.5 21C20.3284 21 21 20.3284 21 19.5C21 18.6716 20.3284 18 19.5 18C18.6716 18 18 18.6716 18 19.5C18 20.3284 18.6716 21 19.5 21Z"
        fill="#ACC0F3"
      />
      <path
        d="M5.625 21C6.45343 21 7.125 20.3284 7.125 19.5C7.125 18.6716 6.45343 18 5.625 18C4.79657 18 4.125 18.6716 4.125 19.5C4.125 20.3284 4.79657 21 5.625 21Z"
        fill="#ACC0F3"
      />
      <path
        d="M7.125 7.5C7.125 7.40054 7.08549 7.30516 7.01517 7.23483C6.94484 7.16451 6.84946 7.125 6.75 7.125H1.5C1.40054 7.125 1.30516 7.16451 1.23483 7.23483C1.16451 7.30516 1.125 7.40054 1.125 7.5V11.625H7.125V7.5Z"
        fill="#ACC0F3"
      />
      <path
        d="M18.75 3.1875C18.749 2.6408 18.5314 2.11677 18.1448 1.73019C17.7582 1.34361 17.2342 1.12599 16.6875 1.125H15.5625C15.019 1.12595 14.4978 1.34099 14.1118 1.72353C13.7257 2.10607 13.5059 2.6253 13.5 3.16875V4.08C13.5007 4.71069 13.7285 5.32004 14.1417 5.79655C14.5549 6.27307 15.1258 6.5849 15.75 6.675V3.75C15.75 3.65054 15.7895 3.55516 15.8598 3.48483C15.9302 3.41451 16.0255 3.375 16.125 3.375H18.75V3.1875Z"
        fill="url(#paint1_radial_1805_26109)"
      />
      <path
        d="M16.5 6.45375C16.7832 6.43526 17.0596 6.35948 17.3126 6.23098C17.5656 6.10249 17.7899 5.92397 17.9719 5.70623C18.1539 5.48849 18.2898 5.23608 18.3713 4.96428C18.4528 4.69247 18.4783 4.40695 18.4462 4.125H16.5V6.45375Z"
        fill="url(#paint2_radial_1805_26109)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_1805_26109"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(12 14.2504) rotate(-141.581) scale(13.8803 13.5157)"
        >
          <stop stopColor="#E46D04" />
          <stop
            offset="1"
            stopColor="#FBA409"
          />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1805_26109"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16.125 3.9) rotate(-133.409) scale(3.81985 3.81396)"
        >
          <stop stopColor="#E46D04" />
          <stop
            offset="1"
            stopColor="#FBA409"
          />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1805_26109"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.4798 5.28937) rotate(-130.081) scale(1.52179 1.49942)"
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
