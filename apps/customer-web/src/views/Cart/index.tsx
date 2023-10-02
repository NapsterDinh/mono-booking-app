import ConfirmTpBankOverdraftLoanPaymentMethodModal from '@customer-web/components/Modal/ConfirmTpBankOverdraftLoanPaymentMethodModal';
import { PaymentMethod } from '@customer-web/enums/Payment';
import { UserStatus } from '@customer-web/enums/User';
import { ModalType } from '@customer-web/enums/index';
import { getErrorNotificationSetting } from '@customer-web/helpers/Notification';
import { useOrderShippingFee } from '@customer-web/hooks';
import { useOrderQuery, usePaymentMethodsQuery, useUserInvoicesByUserIdQuery } from '@customer-web/hooks/queries';
import useDeliveryServices from '@customer-web/hooks/usDeliveryServices';
import { getCartPayload } from '@customer-web/services/carts/CartBusinessService';
import { useAppDispatch } from '@customer-web/state';
import { useSessionId } from '@customer-web/state/cache/hooks';
import { fetchCartData, setDeliveryAddress, setDeliveryMethod } from '@customer-web/state/cart/actions';
import { useDeliveryAddress, useShipmentPrice, useTotalUniqueSelectedCartItems } from '@customer-web/state/cart/hooks';
import { useModal } from '@customer-web/state/global/hooks';
import { useUserAddresses, useUserState, useUserStatus } from '@customer-web/state/user/hooks';
import Payment from '@customer-web/views/Payment';
import { sprinkles } from '@tsu-org/ui/css/sprinkles.css';
import { Text } from '@tsu-org/ui-kit';
import { useDeepCompareEffect, useMemoizedFn } from 'ahooks';
import { App, Form } from 'antd';
import NextLink from 'next/link';
import { Router, useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Origin from './components/Origin';
import RedirectToTpBank from './components/RedirectToTpBank';
import Success from './components/Success';
import useCreateOrder from './hooks/useCreateOrder';

enum Screen {
  ORIGIN = 1,
  PRE_ORDER = 2,
  SUCCESS = 3,
  REDIRECT_TO_TP_BANK = 4,
}

const Cart = () => {
  const { notification } = App.useApp();
  const router = useRouter();
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(Screen.ORIGIN);
  const user = useUserState();
  const { data: paymentMethods } = usePaymentMethodsQuery({
    enabled: !!user?.id,
  });
  const userAddresses = useUserAddresses();
  const defaultAddress = useMemo(() => userAddresses.find((address) => address.isPrimary), [userAddresses]);
  const { data: invoices } = useUserInvoicesByUserIdQuery(user.id);
  const totalCartItems = useTotalUniqueSelectedCartItems();
  const userStatus = useUserStatus();
  const selectedAddressId = Form.useWatch('address_id', form);
  const deliveryAddress = useDeliveryAddress();
  const deliveryServices = useDeliveryServices();
  const deliveryServiceCodes = useMemo(
    () => deliveryServices?.map((service) => service.serviceCode),
    [deliveryServices],
  );
  const [createdOrder, setCreatedOrder] = useState<NhapThuocResponse.Carts.Submit>();
  const deliveryMethod = Form.useWatch(['delivery', 'method'], form);
  const orderShippingFee = useOrderShippingFee(deliveryMethod);
  const sessionId = useSessionId();
  const dispatch = useAppDispatch();
  const { isOpenModal, type, openModal, closeModal } = useModal();
  const { data: order } = useOrderQuery(createdOrder?.orderCode);
  const shipmentPrice = useShipmentPrice();

  const { createOrder } = useCreateOrder({
    onSuccess: (orderInfo: NhapThuocResponse.Carts.Submit, payload: any) => {
      if (payload?.payment?.method === PaymentMethod.TRANSFER) {
        return router.push(`/thanh-toan-chuyen-khoan/${orderInfo?.orderCode}`);
      }

      setCreatedOrder(orderInfo);

      if (payload?.payment?.method === PaymentMethod.TP_BANK_OVERDRAFT_LOAN) {
        return setCurrentStep(Screen.REDIRECT_TO_TP_BANK);
      }

      setCurrentStep(Screen.SUCCESS);
    },
  });

  const handleFinish = (values: any) => {
    if (values?.payment?.method === PaymentMethod.TP_BANK_OVERDRAFT_LOAN) {
      openModal(ModalType.CONFIRM_TP_BANK_OVERDRAFT_LOAN_PAYMENT_METHOD, {
        address: deliveryAddress,
        formValues: {
          ...values,
          shipment: {
            fee: orderShippingFee,
          },
        },
      });

      return;
    }

    createOrder({
      ...values,
      shipment: {
        fee: orderShippingFee,
      },
    });
  };

  const goToOriginScreen = () => {
    setCurrentStep(Screen.ORIGIN);
  };

  const goToPreOrderScreen = () => {
    if (!totalCartItems) {
      return;
    }

    if (userStatus !== UserStatus.APPROVED) {
      notification.error({
        ...getErrorNotificationSetting(),
        message: <Text bold>Vui lòng kiểm tra lại thông tin</Text>,
        description: (
          <Text small>
            Bạn không thể đặt hàng khi chưa kích hoạt tài khoản. Bạn có thể liên hệ phòng hỗ trợ khách hàng qua hotline{' '}
            <NextLink href="tel:18006001">
              <Text
                color="textLink"
                small
                as="span"
                fontWeight="500"
              >
                1800 6001
              </Text>
            </NextLink>{' '}
            để được hỗ trợ.
          </Text>
        ),
      });

      return;
    }

    setCurrentStep(Screen.PRE_ORDER);
  };

  const checkTabFocused = useMemoizedFn(() => {
    // refetch cart when tab focused
    if (document.visibilityState === 'visible' && user?.id) {
      const payload = getCartPayload(sessionId, shipmentPrice);
      dispatch(fetchCartData(payload));
    }
  });

  const handleConfirmTpBankOverdraftLoanPaymentMethod = () => {
    closeModal();
    createOrder({
      ...form.getFieldsValue(),
      shipment: {
        fee: orderShippingFee,
      },
    });
  };

  useDeepCompareEffect(() => {
    form.setFieldValue(['delivery', 'method'], deliveryServiceCodes?.[0]);
  }, [deliveryServiceCodes]);

  useEffect(() => {
    const defaultInvoice = invoices?.find((invoice) => invoice.isPrimary);
    form.setFieldValue('invoice', defaultInvoice?.id);
  }, [form, invoices]);

  useEffect(() => {
    form.setFieldValue(['payment', 'method'], paymentMethods?.[0]?.id);
  }, [form, paymentMethods]);

  useEffect(() => {
    form.setFieldValue(['address_id'], defaultAddress?.id);
  }, [form, defaultAddress?.id]);

  useEffect(() => {
    const address = userAddresses?.find((address) => address?.id === selectedAddressId);

    dispatch(setDeliveryAddress(address));
  }, [dispatch, selectedAddressId, userAddresses]);

  useEffect(() => {
    dispatch(setDeliveryMethod(deliveryMethod));
  }, [deliveryMethod, dispatch]);

  useEffect(() => {
    Router.events.on('routeChangeStart', goToOriginScreen);

    document.addEventListener('visibilitychange', checkTabFocused);

    return () => {
      document.removeEventListener('visibilitychange', checkTabFocused);
      Router.events.off('routeChangeStart', goToOriginScreen);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form
        className={sprinkles({
          mb: '3',
        })}
        form={form}
        initialValues={{
          payment_method: paymentMethods?.[0]?.id,
          address_id: defaultAddress?.id,
          shipment: {
            method: deliveryServices?.[0]?.serviceCode,
          },
        }}
        onFinish={handleFinish}
      >
        {currentStep === Screen.ORIGIN && <Origin onNext={goToPreOrderScreen} />}
        {currentStep === Screen.PRE_ORDER && (
          <Payment
            deliveryServices={deliveryServices}
            form={form}
            onBack={goToOriginScreen}
          />
        )}
        {Boolean(currentStep === Screen.SUCCESS && createdOrder?.orderCode) && (
          <Success
            orderCode={createdOrder?.orderCode}
            isPaymentCompleted={order?.isPaymentCompleted}
            paymentMethodDefault={order?.orderInformation?.paymentMethodDefault}
            paymentMethodLabel={order?.orderInformation?.paymentMethodLabel}
            paymentMethodAvatar={order?.orderInformation?.paymentMethodAvatar}
          />
        )}
        {Boolean(currentStep === Screen.REDIRECT_TO_TP_BANK && createdOrder?.orderCode) && (
          <RedirectToTpBank orderCode={createdOrder?.orderCode} />
        )}
      </Form>

      <ConfirmTpBankOverdraftLoanPaymentMethodModal
        open={isOpenModal && type === ModalType.CONFIRM_TP_BANK_OVERDRAFT_LOAN_PAYMENT_METHOD}
        onOk={handleConfirmTpBankOverdraftLoanPaymentMethod}
      />
    </>
  );
};

export default Cart;
