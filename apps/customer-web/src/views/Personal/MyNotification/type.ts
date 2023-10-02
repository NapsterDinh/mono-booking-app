import { NotificationTemplate } from '@customer-web/enums/Notification';
import { TpBankStatus } from '@customer-web/enums/TpBankOverdraftLoan';

export interface NotiFilters {
  pageNumber?: number;
  pageSize?: number;
  tabCode?: string;
  templateIds?: NotificationTemplate[];
}

export enum NOTIFICATION_STATUS {
  NOTI_DISBURSED = TpBankStatus.LOAN_DISBURSED,
  NOTI_SUCCESS = TpBankStatus.APPROVAL_RULE,
  NOTI_ERROR = TpBankStatus.LOAN_REJECTED,
}

export const STATUS_NOTIFICATION_BG_COLOR = {
  [NOTIFICATION_STATUS.NOTI_DISBURSED]: 'tagSuccessBackground',
  [NOTIFICATION_STATUS.NOTI_SUCCESS]: 'tagSuccessBackground',
  [NOTIFICATION_STATUS.NOTI_ERROR]: 'tagErrorBackground',
};
