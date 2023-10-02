import FailureSendOtpModal from '@customer-web/components/Modal/FailureSendOtpModal';
import OTPModal from '@customer-web/components/Modal/OTPModal/OTPModal';
import RemindBeforeLeaveModal from '@customer-web/components/Modal/RemindBeforeLeaveModal';
import { ModalType } from '@customer-web/enums/index';
import { getErrorElement } from '@customer-web/helpers/Form';
import { useAppDispatch } from '@customer-web/state';
import { useModal } from '@customer-web/state/global/hooks';
import { submitDeptTpbankUser } from '@customer-web/state/user/actions';
import { useGetErrorSendOTP, useUserId, useUserState } from '@customer-web/state/user/hooks';
import { VIETNAMESE_PHONE_NUMBER_REGEX } from '@tsu-org/constants';
import { Box, Button, FloatInput, FloatInputNumber, Text } from '@tsu-org/ui-kit';
import { ExclaimationPointIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { Checkbox, Form, Row, Tooltip } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const LoanFormRegister = () => {
  const [form] = Form.useForm();
  const user = useUserState();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [target, setTarget] = useState('');
  const [checkFormFields, setCheckFormFields] = useState(true);
  const { isOpenModal, type, closeModal, openModal } = useModal();
  const errorOTP = useGetErrorSendOTP();
  const customerId = useUserId();

  const mobilePhone = Form.useWatch('phone', form);

  const onFinishForm = () => {
    openModal(ModalType.REQUEST_OTP);
  };

  const onBackWhenLeavePage = () => {
    setCheckFormFields(false);
    closeModal();
    router.push(target);
  };

  // const handleOpenDecree13 = () => {
  //   openModal(ModalType.DECREE_13);
  // };

  const handleSubmitFormTpbank = async (values: any) => {
    values = {
      ...values,
      ...form.getFieldsValue(),
    };

    const payload = {
      param: {
        customerId,
      },
      body: {
        customerName: values?.name,
        identifyNumber: values?.uid,
        phoneNumber: values?.phone,
        email: values?.email,
        limitRangeOverDraft: Number(values?.amount),
        otp: values?.otp,
      },
    };

    await dispatch(submitDeptTpbankUser(payload))?.unwrap();
  };

  useEffect(() => {
    form.setFieldsValue({
      profile: {
        fullName: user?.profile?.fullName,
        taxNumber: user?.profile?.taxNumber,
      },
    });
  }, [dispatch, form, user?.profile]);

  useEffect(() => {
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      return;
    };

    const handleBrowseAway = (target: string) => {
      if (
        !checkFormFields ||
        !form.isFieldsTouched(['name', 'uid', 'phone', 'email', 'accountNumber', 'agreedToTerms'])
      ) {
        return;
      }

      setTarget(target);

      if (!errorOTP?.headerMessage) {
        openModal(ModalType.REMIND_BEFORE_LEAVE);
        router.events.emit('routeChangeError');
        throw 'routeChange aborted.';
      }
    };
    window.addEventListener('beforeunload', handleWindowClose);
    router.events.on('routeChangeStart', handleBrowseAway);
    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
      router.events.off('routeChangeStart', handleBrowseAway);
    };
  }, [checkFormFields, errorOTP, form, openModal, router.events]);

  return (
    <>
      <Box
        backgroundColor="white"
        margin={{
          xl: '1rem auto',
          lg: '1.25rem auto',
        }}
        width={{
          xl: '900px',
        }}
        p="1.25rem"
        borderRadius="12px"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          bold
          mb="0.5rem"
          fontSize="20px"
          textAlign="center"
        >
          Đăng ký vay thấu chi online qua TPBank
        </Text>

        <Text
          textAlign="center"
          color="textSecondary"
          small
          mb="1.5rem"
        >
          Quý khách vui lòng điền đầy đủ thông tin bên dưới để xét duyệt vay thấu chi
        </Text>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinishForm}
          scrollToFirstError
        >
          <div>
            <Text
              bold
              fontSize="18px"
              mb="0.75rem"
            >
              Thông tin khách hàng
            </Text>

            <Form.Item
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập họ và tên khách hàng vay vốn.') },
                { min: 6, message: getErrorElement('Họ và tên khách hàng vay vốn tối thiểu 6 ký tự.') },
                { max: 200, message: getErrorElement('Họ và tên khách hàng vay vốn tối đa 200 ký tự.') },
                {
                  validator: async (_, value: string) => {
                    if (value && (value.startsWith(' ') || value.endsWith(' '))) {
                      throw new Error();
                    }
                  },
                  message: getErrorElement('Họ và tên khách hàng vay vốn không hợp lệ.'),
                },
              ]}
              name="name"
            >
              <FloatInput label="Họ và tên khách hàng vay vốn" />
            </Form.Item>

            <Form.Item
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập số CMND/CCCD/Hộ chiếu.') },
                { min: 8, message: getErrorElement('Số CMND/CCCD/Hộ chiếu tối thiểu 8 ký tự.') },
                { max: 20, message: getErrorElement('Số CMND/CCCD/Hộ chiếu tối đa 20 ký tự.') },
                {
                  validator: async (_, value: string) => {
                    if (value && (value.startsWith(' ') || value.endsWith(' '))) {
                      throw new Error();
                    }
                  },
                  message: getErrorElement('Số CMND/CCCD/Hộ chiếu không hợp lệ.'),
                },
              ]}
              normalize={(str) => str?.trim()}
              name="uid"
            >
              <FloatInput label="Số CMND/CCCD/Hộ chiếu" />
            </Form.Item>

            <Form.Item
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập số điện thoại khách hàng vay vốn.') },
                {
                  pattern: VIETNAMESE_PHONE_NUMBER_REGEX,
                  message: getErrorElement('Số điện thoại không đúng định dạng.'),
                },
              ]}
              name="phone"
            >
              <FloatInput label="Số điện thoại khách hàng vay vốn" />
            </Form.Item>

            <Form.Item
              rules={[
                { type: 'email', message: getErrorElement('Email không đúng định dạng.') },
                { max: 100, message: getErrorElement('Email tối đa 100 ký tự.') },
              ]}
              name="email"
            >
              <FloatInput label="Địa chỉ email" />
            </Form.Item>
          </div>

          <div>
            <Text
              bold
              fontSize="18px"
              mb="0.75rem"
            >
              Thông tin doanh nghiệp
            </Text>

            <Form.Item
              name={['profile', 'fullName']}
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập tên cơ sở kinh doanh.') },
                { min: 3, message: getErrorElement('Tên cơ sở kinh doanh nhập tối thiểu 3 ký tự.') },
              ]}
            >
              <FloatInput
                disabled
                label="Tên cơ sở kinh doanh"
              />
            </Form.Item>

            <Form.Item name={['profile', 'taxNumber']}>
              <FloatInput
                disabled
                label="Mã số thuế"
              />
            </Form.Item>
          </div>

          <div>
            <Row style={{ marginBottom: '0.75rem' }}>
              <Text
                bold
                fontSize="18px"
              >
                Hạn mức thấu chi mong muốn
              </Text>
              <Tooltip
                title="Khoản vay tối thiểu: 4.000.000đ
