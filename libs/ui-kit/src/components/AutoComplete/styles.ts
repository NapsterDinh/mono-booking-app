import styled from '@emotion/styled';
import { AutoComplete } from 'antd';
import { AutoCompleteProps } from './types';

export const StyledAutoComplete = styled(AutoComplete)<AutoCompleteProps>`
  &.ant-select {
    .ant-select-selector {
      height: 48px;

      .ant-select-selection-search-input {
        height: 46px;
      }
    }
  }
`;
