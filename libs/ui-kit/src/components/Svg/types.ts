import { Theme } from '@emotion/react';
import type { ElementType, SVGAttributes } from 'react';
import type { SpaceProps } from 'styled-system';
import type { Colors } from '../../theme';

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: Theme;
  spin?: boolean;
}

export type IconComponentType = {
  icon: ElementType<any>;
  fillIcon?: ElementType<any>;
  isActive?: boolean;
  height?: string;
  width?: string;
  activeColor?: string;
  activeBackgroundColor?: keyof Colors;
} & SvgProps;
