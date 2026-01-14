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
    search: (search: string) => ['products', 'search', search] as const,
    categoryList: ['products', 'category', 'list'] as const,
    byCategory: (category: string, params?: unknown) =>
      ['products', 'category', category, params] as const,
  },
  recipes: {
    list: ['recipes', 'list'] as const,
  },
  carts: {
    detail: (id: number) => ['cart', 'detail', id] as const,
  },
};
