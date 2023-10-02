import { clearAllToken } from '@customer-web/helpers/LocalStorage';
import { useEffect } from 'react';

const useCheckAuth = (authenticated: boolean) => {
  useEffect(() => {
    if (!authenticated) {
      clearAllToken();
    }
  }, [authenticated]);
};

export default useCheckAuth;
