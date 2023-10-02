import type { TagProps as BaseTagProps } from 'antd';
import { Property } from 'csstype';
import { BorderProps, ColorProps, SpaceProps, TypographyProps } from 'styled-system';

export const variants = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  SUCCESS: 'success',
  ERROR: 'error',
} as const;

export type Variant = (typeof variants)[keyof typeof variants];

export interface TagProps extends Omit<BaseTagProps, 'color'>, SpaceProps, ColorProps, BorderProps, TypographyProps {
  variant?: Variant;
  whiteSpace?: Property.WhiteSpace;
}
