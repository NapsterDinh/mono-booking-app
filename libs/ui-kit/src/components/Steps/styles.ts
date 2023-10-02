import styled from '@emotion/styled';
import { Steps } from 'antd';

export const StyledSteps = styled(Steps)`
  &.ant-steps.ant-steps-small {
    .ant-steps-item-icon {
      background-color: transparent;
    }
    .ant-steps-item-tail {
      &::after {
        height: 2px;
      }
    }

    ${({ theme }) => theme.mediaQueries.md} {
      .ant-steps-item-content {
        width: 140px;
      }
      .ant-steps-item-tail {
        margin-inline-start: 70.5px;
      }
      .ant-steps-item-icon {
        margin-inline-start: 60px !important;
      }
    }

    .ant-steps-item-finish {
      .ant-steps-item-icon {
        background: ${({ theme }) => theme.colors.successGradient};
        border-color: transparent;
      }
      .ant-steps-item-content {
        .ant-steps-item-title {
          color: ${({ theme }) => theme.colors.textSecondary};
          font-weight: 500;
        }
      }
      .ant-steps-finish-icon {
        svg {
          color: white;
        }
      }
      .ant-steps-item-tail {
        &::after {
          background-color: #12b75e;
        }
      }
    }

    .ant-steps-item-active {
      .ant-steps-item-icon {
        background: transparent;
        border-color: #12b75e;

        .ant-steps-icon {
          color: #12b75e;
        }
      }
      .ant-steps-item-content {
        .ant-steps-item-title {
          color: ${({ theme }) => theme.colors.textPrimary};
          font-weight: 500;
        }
      }

      &.ant-steps-item-error {
        .ant-steps-item-icon {
          border-color: ${({ theme }) => theme.colors.colorError};

          .ant-steps-icon {
            color: ${({ theme }) => theme.colors.colorError};
          }
        }
        .ant-steps-item-content {
          .ant-steps-item-title {
            color: ${({ theme }) => theme.colors.colorError};

            p {
              color: ${({ theme }) => theme.colors.colorError};
            }
          }
        }
      }
    }

    .ant-steps-item-wait {
      .ant-steps-item-icon {
        border-color: #c1c8d1;
      }
      .ant-steps-item-content {
        .ant-steps-item-title {
          color: ${({ theme }) => theme.colors.textTertiary};
        }
      }
    }
  }
`;
