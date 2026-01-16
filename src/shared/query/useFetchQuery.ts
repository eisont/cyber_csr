import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { ApiError } from '@/shared/api';
import { axiosInstance } from '@/shared/api/axios';

type Params = Record<string, unknown>;

interface UseFetchQueryParams<TData> extends Omit<UseQueryOptions<TData, ApiError>, 'queryFn'> {
  url: string;
  params?: Params;
}

export const useFetchQuery = <TData>({
  queryKey,
  url,
  params,
  ...options
}: UseFetchQueryParams<TData>) => {
  return useQuery<TData, ApiError>({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: async () => {
      const res = await axiosInstance.get<TData>(url, { params });
      return res.data;
    },
    ...options,
  });
};
