import { login } from '@customer-web/request-providers/customer';
import { useMutation } from '@tanstack/react-query';

const useLoginMutation = () =>
  useMutation((payload: { username: string; password: string }) => {
    return login({
      userName: payload.username,
      password: payload.password,
    });
  });

export default useLoginMutation;
