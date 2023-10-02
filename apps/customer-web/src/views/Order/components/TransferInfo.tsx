import { BankBIN } from '@customer-web/enums/index';
import { generateQRCode } from '@customer-web/helpers/Bank';
import { convertPriceToVNDPrice } from '@customer-web/helpers/Utils';
import { useCopyToClipboard } from '@customer-web/hooks';
import { AtomBox } from '@tsu-org/ui';
import { Button, ColumnCenter, Divider, RowBetween, Text } from '@tsu-org/ui-kit';
import { DocumentCopyIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { QRCode } from 'antd';
import { FC, useEffect, useState } from 'react';

const TransferInfo: FC<{ order?: Components.OrderDetail.Data; transfer?: Components.OrderDetail.Data['transfer'] }> = ({
  order,
  transfer,
}) => {
  const [_, copy] = useCopyToClipboard();
  const [qRCodeContent, setQRCodeContent] = useState('');

  const downloadQRCode = () => {
    const canvas = document.getElementById('bank-qr-code')?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
      const url = canvas.toDataURL();
      const a = document.createElement('a');
      a.download = `${order?.orderDelivery?.orderCodeDisplay}-qrcode.png`;
      a.href = url;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  useEffect(() => {
    setQRCodeContent(
      generateQRCode({
        bankBIN: BankBIN.VIETIN_BANK,
        accountNumber: transfer?.accountNumber,
        amount: transfer?.amount,
        content: transfer?.content,
      }),
    );
  }, [transfer?.accountNumber, transfer?.amount, transfer?.content]);

  if (!transfer) {
    return;
  }

  return (
    <AtomBox
      bgc="white"
      p="3"
    >
      <Text fontWeight="500">Thanh toán chuyển khoản</Text>

      <Divider my="0.5rem" />

      <Text
        color="colorError"
        small
        mb="0.5rem"
      >
        Vui lòng chuyển khoản theo thông tin bên dưới nếu bạn chưa thanh toán đơn hàng:
      </Text>

      <Text
        color="textTertiary"
        mb="0.25rem"
      >
        Ngân hàng
      </Text>

      <Text
        fontSize="18px"
        bold
      >
        {transfer.bankName}
      </Text>

      <Divider my="0.5rem" />

      <Text
        color="textTertiary"
        mb="0.25rem"
      >
        Tên tài khoản
      </Text>

      <Text
        fontSize="18px"
        bold
      >
        {transfer.accountName}
      </Text>

      <Divider my="0.5rem" />

      <RowBetween>
        <Text
          color="textTertiary"
          mb="0.25rem"
        >
          Số tài khoản
        </Text>

        <Button
          icon={<DocumentCopyIcon color="textLink" />}
          type="link"
          onClick={copy.bind(this, transfer.accountNumber)}
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

      <Text
        fontSize="18px"
        bold
      >
        {transfer.accountNumber}
      </Text>

      <Divider my="0.5rem" />

      <RowBetween>
        <Text
          color="textTertiary"
          mb="0.25rem"
        >
          Số tiền cần chuyển khoản
        </Text>

        <Button
          icon={<DocumentCopyIcon color="textLink" />}
          type="link"
          onClick={copy.bind(this, transfer.amount)}
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

      <Text
        fontSize="18px"
        bold
      >
        {convertPriceToVNDPrice(transfer.amount)}
      </Text>

      <Divider my="0.5rem" />

      <RowBetween>
        <Text
          color="textTertiary"
          mb="0.25rem"
        >
          Nội dung chuyển khoản
        </Text>

        <Button
          icon={<DocumentCopyIcon color="textLink" />}
          type="link"
          onClick={copy.bind(this, transfer.content)}
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

      <Text
        fontSize="18px"
        bold
        mb="1rem"
      >
        {transfer.content}
      </Text>

      {/* <Text
        small
        color="textSecondary"
        mb="0.5rem"
      >
        Hãy thanh toán bằng cách chuyển khoản theo nội dung trên, lưu ý chính xác{' '}
        <Text
          as="span"
          color="textLink"
          small
          fontWeight="500"
        >
          “Nội dung chuyển khoản”
        </Text>{' '}
        và{' '}
        <Text
          as="span"
          color="textLink"
          small
          fontWeight="500"
        >
          “Số tiền cần chuyển khoản”.
        </Text>
        <br />
        Thanh toán sai thông tin có thể mất tối đa 7 ngày để xử lý.
      </Text> */}

      {qRCodeContent && (
        <>
          <Text
            small
            mb="0.5rem"
            textAlign="center"
          >
            Hoặc quét mã QR để thanh toán
          </Text>

          <ColumnCenter>
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
        </>
      )}
    </AtomBox>
  );
};

export default TransferInfo;
