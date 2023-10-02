import { AtomBox } from '@tsu-org/ui';
import parse from 'html-react-parser';
import type { FC } from 'react';
import type { InfoSectionProps } from './types';

const Functions: FC<InfoSectionProps> = ({ content, product, ...rest }) => {
  return (
    <AtomBox
      id="functions"
      as="section"
      {...rest}
    >
      <AtomBox>{parse(content || product?.shortDescription || '')}</AtomBox>
    </AtomBox>
  );
};

export default Functions;
