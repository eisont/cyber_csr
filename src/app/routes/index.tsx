import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RootState } from '@/app/store';
import Layout from '@/pages/Layout';
import { CategoryHighlight, CategoryPromoBanner, HeroBanner, SeasonalSaleBanner } from '@/pages/ui';
import ProductGrid from '@/shared/ui/ProductGrid';
const Explore = lazy(() => import('@/pages/Explore'));
const SearchProducts = lazy(() => import('@/pages/SearchProducts'));
const SelectUser = lazy(() => import('@/pages/SelectUser'));
const MyPage = lazy(() => import('@/pages/Mypage'));
const ProductDetail = lazy(() => import('@/pages/Explore/Detail'));

const AppRoutes = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo);

  return (
    <Layout>
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroBanner />
                <CategoryHighlight />
                <ProductGrid />
                <CategoryPromoBanner />
                <SeasonalSaleBanner />
              </>
            }
          />

          <Route path="/explore" element={<Explore />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
          <Route path="/recipes" element={<Explore />} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="/selectUser" element={<SelectUser />} />
          <Route path={`/${userInfo?.username}`} element={<MyPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default AppRoutes;
