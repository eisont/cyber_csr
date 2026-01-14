import { createRoot } from 'react-dom/client';

import App from '@/app/App';
/**
 * 만든 이유
 * - Vite는 엔트리에서 CSS를 import해야 번들에 포함된다.
 * - 이게 빠지면 Tailwind 클래스가 "아예 적용 안 됨"
 */
import '@/index.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element (#root) not found');
}

createRoot(container).render(<App />);
