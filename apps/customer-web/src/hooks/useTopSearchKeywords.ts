import { AppContext } from '@customer-web/components/Providers/AppProvider';
import { useContext } from 'react';

const useTopSearchKeywords = () => {
  const appData = useContext(AppContext);

  return appData.masterLayoutData?.header?.topSearch?.keywords;
};

export default useTopSearchKeywords;
