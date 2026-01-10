export const QUERY_KEYS = {
  users: {
    list: (params?: unknown) => ['users', 'list', params] as const,
    detail: (id: number) => ['users', 'detail', id] as const,
  },
  products: {
    list: (params?: unknown) => ['products', 'list', params] as const,
    detail: (id: number) => ['products', 'detail', id] as const,
    search: (search: string) => ['products', 'search'] as const,
    categoryList: () => ['products', 'category', 'list'] as const,
    byCategory: (category: string, params?: unknown) =>
      ['products', 'category', category, params] as const,
  },
  recipes: {
    list: (params?: unknown) => ['recipes', 'list', params] as const,
    detail: (id: number) => ['recipes', 'detail'] as const,
  },
  carts: {
    detail: (id: number) => ['cart', 'detail', id] as const,
  },
};
