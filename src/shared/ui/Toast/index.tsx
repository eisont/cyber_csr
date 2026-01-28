/**
 * 만든 이유
 * - 사용자 액션(담기 완료)에 대한 즉각적인 피드백 제공
 * - 공통 UI로 분리해 여러 화면에서 재사용 가능하게 한다.
 */

type Props = { message: string };

const Toast = ({ message }: Props) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-md bg-black px-4 py-2 text-sm text-white shadow">
      {message}
    </div>
  );
};

export default Toast;
