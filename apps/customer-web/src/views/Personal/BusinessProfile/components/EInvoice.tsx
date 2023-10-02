import { UserStatus } from '@customer-web/enums/User';
import { getErrorElement } from '@customer-web/helpers/Form';
import { useCitiesQuery, useDistrictsQuery, useWardsQuery } from '@customer-web/hooks/queries';
import { useUserStatus } from '@customer-web/state/user/hooks';
import { VIETNAMESE_PHONE_NUMBER_REGEX } from '@tsu-org/constants';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Input, RowFixed, Select, Switch, Text } from '@tsu-org/ui-kit';
import { Col, Form, FormInstance, Row } from 'antd';
import { FC } from 'react';

const EInvoice: FC<{ form: FormInstance<any> }> = ({ form }) => {
  const provinceCode = Form.useWatch(['invoice', 'provinceCode'], form);
  const districtCode = Form.useWatch(['invoice', 'districtCode'], form);
  const requestedExportEInvoice = Form.useWatch('requested_export_e_invoice', form);
  const { data: cities } = useCitiesQuery();
  const { data: districts } = useDistrictsQuery(provinceCode);
  const { data: wards } = useWardsQuery(districtCode);
  const userStatus = useUserStatus();

  const handleChangeProvince = () => {
    form.setFieldValue(['invoice', 'districtCode'], undefined);
    form.setFieldValue(['invoice', 'wardCode'], undefined);
  };

  const handleChangeDistrict = () => {
    form.setFieldValue(['invoice', 'wardCode'], undefined);
  };

  return (
    <Box>
      <Box
        pt="1.5rem"
        mb="0.5rem"
      >
        <RowFixed gap="2">
          <Form.Item
            className={sprinkles({ mb: '0' })}
            name="requested_export_e_invoice"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>

          <Text
            as="h3"
            bold
            fontSize={'1.125rem'}
          >
            Thông tin xuất hóa đơn
          </Text>
        </RowFixed>
      </Box>
      {requestedExportEInvoice && (
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              name={['invoice', 'id']}
              className={sprinkles({ display: 'none' })}
            >
              <Input disabled />
            </Form.Item>
          </Col>
          <Col
            md={{ span: 12 }}
            span={24}
          >
            <Form.Item
              name={['invoice', 'invoiceName']}
              label="Tên đơn vị mua hàng"
              rules={[{ required: true, message: getErrorElement('Vui lòng nhập tên đơn vị mua hàng.') }]}
              className={sprinkles({ mb: '0' })}
            >
              <Input
                allowClear
                disabled={userStatus === UserStatus.APPROVED ? true : false}
              />
            </Form.Item>
          </Col>
          <Col
            md={{ span: 12 }}
            span={24}
          >
            <Form.Item
              name={['invoice', 'buyerName']}
              label="Tên người mua hàng"
              rules={[{ required: true, message: getErrorElement('Vui lòng nhập tên người mua hàng.') }]}
              className={sprinkles({ mb: '0' })}
            >
              <Input
                allowClear
                disabled={userStatus === UserStatus.APPROVED ? true : false}
              />
            </Form.Item>
          </Col>
          <Col
            md={{ span: 12 }}
            span={24}
          >
            <Form.Item
              name={['invoice', 'taxNumber']}
              label="Mã số thuế"
              className={sprinkles({ mb: '0' })}
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
                disabled={userStatus === UserStatus.APPROVED ? true : false}
              />
            </Form.Item>
          </Col>
          <Col
            md={{ span: 12 }}
            span={24}
          >
            <Form.Item
              name={['invoice', 'phoneNumber']}
              label="Số điện thoại"
              className={sprinkles({ mb: '0' })}
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập số điện thoại') },
                {
                  pattern: VIETNAMESE_PHONE_NUMBER_REGEX,
                  message: 'Số điện thoại không đúng định dạng',
                },
              ]}
            >
              <Input
                allowClear
                disabled={userStatus === UserStatus.APPROVED ? true : false}
              />
            </Form.Item>
          </Col>
          <Col
            md={{ span: 12 }}
            span={24}
          >
            <Form.Item
              label="Chọn Tỉnh/Thành phố"
              rules={[{ required: true, message: getErrorElement('Vui lòng chọn Tỉnh/Thành phố.') }]}
              name={['invoice', 'provinceCode']}
              className={sprinkles({ mb: '0' })}
            >
              <Select
                showSearch
                options={cities?.items?.map((item) => ({
                  value: item.sourceId,
                  label: item.sourceName,
                }))}
                filterOption={(inputValue, option) =>
                  option!.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                disabled={userStatus === UserStatus.APPROVED ? true : false}
                onChange={handleChangeProvince}
              />
            </Form.Item>
          </Col>
          <Col
            md={{ span: 12 }}
            span={24}
          >
            <Form.Item
              label="Chọn Quận/Huyện"
              rules={[{ required: true, message: getErrorElement('Vui lòng chọn Quận/Huyện.') }]}
              name={['invoice', 'districtCode']}
              className={sprinkles({ mb: '0' })}
            >
              <Select
                showSearch
                options={districts?.items?.map((item) => ({
                  value: item.sourceId,
                  label: item.sourceName,
                }))}
                filterOption={(inputValue, option) =>
                  option!.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                disabled={userStatus === UserStatus.APPROVED ? true : false}
                onChange={handleChangeDistrict}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Chọn Phường/Xã"
              rules={[{ required: true, message: getErrorElement('Vui lòng chọn Phường/Xã.') }]}
              name={['invoice', 'wardCode']}
              className={sprinkles({ mb: '0' })}
            >
              <Select
                showSearch
                options={wards?.items?.map((item) => ({
                  value: item.sourceId,
                  label: item.sourceName,
                }))}
                filterOption={(inputValue, option) =>
                  option!.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                disabled={userStatus === UserStatus.APPROVED ? true : false}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Nhập địa chỉ (số nhà, tên đường)"
              rules={[{ required: true, message: getErrorElement('Vui lòng nhập đầy đủ địa chỉ cụ thể.') }]}
              name={['invoice', 'customerAddress']}
              className={sprinkles({ mb: '0' })}
            >
              <Input
                allowClear
                disabled={userStatus === UserStatus.APPROVED ? true : false}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Email nhận hóa đơn"
              name={['invoice', 'email']}
              rules={[
                { required: true, message: getErrorElement('Vui lòng Nhập email.') },
                { type: 'email', message: getErrorElement('Email không đúng định dạng.') },
              ]}
              className={sprinkles({ mb: '0' })}
            >
              <Input
                allowClear
                disabled={userStatus === UserStatus.APPROVED ? true : false}
              />
            </Form.Item>
          </Col>
        </Row>
      )}
    </Box>
  );
};

export default EInvoice;
