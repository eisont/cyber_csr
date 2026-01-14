/**
 * 만든 이유
 * - TanStack Query 옵션을 프로젝트 전역에서 통일하기 위해서.
 * - 화면마다 QueryClient를 만들면 캐시가 분리되고, 정책(retry/staleTime)이 제각각이 된다.
 * - 전역 Provider로 감싸면:
 *  1) 캐시 정책 통일
 *  2) refetch 정책 통일
 *  3) 이후 prefetch/optimistic update 전략이 일관됨.
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

/**
 * QueryClient는 앱 생명주기 동안 1개만 유지하는 게 일반적.
 * - 컴포넌트 내부에서 new QueryClient()를 만들면 렌더링마다 캐시가 날아갈 수 있다.
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /**
       * retry: 1
       * - 일시적 네트워크 오류에 한 번 정도는 자동 재시도
       * - 무한 재시도는 UX 악화 + 서버 부화 유발
       */
      retry: 1,

      /**
       * staleTime: 30초
       * - 30초 동안은 "선선한 데이터"로 간주해서 불필요한 refetch를 줄인다.
       * - 목록/상세 이동이 잦은 앱에서 체감 성능을 올리는 핵심 옵션
       */
      staleTime: 30_000,

      /**
       * gcTime: 5분
       * - 사용하지 않는 캐시를 메모리에서 정리하는 시간.
       */
      gcTime: 5 * 60_000,

      /**
       * 창 포커스 시 자동 refetch 비활성화
       * - 관리자/대시보드에서 포커스 이동이 잦을 때 불필요한 네트워크를 줄인다.
       */
      refetchOnWindowFocus: false,
    },
    /**
     * mutations는 보통 사용자가 의도한 액션이라
     * 자동 재시도는 오작동/중복 실행 위험이 있어 0으로 두는 게 안전하다.
     */
    mutations: {
      retry: 0,
    },
  },
});

export function QueryProvider({ children }: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
