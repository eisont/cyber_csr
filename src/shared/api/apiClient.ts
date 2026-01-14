/**
 * 만든 이유
 * - 모든 API 호출이 하나의 axios instance를 통과하도록 강제해서
 *  (1) baseURL/timeout/headers를 통일하고,
 *  (2) 토큰 자동 주입을 공통 처리하며,
 *  (3) 에러를 ApiError로 표준화해 UI 레이어가 단순해지게 한다.
 */

import axios from 'axios';

import { toApiError } from '@/shared/api/apiError';

// 환경변수로 baseURL을 바꿀 수 있게 해둔다.
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 *  세션 기반 토큰 저장(새로고침하면 유지되지만, 브라우저 종료 시 사라짐
 * - 요구사항: sessionStorage 사용
 * */
const TOKEN_KEY = 'cyber:accessToken';

/**
 * 토큰 접근 함수들을 따로 빼두면
 * - 나중에 access/refresh 구조로 확장하거나,
 * - 저장소(session/local) 변경할 때 영향 범위를 줄일 수 있다.
 */
export const getAccessToken = (): string | null => sessionStorage.getItem(TOKEN_KEY);

export const setAccessToken = (token: string): void => sessionStorage.setItem(TOKEN_KEY, token);

export const clearAccessToken = () => sessionStorage.removeItem(TOKEN_KEY);

/**
 * 프로젝트 전역에서 사용할 axios instance
 */
export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request Interceptor
 * - 요청 전에 토큰이 있으면 Authorization 헤더로 자동 주입
 * */

apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();

  // headers가 undefined일 수도 있어서 방어적으로 처리
  const nextConfig = { ...config };
  nextConfig.headers = nextConfig.headers ?? {};

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return nextConfig;
});

/**
 * Response Interceptor
 * - 에러를 ApiError로 표준화해서 throw
 * - (중요) 이후 모든 호출부는 catch에서 ApiError 형태로 다룰 수 있게 된다.
 */
apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    throw toApiError(err);
  },
);
