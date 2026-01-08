import { useSelector } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom';

import { RootState } from '@/app/store';
import * as S from '@/pages/Explore/Explore.styled';
import Breadcrumb from '@/pages/Explore/ui/Breadcrumb';
import Filter from '@/pages/Explore/ui/Filter';
import ProductsBox from '@/pages/Explore/ui/ProductsBox';
import Recipes from '@/pages/Recipes';
import { useFetch } from '@/shared/hooks';
import { ProductItemResponse } from '@/types/response';
import { RecipeType } from '@/types/response/recipe.types';

const Explore = () => {
  const params = useParams();
  const location = useLocation();
  const productId = useSelector((state: RootState) => state.productId);

  const [ProductListData] = useFetch<ProductItemResponse[]>({
    resource: 'products',
    path: 'category',
    endPoint: [productId || 'beauty'],
    query: { select: 'id' },
    enabled: true,
  });

  const [RecipesData] = useFetch<RecipeType[]>({
    resource: 'recipes',
    query: { limit: 50 },
    enabled: true,
  });

  return (
    <S.Wrapper>
      <S.MainBox>
        <Breadcrumb />
        {!params.id ? (
          <S.FlexBox>
            <Filter />
            <S.FlexColBox>
              <S.ProductsCount>
                Selected Products:{' '}
                <S.Count>
                  {location.pathname === '/recipes'
                    ? RecipesData?.length || 0
                    : ProductListData?.length || 0}
                </S.Count>
              </S.ProductsCount>

              {location.pathname !== '/recipes' ? <ProductsBox /> : <Recipes />}
            </S.FlexColBox>
          </S.FlexBox>
        ) : (
          <Outlet />
        )}
      </S.MainBox>
    </S.Wrapper>
  );
};

export default Explore;
