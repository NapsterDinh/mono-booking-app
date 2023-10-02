import type { FC } from 'react';
import { StyledDivider } from './styles';
import type { DividerProps } from './types';

const Divider: FC<DividerProps> = (props) => {
  return <StyledDivider {...props} />;
};

Divider.defaultProps = {};

export default Divider;
