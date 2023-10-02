import styled from '@emotion/styled';
import { Collapse } from 'antd';
import { CollapseProps } from 'antd/lib';
import { FC } from 'react';

const StyledCartPromotionCollapse = styled(Collapse)`
  && {
    .ant-collapse-item {
      .ant-collapse-header {
        background-color: var(--colors-functionYellow2);
        border-radius: 8px;
        gap: 0.25rem;
        padding: 8px 16px;
        .ant-collapse-extra {
          order: -1;
          line-height: 13px;
          transform: translateY(2px);
        }
        .ant-collapse-header-text {
          order: 0;
        }
        .ant-collapse-expand-icon span svg {
          color: #c14e2c;
        }
      }
      .ant-collapse-content {
        border-top-width: 0px;
      }
      &.ant-collapse-item-active {
        border-radius: 8px;
        .ant-collapse-header {
          border-radius: 8px 8px 0 0;
        }
      }
    }
  }
`;

const CartPromotionCollapse: FC<CollapseProps> = ({ expandIconPosition = 'end', ...rest }) => {
  return (
    <StyledCartPromotionCollapse
      expandIconPosition={expandIconPosition}
      {...rest}
    />
  );
};

export default CartPromotionCollapse;
