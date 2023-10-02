import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '..';

export const notificationSelector = () =>
  createSelector(
    (state: AppState) => state.notification,
    (notification) => notification || [],
  );

export const countNotiByTemplateSelector = () =>
  createSelector(notificationSelector(), (countNotificationByTemplate) => {
    return countNotificationByTemplate;
  });
