import { useResponsive } from 'ahooks';
import { FC, forwardRef } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import type { CartItemRowProps } from './types';

const CartItemRow: FC<CartItemRowProps> = forwardRef((props, ref) => {
  const responsive = useResponsive();

  return responsive.lg ? (
    <Desktop
      ref={ref}
      {...props}
    />
  ) : (
    <Mobile
      ref={ref}
      {...props}
    />
  );
});

CartItemRow.displayName = 'CartItemRow';

export default CartItemRow;
