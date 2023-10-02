import { Theme } from '@emotion/react';
import { Property } from 'csstype';
import type { HTMLAttributes } from 'react';
import type {
  BackgroundProps,
  BorderProps,
  ColorProps,
  FlexboxProps,
  GridProps as _GridProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import AtomBox from './AtomBox';

export interface BoxProps
  extends BackgroundProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ShadowProps,
  FlexboxProps,
  TypographyProps,
  Omit<ColorProps, 'color'>,
  HTMLAttributes<HTMLElement> {
  gap?: Theme['space'] | string | number;
  cursor?: Property.Cursor;
  listStyleType?: Property.ListStyleType;
  aspectRatio?: string;
  scrollBehavior?: Property.ScrollBehavior;
}

export interface FlexProps extends BoxProps {
  rowGap?: string;
}

export interface GridProps extends FlexProps, _GridProps { }

export type AtomBoxProps = Parameters<typeof AtomBox>[0];
