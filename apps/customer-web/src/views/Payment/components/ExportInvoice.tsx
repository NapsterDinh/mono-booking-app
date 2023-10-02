import styled from '@emotion/styled';
import { AtomBox, AtomBoxProps } from '@tsu-org/ui';
import { Box, Divider, Row, RowBetween, RowFixed, Text } from '@tsu-org/ui-kit';
import { DocumentGradientOrangeIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Form, FormInstance, Radio } from 'antd';
import { FC } from 'react';

const FormItem = styled(Form.Item)`
  margin-bottom: 0;
`;

const ExportInvoice: FC<
  AtomBoxProps & {
    formInstance: FormInstance;
  }
> = ({ formInstance, ...rest }) => {
  const isExportVAT = Form.useWatch('isExportVAT', formInstance);

  return (
    <AtomBox {...rest}>
      <Text
        small
        fontWeight="500"
        mb="2"
      >
        Thông tin xuất hóa đơn
      </Text>

      <AtomBox
        bgc="white"
        px="3"
        py="0p75rem"
      >
        <RowBetween>
          <RowFixed gap="0p75rem">
            <DocumentGradientOrangeIcon
              width="16"
              height="20"
            />
            <Text>
              Bạn có muốn xuất hóa đơn VAT hay không?{' '}
              <Text
                as="span"
                color="colorError"
              >
                *
              </Text>
            </Text>
          </RowFixed>
          <FormItem name="isExportVAT">
            <Radio.Group>
              <Radio value={true}>Có</Radio>
              <Radio value={false}>Không</Radio>
            </Radio.Group>
          </FormItem>
        </RowBetween>

        {isExportVAT && (
          <>
            <Divider my="1rem" />

            <Box ml="28px">
              <RowBetween>
                <Row gap="0p75rem">
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="circle"
                    backgroundColor="backgroundGrey2"
                  />
                  <RowBetween>
                    <Text>
                      Bạn có muốn xuất hóa đơn giấy hay không?{' '}
                      <Text
                        as="span"
                        color="colorError"
                      >
                        *
                      </Text>
                    </Text>
                    <FormItem name="isPrintOrderInvoice">
                      <Radio.Group>
                        <Radio value={true}>Có</Radio>
                        <Radio value={false}>Không</Radio>
                      </Radio.Group>
                    </FormItem>
                  </RowBetween>
                </Row>
              </RowBetween>
            </Box>
          </>
        )}
      </AtomBox>
    </AtomBox>
  );
};

export default ExportInvoice;
