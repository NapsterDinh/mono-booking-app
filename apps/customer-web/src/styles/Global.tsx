import { css, Global, useTheme } from '@emotion/react';

const GlobalStyle = () => {
  const theme = useTheme();

  return (
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        body {
          background-color: ${theme.colors.background};
          overflow-x: hidden;

          img {
            height: auto;
            max-width: 100%;
          }
        }

        .ant-notification {
          .ant-notification-notice {
            padding: 1rem;
          }

          .ant-notification-notice {
            .ant-notification-notice-with-icon {
              .ant-notification-notice-icon {
                svg {
                  height: 32px;
                  width: 32px;
                }
              }

              .ant-notification-notice-message {
                padding-top: 4px;
              }

              .ant-notification-notice-message,
              .ant-notification-notice-description {
                margin-inline-start: 52;
              }
            }
          }
        }

        .ant-form-item-required::before {
          order: 3;
          margin-inline-end: 0;
          margin-inline-start: 4px;
        }
        .ant-form-item {
          .ant-form-item-label {
            .ant-form-item-required::after {
              display: none;
            }
          }
        }
        .ant-input-number-in-form-item {
          .ant-input-number-input-wrap {
            width: 100%;
          }
        }

        #nprogress {
          .bar {
            background: ${theme.colors.backgroundBlue};
          }
        }

        .global-dropdown-arrow {
          .ant-dropdown-arrow {
            top: 12px;
            &::before {
              clip-path: polygon(54% -8%, 0% 100%, 88% 109%, 100% 100%);
              height: 15px;
            }
            &::after {
              content: none;
            }
          }
        }

        .badge-notification {
          .ant-badge-dot {
            box-shadow: none;
          }
          display: flex;
        }
      `}
    />
  );
};

export default GlobalStyle;
