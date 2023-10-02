import { sendingOTP } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';
import { Options } from '.';

const useSendOTPMutation = (options?: Options) =>
  useMutation((phoneNumber: string) => {
    return sendingOTP(phoneNumber);
  }, options);

export default useSendOTPMutation;
