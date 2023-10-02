import { AppContext } from '@customer-web/components/Providers/AppProvider';
import { useContext } from 'react';

const useMasterLayout = () => {
  const appData = useContext(AppContext);

  return appData.masterLayoutData;
};

export default useMasterLayout;
