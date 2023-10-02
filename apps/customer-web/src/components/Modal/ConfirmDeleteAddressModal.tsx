import { useDeleteCustomerAddressMutation } from '@customer-web/hooks/mutations';
import { useAppDispatch } from '@customer-web/state';
import { fetchCustomerAddressesByCustomerId } from '@customer-web/state/customer/actions';
import { useUserId } from '@customer-web/state/user/hooks';
import { Box, Button, ColumnCenter, Modal, ModalProps, Row, Text } from '@tsu-org/ui-kit';
import { notification } from 'antd';
import { FC } from 'react';

const LocationOnIcon = () => {
  return (
    <svg
      width="231"
      height="130"
      viewBox="0 0 231 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M115.5 129.533C179.289 129.533 231 120.355 231 109.033C231 97.7114 179.289 88.5332 115.5 88.5332C51.7111 88.5332 0 97.7114 0 109.033C0 120.355 51.7111 129.533 115.5 129.533Z"
        fill="url(#paint0_linear_2712_21691)"
      />
      <path
        d="M104.749 127.989C75.7189 121.283 69.3767 109.72 85.4798 105.559C101.583 101.397 126.466 104.403 120.119 96.3064C113.772 88.2097 81.0851 89.8343 74.5 91.2199C93.2838 87.2889 124.757 83.588 132.808 96.5322C140.86 109.476 106.949 111.8 105.973 114.811C104.273 121.752 164.767 113.655 165.5 127.994C134.027 131.46 104.749 127.989 104.749 127.989Z"
        fill="url(#paint1_linear_2712_21691)"
      />
      <g filter="url(#filter0_f_2712_21691)">
        <path
          d="M53.5 103.533C66.8012 105.586 108.5 103.033 115 103.533C118.999 99.533 96.301 91.5859 82.9999 89.5334C70.9168 90.8169 17.3231 97.4439 17.0007 99.5335C16.6782 101.623 40.1989 101.481 53.5 103.533Z"
          fill="url(#paint2_linear_2712_21691)"
        />
      </g>
      <path
        d="M121.596 83.3569C124.87 89.1595 117.835 99.9868 117.632 101.722C116.971 102.752 116.498 103.385 116.288 103.464C115.623 103.95 113.386 103.768 112.056 103.464C110.725 103.161 109.261 99.4731 101.038 85.1714C92.9238 69.794 83.9619 60.0642 84.5253 47.1306C84.5253 30.7841 97.7272 17.5332 114.012 17.5332C116.09 17.5319 118.163 17.7504 120.196 18.185C128.25 20.2396 131.796 24.2318 131.246 24.1673C117.062 22.5032 102.523 26.2086 99.248 45.3248C97.5332 55.3344 112.507 86.782 121.596 83.3569Z"
        fill="url(#paint3_linear_2712_21691)"
      />
      <path
        d="M135.442 47.1184C135.442 55.5438 124.829 66.792 117.366 63.4804C116.473 63.4804 116.061 62.2896 115.213 62.1267C121.935 60.7988 127.021 54.5908 127.021 47.1328C127.021 39.647 121.895 33.4195 115.135 32.1245C116.008 31.9517 116.981 30.3359 117.9 30.3359C125.909 30.3365 135.442 38.6923 135.442 47.1184Z"
        fill="url(#paint4_linear_2712_21691)"
      />
      <path
        d="M143.501 47.1287C143.501 32.9116 133.515 21.0352 120.198 18.1826C119.653 18.1442 119.105 18.125 118.552 18.125C105.457 18.125 94.5973 28.8929 92.5826 42.9851C92.4499 43.9103 92.3562 44.8494 92.3015 45.8026C92.3159 52.3584 92.8316 56.4214 96.8146 64.3943C98.1874 67.1421 99.9698 70.3541 102.289 74.2927C104.285 77.6838 106.675 81.6138 109.54 86.2497C115.946 97.8152 117.837 99.9826 117.633 101.718C120.025 97.9914 124.882 89.0701 128.625 82.4596C131.124 77.6757 133.524 73.7497 135.639 70.2251C140.243 62.5557 143.499 56.7871 143.499 48.2124C143.498 48.1708 143.493 48.1293 143.484 48.0886C143.495 47.7712 143.501 47.4512 143.501 47.1287ZM117.832 62.3703C116.954 62.3707 116.079 62.2878 115.217 62.1227C108.454 60.8276 103.329 54.6006 103.329 47.1143C103.329 39.6563 108.415 33.4489 115.136 32.121C116.024 31.9459 116.927 31.858 117.832 31.8584C125.84 31.8584 132.332 38.6883 132.332 47.1143C132.332 55.5404 125.837 62.3703 117.832 62.3703Z"
        fill="url(#paint5_linear_2712_21691)"
      />
      <path
        d="M141 100.533C150.113 100.533 157.5 93.1459 157.5 84.0332C157.5 74.9205 150.113 67.5332 141 67.5332C131.887 67.5332 124.5 74.9205 124.5 84.0332C124.5 93.1459 131.887 100.533 141 100.533Z"
        fill="white"
      />
      <path
        d="M141 100.533C150.113 100.533 157.5 93.1459 157.5 84.0332C157.5 74.9205 150.113 67.5332 141 67.5332C131.887 67.5332 124.5 74.9205 124.5 84.0332C124.5 93.1459 131.887 100.533 141 100.533Z"
        fill="url(#paint6_linear_2712_21691)"
      />
      <path
        opacity="0.6"
        d="M140.14 88.7428L135.816 93.1115C135.264 93.6687 134.746 93.6687 134.223 93.1412L131.885 90.7785C131.366 90.2547 131.366 89.7272 131.918 89.1626L136.239 84.8013L132.374 80.8932C131.819 80.336 131.819 79.8122 132.341 79.2846L134.679 76.922C135.202 76.3982 135.72 76.3982 136.279 76.9554L140.14 80.8635L143.747 77.2192C144.299 76.6582 144.821 76.6582 145.339 77.1857L147.678 79.5484C148.197 80.0759 148.197 80.5997 147.645 81.157L144.038 84.8013L148.083 88.9062C148.634 89.4635 148.634 89.991 148.112 90.5148L145.795 92.8774C145.277 93.4012 144.755 93.4012 144.203 92.844L140.14 88.7428Z"
        fill="#1E5BCF"
      />
      <path
        d="M141.14 87.7428L136.816 92.1115C136.264 92.6687 135.746 92.6687 135.223 92.1412L132.885 89.7785C132.366 89.2547 132.366 88.7272 132.918 88.1626L137.239 83.8013L133.374 79.8932C132.819 79.336 132.819 78.8122 133.341 78.2846L135.679 75.922C136.202 75.3982 136.72 75.3982 137.279 75.9554L141.14 79.8635L144.747 76.2192C145.299 75.6582 145.821 75.6582 146.339 76.1857L148.678 78.5484C149.197 79.0759 149.197 79.5997 148.645 80.157L145.038 83.8013L149.083 87.9062C149.634 88.4635 149.634 88.991 149.112 89.5148L146.795 91.8774C146.277 92.4012 145.755 92.4012 145.203 91.844L141.14 87.7428Z"
        fill="url(#paint7_linear_2712_21691)"
      />
      <path
        d="M185.624 18.2244L197.463 21.2171L191.351 14.709L185.624 18.2244Z"
        fill="url(#paint8_linear_2712_21691)"
      />
      <path
        d="M164.814 0.533203L204.62 3.00304L196.814 9.76955L197.463 21.2173L191.352 14.7092L176.779 27.0704L164.814 0.533203Z"
        fill="url(#paint9_linear_2712_21691)"
      />
      <path
        d="M164.814 0.533203L196.814 9.76955L197.463 21.2173L191.351 14.7092L164.814 0.533203Z"
        fill="url(#paint10_linear_2712_21691)"
      />
      <path
        d="M36.8461 42.5827L27.9055 44.8428L32.5211 39.9277L36.8461 42.5827Z"
        fill="url(#paint11_linear_2712_21691)"
      />
      <path
        d="M52.5623 29.2207L22.5 31.086L28.3954 36.1962L27.9052 44.8418L32.5208 39.9268L43.5264 49.2622L52.5623 29.2207Z"
        fill="url(#paint12_linear_2712_21691)"
      />
      <path
        d="M52.5626 29.2207L28.3957 36.1962L27.9055 44.8418L32.5211 39.9268L52.5626 29.2207Z"
        fill="url(#paint13_linear_2712_21691)"
      />
      <defs>
        <filter
          id="filter0_f_2712_21691"
          x="15.9973"
          y="88.5332"
          width="100.469"
          height="16.8105"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
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
            stdDeviation="0.5"
            result="effect1_foregroundBlur_2712_21691"
          />
        </filter>
        <linearGradient
          id="paint0_linear_2712_21691"
          x1="115.5"
          y1="81.0787"
          x2="115.5"
          y2="129.533"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC598" />
          <stop
            offset="1"
            stopColor="#FFFAF0"
            stopOpacity="0.49"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2712_21691"
          x1="130.717"
          y1="82.7971"
          x2="46.1313"
          y2="98.315"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.025906"
            stopColor="#FFC36C"
          />
          <stop
            offset="0.774641"
            stopColor="#F4F7FF"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2712_21691"
          x1="80.0978"
          y1="86.7354"
          x2="-4.79522"
          y2="106.532"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.025906"
            stopColor="#FFC36C"
          />
          <stop
            offset="0.774641"
            stopColor="#F4F7FF"
            stopOpacity="0"
          />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2712_21691"
          x1="58"
          y1="70.5"
          x2="163.5"
          y2="28.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.223011"
            stopColor="#F1822B"
          />
          <stop
            offset="0.612627"
            stopColor="#FFD1A6"
          />
          <stop
            offset="0.880208"
            stopColor="#FFCB8E"
          />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2712_21691"
          x1="132.5"
          y1="40.5"
          x2="100.637"
          y2="57.2056"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.114301"
            stopColor="#FF8D34"
          />
          <stop
            offset="0.49923"
            stopColor="#FFD1A6"
          />
          <stop
            offset="0.880208"
            stopColor="#FFCB8E"
          />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2712_21691"
          x1="59.5"
          y1="60"
          x2="147.953"
          y2="5.90348"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.114301"
            stopColor="#FF8D34"
          />
          <stop
            offset="0.49923"
            stopColor="#FFD1A6"
          />
          <stop
            offset="0.880208"
            stopColor="#FFCB8E"
          />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2712_21691"
          x1="149.462"
          y1="72.1854"
          x2="129.886"
          y2="92.6125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FCE7C0" />
          <stop
            offset="1"
            stopColor="#FF7F33"
          />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2712_21691"
          x1="151"
          y1="65.5332"
          x2="132.5"
          y2="90.5332"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEB03E" />
          <stop
            offset="1"
            stopColor="white"
          />
        </linearGradient>
        <linearGradient
          id="paint8_linear_2712_21691"
          x1="195.119"
          y1="21.7782"
          x2="155.596"
          y2="-38.0512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC9C27" />
          <stop
            offset="1"
            stopColor="#FFF8EE"
          />
        </linearGradient>
        <linearGradient
          id="paint9_linear_2712_21691"
          x1="196.74"
          y1="29.3584"
          x2="189.197"
          y2="-0.461346"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEB03E" />
          <stop
            offset="1"
            stopColor="#FFF8EE"
          />
        </linearGradient>
        <linearGradient
          id="paint10_linear_2712_21691"
          x1="191"
          y1="23.0007"
          x2="173.511"
          y2="-16.5093"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEB03E" />
          <stop
            offset="1"
            stopColor="#FFF8EE"
          />
        </linearGradient>
        <linearGradient
          id="paint11_linear_2712_21691"
          x1="29.6754"
          y1="45.2666"
          x2="59.5241"
          y2="0.0820081"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EC9C27" />
          <stop
            offset="1"
            stopColor="#FFF8EE"
          />
        </linearGradient>
        <linearGradient
          id="paint12_linear_2712_21691"
          x1="28.4511"
          y1="50.9902"
          x2="34.1479"
          y2="28.4696"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEB03E" />
          <stop
            offset="1"
            stopColor="#FFF8EE"
          />
        </linearGradient>
        <linearGradient
          id="paint13_linear_2712_21691"
          x1="32.7866"
          y1="46.1887"
          x2="45.9945"
          y2="16.3498"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FEB03E" />
          <stop
            offset="1"
            stopColor="#FFF8EE"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ConfirmDeleteAddressModal: FC<
  ModalProps & {
    address?: NhapThuocResponse.Customers.Address;
    onCancel?: () => void;
  }
> = ({ address, ...props }) => {
  const dispatch = useAppDispatch();
  const userId = useUserId();
  const { mutateAsync: deleteAddress, isLoading } = useDeleteCustomerAddressMutation({
    onSuccess: () => {
      notification.success({
        message: 'Xoá địa chỉ thành công',
      });

      dispatch(fetchCustomerAddressesByCustomerId(userId!));
      props.onCancel && props.onCancel();
    },
  });

  const handleDeleteAddress = async () => {
    if (!address?.id) {
      return;
    }

    deleteAddress({
      customerId: userId!,
      addressId: address.id,
    });
  };

  return (
    <Modal
      width={400}
      footer={null}
      centered
      {...props}
    >
      <ColumnCenter>
        <Box mb="1rem">
          <LocationOnIcon />
        </Box>
        <Text
          bold
          mb="0.25rem"
        >
          Xóa địa chỉ
        </Text>
        <Text
          color="textSecondary"
          small
          mb="1rem"
        >
          Bạn chắc chắn muốn xóa địa chỉ?
        </Text>

        <Row gap="0p75rem">
          <Button
            width="50%"
            loading={isLoading}
            onClick={handleDeleteAddress}
          >
            Xác nhận
          </Button>
          <Button
            type="secondary"
            width="50%"
            onClick={props.onCancel}
          >
            Đóng
          </Button>
        </Row>
      </ColumnCenter>
    </Modal>
  );
};

export default ConfirmDeleteAddressModal;
