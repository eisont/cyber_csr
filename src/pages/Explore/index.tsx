/**
 * 만든 이유
 * Explore는 "상품 목록"의 중심 페이지다.
 * Week 2 목표는 URL(쿼리스트링)을 상태로 삼아
 *  1) 페이지네이션(skip/limit)
 *  2) 검색(q)
 *  3) (추후) 정렬(sort)
 *  을 새로고침/공유 가능하게 유지하는 것이다.
 * - 또한 Products 패칭을 Explore로 통합하여,
 *  ProductsBox 내부에서의 중복 패칭을 제거하고 데이터 흐름을 단순화했다.
 */

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation, useParams, useSearchParams } from 'react-router-dom';

import { RootState } from '@/app/store';
import Breadcrumb from '@/pages/Explore/ui/Breadcrumb';
import CategorySidebar from '@/pages/Explore/ui/CategorySidebar';
import ProductsBox from '@/pages/Explore/ui/ProductsBox';
import Recipes from '@/pages/Recipes';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { useDebouncedValue } from '@/shared/lib/useDebouncedValue';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import { ProductsListResponse, RecipesType } from '@/shared/types/response';
import { EmptyState, ErrorState, Pagination, SkeletonBox } from '@/shared/ui';

/** URL 파라미터를 안전하게 number로 파싱하기 위한 유틸(숫자 아닌 값이 들어오면 기본값 사용) */
const parseNumberParam = (value: string | null, fallback: number) => {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
};

