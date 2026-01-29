/**
 * 만든 이유
 * - Toast 전역 상태(visible/message)와 타이머를 "모듈 싱글톤"으로 관리한다.
 * - subscribe/emit 패턴으로 React(ToastRender)가 상태 변경을 구독할 수 있게 된다.
 */

export type ToastState = {
  visible: boolean;
  message: string;
};

type Listener = () => void;

let state: ToastState = { visible: false, message: '' };
let timeoutId: number | null = null;

const listeners = new Set<Listener>();

const emit = () => {
  listeners.forEach((listeners) => listeners());
};

const getSnapshot = (): ToastState => state;

const subscribe = (listener: Listener) => {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
};

const hide = () => {
  if (timeoutId !== null) {
    window.clearTimeout(timeoutId);
    timeoutId = null;
  }

  state = { ...state, visible: false };
  emit();
};

const show = (message: string, durationMs: number = 2000) => {
  // 연타 안정화: 이전 타이머가 있으면 끊고 새로 시작
  if (timeoutId !== null) {
    window.clearTimeout(timeoutId);
    timeoutId = null;
  }

  state = { visible: true, message };
  emit();

  timeoutId = window.setTimeout(() => {
    hide();
  }, durationMs);
};

export const toastStore = {
  getSnapshot,
  subscribe,
  show,
  hide,
};
