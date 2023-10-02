import { useAppDispatch } from '@customer-web/state';
import { setAlertAccountLocked } from '@customer-web/state/cache/actions';
import { useAlertAccountLocked } from '@customer-web/state/cache/hooks';
import { useModal } from '@customer-web/state/global/hooks';
import { useUserId } from '@customer-web/state/user/hooks';
import { useEffect } from 'react';
import { ModalType } from '../enums';

const useCheckAlertAccountLocked = () => {
  const alertAccountLocked = useAlertAccountLocked();
  const dispatch = useAppDispatch();
  const userId = useUserId();
  const { openModal } = useModal();

  useEffect(() => {
    // add check userId to display account locked modal only when finish logout and reloaded the page
    if (!userId && alertAccountLocked) {
      dispatch(setAlertAccountLocked(false));
      openModal(ModalType.ACCOUNT_LOCKED);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertAccountLocked, userId]);
};

export default useCheckAlertAccountLocked;
