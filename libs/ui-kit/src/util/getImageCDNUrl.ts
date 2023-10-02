import getConfig from 'next/config';

const isSvg = (src: string) => src.endsWith('.svg');
const config = getConfig();
const IMAGE_CDN_URL = config?.publicRuntimeConfig?.app?.IMAGE_CDN_URL;
const S3_HOSTNAME = config?.publicRuntimeConfig?.app?.S3_HOSTNAME;

const getCDNUrl = ({ src, width, height }: { src?: string; width?: number; height?: number }) => {
  let path = src;
  const cdnUrl = IMAGE_CDN_URL;

  if (!src || isSvg(src) || !cdnUrl || src.includes(S3_HOSTNAME)) {
    return path;
  }

  try {
    const isCDNUrl = src?.includes('cdn.nhapthuoc.com/unsafe');
    path = new URL(src).pathname;

    if (!width && !height) {
      return isCDNUrl ? src : `${cdnUrl}${path}`;
    }

    const resizeWidth = Math.floor((width ?? 0) * 1.2);
    const resizeHeight = Math.floor((height ?? 0) * 1.2);

    const sizeParams = `${resizeWidth}x${resizeHeight}`;
    const params = [sizeParams]; // [crop, size, filters:quality(90):fill(white)]
    const paramsURI = params.join('/');

    return isCDNUrl
      ? src.replace('cdn.nhapthuoc.com/unsafe', `cdn.nhapthuoc.com/unsafe/${paramsURI}`)
      : `${cdnUrl}/${paramsURI}${path}`;
  } catch (error) {
    return path;
  }
};

export default getCDNUrl;
