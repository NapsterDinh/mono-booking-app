import { readAll } from '@customer-web/request-providers/notification';
import { useMutation } from '@tanstack/react-query';
import { Options } from '.';
import { ReadAllNotificationPayload } from '../../types/api/payload/notification';

const useReadAllNotificationMutation = (options?: Options) =>
  useMutation((payload: ReadAllNotificationPayload) => {
    return readAll(payload);
  }, options);

export default useReadAllNotificationMutation;
