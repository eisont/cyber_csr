import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import * as S from '@/pages/Explore/ui/ProductsBox/ProductsBox.styled';
import { useFetch } from '@/shared/hooks';
import ProductItem from '@/shared/ui/ProductItem';
import { ProductResponse } from '@/types/response';

const ProductsBox = () => {
  const productId = useSelector((state: RootState) => state.productId);

  const [data, isLoading] = useFetch<ProductResponse>({
    resource: 'products',
    path: 'category',
    endPoint: [productId || 'beauty'],
    enabled: true,
  });
  const ProductListData = data?.products ?? [];

  return (
    <S.Wrapper>
      <S.ProductsBox>
        {isLoading ? (
          <>
            {Array(4)
              .fill('')
              .map((_, i) => (
                <ProductItem key={i} isLoading />
              ))}
          </>
        ) : (
          <>
            {ProductListData?.map((el) => (
              <ProductItem key={el.id} {...el} />
            ))}
          </>
        )}
      </S.ProductsBox>
    </S.Wrapper>
  );
};

export default ProductsBox;
