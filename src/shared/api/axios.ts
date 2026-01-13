import axios from 'axios';

import { tokenStorage } from '@/shared/auth/tokenStorage';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = tokenStorage.get();

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
