import styled from '@emotion/styled';
import type { Variants } from 'framer-motion';
import { m as motion } from 'framer-motion';
import { background, border, color, flexbox, layout, position, shadow, space, system, typography } from 'styled-system';
import type { BoxProps } from './types';

export { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion';
export type MotionVariants = Variants;

export const MotionBox = styled(motion.div)<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

const Box = styled.div<BoxProps>`
  ${system({
    gap: {
      property: 'gap',
      scale: 'space',
    },
    cursor: true,
    listStyleType: true,
    aspectRatio: true,
    scrollBehavior: true,
  })}
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${color}
  ${shadow}
  ${flexbox}
  ${typography}
`;

export default Box;
