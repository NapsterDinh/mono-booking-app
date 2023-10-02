import { scales, types } from './types';

export const shapeVariants = {
  default: {
    borderRadius: '8px',
  },
  circle: {
    borderRadius: '50%',
  },
  round: {
    borderRadius: '42px',
  },
};

export const scaleVariants = {
  [scales.SM]: {
    fontSize: '14px',
    height: '28px',
    lineHeight: '1.25rem',
    minWidth: '28px',
    padding: '4px 8px',
    '&.ant-btn-icon-only': {
      height: '28px',
      width: '28px',
    },
  },
  [scales.MD]: {
    fontSize: '14px',
    height: '36px',
    lineHeight: '1.25rem',
    minWidth: '36px',
    padding: '8px 12px',
    '&.ant-btn-icon-only': {
      height: '36px',
      width: '36px',
    },
  },
  [scales.LG]: {
    fontSize: '14px',
    height: '40px',
    minWidth: '40px',
    lineHeight: '1.25rem',
    padding: '10px 16px',
    '&.ant-btn-icon-only': {
      height: '40px',
      width: '40px',
    },
  },
  [scales.XL]: {
    fontSize: '16px',
    height: '48px',
    lineHeight: '1.5rem',
    minWidth: '48px',
    padding: '12px 24px',
    '&.ant-btn-icon-only': {
      height: '48px',
      width: '48px',
    },
  },
  [scales.XXL]: {
    fontSize: '20px',
    height: '56px',
    lineHeight: '1.75rem',
    minWidth: '56px',
    padding: '14px 24px',
    '&.ant-btn-icon-only': {
      height: '56px',
      width: '56px',
    },
  },
};

export const typeVariants = {
  [types.PRIMARY]: {
    background: 'buttonPrimary',
    borderColor: 'transparent',
    color: 'white',
    '&:not(:disabled):hover': {
      background: 'buttonPrimary',
    },
    '&:not(:disabled):active': {
      background: 'buttonActivePrimary',
    },
  },
  [types.SECONDARY]: {
    backgroundColor: 'buttonSecondary',
    color: 'textFocus',
    '&:not(:disabled):not(:active):hover': {
      backgroundColor: 'buttonSecondary',
    },
    '&:not(:disabled):active': {
      backgroundColor: 'buttonActiveSecondary',
    },
  },
  [types.TERTIARY]: {
    background: 'buttonTertiary',
    color: 'white',
    '&:not(:disabled):not(:active):hover': {
      background: 'buttonTertiary',
    },
    '&:not(:disabled):active': {
      background: 'buttonActivePrimary',
    },
  },
  [types.TEXT]: {
    backgroundColor: 'transparent',
    color: 'textFocus',
    height: 'auto',
    '&:not(:disabled):hover': {
      backgroundColor: 'transparent',
      color: 'textFocus',
    },
    '&:not(:disabled):active': {
      backgroundColor: 'buttonActiveText',
      color: 'textFocus',
    },
  },
  [types.LINK]: {
    backgroundColor: 'transparent',
    color: 'textLink',
    height: 'auto',
    padding: 0,
    '&:not(:disabled):hover': {
      backgroundColor: 'transparent',
      color: 'textLink',
    },
    '&:not(:disabled):active': {
      backgroundColor: 'transparent',
      color: 'textLink',
      opacity: '0.85',
      transform: 'translateY(1px)',
    },
  },
  [types.WHITE]: {
    backgroundColor: 'white',
  },
  [types.WHITE_PRIMARY]: {
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: 'textLink',
    color: 'textLink',
  },
  [types.OVERLAY]: {
    backgroundColor: 'rgba(2, 11, 39, 0.4)',
    color: 'white',
  },
  [types.OUTLINED]: {
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: 'textDisabled',
    color: 'textSecondary',
  },
};
