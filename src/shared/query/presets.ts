export const QUERY_PRESETS = {
  list: {
    staleTime: 30_000,
    gcTime: 5 * 60_000,
    retry: 1,
    refetchOnWindowFocus: false,
  },
  detail: {
    staleTime: 60_000,
    gcTime: 10 * 60_000,
    retry: 1,
    refetchOnWindowFocus: false,
  },
  search: {
    staleTime: 0,
    gcTime: 2 * 60_000,
    retry: 0,
    refetchOnWindowFocus: false,
  },
} as const;
