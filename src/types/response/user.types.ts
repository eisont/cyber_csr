import { Gender } from '@/types/response';

type HairType = {
  color: string;
  type: string;
};
type CoordinatesType = { lat: number; lng: string };
type AddressType = {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: CoordinatesType;
  country: string;
};
type BankType = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};
type CompanyType = {
  department: string;
  name: string;
  title: string;
  address: AddressType;
};
type CryptoType = {
  coin: string;
  wallet: string;
  network: string;
};

export type UserResponse = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairType;
  ip: string;
  address: AddressType;
  macAddress: string;
  university: string;
  bank: BankType;
  company: CompanyType;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: CryptoType;
  role: string;
};

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
