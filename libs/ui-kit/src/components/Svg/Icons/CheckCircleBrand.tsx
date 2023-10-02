import { FC, PropsWithChildren } from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Icon: FC<PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg
      width="270"
      height="114"
      viewBox="0 0 270 114"
      fill="none"
      {...props}
    >
      <path
        d="M135.001 113.944C209.275 113.944 269.486 103.908 269.486 91.5294C269.486 79.1504 209.275 69.1152 135.001 69.1152C60.7266 69.1152 0.515625 79.1504 0.515625 91.5294C0.515625 103.908 60.7266 113.944 135.001 113.944Z"
        fill="url(#paint0_linear_3393_89305)"
      />
      <g filter="url(#filter0_f_3393_89305)">
        <path
          d="M104.206 92.024C136.055 89.8869 161.552 83.3511 161.154 77.4259C160.756 71.5007 134.615 68.4298 102.766 70.5669C70.9166 72.704 45.42 79.2399 45.8176 85.1651C46.2151 91.0903 72.3564 94.1612 104.206 92.024Z"
          fill="url(#paint1_linear_3393_89305)"
        />
      </g>
      <path
        opacity="0.58"
        d="M32.6562 21.2376C49.5564 26.0135 49.3546 14.2711 61.3658 12.2803C62.3855 17.0587 72.3626 26.0135 77.0337 26.4106C68.095 28.4014 57.4993 40.1438 46.3007 35.5652C43.8549 30.7893 33.0652 26.4106 32.6562 21.2376Z"
        fill="url(#paint2_linear_3393_89305)"
      />
      <path
        opacity="0.58"
        d="M190.125 10.2782C192.604 6.62 199.394 3.69043 199.394 3.69043C203.007 8.57106 213.631 2.47102 215.893 5.88538C213.414 6.86388 209.111 13.9395 210.692 16.3813C204.817 18.0884 195.325 7.83941 190.125 10.2782Z"
        fill="url(#paint3_linear_3393_89305)"
      />
      <path
        d="M129.855 99.7657C157.4 99.7657 179.71 77.4556 179.71 49.9107C179.71 22.3658 157.4 0.0556641 129.855 0.0556641C102.31 0.0556641 80 22.3658 80 49.9107C80 77.4556 102.31 99.7657 129.855 99.7657Z"
        fill="url(#paint4_radial_3393_89305)"
      />
      <path
        d="M124.454 59.9026C119.436 47.2916 109.053 39.6126 103.941 41.1733C100.785 42.141 95.4199 47.1043 96.0511 50.538C96.8401 55.6885 102.71 53.6595 108.674 61.4634C116.438 71.6084 115.933 71.7645 118.142 73.9496C121.298 77.0711 130.765 77.0711 135.499 70.828C143.42 58.9662 154.402 33.0261 180.974 11.4562C185.708 7.46063 190 5.33798 190 5.05704C190 4.7761 183.215 5.15069 167.594 15.3269C151.941 25.5032 135.499 39.6126 124.454 59.9026Z"
        fill="url(#paint5_linear_3393_89305)"
      />
      <defs>
        <filter
          id="filter0_f_3393_89305"
          x="42.8125"
          y="66.8877"
          width="121.348"
          height="28.8164"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood
            floodOpacity="0"
            result="BackgroundImageFix"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.5"
            result="effect1_foregroundBlur_3393_89305"
          />
        </filter>
        <linearGradient
          id="paint0_linear_3393_89305"
          x1="135.001"
          y1="60.9646"
          x2="135.001"
          y2="113.944"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#FEE8B0"
            stopOpacity="0.51"
          />
          <stop
            offset="1"
            stopColor="#F8EACF"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3393_89305"
          x1="118.04"
          y1="26.4612"
          x2="101.728"
          y2="110.935"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.025906"
            stopColor="#DD9813"
          />
          <stop
            offset="1"
            stopColor="#FFFBF4"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3393_89305"
          x1="24.9561"
          y1="24.5655"
          x2="77.4754"
          y2="9.75997"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBD5B2" />
          <stop
            offset="1"
            stopColor="#FFF3EA"
          />
        </linearGradient>
        <linearGradient
          id="paint3_linear_3393_89305"
          x1="185.654"
          y1="10.1944"
          x2="215.7"
          y2="0.904452"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBD5B2" />
          <stop
            offset="1"
            stopColor="#FFF3EA"
          />
        </linearGradient>
        <radialGradient
          id="paint4_radial_3393_89305"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(129.855 49.9107) rotate(90) scale(49.855)"
        >
          <stop stopColor="#FB8C09" />
          <stop
            offset="1"
            stopColor="#FFBE60"
          />
        </radialGradient>
        <linearGradient
          id="paint5_linear_3393_89305"
          x1="143"
          y1="5"
          x2="143"
          y2="76"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE2BF" />
          <stop
            offset="1"
            stopColor="#FCCD93"
          />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
