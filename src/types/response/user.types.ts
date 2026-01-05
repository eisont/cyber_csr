import { RootState } from '@/app/store';
import { Gender } from '@/types/response';

type LoginDataState = RootState['loginData'];

export type UserInfoResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  image: string;
  accessToken: string;
  refreshToken: string;
};
