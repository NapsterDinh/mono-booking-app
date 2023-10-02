import { NotificationTemplate } from '@customer-web/enums/Notification';
import { Notification } from '../../models/notification';

export interface MyNotificationResponse {
  data?: Notification[];
  tabCode?: NotificationTemplate;
  tabName?: string;
  totalCount?: number;
}

export interface NotificationsCountResponse {
  [NotificationTemplate.PROMOTION]?: {
    unRead: number;
    read: number;
  };

  [NotificationTemplate.ORDER]?: {
    unRead: number;
    read: number;
  };

  [NotificationTemplate.OTHER]?: {
    unRead: number;
    read: number;
  };
}

export interface NotificationsCountAllResponse {
  unRead?: number;
  read?: number;
}
