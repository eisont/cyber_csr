/**
 * 만든 이유
 * - 컴포넌트들은 Toast의 내부 상태/타이머를 몰라도 된다.
 * - showToast(message) 한 줄로 전역 Toast를 띄우는 "명령 API"만 제공한다.
 */

import { toastStore } from '@/shared/ui/Toast/toastStore';

export const useToast = () => {
  const showToast = (message: string, durationMs?: number) => {
    toastStore.show(message, durationMs);
  };

  const hideToast = () => {
    toastStore.hide();
  };

  return { showToast, hideToast };
};
