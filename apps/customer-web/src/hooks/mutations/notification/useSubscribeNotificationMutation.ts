import { subscribe } from '@customer-web/request-providers/notification';
import { useMutation } from '@tanstack/react-query';

type Options = Parameters<typeof useMutation<any, any, any>>[2];

const useSubscribeNotificationMutation = (options?: Options) =>
  useMutation((deviceCode: string) => {
    return subscribe(deviceCode);
  }, options);

export default useSubscribeNotificationMutation;
