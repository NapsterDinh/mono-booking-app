import { TpBankCode } from '@customer-web/enums/ErrorCode';
import { resetStateSubmitFormCredit } from '@customer-web/state/user/actions';
import { useSubmitedForm } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Divider, Image, Link, Text } from '@tsu-org/ui-kit';
import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { COMPONENT_TYPE_CREDIT_FORM } from '../constants';

const FailedStep = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const submitedForm = useSubmitedForm();

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
        src="/images/failed-mascos-img.png"
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="white"
        borderRadius="12px"
        px="3"
      >
        <AtomBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          pt="3"
        >
          <Text
            color="link"
            fontSize="20px"
            fontWeight={700}
            textAlign="center"
            mb="8px"
          >
            Đã gửi hồ sơ thất bại
          </Text>

          {submitedForm.errorCode === TpBankCode.BUSY ? (
            <Text>
              Xin lỗi Quý khách hệ thống TPBank đang bảo trì. Vui lòng liên hệ tổng đài{' '}
              <Link
                display="inline-block"
                href="tel:18006001"
              >
                1800 6001 (Nhánh 2)
              </Link>{' '}
              để được hỗ trợ.
            </Text>
          ) : (
            !!submitedForm.message && (
              <Text
                textAlign="center"
                color="textSecondary"
                mt="2"
              >
                {submitedForm.message}
              </Text>
            )
          )}
        </AtomBox>

        <Divider borderStyle="dashed" />
        <AtomBox
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          px="3"
          pb="3"
          gap="4"
        >
          <Link
            className={sprinkles({
              width: '100%',
            })}
            href="/ca-nhan/vay-thau-chi-tp-bank"
          >
            <Button
              type="primary"
              scale="xl"
              width="100%"
              minWidth={{
                md: '416px',
              }}
            >
              Về danh sách hồ sơ
            </Button>
          </Link>
        </AtomBox>
      </Box>
    </Box>
  );
};

export default memo(FailedStep);
