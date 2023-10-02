import RecentlyWatchedProducts from '@customer-web/components/RecentlyWatchedProducts';
import { TpBankCode } from '@customer-web/enums/ErrorCode';
import { getErrorNotificationSetting } from '@customer-web/helpers/Notification';
import { useCreateTpBankPaymentLinkMutation } from '@customer-web/hooks/mutations';
import { useAppDispatch } from '@customer-web/state';
import { setCreateOrderErrorCode } from '@customer-web/state/order/actions';
import { AtomBox, breakpoints } from '@tsu-org/ui';
import { Box, ColumnCenter, Text } from '@tsu-org/ui-kit';
import { notification } from 'antd';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Lottie from 'react-lottie-player';
import LoadingJson from '../../../styles/assets/loadings/appear.json';

const RedirectToTpBank = ({ orderCode }: { orderCode?: string }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutate: createTpBankPaymentLink } = useCreateTpBankPaymentLinkMutation({
    onSuccess: (data) => {
      window.location.href = data.url;
    },
    onError: (error) => {
      if (
        [
          TpBankCode.BUSY,
          TpBankCode.INVALID_ACCOUNT_NAME,
          TpBankCode.NOTFOUND_ORDER_PAYMENT,
          TpBankCode.REFUND_ACCOUNT_NOT_APPROVED,
          TpBankCode.REFUND_ACCOUNT_NOT_FOUND,
        ].includes(error?.errorCode)
      ) {
        notification.error({
          ...getErrorNotificationSetting(),
          message: error?.message,
        });
      }

      dispatch(setCreateOrderErrorCode(error?.errorCode));

      router.push(`/dat-hang/dang-xu-ly/${orderCode}`);
    },
  });

  useEffect(() => {
    if (!orderCode) {
      return;
    }

    createTpBankPaymentLink(orderCode);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderCode]);

  return (
    <AtomBox
      py="1p5rem"
      px="3"
    >
      <AtomBox mb="2p5rem">
        <ColumnCenter>
          <Lottie
            loop
            animationData={LoadingJson}
            play
            style={{ width: 200, height: 200, margin: 'auto' }}
          />
        </ColumnCenter>
        <Box
          width={{
            md: '529px',
          }}
          mx="auto"
          borderRadius="12px"
          p="1rem"
          backgroundColor="white"
        >
          <ColumnCenter>
            <Text
              color="textLink"
              bold
              fontSize="20px"
              mb="0.5rem"
              textAlign="center"
            >
              Đang điều hướng qua trang thanh toán của TPBank
            </Text>

            <Text
              textAlign="center"
              mx={{
                _: '0',
                xl: '100px',
              }}
            >
              Vui lòng <b>không tắt trình duyệt</b> đến khi giao dịch hoàn tất.
            </Text>
          </ColumnCenter>
        </Box>
      </AtomBox>

      <AtomBox
        px={{
          xs: '3',
          lg: '0',
        }}
      >
        <RecentlyWatchedProducts
          slidesPerView={2}
          spaceBetween={12}
          breakpoints={{
            [breakpoints.xs]: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            [breakpoints.md]: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            [breakpoints.xl]: {
              slidesPerView: 6,
              spaceBetween: 16,
            },
          }}
        />
      </AtomBox>
    </AtomBox>
  );
};

export default RedirectToTpBank;
