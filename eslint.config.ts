// eslint.config.ts
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // 1) 공통 ignore
  {
    ignores: [
      'dist',
      'node_modules',
      'coverage',
      'public',
      // 설정 파일까지 완전히 제외하고 싶으면 아래 주석 해제
      // '*.config.js',
      // '*.config.ts',
    ],
  },

  // 2) JS 기본 규칙 (a 유지)
  js.configs.recommended,

  // 3) TS 권장 규칙 (a 유지)
  ...tseslint.configs.recommended,

  // 4) TS/React 실제 적용 블록 (b의 “TS 중심” 유지)
  {
    files: ['src/**/*.{ts,tsx}'],

    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      'unused-imports': unusedImports,
    },

    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parser: tseslint.parser,
      parserOptions: {
        // 프로젝트 구조에 맞게 선택
        // (단일 tsconfig면 아래 1줄로 충분)
        project: ['./tsconfig.json'],
        // 팀4처럼 tsconfig 분리 구조면 이렇게:
        // project: ['./tsconfig.app.json', './tsconfig.node.json'],

        tsconfigRootDir: new URL('.', import.meta.url).pathname,
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2023,
      },
    },

    settings: {
      react: { version: 'detect' },

      // b의 강점: alias resolver 유지
      'import/resolver': {
        node: { extensions: ['.ts', '.tsx'] },
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.tsx'],
        },
      },
    },

    rules: {
      // ===== React / Hooks (a 유지: 권장 규칙 세트) =====
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // TS+React 프로젝트에서 흔히 끄는 룰
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // ===== 기본 품질 규칙 (a 유지) =====
      'no-var': 'error',
      'prefer-const': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-duplicate-imports': 'warn',

      // ===== Vite HMR (a 유지) =====
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // ===== import 정렬/해석 (b 유지 + a 스타일 합침) =====
      'import/order': [
        'warn',
        {
          groups: ['external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [{ pattern: '@/**', group: 'internal' }],
          'newlines-between': 'always-and-inside-groups',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'error',

      // ===== unused 정리 (b의 의도 “실제 동작하도록” 플러그인 포함) =====
      // 핵심: unused import는 error로 두고, fix로 자동 제거되게
      'unused-imports/no-unused-imports': 'error',

      // 기존 no-unused-vars 계열은 unused-imports가 맡도록 정리
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },

  // 5) Prettier 충돌 제거 (a 방식)
  prettier,
);
