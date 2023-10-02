import { NotificationTemplate } from '@customer-web/enums/Notification';

export interface NotificationsPayload {
  pageSize: number;
  pageNumber: number;
  orderBy?: string;
  orderType?: string;
  templateIds: NotificationTemplate[];
  isRead?: boolean;
  isDelete?: boolean;
}

export interface ReadNotificationPayload {
  ids: string[];
  templateId: string;
}

export interface ReadAllNotificationPayload {
  templateId: string;
}
