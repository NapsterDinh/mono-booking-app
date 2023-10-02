import { sprinkles } from '../../css/sprinkles.css';
import getCDNUrl from '../../util/getImageCDNUrl';
import { useSize } from 'ahooks';
import { FC, memo, useRef, useState } from 'react';
import { Box } from '../Box';
import { fallback } from './constants';
import { StyledImage, StyledSkeleton } from './styles';
import type { ImageProps } from './types';

const Image: FC<ImageProps> = ({ dimension, hasFallback, useCDN, showLoading, cdnWidth, cdnHeight, src, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const skeletonRef = useRef(null);
  const size = useSize(skeletonRef);
  const formattedSrc = useCDN
    ? getCDNUrl({
        src,
        width: cdnWidth,
        height: cdnHeight,
      })
    : src;

  const handleOnLoadedData = () => {
    setLoaded(true);
  };

  return (
    <>
      {showLoading && (
        <Box
          className={sprinkles({
            display: loaded ? 'none' : 'block',
          })}
          ref={skeletonRef}
          width="100%"
        >
          <StyledSkeleton
            active
            shape="square"
            style={{
              height: size?.width && dimension ? size?.width / dimension : undefined,
            }}
          />
        </Box>
      )}

      {showLoading ? (
        <Box
          className={sprinkles({
            display: loaded ? 'block' : 'none',
          })}
        >
          <StyledImage
            fallback={hasFallback ? fallback : undefined}
            {...rest}
            src={formattedSrc}
            onLoad={handleOnLoadedData}
          />
        </Box>
      ) : (
        <StyledImage
          fallback={hasFallback ? fallback : undefined}
          {...rest}
          src={formattedSrc}
          onLoad={handleOnLoadedData}
        />
      )}
    </>
  );
};

Image.defaultProps = {
  preview: false,
  hasFallback: true,
  useCDN: false,
};

export default memo(Image);
