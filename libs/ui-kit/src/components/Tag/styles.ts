import styled from '@emotion/styled';
import { Tag } from 'antd';
import { border, color, space, system, typography, variant } from 'styled-system';
import { styleVariants } from './theme';
import type { TagProps } from './types';

export const StyledTag: any = styled(Tag, {
  shouldForwardProp(propName) {
    return (
      !border.propNames?.includes(propName) &&
      !color.propNames?.includes(propName) &&
      !space.propNames?.includes(propName) &&
      !typography.propNames?.includes(propName) &&
      propName !== 'whiteSpace'
    );
  },
})<TagProps>`
  border-radius: 17px;
  border-color: transparent;

  ${variant({
    variants: styleVariants,
  })}

  ${system({
    whiteSpace: true,
  })}

  ${border}
  ${color}
  ${space}
  ${typography}
`;
