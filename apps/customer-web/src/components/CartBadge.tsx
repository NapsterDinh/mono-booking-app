import styled from '@emotion/styled';
import { CartFilledIcon } from '@tsu-org/ui-kit/components/Svg/Icons';
import { SvgProps } from '@tsu-org/ui-kit/components/Svg/types';
import { Badge } from 'antd';
import type { FC } from 'react';
import { useTotalUniqueSelectedCartItems } from '../state/cart/hooks';

const StyledBad = styled(Badge)`
  &.ant-badge {
    .ant-badge-count.ant-scroll-number {
      background-color: #a43412;
      box-shadow: none;
    }
  }
`;

interface CartBadgeProps extends SvgProps {}

const CartBadge: FC<CartBadgeProps> = (props) => {
  const totalSelectedCartItems = useTotalUniqueSelectedCartItems();

  return (
    <StyledBad count={totalSelectedCartItems}>
      <CartFilledIcon
        color="white"
        width="20"
        height="20"
        {...props}
      />
    </StyledBad>
  );
};

export default CartBadge;
