import { OrderChannel } from '@customer-web/enums/Channel';
import { DeliveryMethod } from '@customer-web/enums/DeliveryMethod';
import { ShipmentMethod } from '@customer-web/enums/Shipment';
import { getErrorNotificationSetting } from '@customer-web/helpers/Notification';
import { tryGenSession } from '@customer-web/helpers/Session';
import { submit } from '@customer-web/request-providers/cart';
import { useAppDispatch } from '@customer-web/state';
import { genSession } from '@customer-web/state/cache/actions';
import { useSessionId } from '@customer-web/state/cache/hooks';
import {
  useDeliveryAddress,
  useEstimatedPrice,
  useHasColdProduct,
  useSelectedCartItems,
} from '@customer-web/state/cart/hooks';
import { setCreating } from '@customer-web/state/order/actions';
import { useUserState } from '@customer-web/state/user/hooks';
import { Link, Text } from '@tsu-org/ui-kit';
import { App } from 'antd';
import { isNil, pick } from 'lodash';

const useCreateOrder = ({
  onSuccess,
}: {
  address?: NhapThuocResponse.Customers.Address;
  onSuccess?: (orderResponse: NhapThuocResponse.Carts.Submit, payload: any) => void;
}) => {
  const { notification } = App.useApp();
  const user = useUserState();
  const cartSessionId = useSessionId();
  const dispatch = useAppDispatch();
  const hasColdProduct = useHasColdProduct();
  const estimatedPrice = useEstimatedPrice();
  const selectedCartItem = useSelectedCartItems();
  const deliveryAddress = useDeliveryAddress();

  const createOrder = async (values: any) => {
    if (!values.address_id) {
      notification.error({
        ...getErrorNotificationSetting(),
        message: 'Vui lòng chọn địa chỉ giao hàng',
      });

      return;
    }

    if (!values?.delivery?.method) {
      notification.error({
        ...getErrorNotificationSetting(),
        message: 'Vui lòng chọn hình thức vận chuyển',
      });

      return;
    }

    if (isNil(values.isExportVAT)) {
      notification.error({
        ...getErrorNotificationSetting(),
        message: 'Vui lòng lựa chọn xuất hóa đơn VAT hay không',
      });

      return;
    }

    if (values.isExportVAT && isNil(values.isPrintOrderInvoice)) {
      notification.error({
        ...getErrorNotificationSetting(),
        message: 'Vui lòng lựa chọn xuất hóa đơn giấy hay không',
      });

      return;
    }

    if (hasColdProduct && (values.delivery.method !== DeliveryMethod.EXPRESS || estimatedPrice > 10_000_000)) {
      notification.error({
        ...getErrorNotificationSetting(),
        message: <Text bold>Vui lòng kiểm tra lại thông tin</Text>,
        description: (
          <Text small>
            Đơn hàng của quý khách hiện có sản phẩm cần giao hàng siêu tốc để đảm bảo chất lượng sản phẩm theo chính
            sách của{' '}
            <Link
              external
              display="inline-block"
              color="textLink"
              small
              href="/chinh-sach-giao-hang"
            >
              nhapthuoc.com
            </Link>
            , vui lòng đảm bảo giá trị đơn hàng đáp ứng chính sách trên. Trong trường hợp khu vực của quý khách chưa có
            dịch vụ giao hàng siêu tốc, liên hệ{' '}
            <Link
              display="inline-block"
              color="textLink"
              small
              href="tel:18006001"
            >
              1800 6001
            </Link>{' '}
            để được hỗ trợ thêm.
          </Text>
        ),
      });

      return;
    }

    const payload: NhapThuocPayload.Carts.Submit = {
      // TODO: remove hard coded value
      typePaymentMethod: 1,
      orderChannel: OrderChannel.WEB_NHAP_THUOC,
      customer: {
        id: user.id,
        fullName: user.profile?.fullName,
        phoneNumber: user.profile?.mobilePhone,
        gender: user?.profile.gender || 0,
        email: user?.profile?.email,
      },
      payment: values.payment,
      cart: {
        ...values?.cart,
        sessionId: cartSessionId,
      },
      receiver: {
        fullName: deliveryAddress?.name,
        phoneNumber: deliveryAddress?.mobilePhone,
        address: pick(deliveryAddress, [
          'id',
          'provinceCode',
          'provinceName',
          'districtCode',
          'districtName',
          'wardCode',
          'wardName',
          'address',
          'fullAddress',
        ]),
        gender: 0,
      },
      shipment: {
        method: ShipmentMethod.AT_HOME,
        fee: values?.shipment?.fee,
      },
      delivery: values?.delivery,
      isExportVAT: values?.isExportVAT,
      isPrintOrderInvoice: values?.isPrintOrderInvoice,
    };

    dispatch(setCreating(true));

    try {
      const hasItemGreaterThan100Quantity = selectedCartItem.some((item) => item.quantity > 100);
      const response = await submit(payload);

      tryGenSession(5, () => dispatch(genSession()));

      if (hasItemGreaterThan100Quantity) {
        notification.warning({
          message: <Text small>Tạo đơn hàng thành công</Text>,
          description: <Text small>Số lượng đặt hàng lớn, nhapthuoc.com ghi nhận đơn hàng và sẽ liên hệ bạn</Text>,
        });
      }

      onSuccess && onSuccess(response, payload);
    } catch (error) {
      if (error?.message) {
        notification.error({
          message: error.message,
        });
      }
    } finally {
      dispatch(setCreating(false));
    }
  };

  return { createOrder };
};

export default useCreateOrder;
