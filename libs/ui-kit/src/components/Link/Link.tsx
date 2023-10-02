import { Theme } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { layout, system } from 'styled-system';
import EXTERNAL_LINK_PROPS from '../../util/externalLinkProps';
import getThemeValue from '../../util/getThemeValue';
import Text from '../Text/Text';
import type { LinkProps } from './types';

interface ThemedProps extends LinkProps {
  theme: Theme;
}

const getColor = ({ color, theme }: ThemedProps) => {
  return getThemeValue(theme, `colors.${color}`, color);
};

const StyledLink = styled(Text)<LinkProps>`
  color: ${getColor};
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    color: ${getColor};
    text-decoration: ${({ hoverDecoration }) => hoverDecoration || 'underline'};
  }

  ${layout}
  ${system({
    aspectRatio: true,
  })}
`;

const Link: React.FC<React.PropsWithChildren<LinkProps>> = ({ external, hoverDecoration = 'none', ...props }) => {
  const internalProps = external ? EXTERNAL_LINK_PROPS : {};

  return (
    <StyledLink
      as="a"
      hoverDecoration={hoverDecoration}
      {...internalProps}
      {...props}
    />
  );
};

Link.defaultProps = {
  color: 'textLink',
};

export default Link;
