import styled from '@emotion/styled';
import { Row } from 'antd';

export const RowStyle = styled(Row)`
  height: 100%;
  flex-wrap: inherit;

  .content-left {
    margin: 0;
    display: flex;
    align-items: center;
    height: auto;
    text-align: center;
    width: 148px;

    border-right: 1px solid #e4e8ed;

    &:hover {
      cursor: pointer;
      background: #fff3e1;
    }
  }

  .content-right {
    width: 100%;
    max-height: 166px;
    overflow: auto;
    .child-name {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.01em;
      color: #0355a1;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
