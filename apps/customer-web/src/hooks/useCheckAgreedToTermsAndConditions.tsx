import { useAppDispatch } from '@customer-web/state';
import { agreeToTermsAndConditions } from '@customer-web/state/cache/actions';
import { useAgreedToTermsAndConditions } from '@customer-web/state/cache/hooks';
import { useModal } from '@customer-web/state/global/hooks';
import { useAgreedProtectionTerms, useAuthenticated, useIsActive } from '@customer-web/state/user/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ModalType } from '../enums';

const useCheckAgreedToTermsAndConditions = () => {
  const { type, openModal, closeModal } = useModal();
  const agreedToTermsAndConditions = useAgreedToTermsAndConditions();
  const agreedProtectionTerms = useAgreedProtectionTerms();
  const authenticated = useAuthenticated();
  const isActive = useIsActive();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleCancel = () => {
    alert('Bạn phải đồng ý điều khoản thì mới có thể truy cập được website');
  };

  const handleOk = () => {
    if (type === ModalType.AGREE_TO_TERMS_AND_CONDITION) {
      dispatch(agreeToTermsAndConditions());
    }

    closeModal();
  };

  useEffect(() => {
    if (
      authenticated &&
      isActive &&
      !agreedProtectionTerms &&
      !router.pathname.includes('/chinh-sach-thu-thap-va-xu-ly-du-lieu-ca-nhan')
    ) {
      openModal(ModalType.AGREE_PROTECTION_TERMS);

      return;
    }

    if (!agreedToTermsAndConditions) {
      openModal(ModalType.AGREE_TO_TERMS_AND_CONDITION);
    }
  }, [agreedToTermsAndConditions, agreedProtectionTerms, openModal, authenticated, router.pathname, isActive]);

  return {
    onCancel: handleCancel,
    onOk: handleOk,
  };
};

export default useCheckAgreedToTermsAndConditions;
