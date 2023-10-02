import { css, Global } from '@emotion/react';
import styled from '@emotion/styled';
import { DatePicker, DatePickerProps } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';

export const GlobalStyle = () => (
  <Global
    styles={css`
      .ant-picker-panel-container {
        margin-left: 0px !important;
      }
    `}
  />
);
export const DatePickerStyled = styled(DatePicker)<DatePickerProps>`
  &.estore-date-pickter {
    &.ant-picker:hover,
    &.ant-picker-focused {
      border-color: var(--blue-500);
    }
  }
`;

export const RangePickerStyled = styled(DatePicker.RangePicker)<RangePickerProps>`
  &.estore-date-pickter {
    &.ant-picker:hover,
    &.ant-picker-focused {
      border-color: var(--blue-500);
    }
    .ant-picker-active-bar {
      background: var(--blue-500);
    }
  }
`;
export const StyleWrapperPanelDatePicker = styled.div`
  .ant-picker-panel {
    .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
    .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
    .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
      background: var(--gradient-blue-1);
    }
    .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
      border-color: var(--blue-500);
    }
    .ant-picker-today-btn {
      color: var(--blue-500);
    }
    &:nth-child(2) {
      width: 0;
      .ant-picker-header {
        position: absolute;
        right: 55px;
        .ant-picker-header-prev-btn,
        .ant-picker-header-view {
          visibility: hidden;
        }
      }
      .ant-picker-body {
        display: none;
      }
      /* @media (min-width: 768px) {
        width: 288px !important;
        right: 0;
        .ant-picker-header {
          position: relative;
          .ant-picker-header-prev-btn,
          .ant-picker-header-view {
            visibility: initial;
          }
        }
        .ant-picker-body {
          display: block;
        }
      } */
    }
  }
  /* @media (max-width: 768px) {
    .ant-picker-panels {
      flex-direction: column;
    }
  } */
`;
