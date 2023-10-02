import { AtomBox } from '@tsu-org/ui';
import parse from 'html-react-parser';
import type { FC } from 'react';
import type { InfoSectionProps } from './types';

const Preserve: FC<InfoSectionProps> = ({ content, product, ...rest }) => {
  return (
    <AtomBox
      id="preserve"
      as="section"
      {...rest}
    >
      <AtomBox>{parse(content || product?.warrantyPeriod || '')}</AtomBox>
    </AtomBox>
  );
};

export default Preserve;