Khoản vay tối đa: 300.000.000đ"
              >
                <ExclaimationPointIcon
                  color="textTertiary"
                  width="16px"
                  height="16px"
                  ml="2"
                />
              </Tooltip>
            </Row>

            <Form.Item
              rules={[
                { required: true, message: getErrorElement('Vui lòng nhập giá trị hạn mức thấu chi đề xuất (vnđ).') },
                () => ({
                  validator(_, value) {
                    if (!value || (value >= 4_000_000 && value <= 300_000_000)) {
                      return Promise.resolve();
                    }

                    if (value < 4_000_000) {
                      return Promise.reject(getErrorElement('Hạn mức tối thiểu là 4.000.000vnđ'));
                    }

                    if (value > 300_000_000) {
                      return Promise.reject(getErrorElement('Hạn mức tối đa là 300.000.000vnđ'));
                    }
                  },
                }),
              ]}
              name="amount"
            >
              <FloatInputNumber
                label="Giá trị hạn mức thấu chi đề xuất (vnđ)"
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                parser={(value) => value!.replace(/\$\s?|(\.*)/g, '')}
                controls={false}
                style={{ width: '100%', display: 'flex', alignItems: 'center' }}
              />
            </Form.Item>
          </div>

          <Form.Item
            name="agreedToTerms"
            rules={[
              {
                required: true,
                message: getErrorElement('Vui lòng đồng ý việc nhapthuoc.com chia sẻ dữ liệu cá nhân qua TPBank.'),
              },
            ]}
            valuePropName="checked"
          >
            <Checkbox.Group>
              <Checkbox>
                Tôi đã đọc và đồng ý nhapthuoc.com chia sẻ dữ liệu cá nhân qua TPBank và sử dụng dữ liệu theo Nghị định
                13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân. Xem chi tiết Nghị định
                <Link
                  href="/ve-chung-toi/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan"
                  target="_blank"
                >
                  <Button
                    type="link"
                    ml="1"
                  >
                    tại đây
                  </Button>
                  .
                </Link>
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Button
            width="100%"
            scale="xl"
            htmlType="submit"
          >
            Gửi hồ sơ
          </Button>

          <OTPModal
            open={isOpenModal && type === ModalType.REQUEST_OTP}
            onCancel={closeModal}
            autoFocus
            length={6}
            mobilePhone={mobilePhone}
            onSubmit={handleSubmitFormTpbank}
          />
          <FailureSendOtpModal
            open={isOpenModal && type === ModalType.FAIL_TO_REQUEST_OTP}
            closable={false}
          />
        </Form>

        <RemindBeforeLeaveModal
          open={isOpenModal && type === ModalType.REMIND_BEFORE_LEAVE}
          onCancel={closeModal}
          onBack={onBackWhenLeavePage}
        />
      </Box>
    </>
  );
};

export default LoanFormRegister;
