import axios from 'axios';
import { useEffect } from 'react';

import { userTokenSlice } from '@/app/store';
import useAppDispatch from '@/shared/hooks/useAppDispatch';
import { AuthLoginRequest, AuthLoginResponse } from '@/types/response/token.types';

type UseTokenFetchProps = {
  query: string;
  body: AuthLoginResponse;
  enabled?: boolean;
};

const useTokenFetch = ({ query, body, enabled = true }: UseTokenFetchProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!enabled || !body.username) return;

    const fetchData = async () => {
      try {
        const res = await axios.post<AuthLoginRequest>(query, body);
        dispatch(userTokenSlice.actions.setUserToken(res.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [body, query, dispatch, enabled]);
};

export default useTokenFetch;
