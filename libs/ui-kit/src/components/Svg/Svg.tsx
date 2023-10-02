import { css } from '@emotion/css';
import { keyframes, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { space } from 'styled-system';
import getThemeValue from '../../util/getThemeValue';
import type { SvgProps } from './types';

interface ThemedProps extends SvgProps {
  theme: Theme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${color}`, color);
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  color: ${getColor};
  fill: ${({ fill }) => (fill ? fill : 'currentColor')};
  stop-color: ${({ stopColor }) => (stopColor ? stopColor : 'currentColor')};
  flex-shrink: 0;
  ${({ spin }) => spin && spinStyle};
  ${space};
  // Safari fix
  @supports (-webkit-text-size-adjust: none) and (not (-ms-accelerator: true)) and (not (-moz-appearance: none)) {
    filter: none !important;
  }
`;

Svg.defaultProps = {
  color: 'textPrimary',
  width: '20px',
  xmlns: 'http://www.w3.org/2000/svg',
  spin: false,
  stopColor: 'textSecondary',
};

export default Svg;
