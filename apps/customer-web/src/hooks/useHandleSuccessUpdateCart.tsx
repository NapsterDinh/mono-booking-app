import { Text } from '@tsu-org/ui-kit';
import { App } from 'antd';
import { NextRouter, useRouter } from 'next/router';

const getNotificationSetting = (router: NextRouter) => ({
  style: {
    cursor: 'pointer',
  },
  message: <Text bold>Cập nhật giỏ hàng thành công</Text>,
  closeIcon: null,
  duration: 1,
  onClick: () => {
    router.push('/gio-hang');
  },
});

const useHandleSuccessUpdateCart = () => {
  const { notification } = App.useApp();
  const router = useRouter();

  const handleSuccessUpdateCart = (cartInfo?: NhapThuocResponse.Carts.CartInfo, sku?: string, inventory?: number) => {
    const cartItems = [...cartInfo.listCart, ...cartInfo.listCartCustomer];
    const item = cartItems.find((item) => item.productInfo?.itemCode === sku);

    if (item) {
      const quantity = item.quantity;

      if (inventory > 0 && inventory <= 100) {
        notification.warning({
          ...getNotificationSetting(router),
          description: <Text small>Số lượng tồn giới hạn, nhapthuoc.com ghi nhận đơn hàng và sẽ liên hệ bạn</Text>,
          duration: 3,
        });
      } else if (quantity > 100) {
        notification.warning({
          ...getNotificationSetting(router),
          description: <Text small>Số lượng đặt hàng lớn, nhapthuoc.com ghi nhận đơn hàng và sẽ liên hệ bạn</Text>,
          duration: 3,
        });
      } else {
        notification.success({
          ...getNotificationSetting(router),
          description: <Text small>Sản phẩm {item.productInfo?.webName}</Text>,
        });
      }
    }
  };

  return handleSuccessUpdateCart;
};

export default useHandleSuccessUpdateCart;
