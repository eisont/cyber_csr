import { useSelector } from 'react-redux';

import { RootState } from '@/app/store';
import * as S from '@/pages/Explore/ui/ProductsBox/ProductsBox.styled';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import { ProductsListResponse } from '@/shared/types/response';
import ProductItem from '@/shared/ui/ProductItem';

const ProductsBox = () => {
  const productId = useSelector((state: RootState) => state.productId);

  const { data, isLoading } = useFetchQuery<ProductsListResponse>({
    queryKey: QUERY_KEYS.products.byCategory(productId),
    url: SERVICE_URLS.PRODUCTS.BY_CATEGORY(productId),
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
