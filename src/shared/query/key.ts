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
