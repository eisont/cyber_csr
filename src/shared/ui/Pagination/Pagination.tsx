/**
 * 만든 이유
 * - 페이지네이션 UI를 페이지에서 분리해 공통으로 재사용하기 위함.
 * - 이 컴포넌트는 "URL/Redux/데이터 패칭"을 전혀 모르고, 오직 렌더링과 사용자 인터렉션(Prev/Next 클릭)만 담당한다.
 */

type PaginationProps = {
  currentPage: number;
  totalPages?: number;
  canPrev: boolean;
  canNext: boolean;
  isLoading?: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  canNext,
  canPrev,
  isLoading,
  onPrev,
  onNext,
}: PaginationProps) => {
  return (
    <>
      {/**
       * 페이지네이션 UI
       * - URL 기반으로 동작하므로 새로고침/공유/뒤로가기에 강하다.
       * - recipes 경로에서는 노줄하지 않는다.(상품 목록에만 적용)
       */}
      <div className="mb-3 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Page {currentPage}
          {typeof totalPages === 'number' ? `/${totalPages}` : null}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={onPrev}
            disabled={!canPrev || Boolean(isLoading)}
            className="rounded-md border border-gray-200 bg-white px-3 py-2 text-sm disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            Prev
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={!canNext || Boolean(isLoading)}
            className="rounded-md bg-black px-3 py-2 text-sm text-white disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
