/**
 * 만든 이유
 * - 장바구니 페이지의 진입점
 * - sessionStorage에 저장된 cartItems를 조회해 목록/빈 상태를 렌더한다.
 */

import { useMemo, useState } from 'react';

import CartItemRow from '@/pages/Cart/ui/CartItemRow';
import { getCartItems } from '@/shared/lib/cart';
import { EmptyState } from '@/shared/ui';

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => getCartItems());

  /**
   * 만든 이유
   * - cart 유틸은 sessionStorage를 변경하지만, React는 storage 변경을 자동으로 감지하니 않는다.
   * - 따라서 액션 이후 최신 값을 다시 읽어 state를 갱신한다.
   */
  const refreshCart = () => setCartItems(getCartItems());

  const summary = useMemo(() => {
    const totalQuantity = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
    const totalPrice = cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
    return { totalQuantity, totalPrice };
  }, [cartItems]);

  if (cartItems.length === 0) {
    return <EmptyState title="장바구니가 비어 있어요" description="상품을 담아보세요." />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="mb-6 text-xl font-semibold">장바구니</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItemRow key={item.id} item={item} onChange={refreshCart} />
        ))}
      </div>

      <div className="mt-6 rounded-md border p-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">총 수량</span>
          <span className="font-medium">{summary.totalQuantity}개</span>
        </div>

        <div className="mt-2 flex justify-between text-sm">
          <span className="text-gray-600">총 금액</span>
          <span className="font-semibold">$ {summary.totalPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
