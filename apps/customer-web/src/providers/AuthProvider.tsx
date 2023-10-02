import GuardedRoute from '@customer-web/components/GuardedRoute';
import { useUserState } from '@customer-web/state/user/hooks';
import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';

const LoadingFRT = dynamic(() => import('@customer-web/components/Common/Pages/LoadingFRT'), {
  ssr: false,
});

const AuthProvider: FC<
  PropsWithChildren & {
    guarded?: boolean;
  }
> = ({ children, guarded }) => {
  const user = useUserState();

  if (user.loading) {
    return <LoadingFRT />;
  }

  if (guarded) {
    return <GuardedRoute>{children}</GuardedRoute>;
  }

  return <>{children}</>;
};

AuthProvider.defaultProps = {
  guarded: true,
};

export default AuthProvider;
