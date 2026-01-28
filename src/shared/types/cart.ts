/**
 * 만든 이유
 * - 장바구니 도메인에서 사용할 데이터 구조를 명확히 정의한다.
 * UI, 저장소(sessionStorage), 계산 로직이 동일한 타입을 공유하게 한다.
 */

type ProductsType = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
};

export type CartResponse = {
  id: number;
  products: ProductsType[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
};

export type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
  stock: number;
};
