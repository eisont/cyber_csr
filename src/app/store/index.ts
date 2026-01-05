import type { PayloadAction } from '@reduxjs/toolkit';
import { configureStore, createSlice } from '@reduxjs/toolkit';

import { UserInfoResponse } from '@/types/response';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const productIdSlice = createSlice({
  name: 'productId', // 이름
  initialState: 'beauty', // 초기값
  reducers: {
    // 상태가 변하는 값
    getProductId: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const searchSlice = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchData: (_, action: PayloadAction<string>) => action.payload,
  },
});

type LoginRequestBody = {
  username: string;
  password: string;
  expiresInMins: number;
};

const initialLoginDataState: LoginRequestBody = {
  username: '',
  password: '',
  expiresInMins: 30,
};

export const loginDataSlice = createSlice({
  name: 'loginData',
  initialState: initialLoginDataState,
  reducers: {
    setLoginData: (_, { payload }) => payload,
  },
});

type UserTokenState = {
  accessToken: string | null;
  refreshToken?: string | null;
};
const initialUserTokenState: UserTokenState = {
  accessToken: null,
  refreshToken: null,
};

export const userTokenSlice = createSlice({
  name: 'userToken',
  initialState: initialUserTokenState,
  reducers: {
    setUserToken: (_, action: PayloadAction<UserTokenState>) => action.payload, // 전체 객체 교체
  },
});

type UserInfoState = UserInfoResponse | null;
const initialUserInfoState: UserInfoState = null;

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialUserInfoState as UserInfoState,
  reducers: {
    setUserInfo: (_, action: PayloadAction<UserInfoResponse>) => action.payload, // 전체 객체 교체
    clearUserInfo: () => null,
  },
});

export const store = configureStore({
  reducer: {
    productId: productIdSlice.reducer,
    search: searchSlice.reducer,
    loginData: loginDataSlice.reducer,
    userToken: userTokenSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});
