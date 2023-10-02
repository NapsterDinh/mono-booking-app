export interface Notification {
  items: NotificationItem[];
  totalCount: number;
}

export interface NotificationItem {
  templateType: string;
  title: string;
  content: string;
  lastUpdateDate: string;
  expiredDate: string;
  sendDate: string;
  status: string;
  id: string;
  isRead: boolean;
  extraProperties: ExtraProperties;
  link: string;
}

interface ExtraProperties {
  payload: string;
}

export interface ReadNotificationPayload {
  id: string;
  tabCode: string;
  link?: string;
}
export interface ReadAllNotificationPayload {
  tabCode: string;
}
