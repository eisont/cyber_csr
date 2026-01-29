import { useQueryClient } from '@tanstack/react-query';

import { setAccessToken } from '@/shared/api';
import { useMutate } from '@/shared/query/useMutates';
import type { AuthLoginRequest, AuthLoginResponse } from '@/shared/types';

const useLoginMutation = () => {
  const queryClient = useQueryClient();

  return useMutate<AuthLoginResponse, { method: 'post'; url: string; data: AuthLoginRequest }>({
    onSuccess: (data) => {
      setAccessToken(String(data.accessToken));

      queryClient.invalidateQueries({ queryKey: ['auth', 'me'], exact: false });
    },
  });
};

export default useLoginMutation;
