import { tryGenSession } from '@customer-web/helpers/Session';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '..';
import { genSession } from './actions';

export function useAgreedToTermsAndConditions() {
  return useSelector<AppState, AppState['cache']['agreedToTermsAndConditions']>(
    (state) => state.cache?.agreedToTermsAndConditions,
  );
}

export function useRecentlyWatchedSkus() {
  return useSelector<AppState, AppState['cache']['recentlyWatchedSkus']>((state) => state.cache?.recentlyWatchedSkus);
}

export function useSearchHistories() {
  return useSelector<AppState, AppState['cache']['searchHistories']>((state) => state.cache?.searchHistories);
}

export function useSessionId() {
  return useSelector<AppState, AppState['cache']['sessionId']>((state) => state.cache?.sessionId);
}

export function useNeedMergeCart() {
  return useSelector<AppState, AppState['cache']['needMergeCart']>((state) => state.cache?.needMergeCart);
}

export function useAlertAccountLocked() {
  return useSelector<AppState, AppState['cache']['alertAccountLocked']>((state) => state.cache?.alertAccountLocked);
}

export function usePollSessionId() {
  const sessionId = useSessionId();
  const dispatch = useAppDispatch();

  const fetch = () => {
    if (!sessionId) {
      tryGenSession(5, () => dispatch(genSession()));
    }
  };

  useEffect(() => {
    fetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);
}
