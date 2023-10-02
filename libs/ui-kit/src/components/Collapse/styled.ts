import { Collapse as AntCollapse } from 'antd';
import styled from '@emotion/styled';
import { CollapseProps } from 'antd';

export const CollapseStyled = styled(AntCollapse)<CollapseProps>`
  &.estore-collapse {
    background: var(--white);
    box-shadow: inset 0px -1px 0px var(--gray-300);
    border-radius: unset;
    .estore-icon {
      font-size: 20px;
      color: var(--gray-600);
    }
    .estore-icon + .title {
      margin-inline-start: 8px;
      color: var(--gray-1000);
      font-size: 18px;
      line-height: 1.5rem;
      font-weight: 600;
    }
  }
  &.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 14px;
  }
  &.ant-collapse-borderless > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
    padding-bottom: 12px;
    padding-top: 0px;
  }
`;
