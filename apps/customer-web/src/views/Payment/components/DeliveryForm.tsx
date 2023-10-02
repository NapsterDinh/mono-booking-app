import styled from '@emotion/styled';
import type { AtomBoxProps } from '@tsu-org/ui';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Column, Row, Text, TextArea } from '@tsu-org/ui-kit';
import { DeliveryManBrandIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Form, FormInstance, Radio } from 'antd';
import { FC, useEffect, useMemo } from 'react';
import Address from './Address';

const FormItem = styled(Form.Item)`
  margin-bottom: 0;
`;

type DeliveryFormProps = AtomBoxProps & {
  deliveryServices?: {
    serviceCode?: number;
    description?: string;
    serviceName?: string;
    estimatedDeliveryDate?: string;
    isEnable?: boolean;
  }[];
  formInstance: FormInstance;
  onFinish?: (payload: any) => void;
};

const DeliveryForm: FC<DeliveryFormProps> = ({ deliveryServices, formInstance, onFinish, ...rest }) => {
  const cityId = Form.useWatch('receiver_city', formInstance);
  const districtId = Form.useWatch('receiver_district', formInstance);
  const deliveryMethod = Form.useWatch(['delivery', 'method'], formInstance);

  const selectedDeliveryService = useMemo(() => {
    if (!deliveryMethod || !deliveryServices?.length) {
      return;
    }

    return deliveryServices.find((service) => service.serviceCode === deliveryMethod);
  }, [deliveryMethod, deliveryServices]);

  useEffect(() => {
    formInstance.setFieldValue('receiver_district', undefined);
  }, [cityId, formInstance]);

  useEffect(() => {
    formInstance.setFieldValue('receiver_ward', undefined);
  }, [districtId, formInstance]);

  return (
    <AtomBox {...rest}>
      <Text
        small
        fontWeight="500"
        mb="2"
      >
        Hình thức nhận hàng
      </Text>
      <Column gap="1">
        <AtomBox
          bgc="white"
          borderTopRadius="12px"
          px="3"
          py="3"
        >
          <Address />

          <AtomBox mb="0p75rem">
            <Text
              small
              fontWeight="500"
              mb="2"
            >
              Ghi chú giao hàng
            </Text>

            <FormItem
              className={sprinkles({
                mb: '0p75rem',
              })}
              name={['cart', 'note']}
            >
              <TextArea placeholder="Thêm ghi chú (ví dụ: Hãy gọi trước khi giao)" />
            </FormItem>
          </AtomBox>

          {deliveryServices?.length > 0 && (
            <AtomBox mb="0p75rem">
              <Row
                gap="3"
                alignItems="flex-start"
              >
                <AtomBox>
                  <DeliveryManBrandIcon />
                </AtomBox>

                <Column
                  gap="2"
                  flexGrow={1}
                >
                  <Text fontWeight="500">Hình thức vận chuyển</Text>
                  <FormItem
                    className={sprinkles({
                      mb: '0p75rem',
                    })}
                    name={['delivery', 'method']}
                  >
                    <Radio.Group>
                      {deliveryServices.map((service) => (
                        <Radio
                          key={service.serviceCode}
                          value={service.serviceCode}
                        >
                          {service.serviceName}
                        </Radio>
                      ))}
                    </Radio.Group>
                  </FormItem>

                  {selectedDeliveryService?.estimatedDeliveryDate ? (
                    <AtomBox
                      backgroundColor="backgroundGreySecondary"
                      borderRadius="8px"
                      p="3"
                    >
                      <Text color="textTertiary">{selectedDeliveryService?.description}</Text>
                    </AtomBox>
                  ) : null}
                </Column>
              </Row>
            </AtomBox>
          )}
        </AtomBox>
      </Column>
    </AtomBox>
  );
};

export default DeliveryForm;
