/**
 * 만든 이유
 * - Week 2 부터는 Explore 페이지가 URL 상태(q/limit/skip/sort)에 따라
 *  상품 목록을 "단일 진실 소스(Single Source of Truth)"로 패칭한다.
 * - ProductsBox가 내부에서 다시 패칭하면:
 *  1) 중복 네트워크 요청
 *  2) queryKey 충돌/캐시 혼선
 *  3) URL 상태 변경 시 화면 불일치
 * 같은 문제가 생긴다.
 * - 그래서 ProductsBox는 "렌더 전용"으로 바꾸고, products 배열만 받아서 그린다.
 */

import type { Product } from '@/shared/types';
import ProductItem from '@/shared/ui/ProductItem';

type ProductsBoxProps = {
  products: Array<Product>;
};

const ProductsBox = ({ products }: ProductsBoxProps) => {
  return (
    <div className="w-207.75">
      <div className="flex w-full gap-4 flex-wrap">
        {products?.map((el) => (
          <ProductItem key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default ProductsBox;