const Explore = () => {
  const params = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const productId = useSelector((state: RootState) => state.productId);

  /**
   * 검색 input은 즉시 반응하고, URL 반영은 디바운스된 값으로만 수행한다.
   */
  const q = searchParams.get('q') ?? '';
  const [inputQ, setInputQ] = useState(q);

  // URL이 뒤로가기/앞으로가기로 바뀌면 input도 동기화
  useEffect(() => {
    setInputQ(q);
  }, [q]);

  const debouncedQ = useDebouncedValue(inputQ, 300);

  const rawLimit = parseNumberParam(searchParams.get('limit'), 6);
  const rawSkip = parseNumberParam(searchParams.get('skip'), 0);

  const safeLimit = rawLimit > 0 ? rawLimit : 6;
  const safeSkip = rawSkip > 0 ? rawSkip : 0;
  /**
   * Week2 Day1: URL을 상태로 사용
   * - q: 검색어 (있으면 search endpoint 사용)
   * - limit/skip: 페이지 네이션
   * - sort: Day4에서 본격 적용 (Day1은 queryKey에 포함만 해도 OK)
   */
  const limit = safeLimit;
  const skip = safeSkip;
  const order = searchParams.get('order') ?? '';

  /**
   * queryKey에 "params 객체"를 넣어야 캐시가 정확히 분리된다.
   * - q/limit/skip/sort가 바뀌면 다른 queryKey가 되어 자동 재요청
   */
  const listParams = { q, limit, skip, order };

  /**
   * debouncedQ가 확정되면 URL의 q를 갱신하고, 검색 조건이 바뀌었으니 skip은 0으로 리셋한다.
   */
  useEffect(() => {
    // 현재 URL q와 동일하면 불필요 업데이트 방지
    if (debouncedQ === q) return;

    const nextParams = new URLSearchParams(searchParams);

    // q가 빈 문자열이면 파라미터 제거 (깔끔한 URL)
    if (debouncedQ.trim().length === 0) {
      nextParams.delete('q');
    } else {
      nextParams.set('q', debouncedQ.trim());
    }

    // 검색 조건 변경 시 첫 페이지로
    nextParams.set('skip', '0');

    // limit은 유지
    nextParams.set('limit', String(limit));

    setSearchParams(nextParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQ]);

  /**
   * endpoint 분기 규칙
   * - q가 있으면: /products/search?q=...
   * - q가 없으면: /products/category/:category
   *
   * 주의:
   * - dummyJson은 search와 category를 동시에 서버에서 합치는 지원이 제한적일 수 있다.
   * - 그래서 우선순위를 q > category로 둔다.(검색어가 있으면 검색을 우선)
   */
  const productsUrl =
    q.trim().length > 0
      ? SERVICE_URLS.PRODUCTS.SEARCH
      : SERVICE_URLS.PRODUCTS.BY_CATEGORY(productId);

  const productsParams = q.trim().length > 0 ? { q, limit, skip } : { limit, skip };

  const {
    data: productsData,
    isLoading: isProductsLoading,
    isError: isProductsError,
    error: productsError,
    refetch: refetchProducts,
  } = useFetchQuery<ProductsListResponse>({
    queryKey: QUERY_KEYS.products.explore(productId, listParams),
    url: productsUrl,
    params: productsParams,
    enabled: location.pathname !== '/recipes',
  });

  const productList = productsData?.products ?? [];

  /**
   * 만든 이유
   * - 페이지네이션은 URL의 skip/limit를 변경하는 것으로 구현한다.
   * - 이렇게 하면 새로고침/공유/뒤로가기에서도 동일한 상태가 유지된다.
   */

  // productsData가 없을 때를 대비해 현재 페이지 길이로 fallback
  const total = productsData?.total ?? productList.length;

  const totalPages = total > 0 ? Math.ceil(total / limit) : undefined;

  // 현재 페이지(1부터 시작)
  const currentPage = Math.floor(skip / limit) + 1;

  // 마지막 페이지 여부 (total이 있을 때만 정확)
  const isLastPage = total > 0 ? skip + limit >= total : false;

  // 이전 페이지 가능 여부
  const canPrev = skip > 0;

  // 다음 페이지 가능 여부
  const canNext = total > 0 ? !isLastPage : productList.length === limit;

  /**
   * URL 쿼리스트링 업데이트 유틸
   * - 기존 q/sort/limit를 유지하면서 skip만 변경한다.
   * - 값은 string으로 넣어야 URLSearchParams가 정상 동작한다.
   */
  const updateSkip = (nextSkip: number) => {
    const safeSkip = Math.max(nextSkip, 0);

    // 기존 파라미터를 기반으로 새 params 생성(보존)
    const nextParams = new URLSearchParams(searchParams);

    nextParams.set('skip', String(safeSkip));
    nextParams.set('limit', String(limit)); // limit도 항상 유지(안전)

    // q/sort는 이미 searchParams에 있으면 그대로 남는다.
    // (없으면 set하지 않아도 됨)

    setSearchParams(nextParams);
  };

  const handlePrevPage = () => {
    updateSkip(skip - limit);
  };

  const handleNextPage = () => {
    updateSkip(skip + limit);
  };

  /**
   * 정렬 변경 시 URL 업데이트
   * - sort가 바뀌면 목록 조건이 바뀌므로 skip은 0으로 리셋한다.
   * - q/limit은 유지한다.
   */
  const updateSort = (nextSortBy: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (nextSortBy.trim().length === 0) {
      nextParams.delete('order');
    } else {
      nextParams.set('order', nextSortBy);
    }

    // 정렬 변경은 첫 페이지로
    nextParams.set('skip', '0');
    nextParams.set('limit', String(limit));

    setSearchParams(nextParams);
  };

  /**
   * 클라이언트 정렬
   * - 서버 정렬이 제한적인 환경(dummyJson)을 고려해, 우선 현재 페이지 데이터(productList)에 대해서만 정렬한다.
   * - 원본 배열을 mutate 하지 않도록 복사 후 order한다.
   */
  const getSortedProducts = (products: typeof productList, sortKey: string) => {
    const copied = [...products];

    switch (sortKey) {
      case 'asc':
        return copied.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
      case 'desc':
        return copied.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));

      default:
        return products;
    }
  };

  const sortedProductList = getSortedProducts(productList, order);

  /**
   * Recipes 패칭(기존 로직 유지)
   * - recipes는 recipes 라우트에서만 필요하므로 enabled로 제어
   */
  const { data: recipesData } = useFetchQuery<RecipesType>({
    queryKey: QUERY_KEYS.recipes.list,
    url: SERVICE_URLS.RECIPES.LIST,
    enabled: location.pathname === '/recipes',
  });
  const recipesList = recipesData?.recipes ?? [];

  return (
    <div className="flex justify-center">
      <div className="w-280">
        <Breadcrumb />

        {!params.id ? (
          <div className="flex justify-between">
            <CategorySidebar />

            <div className="flex flex-col">
              <div className="flex items-center text-[#6c6c6c] cursor-default">
                Selected Products:
                <div className="ml-1.25 text-[20px] font-normal text-black ">
                  {location.pathname === '/recipes' ? recipesList?.length || 0 : total}
                </div>
              </div>

              {/**
               * Week2 Day1 핵심:
               * - ProductsBox는 이제 "렌더 전용" 컴포넌트가 된다(중복 패칭 제거).
               * - 로딩/에러/empty 상태 UI는 Explore에서 통제하는 게 가장 갈끔하다.
               *
               * 현재는 ProductsBox가 내부에서 Skeleton(ProductItem isLoading)을 보여주던 구조라서,
               * 우선 isLoading만 props로 전달해서 기존 UX를 유지할 수도 있다.
               * 다음 스텝에서 공통 Skeleton/Error/Empty로 완전히 통일하면 더 좋아진다.
               */}
              {location.pathname !== '/recipes' ? (
                <>
                  <div className="mb-3 flex items-center gap-2 w-207.75">
                    <input
                      value={inputQ}
                      onChange={(e) => setInputQ(e.target.value)}
                      placeholder="검색어를 입력해주세요."
                      className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
                    />

                    {inputQ.length > 0 ? (
                      <button
                        type="button"
                        onClick={() => setInputQ('')}
                        className="shrink-0 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
                      >
                        Clear
                      </button>
                    ) : null}

                    {/* 정렬 select 추가 */}
                    <select
                      value={order}
                      onChange={(e) => updateSort(e.target.value)}
                      className="shrink-0 rounded-md border border-gray-200 bg-white px-3 py-2 text-sm"
                    >
                      <option value="">기본</option>
                      <option value="asc">가격 낮은순</option>
                      <option value="desc">가격 높은순</option>
                    </select>
                  </div>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    canPrev={canPrev}
                    canNext={canNext}
                    onPrev={handlePrevPage}
                    onNext={handleNextPage}
                    isLoading={isProductsLoading}
                  />

                  {/* 로딩 */}
                  {isProductsLoading ? (
                    <div className="w-207.75">
                      <div className="flex w-full gap-4 flex-wrap">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <SkeletonBox key={i} className="w-66.5 h-108 bg-[#f6f6f6] my-2.5" />
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {/* 에러 */}
                  {!isProductsLoading && isProductsError ? (
                    <div className="w-207.75">
                      <ErrorState
                        title="상품을 불러오지 못했어."
                        message={
                          typeof (productsError as { message?: unknown })?.message === 'string'
                            ? ((productsError as { message?: unknown }).message as string)
                            : '잠시 후 다시 시도해줘.'
                        }
                        onRetry={() => refetchProducts()}
                      />
                    </div>
                  ) : null}

                  {/* 빈값 */}
                  {!isProductsLoading && !isProductsError && productList.length === 0 ? (
                    <div className="w-207.75">
                      <EmptyState
                        title="상품이 없어."
                        description="검색 조건이나 카테고리를 바꿔보자."
                      />
                    </div>
                  ) : null}

                  {/* 성공 */}
                  {!isProductsLoading && !isProductsError && productList.length > 0 ? (
                    <ProductsBox products={sortedProductList} />
                  ) : null}
                </>
              ) : (
                <Recipes />
              )}
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Explore;
