import { useDispatch, useSelector } from 'react-redux';

import { productIdSlice, RootState } from '@/app/store';
import { SERVICE_URLS } from '@/shared/api/endpoints';
import { kebabToTitleCase } from '@/shared/lib';
import { QUERY_KEYS } from '@/shared/query/key';
import { useFetchQuery } from '@/shared/query/useFetchQuery';
import * as S from '@/shared/ui/ProductGrid/ProductGrid.styled';
import ProductItem from '@/shared/ui/ProductItem';
import { CategoryListResponse, ProductResponse } from '@/types/response';

const ProductGrid = () => {
  const productId = useSelector((state: RootState) => state.productId);

  const { data: CategoryListData, isLoading } = useFetchQuery<CategoryListResponse>({
    queryKey: QUERY_KEYS.products.categoryList,
    url: SERVICE_URLS.PRODUCTS.CATEGORY_LIST,
  });

  const { data, isLoading: ProductListsLoading } = useFetchQuery<ProductResponse>({
    queryKey: QUERY_KEYS.products.byCategory(productId),
    url: SERVICE_URLS.PRODUCTS.BY_CATEGORY(productId),
  });
  const ProductListData = data?.products ?? [];

  const dispatch = useDispatch();

  return (
    <S.Wrapper>
      <S.TotalBox>
        {isLoading ? (
          <>
            {Array(4)
              .fill('')
              .map((_, i) => (
                <ProductItem key={i} isLoading={ProductListsLoading} />
              ))}
          </>
        ) : (
          <S.MainBox>
            <S.CategoryBox>
              {CategoryListData?.map((el) => (
                <S.Explore
                  key={Number(new Date()) + el}
                  id={el}
                  productId={productId}
                  onClick={() => dispatch(productIdSlice.actions.getProductId(el))}
                >
                  {kebabToTitleCase(el)}
                </S.Explore>
              ))}
            </S.CategoryBox>

            <S.ProductsItemsBox>
              {ProductListData?.map((el) => (
                <ProductItem key={el.id} {...el} isLoading={ProductListsLoading} />
              ))}
            </S.ProductsItemsBox>
          </S.MainBox>
        )}
      </S.TotalBox>
    </S.Wrapper>
  );
};

export default ProductGrid;
