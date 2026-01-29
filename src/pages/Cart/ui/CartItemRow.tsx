/**
 * 만든 이유
 * - 장바구니 상품 한 줄(Row)을 담당
 * - Day3에서 수량 변경 / 삭제 로직을 이 컴포넌트 기준으로 확장한다.
 */

import { removeFromCart, updateCartQuantity } from '@/shared/lib/cart';
import type { CartItem } from '@/shared/types';

type Props = { item: CartItem; onChange: () => void };

const CartItemRow = ({ item, onChange }: Props) => {
  const isStockLimit = item.quantity >= item.stock;
  return (
    <div className="flex flex-col  rounded-md border p-4 gap-2">
      <div className="flex items-center">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="h-16 w-16 rounded object-cover"
          loading="lazy"
        />

        <div className="flex-1">
          <div className="font-medium">{item.title}</div>
          <div className="text-sm text-gray-500">$ {item.price.toLocaleString()}</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="h-8 w-8 rounded border cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={() => {
              updateCartQuantity(item.id, item.quantity - 1);
              onChange();
            }}
            disabled={item.quantity <= 1}
          >
            -
          </button>

          <div className="w-10 text-center text-sm">{item.quantity}</div>

          <button
            type="button"
            className="h-8 w-8 rounded border cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={() => {
              updateCartQuantity(item.id, item.quantity + 1);
              onChange();
            }}
            disabled={item.quantity >= item.stock}
          >
            +
          </button>
        </div>

        <button
          type="button"
          className="ml-3 text-sm text-red-500 cursor-pointer"
          onClick={() => {
            if (confirm('정말 이 상품을 장바구니에서 삭제할까요?')) {
              removeFromCart(item.id);
              onChange();
            }
          }}
        >
          삭제
        </button>
      </div>
      {isStockLimit && <div className="text-orange-500 text-xs">재고 한도에 도달했어요.</div>}
    </div>
  );
};

export default CartItemRow;
