import styled from '@emotion/styled';
import { ModalType } from '@customer-web/enums/index';
import { handleError } from '@customer-web/helpers/Error';
import { getErrorElement } from '@customer-web/helpers/Form';
import { setAccessToken, setRefreshToken } from '@customer-web/helpers/LocalStorage';
import { useRegisterMutation } from '@customer-web/hooks/mutations';
import {
  useBusinessTypesQuery,
  useCitiesQuery,
  useDistrictsQuery,
  useGendersQuery,
  useWardsQuery,
} from '@customer-web/hooks/queries';
import { useAppDispatch } from '@customer-web/state';
import { setNeedMergeCart } from '@customer-web/state/cache/actions';
import { useModal } from '@customer-web/state/global/hooks';
import { VIETNAMESE_PHONE_NUMBER_REGEX } from '@tsu-org/sdk/constants/regex';
import { AtomBox } from '@tsu-org/ui';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Box, Button, Image, Input, Link, Modal, Row, RowFixed, Select, Text } from '@tsu-org/ui-kit';
import type { ModalProps } from '@tsu-org/ui-kit/components/Modal/types';
import { AlertFilledIcon, EyeInvisibleOutlinedIcon, EyeOutlinedIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { useToggle } from 'ahooks';
import { Checkbox, Form } from 'antd';
import omit from 'lodash/omit';
import { Router, useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

const StyledModal = styled(Modal)`
  &.ant-modal {
    .ant-modal-content {
      padding: 0;

      .ant-modal-body {
        padding-top: 1rem;
      }
    }
  }
`;

const StyledFormItem = styled(Form.Item)`
  &.ant-form-item {
    .ant-form-item-explain-error {
      margin: 0.625rem 0 0.75rem;
    }

    .ant-form-item-control-input {
      min-height: auto;
    }
  }
`;

const RegisterModal: FC<ModalProps> = (props) => {
  const [form] = Form.useForm();
  const { openModal, closeModal } = useModal();
  const [showPassword, { toggle: toggleShowPassword }] = useToggle();
  const { mutateAsync: register, isLoading } = useRegisterMutation();
  const { data: genders } = useGendersQuery();
  const { data: businessTypes } = useBusinessTypesQuery();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const provinceCode = Form.useWatch('provinceCode', form);
  const districtCode = Form.useWatch('districtCode', form);
  const { data: cities } = useCitiesQuery();
  const { data: districts } = useDistrictsQuery(provinceCode);
  const { data: wards } = useWardsQuery(districtCode);

  const handleChangeCity = () => {
    form.setFieldValue('districtCode', undefined);
    form.setFieldValue('wardCode', undefined);
  };

  const handleChangeDistrict = () => {
    form.setFieldValue('wardCode', undefined);
  };

  const handleLoginButtonClicked = () => {
    openModal(ModalType.LOGIN);
  };

  const handleRegister = async (values: any) => {
    const formattedValues: any = omit(values, 'agreed');

    try {
      const response = await register(formattedValues);

      setAccessToken(response.ssoData.access_token);
      setRefreshToken(response.ssoData.refresh_token);
      dispatch(setNeedMergeCart(true));

      router.reload();
    } catch (error) {
      handleError({ error, defaultMsg: 'Đăng ký thất bại', form });
    }
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', closeModal);

    return () => {
      Router.events.off('routeChangeStart', closeModal);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!props.open) {
      form.resetFields();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.open]);

  return (
    <StyledModal
      width={806}
      centered
      footer={null}
      {...props}
    >
      <Box
        position="relative"
        pb={{
          lg: '5rem',
          _: '1rem',
        }}
        zIndex="1"
      >
        <Box px="2.75rem">
          <Text
            fontSize="20px"
            mb="0.5rem"
            textAlign="center"
            bold
          >
            Đăng ký
          </Text>
        </Box>

        <Form
          form={form}
          onFinish={handleRegister}
          scrollToFirstError
        >
          <Box
            maxHeight="500px"
            overflow="auto"
            px="2.75rem"
            mb="1rem"
            scrollBehavior="smooth"
          >
            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="gender"
              rules={[{ required: true, message: getErrorElement('Vui lòng chọn danh xưng.') }]}
            >
              <Select
                options={genders?.items?.map((gender) => ({
                  value: Number(gender.sourceId),
                  label: gender.sourceName,
                }))}
                placeholder="Danh xưng *"
                scale="md"
              />
            </StyledFormItem>
            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="name"
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập tên.') },
                { min: 2, message: getErrorElement('Vui lòng nhập tên từ 2 ký tự.') },
              ]}
            >
              <Input
                autoComplete="off"
                placeholder="Tên *"
                size="large"
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="fullName"
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập tên cơ sở kinh doanh.') },
                { min: 3, message: getErrorElement('Vui lòng nhập tên cơ sở kinh doanh từ 3 ký tự.') },
              ]}
            >
              <Input
                autoComplete="off"
                placeholder="Tên cơ sở kinh doanh *"
                size="large"
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="provinceCode"
              rules={[{ required: true, message: getErrorElement('Vui lòng chọn Tỉnh/Thành phố.') }]}
            >
              <Select
                showSearch
                scale="md"
                options={cities?.items?.map((item) => ({
                  value: item.sourceId,
                  label: item.sourceName,
                }))}
                filterOption={(inputValue, option) =>
                  option!.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                placeholder="Tỉnh/Thành phố *"
                onChange={handleChangeCity}
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="districtCode"
              rules={[{ required: true, message: getErrorElement('Vui lòng chọn Quận/Huyện.') }]}
            >
              <Select
                showSearch
                scale="md"
                options={districts?.items?.map((item) => ({
                  value: item.sourceId,
                  label: item.sourceName,
                }))}
                filterOption={(inputValue, option) =>
                  option!.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                placeholder="Quận/Huyện *"
                onChange={handleChangeDistrict}
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="wardCode"
              rules={[{ required: true, message: getErrorElement('Vui lòng chọn Phường/Xã.') }]}
            >
              <Select
                showSearch
                scale="md"
                options={wards?.items?.map((item) => ({
                  value: item.sourceId,
                  label: item.sourceName,
                }))}
                filterOption={(inputValue, option) =>
                  option!.label.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                placeholder="Phường/Xã *"
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="customerAddress"
              rules={[{ required: true, message: getErrorElement('Vui lòng nhập địa chỉ.') }]}
            >
              <Input
                placeholder="Địa chỉ (số nhà, tên đường) *"
                scale="md"
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="phone"
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập số điện thoại.') },
                {
                  pattern: VIETNAMESE_PHONE_NUMBER_REGEX,
                  message: getErrorElement('Số điện thoại không đúng định dạng.'),
                },
              ]}
            >
              <Input
                autoComplete="off"
                placeholder="Số điện thoại *"
                size="large"
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="email"
              rules={[{ type: 'email', message: getErrorElement('Email không đúng định dạng.') }]}
            >
              <Input
                autoComplete="off"
                placeholder="Địa chỉ email"
                size="large"
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="password"
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập mật khẩu.') },
                { min: 6, message: getErrorElement('Mật khẩu tối thiểu 6 ký tự.') },
                { max: 16, message: getErrorElement('Mật khẩu tối đa 16 ký tự.') },
              ]}
            >
              <Input
                autoComplete="new-password"
                placeholder="Mật khẩu *"
                size="large"
                type={showPassword ? 'text' : 'password'}
                suffix={
                  <RowFixed gap="0p75rem">
                    <AlertFilledIcon color="textTertiary" />
                    <Button
                      htmlType="button"
                      type="link"
                      scale="lg"
                      p="0"
                      height="auto"
                      onClick={toggleShowPassword}
                      // Prevent focused state lost
                      // https://github.com/ant-design/ant-design/issues/15173
                      onMouseDown={(e) => e.preventDefault()}
                      // Prevent caret position change
                      // https://github.com/ant-design/ant-design/issues/23524
                      onMouseUp={(e) => e.preventDefault()}
                    >
                      {showPassword ? (
                        <EyeOutlinedIcon color="textTertiary" />
                      ) : (
                        <EyeInvisibleOutlinedIcon color="textTertiary" />
                      )}
                    </Button>
                  </RowFixed>
                }
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="businessType"
              rules={[{ required: true, message: getErrorElement('Vui lòng chọn hình thức kinh doanh.') }]}
            >
              <Select
                options={businessTypes?.items?.map((businessType) => ({
                  value: Number(businessType.sourceId),
                  label: businessType.sourceName,
                }))}
                placeholder="Hình thức kinh doanh *"
                scale="md"
              />
            </StyledFormItem>

            <StyledFormItem
              className={sprinkles({
                mb: '3',
              })}
              name="referral"
            >
              <Input
                placeholder="Mã giới thiệu"
                size="large"
              />
            </StyledFormItem>

            <Box
              backgroundColor="backgroundGrey2"
              p="12px"
              borderRadius="4px"
            >
              <StyledFormItem
                className={sprinkles({
                  mb: '0',
                })}
                name="agreed"
                rules={[{ required: true, message: getErrorElement('Vui lòng đồng ý các điều khoản điều kiện.') }]}
              >
                <Checkbox.Group
                  className={sprinkles({
                    width: '100%',
                  })}
                >
                  <Row
                    alignItems="flex-start"
                    gap="2"
                    flexWrap="nowrap"
                  >
                    <Checkbox />
                    <Box flexGrow="1">
                      <Text
                        as="span"
                        color="textSecondary"
                        small
                      >
                        Tôi đã đọc và đồng ý với{' '}
                      </Text>
                      <Link
                        display="inline-block"
                        href="/dieu-khoan-su-dung"
                        external
                      >
                        <Text
                          as="span"
                          color="textLink"
                          small
                          fontWeight="500"
                        >
                          Điều khoản sử dụng
                        </Text>
                      </Link>{' '}
                      và{' '}
                      <Link
                        display="inline-block"
                        href="/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan"
                        external
                      >
                        <Text
                          as="span"
                          color="textLink"
                          small
                          fontWeight="500"
                        >
                          Chính sách thu thập và xử lý dữ liệu cá nhân
                        </Text>
                      </Link>
                    </Box>
                  </Row>
                </Checkbox.Group>
              </StyledFormItem>
            </Box>
          </Box>

          <Box px="2.75rem">
            <AtomBox mb="3">
              <Button
                htmlType="submit"
                scale="xl"
                width="100%"
                loading={isLoading}
              >
                Tạo tài khoản
              </Button>
            </AtomBox>

            <Row
              justifyContent="center"
              gap="1"
              flexDirection={{
                xs: 'column',
                md: 'row',
              }}
            >
              <Text
                color="textSecondary"
                small
              >
                Bạn đã có tài khoản? Vui lòng
              </Text>
              <Button
                htmlType="button"
                type="link"
                onClick={handleLoginButtonClicked}
              >
                <Text
                  color="textLink"
                  small
                  fontWeight="500"
                >
                  Đăng nhập tại đây
                </Text>
              </Button>
            </Row>
          </Box>
        </Form>

        <Box
          position="absolute"
          left="0"
          right="0"
          bottom="0"
          zIndex="-1"
        >
          <Image
            alt=""
            src="/images/auth-modal-footer-background.svg"
            width="100%"
          />
        </Box>
      </Box>
    </StyledModal>
  );
};

export default RegisterModal;
