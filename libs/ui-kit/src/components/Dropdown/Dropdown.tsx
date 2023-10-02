import { useTheme } from '@emotion/react';
import type { FC } from 'react';
import { getOverlay, StyledDropdown } from './styles';
import type { DropdownProps } from './types';

const Dropdown: FC<DropdownProps> = (props) => {
  const theme = useTheme();

  return (
    <StyledDropdown
      {...props}
      overlayClassName={getOverlay(theme)}
    />
  );
};

export default Dropdown;
