import axios from 'axios';
import { useEffect } from 'react';

import { userTokenSlice } from '@/app/store';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';

export type TokenRequestBody = {
  username: string;
  password: string;
};
type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};
type UseTokenFetchProps = {
  query: string;
  body: TokenRequestBody;
  enabled?: boolean;
};
export const useTokenFetch = ({ query, body, enabled = true }: UseTokenFetchProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!enabled || !body.username) return;

    const fetchData = async () => {
      try {
        const res = await axios.post<TokenResponse>(query, body);
        dispatch(userTokenSlice.actions.setUserToken(res.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [body, query, dispatch, enabled]);
};
