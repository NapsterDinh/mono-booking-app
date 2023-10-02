import type { Ref } from 'react';
import { forwardRef } from 'react';
import { StyledTextArea } from './styles';
import { TextAreaProps } from './types';

const TextArea = forwardRef((props: TextAreaProps, ref: Ref<any>) => {
  return (
    <StyledTextArea
      ref={ref}
      {...props}
    />
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
