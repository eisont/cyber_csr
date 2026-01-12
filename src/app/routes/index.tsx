import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { RootState } from '@/app/store';
import Explore from '@/pages/Explore';
import ProductDetail from '@/pages/Explore/Detail';
import Layout from '@/pages/Layout';
import MyPage from '@/pages/Mypage';
import SearchProducts from '@/pages/SearchProducts';
import SelectUser from '@/pages/SelectUser';
import { CategoryHighlight, CategoryPromoBanner, HeroBanner, SeasonalSaleBanner } from '@/pages/ui';
import ProductGrid from '@/shared/ui/ProductGrid';

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
