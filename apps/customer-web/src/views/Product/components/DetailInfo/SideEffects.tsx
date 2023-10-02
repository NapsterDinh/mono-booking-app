import { AtomBox } from '@tsu-org/ui';
import parse from 'html-react-parser';
import type { FC } from 'react';
import type { InfoSectionProps } from './types';

const SideEffects: FC<InfoSectionProps> = ({ content, product, ...rest }) => {
  return (
    <AtomBox
      id="side-effects"
      as="section"
      {...rest}
    >
      <AtomBox>{parse(content || product?.adverseEffect || '')}</AtomBox>
    </AtomBox>
  );
};

export default SideEffects;
