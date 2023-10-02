import styled from '@emotion/styled';
import Box from './Box';
import type { FlexProps } from './types';
import { system } from 'styled-system';

const Flex = styled(Box)<FlexProps>`
  display: flex;

  ${system({
    rowGap: true,
  })}
`;

export default Flex;
