import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * 만든 이유
 * - Vite는 엔트리에서 CSS를 import해야 번들에 포함된다.
 * - 이게 빠지면 Tailwind 클래스가 "아예 적용 안 됨"
 */
import '@/index.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { QueryProvider, ScrollToTop } from '@/app/provider';

import AppRouter from '@/app/routes';
import { store } from '@/app/store';
import ToastRender from '@/shared/ui/Toast/ToastRender';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element (#root) not found');
}

createRoot(container).render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Provider store={store}>
          <AppRouter />
          <ToastRender />
        </Provider>
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>,
);
