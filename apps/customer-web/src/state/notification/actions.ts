import { NotificationTemplate } from '@customer-web/enums/Notification';
import { count, countAll, getNotifications } from '@customer-web/request-providers/notification';
import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { NotificationsPayload } from '../../types/api/payload/notification';

export const getListNotification = createAsyncThunk(
  'notification/getListNotification',
  async (payload: NotificationsPayload) => {
    const response = await getNotifications(payload);

    return response;
  },
);

export const readNotification = createAction<{ id: string }>('notification/readNotification');
export const readAllNotification = createAction<{ templateId: string }>('notification/readAllNotification');

export const countAllNotification = createAsyncThunk('notification/countAllNotification', async () => {
  const response = await countAll();

  return response;
});
export const countNotificationByTemplateId = createAsyncThunk(
  'notification/countNotificationByTemplateId',
  async () => {
    const response = await count();

    return response;
  },
);
