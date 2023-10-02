import styled from '@emotion/styled';
import { grid } from 'styled-system';
import Box from './Box';
import type { GridProps } from './types';

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${grid}
`;

export default Grid;
