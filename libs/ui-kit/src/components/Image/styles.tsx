import styled from '@emotion/styled';
import { Image, Skeleton } from 'antd';
import type { ImageProps } from './types';
import { system } from 'styled-system';

export const StyledImage = styled(Image, {
  shouldForwardProp(propName) {
    return propName !== 'aspectRatio' && propName !== 'hasFallback';
  },
})<ImageProps>`
  aspect-ratio: ${({ aspectRatio }) => aspectRatio || 'auto'};

  ${system({
    borderRadius: true,
  })}
`;

export const StyledSkeleton = styled(Skeleton.Avatar)<{ height?: number }>`
  &.ant-skeleton {
    width: 100%;

    .ant-skeleton-avatar {
      border-radius: 12px;
      width: 100%;
    }
  }
`;
