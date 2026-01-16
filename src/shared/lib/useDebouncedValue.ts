/**
 * 만든 이유
 * - 검색어 입력 등 "연속 입력"에서 매 타이핑마다 URL/쿼리 요청을 보내면 UX와 트래픽이 나빠진다.
 * - 특정 delay(ms) 이후에만 값이 확정되도록 만들어, Search UX를 안정화한다.
 */

import { useEffect, useState } from 'react';

export const useDebouncedValue = <T>(value: T, delayMs: number) => {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(timer);
  }, [value, delayMs]);

  return debounced;
};
