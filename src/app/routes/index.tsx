import { Route, Routes } from 'react-router-dom';

import Explore from '@/pages/Explore';
import ProductDetail from '@/pages/Explore/Detail';
import Layout from '@/pages/Layout';
import MyPage from '@/pages/Mypage';
import SearchProducts from '@/pages/SearchProducts';
import SelectUser from '@/pages/SelectUser';
import { CategoryHighlight, CategoryPromoBanner, HeroBanner, SeasonalSaleBanner } from '@/pages/ui';
import { useMeQuery } from '@/shared/hooks';
import ProductGrid from '@/shared/ui/ProductGrid';

const AppRoutes = () => {
  const { data: userInfo } = useMeQuery();

  return (
    <Layout>
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
    </Layout>
  );
};

export default AppRoutes;
