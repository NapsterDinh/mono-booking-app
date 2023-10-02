import { unsubcribe } from '@customer-web/request-providers/notification';
import { useMutation } from '@tanstack/react-query';

type Options = Parameters<typeof useMutation<any, any, any>>[2];

const useUnsubscribeNotificationMutation = (options?: Options) =>
  useMutation((deviceCode: string) => {
    return unsubcribe(deviceCode);
  }, options);

export default useUnsubscribeNotificationMutation;
