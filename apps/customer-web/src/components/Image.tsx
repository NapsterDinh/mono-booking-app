import BaseImage, { ImageProps } from 'next/image';
import { FC } from 'react';

const Image: FC<ImageProps> = (props) => {
  return (
    <BaseImage
      quality={100}
      {...props}
    />
  );
};

export default Image;
