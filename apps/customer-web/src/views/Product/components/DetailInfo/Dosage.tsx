import { AtomBox } from '@tsu-org/ui';
import parse from 'html-react-parser';
import type { FC } from 'react';
import type { InfoSectionProps } from './types';

const Dosage: FC<InfoSectionProps> = ({ content, product, ...rest }) => {
  return (
    <AtomBox
      id="dosage"
      as="section"
      {...rest}
    >
      <AtomBox>{parse(content || product?.dosage || '')}</AtomBox>
    </AtomBox>
  );
};

export default Dosage;
