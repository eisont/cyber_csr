import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { axiosInstance } from '@/shared/api/axios';

type Params = Record<string, unknown>;

interface UseFetchQueryParams<TData> extends Omit<UseQueryOptions<TData, AxiosError>, 'queryFn'> {
  url: string;
  params?: Params;
}

export function useFetchQuery<TData>({
  queryKey,
  url,
  params,
  ...options
}: UseFetchQueryParams<TData>) {
  return useQuery<TData, AxiosError>({
    queryKey: Array.isArray(queryKey) ? queryKey : [queryKey],
    queryFn: async () => {
      const res = await axiosInstance.get<TData>(url, { params });
      return res.data;
    },
    ...options,
  });
}
