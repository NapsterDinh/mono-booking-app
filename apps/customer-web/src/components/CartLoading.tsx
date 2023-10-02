import { useIsCartLoading, useIsFirstLoadingCart } from '@customer-web/state/global/hooks';
import { useRef } from 'react';
import CartLoadingPopup from './CartLoadingPopup';

const CartLoading = () => {
  const messageRef = useRef<string>();
  const isCartLoading = useIsCartLoading();
  const isFirstLoadingCart = useIsFirstLoadingCart();

  if (!isCartLoading || isFirstLoadingCart) {
    return null;
  }

  return <CartLoadingPopup message={messageRef.current || `Đang lấy dữ liệu giỏ hàng`} />;
};

export default CartLoading;
