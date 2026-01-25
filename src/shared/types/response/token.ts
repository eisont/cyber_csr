export type AuthLoginRequest = {
  username: string;
  password: string;
  expiresInMins: number;
};

export type AuthLoginResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string | null;
  refreshToken: string | null;
};
