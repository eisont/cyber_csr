/**
 * 만든 이유
 * - Tailwind v4는 Vite 플러그인(@tailwindcss/vite) 방식이 "정석"이라
 *   빌드/개발 환경에서 Tailwind 처리가 안정적으로 동작한다.
 */

import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
