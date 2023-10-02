import { AtomBox } from '@tsu-org/ui';
import { Text } from '@tsu-org/ui-kit';
import parse from 'html-react-parser';
import type { FC } from 'react';
import type { InfoSectionProps } from './types';

const Attentions: FC<InfoSectionProps> = ({ content, product, ...rest }) => {
  return (
    <AtomBox
      id="attentions"
      as="section"
      {...rest}
    >
      <AtomBox>
        {content
          ? parse(content)
          : product?.warning?.map((warning) => <Text key={warning}>{parse(warning || '')}</Text>)}
      </AtomBox>
    </AtomBox>
  );
};

export default Attentions;
