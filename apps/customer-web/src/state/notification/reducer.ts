import { createReducer } from '@reduxjs/toolkit';
import {
  countAllNotification,
  countNotificationByTemplateId,
  getListNotification,
  readAllNotification,
  readNotification,
} from './actions';
import { Notification } from '../../types/models/notification';
import { NotificationsCountAllResponse, NotificationsCountResponse } from '../../types/api/response/notification';

export interface NotificationState {
  notifications: Notification;
  loading: boolean;
  countNotification: NotificationsCountAllResponse;
  countNotificationByTemplate: NotificationsCountResponse;
  loadingCountAllNotification: boolean;
}

const initialState: NotificationState = {
  notifications: {
    items: [],
    totalCount: 0,
  },
  loading: false,
  loadingCountAllNotification: false,
  countNotification: {
    read: 0,
    unRead: 0,
  },
  countNotificationByTemplate: {
    ORDER: {
      read: 0,
      unRead: 0,
    },
    OTHER: { read: 0, unRead: 0 },
    PROMOTION: { read: 0, unRead: 0 },
  },
};

export default createReducer<NotificationState>(initialState, (builder) =>
  builder
    .addCase(getListNotification.pending, (state) => {
      state.loading = true;
    })
    .addCase(getListNotification.fulfilled, (state, { payload }) => {
      state.notifications = payload;
      state.loading = false;
    })
    .addCase(getListNotification.rejected, (state) => {
      state.loading = false;
    })
    .addCase(readNotification, (state, { payload }) => {
      const notifications = state.notifications;
      const notification = notifications.items.find((item) => item.id === payload.id);
      if (!notification) return;

      notification.isRead = true;
    })
    .addCase(readAllNotification, (state, { payload }) => {
      const listNotification = state.notifications.items;
      if (!listNotification.length) return;

      listNotification.forEach((item) => {
        item.isRead = true;
      });

      if (payload.templateId) {
        const newUnRead =
          (state.countNotification.unRead ?? 0) - (state.countNotificationByTemplate[payload.templateId]?.unRead ?? 0);

        state.countNotification.unRead = newUnRead <= 0 ? 0 : newUnRead;
      } else {
        state.countNotification.unRead = 0;
      }

      // @TODO: note to learn
      Object.keys(state.countNotificationByTemplate).forEach((key) => {
        if (!payload.templateId || payload.templateId === key) {
          state.countNotificationByTemplate[key].unRead = 0;
        }
      });
    })
    .addCase(countAllNotification.fulfilled, (state, { payload }) => {
      state.countNotification = payload;
    })
    .addCase(countNotificationByTemplateId.pending, (state) => {
      state.loadingCountAllNotification = true;
    })
    .addCase(countNotificationByTemplateId.fulfilled, (state, { payload }) => {
      state.countNotificationByTemplate = payload;
      state.loadingCountAllNotification = false;
    })
    .addCase(countNotificationByTemplateId.rejected, (state) => {
      state.loadingCountAllNotification = false;
    }),
);
