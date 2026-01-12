export const QUERY_KEYS = {
  auth: {
    login: (name: string) => ['auth', 'login', name] as const,
    me: (token: string) => ['user', 'me', token] as const,
  },

  users: {
    list: ['users', 'list'] as const,
    detail: (id: number) => ['users', 'detail', id] as const,
  },
  products: {
    list: (params?: unknown) => ['products', 'list', params] as const,
    detail: (id: number) => ['products', 'detail', id] as const,
    search: (search: string) => ['products', 'search', search] as const,
    categoryList: ['products', 'category', 'list'] as const,
    byCategory: (category: string, params?: unknown) =>
      ['products', 'category', category, params] as const,
  },
  recipes: {
    list: ['recipes', 'list'] as const,
    detail: (id: number) => ['recipes', 'detail', id] as const,
  },
  carts: {
    detail: (id: number) => ['cart', 'detail', id] as const,
  },
};
