import { read } from '@customer-web/request-providers/notification';
import { useMutation } from '@tanstack/react-query';
import { Options } from '.';
import { ReadNotificationPayload } from '../../types/api/payload/notification';

const useReadNotificationMutation = (options?: Options) =>
  useMutation((payload: ReadNotificationPayload) => {
    return read(payload);
  }, options);

export default useReadNotificationMutation;
