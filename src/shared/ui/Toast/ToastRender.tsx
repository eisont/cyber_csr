/**
 * 만든 이유
 * - React가 toastStore(외부 상태)를 구독하도록 연결하는 렌더러다.
 * - 앱 전체에서 단 1번(main.tsx)만 렌더되어야 한다.
 */

import { useSyncExternalStore } from 'react';

import Toast from '@/shared/ui/Toast';
import { toastStore } from '@/shared/ui/Toast/toastStore';

const ToastRender = () => {
  const toastState = useSyncExternalStore(toastStore.subscribe, toastStore.getSnapshot);

  if (!toastState.visible) return null;

  return <Toast message={toastState.message} />;
};

export default ToastRender;
