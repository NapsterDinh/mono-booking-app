import { PolymorphicComponentProps } from '../..//util/polymorphic';
import { Property } from 'csstype';
import { ElementType } from 'react';
import type { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

export type TextProps = PolymorphicComponentProps<ElementType, SpaceProps & TypographyProps & LayoutProps> & {
  color?: string;
  bold?: boolean;
  small?: boolean;
  ellipsis?: boolean;
  lineClamp?: number;
  cursor?: 'pointer';
  textDecoration?: Property.TextDecoration;
  textTransform?: Property.TextTransform;
  whiteSpace?: Property.WhiteSpace;
};
