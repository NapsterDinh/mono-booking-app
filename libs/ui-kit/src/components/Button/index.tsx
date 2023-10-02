import { ButtonStyled } from './styled';
import { ButtonProps } from './types';

export type { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  return <ButtonStyled {...props} />;
};

Button.defaultProps = {
  shape: 'round',
  gap: '0.5rem',
  type: 'primary',
  scale: 'md',
};

export default Button;
