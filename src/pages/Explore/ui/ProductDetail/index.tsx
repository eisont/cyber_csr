import styled from '@emotion/styled';

import ProductItemDetail from '@/pages/Explore/ui/ProductDetail/ui/ProductItemDetail';
import ProductGrid from '@/shared/ui/ProductGrid';

const SideItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductDetail = () => {
  return (
    <SideItem>
      <ProductItemDetail />
      <ProductGrid />
    </SideItem>
  );
};

export default ProductDetail;
