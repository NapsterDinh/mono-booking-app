import RecentlyWatchedProducts from '@customer-web/components/RecentlyWatchedProducts';
import { PaymentMethod } from '@customer-web/enums/Payment';
import { AtomBox, breakpoints } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Column, ColumnCenter, Image, Row, RowFixed, Text } from '@tsu-org/ui-kit';
import { CheckCircleGradientGreenIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import Link from 'next/link';

const Success = ({
  orderCode,
  isPaymentCompleted,
  paymentMethodDefault,
  paymentMethodAvatar,
  paymentMethodLabel,
}: {
  orderCode?: string;
  isPaymentCompleted?: boolean;
  paymentMethodDefault?: number[];
  paymentMethodAvatar?: string[];
  paymentMethodLabel?: string[];
}) => {
  return (
    <AtomBox py="1p5rem">
      <AtomBox mb="2p5rem">
        <ColumnCenter>
          <Image
            alt=""
            src="/images/mascot-congrat.svg"
          />
        </ColumnCenter>
        <Box
          width={{
            xl: '31vw',
            lg: '41vw',
            md: '48vw',
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
            >
              Ghi nhận đơn hàng thành công
            </Text>
            <Text>nhapthuoc.com sẽ liên hệ bạn trong thời gian sớm nhất.</Text>

            <Box
              border="1px dashed #E4E8ED"
              width="100%"
              my="0.75rem"
            />

            {paymentMethodDefault?.map((paymentMethod, index) => (
              <Row
                gap="0p75rem"
                mb="3"
                key={index}
              >
                <Image
                  alt=""
                  src={paymentMethodAvatar?.[index]}
                  width="40px"
                  height="40px"
                />
                <Column gap="1">
                  <Text small>{paymentMethodLabel?.[index]}</Text>
                  {paymentMethod === PaymentMethod.TP_BANK_OVERDRAFT_LOAN && isPaymentCompleted && (
                    <RowFixed gap="1">
                      <CheckCircleGradientGreenIcon />
                      <Text
                        color="success"
                        small
                      >
                        Đã thanh toán
                      </Text>
                    </RowFixed>
                  )}
                </Column>
              </Row>
            ))}

            <Row
              gap="3"
              flexDirection={{
                md: 'row',
                xs: 'column',
              }}
            >
              <Link
                className={sprinkles({
                  width: '1of2',
                })}
                href="/"
              >
                <Button
                  type="secondary"
                  scale="xl"
                  width="100%"
                >
                  Về trang chủ
                </Button>
              </Link>
              <Link
                className={sprinkles({
                  width: '1of2',
                })}
                href={`/ttdh/${orderCode}`}
              >
                <Button
                  scale="xl"
                  width="100%"
                >
                  Chi tiết đơn hàng
                </Button>
              </Link>
            </Row>
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

export default Success;
