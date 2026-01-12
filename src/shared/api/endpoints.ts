export const SERVICE_URLS = {
  AUTH: {
    LOGIN: '/auth/login',
    ME: '/auth/me',
  },

  USERS: {
    LIST: '/users',
    DETAIL: (id: number) => `/users/${id}`,
  },

  PRODUCTS: {
    LIST: '/products',
    DETAIL: (id: number) => `products/${id}`,
    CATEGORY_LIST: `/products/category-list`,
    BY_CATEGORY: (category: string) => `products/category/${category}`,
  },

  RECIPES: {
    LIST: `/recipes`,
    DETAIL: (id: number) => `/recipes/${id}`,
  },

  CARTS: {
    DETAIL: (id: number) => `/cart/${id}`,
  },
} as const;
