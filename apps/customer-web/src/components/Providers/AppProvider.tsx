import { FC, PropsWithChildren, createContext } from 'react';

export const AppContext = createContext<{
  masterLayoutData: {
    menu?: Menu[];
    header?: Header;
    footer?: Footer;
    blacklist?: string[];
  };
}>({
  masterLayoutData: {},
});

const AppProvider: FC<
  PropsWithChildren & {
    masterLayoutData: {
      menu?: Menu[];
      header?: Header;
      footer?: Footer;
    };
  }
> = ({ masterLayoutData, children }) => {
  return (
    <AppContext.Provider
      value={{
        masterLayoutData: masterLayoutData || {},
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
