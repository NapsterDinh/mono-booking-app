import { Ref, forwardRef, memo } from 'react';
import { StyledTag } from './styles';
import type { TagProps } from './types';

const Tag = forwardRef((props: TagProps, ref: Ref<any>) => {
  return (
    <StyledTag
      ref={ref}
      {...props}
    />
  );
});

Tag.displayName = 'Tag';

Tag.defaultProps = {};

export default memo(Tag);
