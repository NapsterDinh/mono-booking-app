import { apiPath } from '@customer-web/configs/env';

interface ImageLoaderProps {
  src: string | undefined;
  quality: number | string;
  width?: number | string;
  height?: number | string;
}
export default function getCDNRemoteImage({ src, quality = 90, width, height }: ImageLoaderProps) {
  const cdnServer = apiPath.IMAGE_CDN_URL;
  if (!src) {
    return '/';
  }

  if (!cdnServer) {
    return src;
  }

  if (!width && !height) {
    return `${cdnServer}/unsafe/filters:quality(${quality})/${src || ''}`;
  }

  return `${cdnServer}/unsafe/${width}x${height}/filters:quality(${quality})/${src || ''}`;
}
