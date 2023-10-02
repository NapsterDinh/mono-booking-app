import styled from '@emotion/styled';
import { getErrorElement } from '@customer-web/helpers/Form';
import { useUpdateCustomerInvoiceMutation } from '@customer-web/hooks/mutations';
import { useCitiesQuery, useDistrictsQuery, useWardsQuery } from '@customer-web/hooks/queries';
import { useUserId } from '@customer-web/state/user/hooks';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Button, Input, Modal, Select, Text } from '@tsu-org/ui-kit';
import { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { Checkbox, Col, Form, Row, notification } from 'antd';
import { FC, useEffect } from 'react';

interface EditEInvoiceModalProps extends ModalProps {
  invoice?: NhapThuocResponse.Customers.Invoice;
  onOk?: () => void;
}

const StyledModal = styled(Modal)`
  &.ant-modal {
    .ant-modal-content {
      padding: 0;

      .ant-modal-header {
        margin-bottom: 0;
      }
      .ant-modal-title {
        border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
        padding: 1rem;
      }
      .ant-modal-body {
        background-color: ${({ theme }) => theme.colors.backgroundLightOrange};
        border-radius: 0px 0px 8px 8px;
      }
    }
  }
`;

const Footer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 0px 8px 8px;
  box-shadow:
    0px 0px 16px -4px rgba(0, 39, 102, 0.08),
    0px 0px 6px -2px rgba(0, 39, 102, 0.03);
  padding: 10px 20px 12px;
`;

const EditEInvoiceModal: FC<EditEInvoiceModalProps> = ({ invoice, onCancel, onOk, ...rest }) => {
  const [form] = Form.useForm();
  const userId = useUserId();
  const { mutateAsync: updateCustomerInvoice, isLoading } = useUpdateCustomerInvoiceMutation(userId);
  const provinceCode = Form.useWatch('provinceCode', form);
  const districtCode = Form.useWatch('districtCode', form);
  const { data: cities } = useCitiesQuery();
  const { data: districts } = useDistrictsQuery(provinceCode);
  const { data: wards } = useWardsQuery(districtCode);

  const handleFinish = async (values: any) => {
    if (invoice?.id) {
      await updateCustomerInvoice({
        id: invoice.id,
        phoneNumber: invoice.phoneNumber,
        buyerName: invoice.buyerName,
        comCode: invoice.comCode,
        ...values,
      });

      notification.success({
        message: 'Thay đổi thông tin hoá đơn thành công',
      });

      onOk && onOk();
    }
  };

  const handleCancel = (e: Parameters<ModalProps['onCancel']>[0]) => {
    onCancel && onCancel(e);

    form.resetFields();
  };

  const handleChangeCity = () => {
    form.setFieldValue('districtCode', undefined);
    form.setFieldValue('wardCode', undefined);
  };

  const handleChangeDistrict = () => {
    form.setFieldValue('wardCode', undefined);
  };

  useEffect(() => {
    if (invoice) {
      form.setFieldsValue({
        ...invoice,
      });
    }
  }, [form, invoice]);

  return (
    <StyledModal
      title={
        <Text
          bold
          fontSize="24px"
          textAlign="center"
        >
          {invoice?.id ? 'Cập nhật thông tin hoá đơn' : 'Thêm mới thông tin hóa đơn'}
        </Text>
      }
      footer={null}
      centered
      onCancel={handleCancel}
      {...rest}
    >
      <Form
        form={form}
        onFinish={handleFinish}
      >
        <AtomBox
          px="1p25rem"
          py="1rem"
        >
          <Text
            mb="1rem"
            color="textSecondary"
            fontWeight="500"
          >
            Thông tin công ty
          </Text>

          <Form.Item
            className={sprinkles({
              mb: '3',
            })}
            name="taxNumber"
            rules={[
              { required: true, message: getErrorElement('Vui lòng nhập mã số thuế.') },
              { min: 10, message: getErrorElement('Mã số thuế nhập tối thiểu 10 ký tự.') },
              {
                validator: async (_, value: string) => {
                  if (value && (value.startsWith(' ') || value.endsWith(' '))) {
                    throw new Error();
                  }
                },
                message: getErrorElement('Mã số thuế không được chứa khoảng trắng.'),
              },
            ]}
          >
            <Input
              allowClear
              placeholder="Mã số thuế"
              scale="lg"
            />
          </Form.Item>

          <Form.Item
            className={sprinkles({
              mb: '3',
            })}
            name="invoiceName"
            rules={[{ required: true, message: getErrorElement('Vui lòng nhập tên công ty.') }]}
          >
            <Input
              allowClear
              placeholder="Tên công ty"
              scale="lg"
            />
          </Form.Item>

          <Text
            mb="1rem"
            color="textSecondary"
            fontWeight="500"
          >
            Thông tin địa chỉ
          </Text>

          <Row gutter={[16, 16]}>
            <Col
              lg={{ span: 12 }}
              span={24}
            >
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="provinceCode"
                rules={[{ required: true, message: getErrorElement('Vui lòng chọn Tỉnh/Thành phố.') }]}
              >
                <Select
                  showSearch
                  scale="lg"
                  options={cities?.items?.map((item) => ({
                    value: item.sourceId,
                    label: item.sourceName,
                  }))}
                  filterOption={(inputValue, option) =>
                    option!.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                  placeholder="Chọn Tỉnh/Thành phố"
                  onChange={handleChangeCity}
                />
              </Form.Item>
            </Col>

            <Col
              lg={{ span: 12 }}
              span={24}
            >
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="districtCode"
                rules={[{ required: true, message: getErrorElement('Vui lòng chọn Quận/Huyện.') }]}
              >
                <Select
                  showSearch
                  scale="lg"
                  options={districts?.items?.map((item) => ({
                    value: item.sourceId,
                    label: item.sourceName,
                  }))}
                  filterOption={(inputValue, option) =>
                    option!.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                  placeholder="Chọn Quận/Huyện"
                  onChange={handleChangeDistrict}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="wardCode"
                rules={[{ required: true, message: getErrorElement('Vui lòng chọn Phường/Xã.') }]}
              >
                <Select
                  showSearch
                  scale="lg"
                  options={wards?.items?.map((item) => ({
                    value: item.sourceId,
                    label: item.sourceName,
                  }))}
                  filterOption={(inputValue, option) =>
                    option!.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                  }
                  placeholder="Chọn Phường/Xã"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="customerAddress"
                rules={[{ required: true, message: getErrorElement('Vui lòng nhập địa chỉ.') }]}
              >
                <Input
                  allowClear
                  placeholder="Nhập địa chỉ cụ thể"
                  scale="lg"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="email"
                rules={[{ type: 'email', message: getErrorElement('Email không hợp lệ.') }]}
              >
                <Input
                  allowClear
                  placeholder="Email (không bắt buộc)"
                  scale="lg"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="isPrimary"
                valuePropName="checked"
              >
                <Checkbox>Chọn làm hoá đơn mặc định</Checkbox>
              </Form.Item>
            </Col>
          </Row>
        </AtomBox>

        <Footer>
          <Button
            width="100%"
            scale="xl"
            htmlType="submit"
            loading={isLoading}
          >
            Xác nhận
          </Button>
        </Footer>
      </Form>
    </StyledModal>
  );
};

export default EditEInvoiceModal;
