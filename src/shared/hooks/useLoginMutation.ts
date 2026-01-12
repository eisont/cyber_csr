import { useQueryClient } from '@tanstack/react-query';

import { tokenStorage } from '@/shared/auth/tokenStorage';
import { useMutate } from '@/shared/query/useMutates';
import { AuthLoginRequest, AuthLoginResponse } from '@/types/response/token.types';

export const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutate<AuthLoginResponse, { method: 'post'; url: string; data: AuthLoginRequest }>({
    onSuccess: (data) => {
      tokenStorage.set(String(data.accessToken));

      queryClient.invalidateQueries({ queryKey: ['auth', 'me'], exact: false });
    },
  });
};
