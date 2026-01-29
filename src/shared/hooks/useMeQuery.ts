import { getAccessToken } from '@/shared/api';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import type { UserType } from '@/shared/types';

const useMeQuery = () => {
  const token = getAccessToken();

  return useFetchQuery<UserType>({
    queryKey: token ? QUERY_KEYS.auth.me(token) : ['auth', 'me', 'no-token'],
    url: SERVICE_URLS.AUTH.ME,
    enabled: !!token,
  });
};

export default useMeQuery;
