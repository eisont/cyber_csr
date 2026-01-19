/**
 * 만든 이유
 * - 상품 상세 페이지 하단에 "동일 카테고리 관련 상품"을 노출해 탐색 흐름을 이어준다.
 * - 상세 페이지 문맥에 종속된 UI이므로 ProductDetail 내부 UI로 둔다.
 * - Week2에서 만든 공통 상태 UI (Skeleton/Error/Empty) 패턴을 그대로 재사용한다.
 */

import { SERVICE_URLS } from '@/shared/api/endpoints';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import { Product, ProductsListResponse } from '@/shared/types/response';
import { EmptyState, ErrorState, SkeletonBox } from '@/shared/ui';
import ProductItem from '@/shared/ui/ProductItem';

type RelateProductsProps = {
  category: Product['category'];
  currentProductId: Product['id'];
};

export const RelatedProducts = ({ category, currentProductId }: RelateProductsProps) => {
  const { data, isLoading, isError, error, refetch } = useFetchQuery<ProductsListResponse>({
    queryKey: QUERY_KEYS.products.byCategory(category, { limit: 12, skip: 0 }),
    url: SERVICE_URLS.PRODUCTS.BY_CATEGORY(category),
    params: { limit: 12, skip: 0 },
    enabled: Boolean(category),
  });

  const list = (data?.products ?? []).filter((p) => p.id !== currentProductId).slice(0, 6);

  if (isLoading) {
    return (
      <section className="mt-10">
        <div className="mb-3 text-lg font-semibold">Related Products</div>
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonBox key={i} className="h-65 w-full" />
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    const message =
      typeof (error as { message?: unknown })?.message === 'string'
        ? ((error as { message?: unknown }).message as string)
        : '잠시 후 다시 시도해주세요.';

    return (
      <section className="mt-10">
        <ErrorState
          title="관련 상품을 불러오지 못했습니다."
          message={message}
          onRetry={() => refetch()}
        />
      </section>
    );
  }

  if (list.length === 0) {
    return (
      <section className="mt-10">
        <EmptyState title="관련 상품이 없습니다." description="다른 카테고리 상품을 확인하세요." />
      </section>
    );
  }

  return (
    <section className="mt-10">
      <div className="mb-3 text-lg font-semibold">Related Products</div>
      <div className="grid grid-cols-4 gap-3">
        {list.map((p) => (
          // ProductItem은 내부에서 상세 이동 + 쿼리 유지 처리됨
          <ProductItem key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};
