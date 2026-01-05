import axios from 'axios';
import { useEffect, useState } from 'react';

import { useAppSelector } from '@/shared/hooks';

type UseUserInfoFetchProps = {
  enabled?: boolean;
};

export const useUserInfoFetch = <TData = unknown>({
  enabled = true,
}: UseUserInfoFetchProps): readonly [TData | null, boolean] => {
  const accessToken = useAppSelector((s) => s.userToken.accessToken);

  const [userInfo, setUserInfo] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!enabled || !accessToken) return;

    const run = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get('https://dummyjson.com/user/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserInfo(res.data);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    run();
  }, [enabled, accessToken]);

  return [userInfo, isLoading] as const;
};
