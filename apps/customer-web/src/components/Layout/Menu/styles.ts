import styled from '@emotion/styled';
import { AtomBox } from '@tsu-org/ui';
import Link from 'next/link';

export const ParentCategoryItem = styled(Link)`
  border-bottom: 1.5px solid transparent;
  display: flex;
  padding: 0.625rem 0.75rem;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.colors.functionYellow2};
    border-color: #f37a2a;
    text-decoration: none;

    p {
      background: ${({ theme }) => theme.colors.gradientOrange};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .down-icon {
      visibility: hidden;
    }

    .up-icon {
      visibility: visible;
    }
  }

  .up-icon {
    position: absolute;
    right: 0.75rem;
    visibility: hidden;
  }
`;

export const StyledMenu = styled(AtomBox)`
  .ant-dropdown-trigger.ant-dropdown-open {
    ${ParentCategoryItem} {
      background-color: ${({ theme }) => theme.colors.functionYellow2};
      border-color: #f37a2a;

      p {
        background: ${({ theme }) => theme.colors.gradientOrange};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .down-icon {
        visibility: hidden;
      }

      .up-icon {
        visibility: visible;
      }
    }
  }
`;
