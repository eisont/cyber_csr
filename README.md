# CYBER (v2)

dummyjson API를 활용해 **React 19 + Vite 기반 CSR 웹 앱**을 구현한 프로젝트입니다.  
v2에서는 **Axios + TanStack Query 중심으로 데이터 패칭을 표준화**하고, **인증 흐름을 단순화**했으며, **TypeScript 전면 적용 + 코드 품질/컨벤션을 안정화**했습니다.

---

## ✅ v2 한 줄 정의

- **Axios + TanStack Query로 데이터 패칭을 표준화하고 인증 흐름을 단순화한 v2 리팩터링**

---

## 🚀 v2 주요 변경 사항

- Axios + TanStack Query 기반 **GET 표준 훅(useFetchQuery) 도입**
- POST/PUT/DELETE를 위한 **공통 mutation 훅(useMutate) 도입**
- **sessionStorage 기반 인증 흐름 정리**
- **axios interceptor로 Authorization 자동 주입**
- **queryKey / endpoint / presets 상수화**
- **TypeScript 전면 적용**
- **ESLint / Prettier / import 정렬 규칙 안정화**
- GitHub Actions `npm ci` 이슈 해결 및 CI 안정화

---

## 🧩 기술 스택

- React 19 + Vite (CSR)
- React Router
- Axios
- TanStack Query (React Query)
- Emotion
- TypeScript
- ESLint / Prettier / Husky / commitlint
- (Optional) React Query Devtools

> 버전은 `package.json` 기준으로 관리합니다.

---

## 📦 설치 및 실행

### 1) 환경변수
프로젝트 루트에 `.env` 생성

```env
VITE_API_BASE_URL=https://dummyjson.com
```

---

## Node 버전

### .nvmrc
```
22
```

## 3) 실행
```
npm install
npm run dev
```

## 4) ci 체크
```
npm run ci
```

---

## 🔐 인증 / 로그인 흐름 (v2)
### 로그인
* POST /auth/login
* 로그인 성공 시 응답의 accessToken을 sessionStorage에 저장

### 인증 처리
* axios interceptor가 모든 요청에 Authorization 헤더를 자동 주입
	* Authorization: Bearer <token>
### 유지 정보 조회
* GET /auth/me
* 토큰이 있을 때만 요청되도록 enabled 조건 적용

--- 

## 📡 데이터 패칭 규칙 (v2 표준)
### GET 요청
* useFetchQuery 사용
* queryKey는 list / detail / search 패턴으로 설계
* 공통 캐시 정책은 QUERY_PRESETS로 통일

### POST/PUT/DELETE 요청
* useMutate 사용
* 성공 시 관련 queryKey를 invalidate 하는 규칙을 둬서 데이터 일관성 유지

---

## 🗂️ 폴더 구조
```
src/
├─ app/              # 앱 초기화 계층 (Provider, Router, Store, Entry)
│  ├─ provider/
│  ├─ routes/
│  ├─ store/
│  └─ App.tsx
├─ pages/            # 라우트 단위 페이지
│  ├─ Explore/
│  ├─ Mypage/
│  ├─ Recipes/
│  ├─ SearchProducts/
│  ├─ SelectUser/
│  ├─ ui/
│  └─ Layout.tsx
├─ shared/           # 재사용 가능한 공통 레이어
│  ├─ api/           # axios instance, endpoint 정의
│  ├─ auth/          # 인증 관련 유틸/sessionStorage 처리
│  ├─ hooks/         # useFetchQuery, useMutate 등 공통 훅
│  ├─ layout/        # Header / Footer
│  ├─ lib/           # 범용 로직/헬퍼(프로젝트 유틸)
│  ├─ mock/          # 목 데이터 / mock 관련
│  ├─ query/         # QUERY_KEYS, QUERY_PRESETS 등 react-query 설정
│  ├─ router/        # router 관련 공통
│  └─ ui/            # 공통 UI 컴포넌트
└─ types/
   └─ response/      # API Response 타입
```

--- 
## 🧹 v2에서 제거된 것들
* Redux 의존 제거 (서버 상태는 TanStack Query로 일관화)
* 중복 API 함수/중복 refetch 로직 제거
* JS 파일 제거 -> TS 전환 완료

---

## ✅ 품질/컨벤션
### 스크립트
* lint: ESLint 검사
* format: check: Prettier 포맷 체크
* type-check: TS 타입 체크
* build: Vite 빌드
* ci: lint + format + type-check + build 일괄 실행

### Git Hooks
* Husky 기반 커밋 전 검사 적용
* commitlint로 커밋 메시지 규칙 강제

---
## 🧭 앞으로의 계획
* dummyjson의 주요 리소스를 기바으로 6주 로드맵으로 기능 확장 예정
	* 인증
	* 검색
 	* 상세
  	* 필터
  	* 정렬
  	* 캐싱
  	* 페이지네이션
  	* 리페터링 반복
 
---

## 📎 참고
* API: https://dummyjson.com
