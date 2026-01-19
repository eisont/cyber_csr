/**
 * 만든 이유
 * - sessionStorage에 저장된 최근 본 상품 목록을 Explore 상단에 노출에 재탐색 UX를 개선한다.
 * - 저장 정책(중복 제거/최대 개수)은 shared/lib에서 관리하고, 여기서는 UI만 책임진다.
 */

import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import { getRecentlyViewedProducts } from '@/shared/lib/recentlyViewed';
import type { Product } from '@/shared/types/response';
import ProductItem from '@/shared/ui/ProductItem';

type RecentlyViewedProductsProps = {
  maxVisible?: number;
};

export const RecentlyViewedProducts = ({ maxVisible = 6 }: RecentlyViewedProductsProps) => {
  const location = useLocation();
  const [list, setList] = useState<Product[]>([]);

  useEffect(() => {
    const items = getRecentlyViewedProducts();
    setList(items.slice(0, maxVisible));
  }, [maxVisible, location.key]);

  if (list.length === 0) return null;

  return (
    <section className="mb-6 w-207.75">
      <div className="mb-3 text-lg font-semibold">최근 본 상품</div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {list.map((p) => (
          <div key={p.id} className="shrink-0 w-66.5">
            <ProductItem {...p} />
          </div>
        ))}
      </div>
    </section>
  );
};
