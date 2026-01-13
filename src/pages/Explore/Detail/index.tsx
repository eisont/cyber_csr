import styled from '@emotion/styled';
import { Suspense } from 'react';

import SkeletonProductItemDetail from '@/pages/Explore/Detail/SkeletonProductItemDetail';
import ProductItemDetail from '@/pages/Explore/Detail/ui/ProductItemDetail';
import ProductGrid from '@/shared/ui/ProductGrid';

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
