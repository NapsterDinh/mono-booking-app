import { useQuery } from '@tanstack/react-query';

export interface QueryOptions {
  enabled?: boolean;
  staleTime?: number;
  refetchInterval?: number;
}

export default useQuery;
