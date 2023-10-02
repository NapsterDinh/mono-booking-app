import { Button, ColumnCenter, Text } from '@tsu-org/ui-kit';
import Svg from '@tsu-org/ui-kit/components/Svg/Svg';
import { FC } from 'react';

const Empty: FC<{ onClearFilter?: () => void }> = ({ onClearFilter }) => {
  return (
    <ColumnCenter py="7rem">
      <EmptyIcon />
      <Text
        bold
        color="textSecondary"
        fontWeight="1.125rem"
        mb="0.25rem"
      >
        Ôi! Không tìm thấy sản phẩm nào phù hợp
      </Text>
      <Text
        color="textTertiary"
        mb="1rem"
      >
        Hãy thử lại bằng cách thay đổi điều kiện lọc hoặc
      </Text>
      <Button
        scale="lg"
        onClick={onClearFilter}
      >
        Xóa tất cả bộ lọc
      </Button>
    </ColumnCenter>
  );
};

const EmptyIcon = () => {
  return (
    <Svg
      width="425"
      height="202"
      viewBox="0 0 425 202"
      fill="none"
    >
      <g opacity="0.78">
        <ellipse
          cx="216.738"
          cy="155.99"
          rx="111.575"
          ry="19.7867"
          fill="url(#paint0_linear_2312_72618)"
        />
        <g
          opacity="0.6"
          filter="url(#filter0_f_2312_72618)"
        >
          <path
            d="M254.912 151.043C244.268 154.791 208.784 156.143 172.137 159.462C142.11 174.782 42.126 184.565 97.5899 151.795C113.773 134.485 158.017 136.561 174.983 148.411C251.676 147.239 254.351 145.548 254.912 151.043Z"
            fill="url(#paint1_linear_2312_72618)"
          />
        </g>
        <path
          d="M253.184 151.593C252.207 151.594 251.24 151.403 250.337 151.029C249.435 150.656 248.616 150.108 247.928 149.417L212.156 113.628C211.468 112.94 210.923 112.125 210.552 111.228C210.181 110.331 209.991 109.37 209.993 108.4C209.996 106.441 210.782 104.563 212.176 103.181C213.57 101.798 215.459 101.023 217.427 101.027C219.394 101.031 221.28 101.812 222.669 103.2L258.441 139.01C259.473 140.043 260.175 141.358 260.458 142.789C260.741 144.219 260.592 145.701 260.029 147.047C259.467 148.393 258.517 149.544 257.298 150.353C256.08 151.162 254.649 151.593 253.184 151.593Z"
          fill="url(#paint2_linear_2312_72618)"
        />
        <path
          d="M165.612 97.6753C177.156 109.059 204.33 125.883 227.594 96.639C225.438 103.698 220.919 107.274 216.552 111.579C198.781 124.186 177.321 122.128 160.457 105.494C143.593 88.86 141.155 63.6398 155.937 49.1632C160.216 44.4125 165.952 38.9927 173.389 38.3687C139.348 56.2165 155.181 87.3904 165.612 97.6753Z"
          fill="url(#paint3_linear_2312_72618)"
        />
        <path
          d="M212.928 54.0213C228.666 69.6295 231.062 92.5597 218.272 105.238C211.971 111.485 210.296 112.656 201.762 114.218C226.49 99.0695 220.089 75.9552 205.884 61.1988C195.578 50.9743 170.73 40.5671 152.787 61.1988C153.757 58.7943 156.875 53.0886 161.284 48.7169C174.065 36.0391 197.188 38.4143 212.928 54.0213Z"
          fill="url(#paint4_linear_2312_72618)"
        />
        <path
          d="M219.521 104.005C232.272 91.2552 229.883 68.1949 214.186 52.4987C198.488 36.8024 175.425 34.414 162.674 47.164C149.923 59.9141 152.312 82.9743 168.009 98.6706C183.707 114.367 206.77 116.755 219.521 104.005Z"
          fill="url(#paint5_radial_2312_72618)"
        />
        <path
          d="M216.056 50.7464C199.086 33.7919 174.156 31.2115 160.372 44.9841C146.588 58.7567 149.171 83.6668 166.133 100.621C183.096 117.576 208.032 120.158 221.815 106.385C235.599 92.6125 233.024 67.7024 216.056 50.7464ZM214.741 99.3089C204.136 109.905 184.955 107.921 171.9 94.8749C158.845 81.829 156.853 62.6611 167.458 52.0647C178.063 41.4683 197.244 43.4529 210.299 56.4987C223.354 69.5445 225.341 88.7081 214.741 99.3089Z"
          fill="url(#paint6_linear_2312_72618)"
        />
        <path
          d="M234.604 58C236.192 58 237.48 56.7179 237.48 55.1363C237.48 53.5546 236.192 52.2725 234.604 52.2725C233.016 52.2725 231.728 53.5546 231.728 55.1363C231.728 56.7179 233.016 58 234.604 58Z"
          fill="url(#paint7_linear_2312_72618)"
        />
        <path
          d="M246.112 58C247.7 58 248.988 56.7179 248.988 55.1363C248.988 53.5546 247.7 52.2725 246.112 52.2725C244.524 52.2725 243.237 53.5546 243.237 55.1363C243.237 56.7179 244.524 58 246.112 58Z"
          fill="url(#paint8_linear_2312_72618)"
        />
        <path
          d="M257.612 58C259.2 58 260.487 56.7179 260.487 55.1363C260.487 53.5546 259.2 52.2725 257.612 52.2725C256.023 52.2725 254.736 53.5546 254.736 55.1363C254.736 56.7179 256.023 58 257.612 58Z"
          fill="url(#paint9_linear_2312_72618)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_2312_72618"
          x="78.9273"
          y="136.964"
          width="178.184"
          height="38.9054"
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
            stdDeviation="1.09926"
            result="effect1_foregroundBlur_2312_72618"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2312_72618"
          x1="217.042"
          y1="142.877"
          x2="216.736"
          y2="175.777"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#C2C9D4"
            stopOpacity="0.88"
          />
          <stop
            offset="1"
            stopColor="#C4CAD5"
            stopOpacity="0.28"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2312_72618"
          x1="232.997"
          y1="150.581"
          x2="79.4041"
          y2="161.124"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#989DA7" />
          <stop
            offset="1"
            stopColor="#C4CAD5"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2312_72618"
          x1="223.529"
          y1="126.31"
          x2="237.45"
          y2="111.903"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACB4C4" />
          <stop
            offset="0.691976"
            stopColor="#EAF0F9"
          />
          <stop
            offset="1"
            stopColor="#D5DAE3"
          />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2312_72618"
          x1="160.257"
          y1="111.299"
          x2="201.607"
          y2="60.6066"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.0103351"
            stopColor="#9EA6B6"
          />
          <stop
            offset="1"
            stopColor="#DAE0E7"
          />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2312_72618"
          x1="235.357"
          y1="127.003"
          x2="162.912"
          y2="48.6586"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.0103351"
            stopColor="#9EA6B6"
          />
          <stop
            offset="1"
            stopColor="#DAE0E7"
          />
        </linearGradient>
        <radialGradient
          id="paint5_radial_2312_72618"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(152.387 79.4237) rotate(-1.40944) scale(72.9227 173.582)"
        >
          <stop
            stopColor="#C2C9D4"
            stopOpacity="0.64"
          />
          <stop
            offset="1"
            stopColor="#C4CAD5"
            stopOpacity="0"
          />
        </radialGradient>
        <linearGradient
          id="paint6_linear_2312_72618"
          x1="136.282"
          y1="128.512"
          x2="223.916"
          y2="31.0078"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B8BFCC" />
          <stop
            offset="0.784797"
            stopColor="#EAEFF4"
          />
          <stop
            offset="0.998036"
            stopColor="#C0C7D5"
          />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2312_72618"
          x1="234.604"
          y1="55.8522"
          x2="236.396"
          y2="52.7759"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#A6AFBF"
            stopOpacity="0.67"
          />
          <stop
            offset="1"
            stopColor="#9FA5AF"
            stopOpacity="0.05"
          />
        </linearGradient>
        <linearGradient
          id="paint8_linear_2312_72618"
          x1="246.112"
          y1="55.8522"
          x2="247.904"
          y2="52.7759"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#A6AFBF"
            stopOpacity="0.67"
          />
          <stop
            offset="1"
            stopColor="#9FA5AF"
            stopOpacity="0.05"
          />
        </linearGradient>
        <linearGradient
          id="paint9_linear_2312_72618"
          x1="257.612"
          y1="55.8522"
          x2="259.404"
          y2="52.7759"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#A6AFBF"
            stopOpacity="0.67"
          />
          <stop
            offset="1"
            stopColor="#9FA5AF"
            stopOpacity="0.05"
          />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Empty;
