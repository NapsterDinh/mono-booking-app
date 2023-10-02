import styled from '@emotion/styled';
import { formatVNPhoneNumber } from '@customer-web/helpers/String';
import { useCreateCustomerAddressMutation } from '@customer-web/hooks/mutations';
import useUpdateCustomerAddressMutation from '@customer-web/hooks/mutations/useUpdateCustomerAddressMutation';
import { useCitiesQuery, useDistrictsQuery, useWardsQuery } from '@customer-web/hooks/queries';
import { useAppDispatch } from '@customer-web/state';
import { fetchCustomerAddressesByCustomerId } from '@customer-web/state/customer/actions';
import { useUserState } from '@customer-web/state/user/hooks';
import { VIETNAMESE_PHONE_NUMBER_REGEX } from '@tsu-org/constants';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Button, Input, Modal, ModalProps, Row, Select, Text } from '@tsu-org/ui-kit';
import { LocationOnBrandIcon, PersonBrandIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Row as AntdRow, Col, Form, Switch, notification } from 'antd';
import { FC, useEffect } from 'react';

interface EditAddressModalProps extends ModalProps {
  address?: NhapThuocResponse.Customers.Address;
  isFirstAddress?: boolean;
  onOk?: () => void;
  hasSelectDefaultAddressCheckbox?: boolean;
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

const EditAddressModal: FC<EditAddressModalProps> = ({
  address,
  isFirstAddress = false,
  hasSelectDefaultAddressCheckbox = true,
  onCancel,
  onOk,
  ...rest
}) => {
  const [form] = Form.useForm();
  const provinceCode = Form.useWatch('provinceCode', form);
  const districtCode = Form.useWatch('districtCode', form);
  const { data: cities } = useCitiesQuery();
  const { data: districts } = useDistrictsQuery(provinceCode);
  const { data: wards } = useWardsQuery(districtCode);
  const { mutateAsync: updateCustomerAddress, isLoading: updatingCustomerAddress } = useUpdateCustomerAddressMutation({
    onSuccess: () =>
      notification.success({
        message: 'Thay đổi thông tin nhận hàng thành công',
      }),
    onError: () =>
      notification.error({
        message: 'Thay đổi thông tin nhận hàng thất bại',
      }),
  });
  const { mutateAsync: createCustomerAddress, isLoading: creatingCustomerAddress } = useCreateCustomerAddressMutation({
    onSuccess: () =>
      notification.success({
        message: 'Thêm mới thông tin nhận hàng thành công',
      }),
    onError: () =>
      notification.error({
        message: 'Thêm mới thông tin nhận hàng thất bại',
      }),
  });
  const user = useUserState();
  const dispatch = useAppDispatch();

  const handleCancel = (e: Parameters<ModalProps['onCancel']>[0]) => {
    onCancel && onCancel(e);
  };

  const handleFinish = async (values: any) => {
    const payload = {
      customerId: user.id,
      isValid: true,
      ...values,
    };
    payload.isPrimary = payload.isPrimary ?? address?.isPrimary ?? false;

    if (isFirstAddress) {
      payload.isPrimary = true;
    }

    if (address?.id) {
      payload.addressId = address.id;

      await updateCustomerAddress(payload);
    } else {
      await createCustomerAddress(payload);
    }

    form.resetFields();
    dispatch(fetchCustomerAddressesByCustomerId(user.id!));
    onOk && onOk();
  };

  const handleChangeCity = () => {
    form.setFieldValue('districtCode', undefined);
    form.setFieldValue('wardCode', undefined);
  };

  const handleChangeDistrict = () => {
    form.setFieldValue('wardCode', undefined);
  };

  useEffect(() => {
    if (!rest.open) {
      form.resetFields();

      return;
    }

    if (address) {
      form.setFieldsValue({
        ...address,
        mobilePhone: formatVNPhoneNumber(address?.mobilePhone),
      });
    } else {
      form.setFieldsValue({
        name: user?.profile?.representer,
        mobilePhone: formatVNPhoneNumber(user?.profile?.mobilePhone),
      });
    }
  }, [address, form, rest.open, user?.profile?.representer, user?.profile?.mobilePhone]);

  return (
    <StyledModal
      title={
        <Text
          bold
          fontSize="24px"
          textAlign="center"
        >
          {address?.id ? 'Thay đổi thông tin nhận hàng' : 'Thêm mới thông tin nhận hàng'}
        </Text>
      }
      footer={null}
      width={800}
      onCancel={handleCancel}
      {...rest}
    >
      <Form
        form={form}
        onFinish={handleFinish}
      >
        <AtomBox p="3">
          <Row
            gap="3"
            mb="0p75rem"
          >
            <PersonBrandIcon />
            <Text color="textSecondary">Thông tin người nhận</Text>
          </Row>

          <AntdRow gutter={[12, 12]}>
            <Col
              md={{ span: 12 }}
              span={24}
            >
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="name"
                rules={[{ required: true, message: 'Vui lòng nhập họ và tên người nhận' }]}
              >
                <Input
                  placeholder="Họ và tên người nhận"
                  scale="lg"
                />
              </Form.Item>
            </Col>

            <Col
              md={{ span: 12 }}
              span={24}
            >
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="mobilePhone"
                rules={[
                  { required: true, message: 'Vui lòng nhập số điện thoại' },
                  {
                    pattern: VIETNAMESE_PHONE_NUMBER_REGEX,
                    message: 'Số điện thoại không đúng định dạng',
                  },
                ]}
              >
                <Input
                  placeholder="Số điện thoại"
                  scale="lg"
                />
              </Form.Item>
            </Col>
          </AntdRow>
        </AtomBox>

        <AtomBox p="3">
          <Row
            gap="3"
            mb="0p75rem"
          >
            <LocationOnBrandIcon />
            <Text color="textSecondary">Địa chỉ nhận hàng</Text>
          </Row>

          <AntdRow gutter={[12, 12]}>
            <Col
              md={{ span: 12 }}
              span={24}
            >
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="provinceCode"
                rules={[{ required: true, message: 'Vui lòng chọn Tỉnh/Thành phố' }]}
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
              md={{ span: 12 }}
              span={24}
            >
              <Form.Item
                className={sprinkles({
                  mb: '0',
                })}
                name="districtCode"
                rules={[{ required: true, message: 'Vui lòng chọn Quận/Huyện' }]}
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
                rules={[{ required: true, message: 'Vui lòng chọn Phường/Xã' }]}
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
                name="address"
                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ cụ thể' }]}
              >
                <Input
                  placeholder="Nhập địa chỉ cụ thể"
                  scale="lg"
                />
              </Form.Item>
            </Col>

            {!isFirstAddress && !address?.isPrimary && (
              <Col
                className={sprinkles({
                  alignItems: 'center',
                  display: 'flex',
                  gap: '1rem',
                })}
                span={24}
              >
                <Form.Item
                  className={sprinkles({
                    mb: '0',
                  })}
                  name="isPrimary"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>

                <Text>Chọn làm địa chỉ mặc định</Text>
              </Col>
            )}
          </AntdRow>
        </AtomBox>

        <Footer>
          <Button
            width="100%"
            scale="xl"
            htmlType="submit"
            loading={creatingCustomerAddress || updatingCustomerAddress}
          >
            Lưu
          </Button>
        </Footer>
      </Form>
    </StyledModal>
  );
};

export default EditAddressModal;
