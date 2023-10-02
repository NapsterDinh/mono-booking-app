import Container from '@customer-web/components/Container';
import { BankBIN } from '@customer-web/enums/index';
import { generateQRCode } from '@customer-web/helpers/Bank';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { useCopyToClipboard } from '@customer-web/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Box, Button, Column, ColumnCenter, Flex, Link, Row, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import {
  CheckCircleGradientGreenIcon,
  CheckCircleGradientOrangeIcon,
  DocumentCopyIcon,
} from '@tsu-org/ui-kit/components/Svg/Icons';
import { QRCode } from 'antd';
import NextLink from 'next/link';
import { FC, useEffect, useState } from 'react';

interface TransferInfoProps {
  order?: NhapThuocResponse.Orders.OrderDetail;
}

const attentions = [
  'Quý khách vui lòng thanh toán chuyển khoản đúng nội dung bên dưới.',
  'Quý khách vui lòng chọn chuyển khoản 247 để có thể nhanh chóng hoàn tất đơn.',
  'Nếu thanh toán sai thông tin có thể mất tối đa 7 ngày để xử lý.',
  'Nếu quý khách đã thanh toán mà chưa được ghi nhận, vui lòng liên hệ hotline 1800 6001 để được hỗ trợ.',
];

const TransferInfo: FC<TransferInfoProps> = ({ order }) => {
  const [_, copy] = useCopyToClipboard();
  const [qRCodeContent, setQRCodeContent] = useState('');

  useEffect(() => {
    setQRCodeContent(
      generateQRCode({
        bankBIN: BankBIN.VIETIN_BANK,
        accountNumber: order?.transferInfoData?.accountNumber,
        amount: order?.transferInfoData?.amount,
        content: order?.transferInfoData?.content,
      }),
    );
  }, [order?.transferInfoData?.accountNumber, order?.transferInfoData?.amount, order?.transferInfoData?.content]);

  const downloadQRCode = () => {
    const canvas = document.getElementById('bank-qr-code')?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = `${order?.orderCodeDisplay}-qrcode.png`;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  if (!order?.transferInfoData) {
    return null;
  }

  return (
    <Container>
      <AtomBox py="1p5rem">
        <AtomBox
          bgc="white"
          borderTopRadius="12px"
          borderBottom="1"
          p="3"
        >
          <ColumnCenter>
            <Text
              bold
              fontSize="24px"
            >
              Thanh toán chuyển khoản
            </Text>

            <RowFixed
              flexDirection={{
                xs: 'column',
                md: 'row',
              }}
            >
              <RowFixed>
                <Text
                  color="textSecondary"
                  fontWeight="500"
                >
                  Mã đơn hàng:{' '}
                  <Link
                    display="inline-block"
                    external
                    href={`/ttdh/${order?.orderCode}`}
                    textDecoration="underline"
                    hoverDecoration="underline"
                  >
                    {order?.orderCodeDisplay}
                  </Link>
                </Text>
              </RowFixed>

              <Box
                display={{
                  _: 'none',
                  md: 'block',
                }}
                backgroundColor="divider"
                height="16px"
                my="0"
                mx="0.5rem"
                width="1px"
              />

              {order?.isPaymentCompleted ? (
                <RowFixed gap="1">
                  <CheckCircleGradientGreenIcon />
                  <Text
                    small
                    color="success"
                  >
                    Đã thanh toán
                  </Text>
                </RowFixed>
              ) : (
                <RowFixed gap="1">
                  <CheckCircleGradientOrangeIcon />
                  <Text
                    small
                    color="textWarning"
                  >
                    Chờ thanh toán
                  </Text>
                </RowFixed>
              )}
            </RowFixed>
          </ColumnCenter>
        </AtomBox>

        <AtomBox
          bgc="white"
          borderBottomRadius="12px"
          p="3"
        >
          <Text
            fontWeight="500"
            mb="1rem"
          >
            Lưu ý khi thanh toán chuyển khoản
          </Text>

          <Column
            gap="0p75rem"
            mb="2"
          >
            {attentions.map((attention, index) => (
              <Row
                alignItems="flex-start"
                gap="2"
                key={attention}
              >
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  backgroundColor="backgroundGrey2"
                  borderRadius="circle"
                  width="20px"
                  height="20px"
                  fontSize="14px"
                  flexShrink="0"
                >
                  {index + 1}
                </Flex>

                <Text
                  color="textSecondary"
                  small
                >
                  {attention}
                </Text>
              </Row>
            ))}
          </Column>

          {qRCodeContent && (
            <ColumnCenter mb="3">
              <Text
                color="textSecondary"
                small
                mb="1rem"
              >
                Quét mã QR để thanh toán
              </Text>
              <AtomBox
                id="bank-qr-code"
                mb="3"
              >
                <QRCode
                  icon="/images/qr-icon.svg"
                  size={210}
                  iconSize={40}
                  value={qRCodeContent}
                />
              </AtomBox>

              <Button
                type="link"
                onClick={downloadQRCode}
              >
                <Text
                  small
                  color="link"
                >
                  Lưu ảnh
                </Text>
              </Button>
            </ColumnCenter>
          )}

          <AtomBox
            borderBottom="1"
            px="3"
            py="2"
          >
            <Text
              color="textTertiary"
              mb="0.25rem"
            >
              Hoặc chuyển khoản theo thông tin bên dưới
            </Text>
            <Text
              bold
              fontSize="18px"
            >
              {order?.transferInfoData?.bankName}
            </Text>
          </AtomBox>

          <AtomBox
            borderBottom="1"
            px="3"
            py="2"
          >
            <Text
              color="textTertiary"
              mb="0.25rem"
            >
              Tên tài khoản
            </Text>
            <Text
              bold
              fontSize="18px"
            >
              {order?.transferInfoData?.accountName}
            </Text>
          </AtomBox>

          <AtomBox
            borderBottom="1"
            px="3"
            py="2"
          >
            <Text
              color="textTertiary"
              mb="0.25rem"
            >
              Số tài khoản
            </Text>
            <RowBetween>
              <Text
                bold
                fontSize="18px"
              >
                {order?.transferInfoData?.accountNumber}
              </Text>

              <Button
                icon={<DocumentCopyIcon color="textLink" />}
                type="link"
                onClick={copy.bind(this, order?.transferInfoData?.accountNumber)}
              >
                <Text
                  color="textLink"
                  small
                  fontWeight="500"
                >
                  Sao chép
                </Text>
              </Button>
            </RowBetween>
          </AtomBox>

          <AtomBox
            borderBottom="1"
            px="3"
            py="2"
          >
            <Text
              color="textTertiary"
              mb="0.25rem"
            >
              Số tiền cần chuyển khoản
            </Text>
            <RowBetween>
              <Text
                bold
                fontSize="18px"
              >
                {convertPriceToVNDPrice(order?.transferInfoData?.amount)}
              </Text>
              <Button
                icon={<DocumentCopyIcon color="textLink" />}
                type="link"
                onClick={copy.bind(this, order?.transferInfoData?.amount)}
              >
                <Text
                  color="textLink"
                  small
                  fontWeight="500"
                >
                  Sao chép
                </Text>
              </Button>
            </RowBetween>
          </AtomBox>

          <AtomBox
            px="3"
            py="2"
          >
            <Text
              color="textTertiary"
              mb="0.25rem"
            >
              Nội dung chuyển khoản (Mã đơn hàng)
            </Text>
            <RowBetween>
              <Text
                bold
                fontSize="18px"
              >
                {order?.transferInfoData?.content}
              </Text>
              <Button
                icon={<DocumentCopyIcon color="textLink" />}
                type="link"
                onClick={copy.bind(this, order?.transferInfoData?.content)}
              >
                <Text
                  color="textLink"
                  small
                  fontWeight="500"
                >
                  Sao chép
                </Text>
              </Button>
            </RowBetween>
          </AtomBox>
          {/* 
          <AtomBox mt="3">
            <Text
              small
              color="textSecondary"
              textAlign="center"
            >
              Hãy thanh toán bằng cách chuyển khoản theo nội dung trên, <br />
              lưu ý chính xác{' '}
              <Text
                color="textLink"
                as="span"
                small
                fontWeight="500"
              >
                “Nội dung chuyển khoản”
              </Text>{' '}
              và{' '}
              <Text
                color="textLink"
                as="span"
                small
                fontWeight="500"
              >
                “Số tiền cần thanh toán”
              </Text>
              .<br /> Thanh toán sai thông tin có thể mất tối đa 7 ngày để xử lý.
            </Text>
          </AtomBox> */}

          <AtomBox my="3">
            <Row
              gap="0p75rem"
              justifyContent="center"
              flexDirection={{
                md: 'row',
                xs: 'column',
              }}
            >
              <NextLink href="/">
                <Button
                  scale="xl"
                  type="secondary"
                  width="190px"
                >
                  Trang chủ
                </Button>
              </NextLink>
              <NextLink href={`/ttdh/${order.orderCode}`}>
                <Button
                  scale="xl"
                  width="190px"
                >
                  Chi tiết đơn hàng
                </Button>
              </NextLink>
            </Row>
          </AtomBox>
        </AtomBox>
      </AtomBox>
    </Container>
  );
};

export default TransferInfo;
