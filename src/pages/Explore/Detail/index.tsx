import styled from '@emotion/styled';
import { lazy, Suspense } from 'react';

import SkeletonProductItemDetail from '@/pages/Explore/Detail/SkeletonProductItemDetail';
const ProductItemDetail = lazy(() => import('@/pages/Explore/Detail/ui/ProductItemDetail'));
const ProductGrid = lazy(() => import('@/shared/ui/ProductGrid'));

const SideItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductDetail = () => {
  return (
    <Suspense fallback={<SkeletonProductItemDetail />}>
      <SideItem>
        <ProductItemDetail />
        <ProductGrid />
      </SideItem>
    </Suspense>
  );
};

export default ProductDetail;
