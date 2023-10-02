import styled, { StyledComponent } from '@emotion/styled';
import { Button as AntButton } from 'antd';
import { border, flexbox, layout, space, system, variant } from 'styled-system';
import { scaleVariants, shapeVariants, typeVariants } from './theme';
import { ButtonProps } from './types';

export const ButtonStyled = styled(AntButton, {
  shouldForwardProp(propName) {
    return !['minWidth', 'aspectRatio', 'flexShrink', 'alignSelf', 'lineHeight', 'textAlign'].includes(propName);
  },
})<ButtonProps>`
  &.ant-btn {
    align-items: center;
    display: inline-flex;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;

    &:disabled {
      background: ${({ theme }) => theme.colors.buttonDisabled};
      color: ${({ theme }) => theme.colors.textTertiary};

      > * {
        color: ${({ theme }) => theme.colors.textTertiary};
      }
    }

    ${variant({
      prop: 'scale',
      variants: scaleVariants,
    })}

    ${variant({
      prop: 'type',
      variants: typeVariants,
    })}

    ${variant({
      prop: 'shape',
      variants: shapeVariants,
    })}

    ${system({
      gap: {
        property: 'gap',
        scale: 'space',
      },
      aspectRatio: true,
      cursor: true,
    })}

    ${border}
    ${layout}
    ${space}
    ${flexbox}
  }
` as StyledComponent<ButtonProps>;
