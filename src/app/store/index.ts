import { configureStore, createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { AuthLoginRequest, UserType } from '@/shared/types/response';

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

const initialLoginDataState: AuthLoginRequest = {
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

type UserInfoState = UserType | null;
const initialUserInfoState: UserInfoState = null;

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialUserInfoState as UserInfoState,
  reducers: {
    setUserInfo: (_, action: PayloadAction<UserType>) => action.payload, // 전체 객체 교체
    clearUserInfo: () => null,
  },
});

export const store = configureStore({
  reducer: {
    productId: productIdSlice.reducer,
    search: searchSlice.reducer,
    loginData: loginDataSlice.reducer,
    userInfo: userInfoSlice.reducer,
  },
});
