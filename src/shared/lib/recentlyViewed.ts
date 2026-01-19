/**
 * 만든 이유
 * - 최근 본 상품 데이터를 sessionStorage에 저장/조회하는 정책을 UI에서 분리한다.
 * - 중복 제거, 최대 개수 유지 같은 규칙을 단일 장소에서 관리한다.
 */

import type { Product } from '@/shared/types/response';

const STORAGE_KEY = 'recentlyViewedProducts';

type RecentlyViewedPayload = Product[];

const safeParse = (raw: string | null): RecentlyViewedPayload => {
  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed as RecentlyViewedPayload;
  } catch {
    return [];
  }
};

export const getRecentlyViewedProducts = () => {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  return safeParse(raw);
};

export const setRecentlyViewedProducts = (next: RecentlyViewedPayload) => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
};

export const addRecentlyViewedProduct = (product: Product, max = 10) => {
  const current = getRecentlyViewedProducts();

  // 중복 제거: id 같은 항목 제거 후 맨 앞에 추가
  const filtered = current.filter((p) => p.id !== product.id);

  const next = [product, ...filtered].slice(0, max);
  setRecentlyViewedProducts(next);

  return next;
};
