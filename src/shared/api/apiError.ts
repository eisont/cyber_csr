/**
 * 만든 이유
 * - axios 에러 형태는 상황(네트워크/서버응답/타임아웃)에 따라 구조가 달라서,
 *   화면/훅에서 일관된 방식으로 처리하기가 어렵다.
 * - 그래서 "우리 프로젝트 표준 에러 형태(ApiError)"로 변환해,
 *   UI(ErrorState 등)에서 message/status를 똑같이 소비할 수 있게 만든다.
 */

import { AxiosError } from 'axios';

/**
 * 서버가 내려줄 수 있는 에러 바디를 "unknown"에서 안전하게 읽기 위해 정의.
 * dummyJson은 message/error 같은 필드를 주는 경우가 많아서 기본 케이스에 포함.
 */
type ApiErrorResponseBody = {
  message?: unknown;
  error?: unknown;
  code?: unknown;
};

/**
 * 프로젝트 전역에서 사용할 표준 에러 타입
 * - status: HTTP status code (없을 수도 있음: 네트워크 에러 등)
 * - message: 사용자에게 보여줄 메시지 (항상 존재)
 * - code: 서버에서 제공하는 코드가 있다면(선택)
 * - raw: 디버깅을 위해 원본 에러를 담을 수 있지만, 화면에서는 사용하지 않는 것을 권장
 */
export type ApiError = {
  status?: number;
  message: string;
  code?: string;
  raw?: unknown;
};

/**
 * unknown 값을 "객체인지" 안전하게 판별하는 유틸
 * - any를 쓰지 않고 타입 가드로 안전하게 좁힌다.
 */
const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null;
};

/**
 * 서버 응답 바디에서 message/error/code를 안전하게 뽑아내는 함수
 */
const pickMessageFromBody = (body: unknown): { message?: string; code?: string } => {
  if (isRecord(body)) return {};

  const candidate = body as ApiErrorResponseBody;

  const message =
    typeof candidate.message === 'string'
      ? candidate.message
      : typeof candidate.error === 'string'
        ? candidate.error
        : undefined;

  const code = typeof candidate.code === 'string' ? candidate.code : undefined;

  return { message, code };
};

/**
 * axios 에러 또는 일반 에러를 ApiError로 통일한다.
 */
export const toApiError = (error: unknown): ApiError => {
  // AxiosError<unknown>로 받되, 내부는 unknown으로 안전하게 처리한다.
  const axiosErr = error as AxiosError<unknown>;

  // 1) HTTP 응답이 있는 경우 (서버가 status를 준 경우)
  const status = axiosErr?.response?.status;
  const body = axiosErr?.response?.data;

  const { message: messageFromServer, code } = pickMessageFromBody(body);

  // 2) axios가 들고 있는 message
  const messageFromAxios = typeof axiosErr?.message === 'string' ? axiosErr.message : undefined;

  // 3) 최종 message 결정(반드시 string)
  const message = messageFromServer || messageFromAxios || '요청 처리 중 오류가 발생했습니다.';

  return {
    status,
    message,
    code,
    raw: error,
  };
};
