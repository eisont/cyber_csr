/**
 * 만든 이유
 * - 장바구니 상품 한 줄(Row)을 담당
 * - Day3에서 수량 변경 / 삭제 로직을 이 컴포넌트 기준으로 확장한다.
 */

import { CartItem } from '@/shared/types/response';

type Props = { item: CartItem };

const CartItemRow = ({ item }: Props) => {
  return (
    <div className="flex items-center gap-4 rounded-md border p-4">
      <img
        src={item.thumbnail}
        alt={item.title}
        className="h-16 w-16 rounded object-cover"
        loading="lazy"
      />

      <div className="flex-1">
        <div className="font-medium">{item.title}</div>
        <div className="text-sm text-gray-500">₩{item.price.toLocaleString()}</div>
      </div>

      <div className="text-sm">수량 {item.quantity}</div>
    </div>
  );
};

export default CartItemRow;
