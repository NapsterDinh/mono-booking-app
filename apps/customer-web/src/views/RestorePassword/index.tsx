import { ModalType } from '@customer-web/enums/index';
import { useModal } from '@customer-web/state/global/hooks';
import dynamic from 'next/dynamic';
import { FC, useEffect } from 'react';
import ConfirmModal from './components/ConfirmModal';
import Layout from './components/Layout';
import ResetPasswordFormModal from './components/ResetPasswordFormModal';
import SuccessModal from './components/SuccessModal';

const FailedModal = dynamic(() => import('./components/FailedModal'), {
  ssr: false,
});

const RestorePassword: FC<{ isValidKey: boolean }> = ({ isValidKey }) => {
  const { isOpenModal, type, openModal } = useModal();

  const handleConfirm = () => {
    openModal(ModalType.RESET_FORM);
  };

  useEffect(() => {
    if (isValidKey) {
      openModal(ModalType.PRE_RESET_FORM_MODAL);
    } else {
      openModal(ModalType.FAILED_RESET_PASSWORD);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValidKey]);

  return (
    <Layout>
      <SuccessModal open={isOpenModal && type === ModalType.SUCCESS_RESET_PASSWORD} />
      <FailedModal open={isOpenModal && type === ModalType.FAILED_RESET_PASSWORD} />
      <ConfirmModal
        open={isOpenModal && type === ModalType.PRE_RESET_FORM_MODAL}
        onOk={handleConfirm}
      />
      <ResetPasswordFormModal open={isOpenModal && type === ModalType.RESET_FORM} />
    </Layout>
  );
};

export default RestorePassword;
