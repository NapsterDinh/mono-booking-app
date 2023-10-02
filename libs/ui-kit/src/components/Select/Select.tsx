import type { Ref } from 'react';
import { forwardRef } from 'react';
import { StyledSelect } from './styles';
import { SelectProps, scales } from './types';

const Select = forwardRef((props: SelectProps, ref: Ref<any>) => {
  return (
    <StyledSelect
      ref={ref}
      {...props}
    />
  );
});

Select.displayName = 'Select';

Select.defaultProps = {
  scale: scales.MD,
};

export default Select;
