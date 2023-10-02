import { resetStateSubmitFormCredit } from '@customer-web/state/user/actions';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Divider, Image, Text } from '@tsu-org/ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { COMPONENT_TYPE_CREDIT_FORM } from '../constants';

const SuccessfulStep = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleRouteLoaded = () => {
      dispatch(resetStateSubmitFormCredit(COMPONENT_TYPE_CREDIT_FORM.DEFAULT_COMPONENT));
    };

    router.events.on('routeChangeComplete', handleRouteLoaded);
    return () => {
      router.events.off('routeChangeComplete', handleRouteLoaded);
    };
  }, [dispatch, router]);

  return (
    <Box
      margin={{
        xl: '1rem auto',
        lg: '1.25rem auto',
      }}
      width={{
        xl: '600px',
      }}
      p={'3rem'}
      borderRadius={'12px'}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Image
        alt="mascos-successful-submit"
        src="/images/success-mascos-img.png"
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="white"
        borderRadius="12px"
      >
        <AtomBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          px="5"
          pt="3"
        >
          <Text
            color="link"
            fontSize="20px"
            fontWeight={700}
            textAlign="center"
          >
            Đã gửi hồ sơ thành công
          </Text>
          <Text
            textAlign="center"
            mt="2"
          >
            nhapthuoc.com đã gửi hồ sơ của bạn qua TPBank, hồ sơ sẽ được xử lý trong 24 giờ làm việc
          </Text>
        </AtomBox>

        <Divider borderStyle="dashed" />
        <AtomBox
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          px="4"
          pb="4"
          gap="4"
        >
          <Button
            type="primary"
            scale="xl"
            width="40%"
          >
            <Link href="/ca-nhan/vay-thau-chi-tp-bank">Danh sách hồ sơ</Link>
          </Button>

          <Button
            type="secondary"
            scale="xl"
            width="40%"
          >
            <Link href="/">Về trang chủ</Link>
          </Button>
        </AtomBox>
      </Box>
    </Box>
  );
};

export default memo(SuccessfulStep);
