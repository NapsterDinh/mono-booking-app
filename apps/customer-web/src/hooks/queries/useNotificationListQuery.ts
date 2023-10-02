import { getNotifications } from '@customer-web/request-providers/notification';
import type { QueryOptions } from './useQuery';
import useQuery from './useQuery';
import { NotificationsPayload } from '../../types/api/payload/notification';

const useNotificationListQuery = (payload: NotificationsPayload, options?: QueryOptions) => {
  const queryFn = () => getNotifications(payload);

  return useQuery(['notifications', payload], queryFn, {
    ...options,
  });
};

export default useNotificationListQuery;
