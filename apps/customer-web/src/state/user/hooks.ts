import { getToken } from '@customer-web/helpers/LocalStorage';
import useBlacklist from '@customer-web/hooks/useBlacklist';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { batch, useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '..';
import { setAlertAccountLocked } from '../cache/actions';
import { fetchCustomerAddressesByCustomerId } from '../customer/actions';
import { fetchUserInfo, logout, setLoading } from './actions';

export function useUserId() {
  return useSelector<AppState, AppState['user']['id']>((state) => state.user.id);
}

export function useUserAddresses() {
  return useSelector<AppState, AppState['user']['addresses']>((state) => state.user.addresses);
}

export function useUserState() {
  return useSelector<AppState, AppState['user']>((state) => state.user);
}

export function useIsActive() {
  return useSelector<AppState, AppState['user']['profile']['isActive']>((state) => state.user.profile?.isActive);
}

export function useUserStatus() {
  return useSelector<AppState, AppState['user']['profile']['status']>((state) => state.user.profile?.status);
}

export function useUserBusinessType() {
  return useSelector<AppState, AppState['user']['profile']['businessType']>(
    (state) => state.user.profile?.businessType,
  );
}

export function useUserMobilePhone() {
  return useSelector<AppState, AppState['user']['profile']['mobilePhone']>((state) => state.user.profile?.mobilePhone);
}

export function useIsLoadingUser() {
  return useSelector<AppState, AppState['user']['loading']>((state) => state.user.loading);
}

export function useAuthenticated() {
  return useSelector<AppState, AppState['user']['authenticated']>((state) => state.user.authenticated);
}

export function useIsInBlacklist() {
  const userId = useUserId();
  const blacklist = useBlacklist();

  if (blacklist?.includes(userId)) {
    return true;
  }

  return false;
}

export function useAgreedProtectionTerms() {
  return useSelector<AppState, AppState['user']['profile']['isAgreeProtectionTerms']>(
    (state) => state.user.profile?.isAgreeProtectionTerms,
  );
}

export function usePollUserInfo() {
  const userId = useUserId();
  const isActive = useIsActive();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (userId) {
      if (isActive) {
        dispatch(fetchCustomerAddressesByCustomerId(userId));
      } else {
        batch(() => {
          dispatch(setAlertAccountLocked(true));
          dispatch(logout());
        });
        router.reload();
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isActive, userId]);

  useEffect(() => {
    const token = getToken();

    if (token) {
      dispatch(fetchUserInfo());
    } else {
      dispatch(setLoading(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export function useDocumentUpload() {
  return useSelector<AppState, AppState['user']['documentFile']>((state) => state.user.documentFile);
}

export function useLoadingSubmitForm() {
  return useSelector<AppState, AppState['user']['loadingSubmitForm']>((state) => state.user.loadingSubmitForm);
}

export function useSubmitedForm() {
  return useSelector<AppState, AppState['user']['submitedForm']['data']>((state) => state.user.submitedForm.data);
}

export function useGetErrorSendOTP() {
  return useSelector<AppState, AppState['user']['errorOTP']>((state) => state.user.errorOTP);
}
