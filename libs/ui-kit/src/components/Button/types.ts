import { Theme } from '@emotion/react';
import { PolymorphicComponentProps } from '@tsu-org/ui-kit/util/polymorphic';
import { ButtonProps as AntButtonProps } from 'antd';
import { Property } from 'csstype';
import { ElementType } from 'react';
import { BordersProps, FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';

export const scales = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: 'xxl',
} as const;

export const types = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  TEXT: 'text',
  LINK: 'link',
  WHITE: 'white',
  WHITE_PRIMARY: 'white_primary',
  OVERLAY: 'overlay',
  OUTLINED: 'outlined',
} as const;

export type Scale = (typeof scales)[keyof typeof scales];

export type Type = (typeof types)[keyof typeof types];

interface ExtendedProps {
  aspectRatio?: string;
  type?: Type;
  scale?: Scale;
  gap?: Theme['space'] | string | number;
  cursor?: Property.Cursor;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type ButtonProps = PolymorphicComponentProps<
  ElementType,
  ExtendedProps &
  Omit<
    AntButtonProps,
    keyof BordersProps | keyof LayoutProps | keyof SpaceProps | keyof FlexboxProps | keyof ExtendedProps
  > &
  BordersProps &
  LayoutProps &
  SpaceProps &
  FlexboxProps
>;
