/**
 * 만든 이유
 * - "데이터 없음"은 에러가 아니다.
 * - 로딩/에러만 처리하고 empty를 빼먹으면 사용자는 '버그'로 느낀다.
 * - 공통 EmptyState를 두면:
 *   1) 리스트/검색 결과 없음
 *   2) 장바구니 비어있음
 *   3) 즐겨찾기 없음
 *   같은 케이스를 일관된 톤으로 안내할 수 있다.
 */

type EmptyStateProps = {
  /** 짧은 제목 */
  title?: string;
  /** 보조 설명 */
  description?: string;
  /** 액션 버튼 라벨(있을 때만 버튼 노출) */
  actionLabel?: string;
  /** 액션 버튼 클릭 핸들러 */
  onAction?: () => void;
};

export const EmptyState = ({
  title = '표시할 데이터가 없어요.',
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-5">
      <div className="text-base font-semibold">{title}</div>

      {description ? <div className="text-sm text-gray-600">{description}</div> : null}

      {/* actionLabel/onAction이 모두 있을 때만 버튼 노출 */}
      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="w-fit rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
};
