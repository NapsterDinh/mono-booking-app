import styled from '@emotion/styled';
import { Collapse, CollapseProps } from 'antd';

const CollapseStyled = styled(Collapse)<CollapseProps>`
  background-color: transparent !important;
  border: none;
  .ant-collapse-header {
    background-color: ${({ theme }) => theme.colors.backgroundGrey2};
    border-radius: 8px !important;
    margin-bottom: 10px;
  }
  .ant-collapse-content {
    background-color: ${({ theme }) => theme.colors.backgroundGrey2};
    border-radius: 8px !important;
    border-top: none;
  }
  .ant-collapse-item,
  .ant-collapse-item-active {
    border: none;
  }
`;

export { CollapseStyled };
