/**
 * 만든 이유
 * - 장바구니 담기/조회 정책을 UI에서 분리한다.
 * - sessionStorage를 단일 전입점으로 관리해 사이드 이펙트를 줄인다.
 */

import type { CartItem } from '@/shared/types';

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

/**
 * 만든 이유
 * - 장바구니 수량 변경을 단일 함수로 통제한다.
 * - 최소 1, 최대 stock 정책을 여기서 강제한다.
 */
export const updateCartQuantity = (id: number, nextQuantity: number) => {
  const current = getCartItems();

  const next = current.map((c) => {
    if (c.id !== id) return c;

    const clamped = Math.min(Math.max(nextQuantity, 1), c.stock);
    return { ...c, quantity: clamped };
  });

  setCartItems(next);
};

/**
 * 만든 이유
 * - 장바구니에서 특정 상품을 제거한다.
 */
export const removeFromCart = (id: number) => {
  const current = getCartItems();
  setCartItems(current.filter((c) => c.id !== id));
};

/**
 * 만든 이유
 * - UI에서 합계를 매번 계산하지 않도록 도메인 유틸로 분리한다.
 * - 총 수량/총 금액을 한 번에 계산해준다.
 */
export const getCartSummary = () => {
  const items = getCartItems();

  const totalQuantity = items.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrice = items.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

  return { totalQuantity, totalPrice };
};
