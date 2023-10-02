import { AtomBox } from '@tsu-org/ui';
import parse from 'html-react-parser';
import type { FC } from 'react';
import type { InfoSectionProps } from './types';

const Description: FC<InfoSectionProps> = ({ product, ...rest }) => {
  return (
    <AtomBox
      id="description"
      as="section"
      {...rest}
    >
      <AtomBox>{parse(product?.description || '')}</AtomBox>
    </AtomBox>
  );
};

export default Description;
