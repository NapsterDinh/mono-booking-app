import { PaymentMethod as PaymentMethodEnum } from '@customer-web/enums/Payment';
import { usePaymentMethodsQuery } from '@customer-web/hooks/queries';
import useBankAccountInfoQuery from '@customer-web/hooks/queries/useBankAccountInfoQuery';
import { useUserId } from '@customer-web/state/user/hooks';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Column, Link, Row, Text } from '@tsu-org/ui-kit';
import { WarningCircleIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Form, FormInstance, Radio } from 'antd';
import type { FC } from 'react';

type PaymentMethodProps = AtomBoxProps & {
  formInstance: FormInstance;
};

const PaymentMethod: FC<PaymentMethodProps> = ({ formInstance, ...rest }) => {
  const { data: paymentMethods } = usePaymentMethodsQuery();
  const userId = useUserId();
  const { data: bankAccountInfo } = useBankAccountInfoQuery(userId);

  return (
    <AtomBox {...rest}>
      <Text
        mb="2"
        fontWeight="500"
        small
      >
        Chọn hình thức thanh toán
      </Text>

      <Form.Item
        name={['payment', 'method']}
        className={sprinkles({
          mb: '0',
        })}
      >
        <Radio.Group
          className={sprinkles({
            width: '100%',
          })}
        >
          <Column gap="2">
            {paymentMethods?.map((method) => (
              <Column
                bgc="white"
                borderRadius="12px"
                px="3"
                py="0p75rem"
                key={method.id}
              >
                <Radio
                  disabled={
                    method?.id === PaymentMethodEnum.TP_BANK_OVERDRAFT_LOAN && !bankAccountInfo?.returnBankAccount
                  }
                  value={method.id}
                >
                  <Text ml="1">{method.name}</Text>
                </Radio>

                {method?.id === PaymentMethodEnum.TP_BANK_OVERDRAFT_LOAN && !bankAccountInfo?.returnBankAccount && (
                  <Row
                    bgc="functionYellow2"
                    px="3"
                    py="2"
                    mt="2"
                    gap="1"
                  >
                    <WarningCircleIcon color="textWarning2" />
                    <Text small>
                      Chưa có thông tin tài khoản hoàn tiền. Vui lòng khai báo thông tin{' '}
                      <Link
                        small
                        display="inline-block"
                        href="/ca-nhan/vay-thau-chi-tp-bank?update-refund=true"
                        external
                      >
                        tại đây.
                      </Link>
                    </Text>
                  </Row>
                )}
              </Column>
            ))}
          </Column>
        </Radio.Group>
      </Form.Item>
    </AtomBox>
  );
};

export default PaymentMethod;
