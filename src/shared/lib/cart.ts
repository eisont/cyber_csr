/**
 * 만든 이유
 * - 장바구니 담기/조회 정책을 UI에서 분리한다.
 * - sessionStorage를 단일 전입점으로 관리해 사이드 이펙트를 줄인다.
 */

import { CartItem } from '@/shared/types/response';

const STORAGE_KEY = `cartItems`;

// 안전하게 JSON 파싱
const safeParse = (raw: string | null): CartItem[] => {
  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as CartItem[]) : [];
  } catch {
    return [];
  }
};

export const getCartItems = (): CartItem[] => safeParse(sessionStorage.getItem(STORAGE_KEY));

export const setCartItems = (items: CartItem[]) => {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

/**
 * 만든 이유
 * - 같은 상품이면 quantity 증가
 * - quantity는 stock을 초과하지 않게 제한
 */
export const addToCart = (item: Omit<CartItem, 'quantity'>) => {
  const current = getCartItems();

  const existing = current.find((c) => c.id === item.id);

  if (!existing) {
    setCartItems([...current, { ...item, quantity: 1 }]);
    return;
  }

  const nextQuantity = Math.min(existing.quantity + 1, item.stock);

  const next = current.map((c) => (c.id === item.id ? { ...c, quantity: nextQuantity } : c));

  setCartItems(next);
};
