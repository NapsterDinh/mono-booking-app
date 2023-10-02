import { css, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { tokens } from '@tsu-org/ui-kit/tokens/index';
import { layout, space, system, typography } from 'styled-system';
import getThemeValue from '../../util/getThemeValue';
import type { TextProps } from './types';

interface ThemedProps extends TextProps {
  theme: Theme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${color}`, color);
};

const Text = styled.p<TextProps>`
  color: ${getColor};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;

  ${({ lineClamp, ellipsis }) =>
    lineClamp
      ? css`
          display: -webkit-box;
          -webkit-line-clamp: ${lineClamp};
          -webkit-box-orient: vertical;
          overflow: hidden;
        `
      : ellipsis &&
        css`
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        `}

  ${system({
    textDecoration: true,
    textTransform: true,
    whiteSpace: true,
    cursor: true,
  })}
  ${space}
  ${typography}
  ${layout}

  ${({ small }) => small && `font-size: ${tokens.fontSizes['0p875']};`}
`;

Text.defaultProps = {
  color: 'textPrimary',
  small: false,
  fontSize: '16px',
  ellipsis: false,
};

export default Text;
