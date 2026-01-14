/**
 * 만든 이유
 * - 로딩 상태에서 흰 화면 대신 "자리(레이아웃)"을 먼저 잡아줘서 UX를 개선한다.
 * - 페이지/컴포넌트마다 로딩 UI를 중복 구현하지 않고,
 *   className으로 형태만 달리해서 재사용한다.
 */

type SkeletonProps = {
  className?: string;
};

export const Skeleton = ({ className }: SkeletonProps) => {
  // animate-pulse: 로딩 중임을 시각적으로 표현
  return <div className={`animate-pulse rounded-md bg-gray-200 ${className ?? ''}`} />;
};
