import { ModalType } from '@customer-web/enums/index';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import type { AppState } from '..';
import { useAppDispatch } from '..';
import { closeModal, openModal } from './actions';

export function useGlobalState() {
  return useSelector<AppState, AppState['global']>((state) => state.global);
}

export function useHeaderSize() {
  return useSelector<AppState, AppState['global']['headerSize']>((state) => state.global.headerSize);
}

export function useFocusedSearchInput() {
  return useSelector<AppState, AppState['global']['focusedSearchInput']>((state) => state.global.focusedSearchInput);
}

export function useModalState() {
  return useSelector<AppState, AppState['global']['modal']>((state) => state.global.modal);
}

export function useIsCartLoading() {
  return useSelector<AppState, boolean>((state) => state.global.cartLoadingCount > 0);
}

export function useIsFirstLoadingCart() {
  return useSelector<AppState, AppState['global']['isFirstLoadingCart']>((state) => state.global.isFirstLoadingCart);
}

export function useIsCorrectSearch() {
  return useSelector<AppState, AppState['global']['isCorrectSearch']>((state) => state.global.isCorrectSearch);
}

export function useDeviceCode() {
  return useSelector<AppState, AppState['global']['deviceCode']>((state) => state.global.deviceCode);
}

export function useModal() {
  const dispatch = useAppDispatch();
  const modal = useModalState();

  const open = useCallback(
    (type: ModalType, props?: any) => {
      dispatch(
        openModal({
          type,
          props,
        }),
      );
    },
    [dispatch],
  );

  const close = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  return {
    isOpenModal: modal.isOpen,
    type: modal.type,
    modalProps: modal.props,
    openModal: open,
    closeModal: close,
  };
}
