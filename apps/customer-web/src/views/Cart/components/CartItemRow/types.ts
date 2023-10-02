import type { AtomBoxProps } from '@tsu-org/ui';

export interface CartItemRowProps extends AtomBoxProps {
  item: NhapThuocResponse.Carts.ListCart;
  onChangeQuantity: (cartItem: NhapThuocResponse.Carts.ListCart, quantity: any) => void;
  onRemove: (item: NhapThuocResponse.Carts.ListCart) => void;
  onSelectItem: (item: NhapThuocResponse.Carts.ListCart) => void;
}
