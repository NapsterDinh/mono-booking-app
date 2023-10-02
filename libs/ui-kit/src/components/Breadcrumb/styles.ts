import styled from '@emotion/styled';
import { Breadcrumb } from 'antd';
import type { BreadcrumbProps } from './types';

export const StyledBreadcrumb = styled(Breadcrumb)<BreadcrumbProps>`
  &.ant-breadcrumb {
    .ant-breadcrumb-link {
      a {
        color: ${({ theme }) => theme.colors.textLink};

        &:hover {
          background-color: unset;
        }
      }
    }
  }
`;
