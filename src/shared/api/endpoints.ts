export const SERVICE_URLS = {
  AUTH: {
    LOGIN: '/auth/login',
    ME: '/auth/me',
  },

  USERS: {
    LIST: '/users',
  },

  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id: number) => `products/${id}`,
    CATEGORY_LIST: `/products/category-list`,
    SEARCH: `/products/search`,
    BY_CATEGORY: (category: string) => `products/category/${category}`,
  },

  RECIPES: {
    LIST: `/recipes`,
  },

  CARTS: {
    DETAIL: (id: number) => `/cart/${id}`,
  },
} as const;
