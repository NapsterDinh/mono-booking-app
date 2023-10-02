import useCheckAgreedToTermsAndConditions from '@customer-web/hooks/useCheckAgreedToTermsAndConditions';
import { useModal } from '@customer-web/state/global/hooks';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { getStoredState } from 'redux-persist';
import OneSignalHandler from './components/OneSignalHandler';
import { ModalType } from './enums';
import useCheckAlertAccountLocked from './hooks/useCheckAlertAccountLocked';
import { persistConfig, useAppDispatch } from './state';
import { setSessionId } from './state/cache/actions';

const LoginModal = dynamic(() => import('@customer-web/components/Modal/LoginModal'), {
  ssr: false,
});
const RegisterModal = dynamic(() => import('@customer-web/components/Modal/RegisterModal'), {
  ssr: false,
});
const AgreeToTermsAndConditionsModal = dynamic(() => import('./components/Modal/AgreeToTermsAndConditionsModal'), {
  ssr: false,
});
const AccountLockedModal = dynamic(() => import('./components/Modal/AccountLockedModal'), {
  ssr: false,
});
const ChangePasswordModal = dynamic(() => import('./components/Modal/ChangePasswordModal'), {
  ssr: false,
});
const ForgotPasswordModal = dynamic(() => import('./components/Modal/ForgotPasswordModal'), {
  ssr: false,
});
const SuccessSendResetPasswordRequestModal = dynamic(
  () => import('./components/Modal/SucccessSendResetPasswordRequestModal'),
  {
    ssr: false,
  },
);
const AgreeProtectionTermsModal = dynamic(() => import('./components/Modal/AgreeProtectionTermsModal'), {
  ssr: false,
});

const Global = () => {
  const { isOpenModal, type, closeModal } = useModal();
  const { onOk, onCancel } = useCheckAgreedToTermsAndConditions();
  const dispatch = useAppDispatch();

  useCheckAlertAccountLocked();

  const handleChangeStorage = async (value: StorageEvent) => {
    const state: any = await getStoredState(persistConfig);

    dispatch(setSessionId(state?.cache?.sessionId || ''));
  };

  useEffect(() => {
    window.addEventListener('storage', handleChangeStorage);

    return () => {
      window.removeEventListener('storage', handleChangeStorage);
    };
  });

  return (
    <>
      <AgreeToTermsAndConditionsModal
        open={isOpenModal && type === ModalType.AGREE_TO_TERMS_AND_CONDITION}
        onOk={onOk}
        onCancel={onCancel}
      />
      <LoginModal
        open={isOpenModal && type === ModalType.LOGIN}
        onCancel={closeModal}
      />
      <RegisterModal
        open={isOpenModal && type === ModalType.REGISTER}
        onCancel={closeModal}
      />
      <AccountLockedModal
        open={isOpenModal && type === ModalType.ACCOUNT_LOCKED}
        onCancel={closeModal}
      />
      <ForgotPasswordModal
        open={isOpenModal && type === ModalType.FORGOT_PASSWORD}
        onCancel={closeModal}
      />
      <SuccessSendResetPasswordRequestModal
        open={isOpenModal && type === ModalType.SUCCESS_SEND_RESET_PASSWORD_REQUEST}
        onCancel={closeModal}
      />
      <ChangePasswordModal
        open={isOpenModal && type === ModalType.CHANGE_PASSWORD}
        onCancel={closeModal}
      />
      <AgreeProtectionTermsModal
        open={isOpenModal && type === ModalType.AGREE_PROTECTION_TERMS}
        onOk={onOk}
        onCancel={onCancel}
      />
      <OneSignalHandler />
    </>
  );
};

export default Global;
