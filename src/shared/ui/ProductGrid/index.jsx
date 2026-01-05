import { useDispatch, useSelector } from 'react-redux';

import { productIdSlice } from '@/app/store';
import { useFetch } from '@/shared/hooks';
import { kebabToTitleCase } from '@/shared/lib';
import * as S from '@/shared/ui/ProductGrid/ProductGrid.styled';
import ProductItem from '@/shared/ui/ProductItem';

const ProductGrid = () => {
  const productId = useSelector((state) => state.productId);

  const [CategoryListData, isLoading] = useFetch({
    resource: 'products',
    path: 'category-list',
    enabled: true,
  });
  const [{ products: ProductListData }, ProductListsLoading] = useFetch({
    resource: 'products',
    endPoint: ['category', productId],
    enabled: true,
  });

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
