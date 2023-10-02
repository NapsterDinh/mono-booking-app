import { ModalType } from '@customer-web/enums/index';
import { createAction } from '@reduxjs/toolkit';

export const setHeaderSize = createAction<any>('global/setHeaderSize');

export const setGlobal = createAction<any>('global/setGlobal');

export const setFocusedSearchInput = createAction<boolean>('global/setFocusedSearchInput');

export const openModal = createAction<{ type: ModalType; props?: any }>('global/openModal');

export const closeModal = createAction('global/closeModal');

export const toggleCorrectSearch = createAction('global/toggleCorrectSearch');

export const setIsCorrectSearch = createAction<boolean>('global/setIsCorrectSearch');

export const setDeviceCode = createAction<string | undefined>('global/setDeviceCode');
