import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosRequestConfig } from 'axios';

import { axiosInstance } from '@/shared/api/axios';

type HttpMethod = 'post' | 'put' | 'patch' | 'delete';

export type MutateRequest<TBody = unknown> = {
  method: HttpMethod;
  url: string;
  params?: Record<string, unknown>;
  data?: TBody;
  config?: AxiosRequestConfig;
};

export const useMutate = <TData = unknown, TVariables = MutateRequest, TError = unknown>(options?: {
  invalidateKeys?: Array<readonly unknown[]>;
  onSuccess?: (data: TData, variables: TVariables) => void;
  onError?: (error: TError, variables: TVariables) => void;
  onSettled?: (data: TData | undefined, error: TError | null, variables: TVariables) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation<TData, TError, TVariables>({
    mutationFn: async (variables) => {
      const v = variables as unknown as MutateRequest;

      const res = await axiosInstance.request<TData>({
        method: v.method,
        url: v.url,
        params: v.params,
        data: v.data,
        ...(v.config ?? {}),
      });

      return res.data;
    },

    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);

      options?.invalidateKeys?.forEach((key) => {
        queryClient.invalidateQueries({ queryKey: key, exact: true });
      });
    },

    onError: (error, variables) => {
      options?.onError?.(error, variables);
    },

    onSettled: (data, error, variables) => {
      options?.onSettled?.(data, error ?? null, variables);
    },
  });
};
