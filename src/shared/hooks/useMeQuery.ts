import { SERVICE_URLS } from '@/shared/api/endpoints';
import { tokenStorage } from '@/shared/auth/tokenStorage';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import { UserType } from '@/shared/types/response';

const useMeQuery = () => {
  const token = tokenStorage.get();

  return useFetchQuery<UserType>({
    queryKey: token ? QUERY_KEYS.auth.me(token) : ['auth', 'me', 'no-token'],
    url: SERVICE_URLS.AUTH.ME,
    enabled: !!token,
  });
};

export default useMeQuery;
