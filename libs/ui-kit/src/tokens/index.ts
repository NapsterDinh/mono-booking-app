import { darkColors, lightColors } from './colors';

export const shadows = {
  level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  active: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
  success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #D67E0A, 0px 0px 0px 4px rgba(214, 126, 10, 0.2)',
  danger: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
  inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
  tooltip: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)',
};

export const tokens = {
  colors: {
    light: lightColors,
    dark: darkColors,
  },
  fonts: {
    normal: "'Inter', sans-serif",
  },
  space: {
    '0': '0px',
    '0px': '0px',
    '1rem': '1rem',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '1rem',
    '4': '1.5rem',
    '5': '2rem',
    '6': '3rem',
    '7': '4rem',
    '8': '5rem',
    '0p25rem': '0.25rem',
    '0p375rem': '0.375rem',
    '0p625rem': '0.625rem',
    '0p75rem': '0.75rem',
    '0p875rem': '0.875rem',
    '1p125rem': '1.125rem',
    '1p25rem': '1.25rem',
    '1p5rem': '1.5rem',
    '1p75rem': '1.75rem',
    '1p875rem': '1.875rem',
    '2p25rem': '2.25rem',
    '2p5rem': '2.5rem',
    '3rem': '3rem',
    '3p5rem': '3.5rem',
    '7rem': '7rem',
    '1of2': '50%',
    '1of3': 'calc(100% / 3)',
    '1of5': '20%',
    '1px': '1px',
    '2px': '2px',
    unset: 'unset',
  },
  borderWidths: {
    '0': '0px',
    '1': '1px',
    '2': '2px',
  },
  radii: {
    '0': '0px',
    '8px': '8px',
    '12px': '12px',
    '20px': '20px',
    '34px': '34px',
    small: '4px',
    default: '16px',
    card: '24px',
    circle: '50%',
  },
  fontSizes: {
    '0p625rem': '0.625rem',
    '0p75rem': '0.75rem',
    '0p875': '0.875rem',
    '1rem': '1rem',
  },
  shadows,
} as const;

export type Mode = 'light' | 'dark';
export type Tokens = typeof tokens;
