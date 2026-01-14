/**
 * 만든 이유
 * - 에러 UI는 화면마다 반복되기 쉽고 (문구/버튼/레이아웃),
 *   구현이 제각각이면 사용자 경험이 흔들린다.
 * - 공통 ErrorState로:
 *   1) 일관된 에러 표현
 *   2) 재시도 UX 표준화(onRetry)
 *   3) 메시지 교체(title/message)만으로 재사용
 */

type ErrorStateProps = {
  /** 헤더 문구 */
  title?: string;
  /** 상세 문구 */
  message?: string;
  /** 재시도 핸들러가 있으면 버튼을 노출 */
  onRetry?: () => void;
};

export const ErrorState = ({
  title = '문제가 생겼습니다. ',
  message = '잠시 후 다시 시도해주세요',
  onRetry,
}: ErrorStateProps) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-5">
      <div className="text-base font-semibold">{title}</div>
      <div className="text-sm text-gray-600">{message}</div>

      {/* onRetry가 있을 때만 버튼 렌더링: 재사용성을 높임 */}
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="w-fit rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          다시 시도
        </button>
      ) : null}
    </div>
  );
};
