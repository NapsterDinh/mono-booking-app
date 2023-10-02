import { UserStatus } from '@customer-web/enums/User';
import { getErrorElement } from '@customer-web/helpers/Form';
import { useCitiesQuery, useDistrictsQuery, useWardsQuery } from '@customer-web/hooks/queries';
import { useUserAddresses, useUserStatus } from '@customer-web/state/user/hooks';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Input, Select, Text } from '@tsu-org/ui-kit';
import { Col, Form, FormInstance, Row, Switch } from 'antd';
import { FC } from 'react';

const BusinessPremises: FC<{ form: FormInstance<any> }> = ({ form }) => {
  const provinceCode = Form.useWatch(['profile', 'provinceCode'], form);
  const districtCode = Form.useWatch(['profile', 'districtCode'], form);
  const { data: cities } = useCitiesQuery();
  const { data: districts } = useDistrictsQuery(provinceCode);
  const { data: wards } = useWardsQuery(districtCode);
  const userStatus = useUserStatus();
  const userAddresses = useUserAddresses();

  const handleChangeProvince = () => {
    form.setFieldValue(['profile', 'districtCode'], undefined);
    form.setFieldValue(['profile', 'wardCode'], undefined);
  };

  const handleChangeDistrict = () => {
    form.setFieldValue(['profile', 'wardCode'], undefined);
  };

  return (
    <Box>
      <Text
        as="h3"
        bold
        fontSize={'1.125rem'}
        paddingTop={'1.5rem'}
        mb="0.5rem"
      >
        Thông tin cơ sở kinh doanh
      </Text>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item
            name={['profile', 'fullName']}
            label="Tên cơ sở kinh doanh"
            rules={[
              { required: true, message: getErrorElement('Vui lòng nhập tên cơ sở kinh doanh.') },
              { min: 3, message: getErrorElement('Tên cơ sở kinh doanh nhập tối thiểu 3 ký tự.') },
            ]}
            className={sprinkles({ mb: '0' })}
          >
            <Input allowClear />
          </Form.Item>
        </Col>
        <Col
          md={{ span: 12 }}
          span={24}
        >
          <Form.Item
            label="Chọn Tỉnh/Thành phố"
            rules={[{ required: true, message: getErrorElement('Vui lòng chọn Tỉnh/Thành phố.') }]}
            name={['profile', 'provinceCode']}
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
            name={['profile', 'districtCode']}
            className={sprinkles({ mb: '0' })}
          >
            <Select
              showSearch
              options={districts?.items?.map((item) => ({
                value: item.sourceId,
                label: item.sourceName,
              }))}
              filterOption={(inputValue, option) =>
                option?.label?.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              onChange={handleChangeDistrict}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Chọn Phường/Xã"
            rules={[{ required: true, message: getErrorElement('Vui lòng chọn Phường/Xã.') }]}
            name={['profile', 'wardCode']}
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
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Địa chỉ (số nhà, tên đường)"
            name={['profile', 'customerAddress']}
            rules={[{ required: true, message: getErrorElement('Vui lòng nhập đầy đủ địa chỉ cụ thể.') }]}
            className={sprinkles({ mb: '0' })}
          >
            <Input allowClear />
          </Form.Item>
        </Col>
        {!userAddresses?.length && userStatus !== UserStatus.APPROVED && (
          <Col
            className={sprinkles({
              alignItems: 'center',
              display: 'flex',
              gap: '1rem',
            })}
            span={24}
          >
            <Form.Item
              name={['isCreatePrimaryAddress']}
              valuePropName="checked"
              className={sprinkles({ mb: '0' })}
            >
              <Switch />
            </Form.Item>

            <Text>Đặt làm địa chỉ mặc định</Text>
          </Col>
        )}
        <Col span={24}>
          <Form.Item
            label="Mã số thuế"
            name={['profile', 'taxNumber']}
            rules={[
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
            className={sprinkles({ mb: '0' })}
          >
            <Input allowClear />
          </Form.Item>
        </Col>
      </Row>
    </Box>
  );
};

export default BusinessPremises;
