import { useAuthenticated, useIsLoadingUser } from '@customer-web/state/user/hooks';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';

const GuardedRoute: FC<PropsWithChildren> = ({ children }) => {
  const authenticated = useAuthenticated();
  const isLoadingUser = useIsLoadingUser();
  const router = useRouter();

  useEffect(() => {
    if (!authenticated && !isLoadingUser) {
      router.push('/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authenticated, isLoadingUser]);

  if (isLoadingUser || !authenticated) {
    return null;
  }

  return <>{children}</>;
};

export default GuardedRoute;
