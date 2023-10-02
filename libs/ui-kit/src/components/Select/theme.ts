import { scales } from './types';

export const scaleVariants = {
  [scales.MD]: {
    '.ant-select-selector': {
      height: '48px',

      'input.ant-select-selection-search-input': {
        height: '46px',
      },
    },
    input: {
      height: '46px',
    },
    '.ant-select-selection-placeholder': {
      lineHeight: '46px',
    },
    '.ant-select-selection-item': {
      lineHeight: '46px',
    },
  },
  [scales.LG]: {
    '.ant-select-selector': {
      height: '56px',

      'input.ant-select-selection-search-input': {
        height: '54px',
      },
    },
    input: {
      height: '54px',
    },
    '.ant-select-selection-placeholder': {
      lineHeight: '54px',
    },
    '.ant-select-selection-item': {
      lineHeight: '54px',
    },
  },
};
