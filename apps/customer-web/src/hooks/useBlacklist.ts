import { AppContext } from '@customer-web/components/Providers/AppProvider';
import { useContext } from 'react';

const useBlacklist = () => {
  const appData = useContext(AppContext);

  return appData.masterLayoutData?.blacklist;
};

export default useBlacklist;
