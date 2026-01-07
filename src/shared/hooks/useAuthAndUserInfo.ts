import { useEffect } from 'react';

import { userInfoSlice } from '@/app/store';
import { useAppSelector, useTokenFetch, useUserInfoFetch } from '@/shared/hooks';
import useAppDispatch from '@/shared/hooks/useAppDispatch';
import { UserInfoResponse } from '@/types/response';

const useAuthAndUserInfo = () => {
  const loginData = useAppSelector((state) => state.loginData);
  useTokenFetch({ query: 'https://dummyjson.com/user/login', body: loginData, enabled: true });
  const [userInfo] = useUserInfoFetch<UserInfoResponse>({ enabled: true });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userInfo) return;
    dispatch(userInfoSlice.actions.setUserInfo(userInfo));
  }, [userInfo, dispatch]);
};

export default useAuthAndUserInfo;
