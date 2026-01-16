/**
 * 만든 이유
 * - QUERY_KEYS를 문자열로 여기저기 흩뿌리면 오타/불일치로 캐시가 깨진다.
 * - 앱 전체에서 동일 규칙으로 queryKey를 만들기 위해 "키 팩토리"를 둔다.
 * - 나중에 필터/정렬/페이지네이션이 붙어도 확장하기 쉽다.
 */

export const QUERY_KEYS = {
  auth: {
    me: (token: string) => ['user', 'me', token] as const,
  },

  users: {
    list: ['users', 'list'] as const,
  },
  products: {
    detail: (id: number) => ['products', 'detail', id] as const,
    /**
     * 검색도 페이지네이션/옵션이 붙을 수 있으므로 params까지 포함해 캐시 분리
     * (Day1에서는 q/limit/skip만 쓰지만, 확장 대비)
     */
    search: (search: string, params?: Record<string, unknown>) =>
      ['products', 'search', search, params] as const,

    categoryList: ['products', 'category', 'list'] as const,

    byCategory: (category: string, params?: Record<string, unknown>) =>
      ['products', 'category', category, params] as const,

    /**
     * Explore 전용 키
     * - Explore는 카테고리(productId) + URL 상태(q/limit/skip/sort)를 함께 사용한다.
     * - URL 상태가 바뀔 때마다 queryKey도 바뀌어야 "정확히" 재요청/캐시 분리가 된다.
     */
    explore: (category: string, params?: Record<string, unknown>) =>
      ['products', 'explore', category, params] as const,
  },

  recipes: {
    list: ['recipes', 'list'] as const,
  },
  carts: {
    detail: (id: number) => ['cart', 'detail', id] as const,
  },
} as const;
