import { Property } from 'csstype';
import type { AnchorHTMLAttributes } from 'react';
import type { TextProps } from '../Text';

export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLDivElement> {
  external?: boolean;
  hoverDecoration?: string;
  aspectRatio?: Property.AspectRatio;
}
