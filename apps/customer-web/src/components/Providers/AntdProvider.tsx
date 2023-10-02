import { interFont } from '@customer-web/styles/fonts';
import type { Mode } from '@tsu-org/ui';
import { tokens } from '@tsu-org/ui';
import { App, ConfigProvider } from 'antd';
import locale from 'antd/locale/vi_VN';
import 'dayjs/locale/vi';
import { useTheme as useNextTheme } from 'next-themes';
import type { FC, PropsWithChildren } from 'react';

const AntdProvider: FC<PropsWithChildren> = ({ children, ...props }) => {
  const { resolvedTheme } = useNextTheme();
  const colors = tokens.colors[(resolvedTheme ?? 'light') as Mode];

  return (
    <App>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: colors.textFocus,
            colorError: colors.colorError,
            fontFamily: interFont.style.fontFamily,
          },
          components: {
            Button: {
              colorPrimary: 'linear-gradient(315deg, #D35900 0%, #FF9900 100%)',
            },
          },
        }}
        locale={locale}
        {...props}
      >
        {children}
      </ConfigProvider>
    </App>
  );
};

export default AntdProvider;
