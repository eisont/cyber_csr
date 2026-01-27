/**
 * 만든 이유
 * - 장바구니 페이지의 진입점
 * - sessionStorage에 저장된 cartItems를 조회해 목록/빈 상태를 렌더한다.
 */

import CartItemRow from '@/pages/Cart/ui/CartItemRow';
import { getCartItems } from '@/shared/lib/cart';
import { EmptyState } from '@/shared/ui';

const Cart = () => {
  const cartItems = getCartItems();

  if (cartItems.length === 0) {
    return <EmptyState title="장바구니가 비어 있어요" description="상품을 담아보세요." />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="mb-6 text-xl font-semibold">장바구니</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItemRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
