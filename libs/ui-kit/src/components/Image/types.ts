import type { ImageProps as BaseImageProps } from 'antd';
import { Property } from 'csstype';

export interface ImageProps extends BaseImageProps {
  dimension?: number;
  showLoading?: boolean;
  aspectRatio?: string;
  hasFallback?: boolean;
  useCDN?: boolean;
  cdnWidth?: number;
  cdnHeight?: number;
  borderRadius?: Property.BorderRadius;
}
