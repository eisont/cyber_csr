import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { RelatedProducts } from '@/pages/Explore/ui/ProductDetail/ui/RelatedProducts';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { addRecentlyViewedProduct } from '@/shared/lib/recentlyViewed';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import type { Product } from '@/shared/types/response';
import { EmptyState, ErrorState, SkeletonBox } from '@/shared/ui';

/**
 * 만든 이유
 * - /explore/:id 라우트에서 상품 상세 정보를 API로 조회해 보여준다.
 * - Week2에서 만든 공통 상태 UI(Skeleton/Error/Empty)를 그대호 사용해 로딩/에러 UX를 일관되게 유지한다.
 */
const ProductDetail = () => {
  const params = useParams();

  // params.id는 string | undefined 이므로 number로 안전변환
  const productId = useMemo(() => {
    const n = Number(params.id);
    return Number.isFinite(n) ? n : null;
  }, [params.id]);

  const {
    data: product,
    isLoading,
    isError,
    error,
    refetch,
  } = useFetchQuery<Product>({
    queryKey: productId
      ? QUERY_KEYS.products.detail(productId)
      : ['productId', 'detail', 'invalid'],
    url: productId ? SERVICE_URLS.PRODUCTS.DETAIL(productId) : '',
    enabled: Boolean(productId),
  });

  /**
   * 만든 이유
   * - 상품 상세 데이터를 성공적으로 불러온 시점에 최근 본 상품 목록(sessionStorage)에 기록한다.
   * - 중복 제거 + 최신 우선 정책을 addRecentlyViewedProduct에서 관리한다.
   */
  useEffect(() => {
    if (!product) return;
    addRecentlyViewedProduct(product, 20);
  }, [product]);
  if (!productId) {
    return <EmptyState title="잘못된 상품 경로입니다." description="상품 ID를 다시 확인해보자." />;
  }

  if (isLoading) {
    return <SkeletonBox className="w-250 h-70" />;
  }

  if (isError) {
    const message =
      typeof (error as { message?: unknown })?.message === 'string'
        ? ((error as { message?: unknown })?.message as string)
        : '잠시 후 다시 시도해보세요.';

    return (
      <ErrorState
        title="상품 상세를 불러오지 못했습니다."
        message={message}
        onRetry={() => refetch()}
      />
    );
  }

  if (!product) {
    return (
      <EmptyState
        title="상품 정보를 찾을 수 없습니다."
        description="목록으로 다시 돌아가 선택해주세요"
      />
    );
  }

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="flex gap-6 p-4">
          <div className="w-[320px] shrink-0 rounded-lg bg-[#f6f6f6] p-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-70 w-full rounded-md object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-3">
            <div className="text-2xl font-semibold">{product.title}</div>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div>카테고리: {product.category}</div>
              <div>평점: {product.rating}</div>
            </div>

            <div className="flex items-end gap-3">
              <div className="text-3xl font-bold">$ {product.price}</div>
              <div className="text-sm text-gray-600">할인율 {product.discountPercentage}%</div>
            </div>

            <div className="mt-2 text-sm leading-6 text-gray-700">{product.description}</div>
          </div>
        </div>
      </div>

      <RelatedProducts category={product.category} currentProductId={productId} />
    </>
  );
};

export default ProductDetail;
