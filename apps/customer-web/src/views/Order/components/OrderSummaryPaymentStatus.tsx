import { PaymentStatus } from '@customer-web/enums/Payment';
import { Text } from '@tsu-org/ui-kit';
import { CheckCircleGradientGreenIcon, ExclaimationPointIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { FC } from 'react';

const OrderSummaryPaymentStatus: FC<{
  paymentStatus?: PaymentStatus;
  paymentStatusLabel?: string;
}> = ({ paymentStatus, paymentStatusLabel }) => {
  if (paymentStatus === PaymentStatus.UNPAID) {
    return (
      <>
        <ExclaimationPointIcon
          width="13"
          height="13"
          color="textWarning2"
        />
        <Text
          small
          color="textWarning2"
        >
          {paymentStatusLabel}
        </Text>
      </>
    );
  }

  if (paymentStatus === PaymentStatus.PAID) {
    return (
      <>
        <CheckCircleGradientGreenIcon
          width="13"
          height="13"
          color="colorError"
        />
        <Text
          small
          color="success"
        >
          {paymentStatusLabel}
        </Text>
      </>
    );
  }

  return (
    <>
      <Text small>{paymentStatusLabel}</Text>
    </>
  );
};

export default OrderSummaryPaymentStatus;
